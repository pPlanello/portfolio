import { ContactForm } from "@/shared/interface/contactForm.interface";
import { NextRequest, NextResponse } from "next/server";

type DataResult = {
	ok: boolean
	msg?: string
	error?: string
}

export async function POST(req: NextRequest): Promise<NextResponse<DataResult>> {
  const contactEmail: ContactForm = await req.json()
  
  const response: DataResult = {
    ok: true,
    msg: 'Email sended correctly'
  }
  
  return new NextResponse(JSON.stringify(response), {
    status: 200,
    headers: {"Content-Type": "application/json"}
  })
}