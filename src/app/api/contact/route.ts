import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to console in development (replace with email service in production)
    console.log("📬 New contact form submission:");
    console.log("  Name:", name);
    console.log("  Email:", email);
    console.log("  Message:", message);

    // In production, integrate with Resend, Nodemailer, or Formspree here

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
