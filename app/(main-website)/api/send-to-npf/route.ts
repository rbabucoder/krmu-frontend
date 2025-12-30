    import { NextResponse } from "next/server";

export async function POST(req: Request) {

 

  try {
    const body = await req.json();

    const npfPayload = {
      name: body.name,
      email: body.email,
      country_dial_code: "+91",
      mobile: body.mobile,
      source: "COF",
      medium: "Website",
      campaign: body.form_name,
    };

    const res = await fetch("https://api.nopaperforms.io/lead/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-key": "b55c252f6ae74783afa563c2854aecca",
        "secret-key": "619fbbdcfe3d3dfbe40a234651058cb9",
      },
      body: JSON.stringify(npfPayload),
    });

    const result = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "NPF API failed" },
      { status: 500 }
    );
  }
}
