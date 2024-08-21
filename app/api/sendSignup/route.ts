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
    // Parse the JSON body
    const { name, email, phone, country, coverLetter } = await req.json();

    const spreadsheetId = process.env.SPREADSHEET_ID;
    // Specify the range in the 'MemberSignups' sheet
    const range = 'MemberSignups!A:E';

    const values = [[name, email, phone, country, coverLetter]];
    const resource = { values };

    // Append the data to the sheet
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: resource,
    });

    // Return success response
    return NextResponse.json({ success: true, message: 'Signup form submitted successfully!', result });
  } catch (error) {
    console.error('Error appending data to Google Sheets:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to write data to Google Sheets.', error: (error as Error).message },
      { status: 500 }
    );
  }
}
