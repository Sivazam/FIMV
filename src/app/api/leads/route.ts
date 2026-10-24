import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  phone: z
    .string()
    .min(8, "Phone number looks too short")
    .max(20)
    .regex(/^[+\d][\d\s-]+$/, "Enter a valid phone number"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  organization: z.string().max(160).optional().or(z.literal("")),
  interest: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a little more about the mission").max(4000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    const { name, phone, email, organization, interest, message } = parsed.data;

    const lead = await db.lead.create({
      data: {
        name,
        phone,
        email: email || null,
        organization: organization || null,
        interest: interest || null,
        message,
        source: "website",
      },
    });

    return NextResponse.json(
      { ok: true, id: lead.id, message: "Brief received" },
      { status: 201 }
    );
  } catch (error) {
    console.error("[LEADS_POST]", error);
    return NextResponse.json(
      { error: "The war room is temporarily unreachable. Please call us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await db.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ count: leads.length, leads });
  } catch (error) {
    console.error("[LEADS_GET]", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
