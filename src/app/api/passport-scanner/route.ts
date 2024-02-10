// passport-scanner/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.body;

    if (!formData) {
      return NextResponse.json({ success: false, message: "Bad Request" });
    }

    const picture = formData.getReader();

    if (!picture) {
      return NextResponse.json({
        success: false,
        message: "Missing 'photo' field",
      });
    }

    return NextResponse.json({
      name: "SPECIMEN",
      surname: "SPECIMEN",
      sex: "F",
      date_of_birth: "25/12/1982",
      nationality: "HRV",
      passport_type: "P",
      passport_number: "007007007",
      issuing_country: "HRV",
      expiration_date: "01/07/2014",
      personal_number: "",
    });
  } catch (error) {
    NextResponse.json({ success: false, message: "Internal Server Error" });
  }
}
