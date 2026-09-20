import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const VALID_INTEREST = ["exhibitor", "visitor", "sponsor", "media"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, interest, message } = body ?? {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: "Invalid name" },
        { status: 400 }
      );
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }
    if (!VALID_INTEREST.includes(interest)) {
      return NextResponse.json(
        { ok: false, error: "Invalid interest type" },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length < 3) {
      return NextResponse.json(
        { ok: false, error: "Message too short" },
        { status: 400 }
      );
    }

    const record = await db.contactMessage.create({
      data: {
        name: name.trim(),
        company: company?.trim() || null,
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        interest,
        message: message.trim(),
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
