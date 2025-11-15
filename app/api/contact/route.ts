import { NextRequest, NextResponse } from "next/server";

// Contact form submission handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service (e.g., SendGrid, Mailgun, Resend)
    // For now, just log the contact form data
    console.log("Contact Form Submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Save to database if needed
    // await prisma.contact.create({ data: { name, email, subject, message } });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    {
      message: "Contact API is running",
      endpoints: {
        POST: "/api/contact - Submit contact form",
      },
    },
    { status: 200 }
  );
}