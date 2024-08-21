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
    const { userType, name, email, phone } = await req.json();

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Registrations!A:D';

    const values = [[userType, name, email, phone]];
    const resource = { values };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'RAW',
      requestBody: resource,
    });

    return NextResponse.json({ success: true, message: 'Data added to Google Sheets successfully!', result });
  } catch (error) {
    console.error('Detailed Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to write data to Google Sheets.', error: error as Error, }, { status: 500 });
  }
}
