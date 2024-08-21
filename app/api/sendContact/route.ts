import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}'),
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const spreadsheetId = process.env.SPREADSHEET_ID;
    // Specify the range in the 'Contacts' sheet
    const range = 'Contacts!A1:C1';

    const values = [[name, email, message]];
    const resource = { values };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS', // This ensures that data is appended as new rows
      requestBody: resource,
    });

    return NextResponse.json({ success: true, message: 'Contact message added to Google Sheets successfully!', result });
  } catch (error) {
    console.error('Detailed Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to write contact message to Google Sheets.', error: (error as Error).message as string }, { status: 500 });
  }
}
