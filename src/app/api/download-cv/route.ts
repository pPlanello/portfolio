import path from 'path';
import fs from 'fs';
import { NextRequest, NextResponse } from "next/server";

type DataResult = {
	ok: boolean
	msg?: string
	error?: string
  description?: string
}

export async function GET(req: NextRequest): Promise<NextResponse<DataResult>> {
  const filename = "Pablo_Planello_CV"
  const filePath = path.join(process.cwd(), 'public', 'documents', 'Pablo_Planello_CV.pdf');
  
  const pdfBuffer = fs.readFileSync(filePath)
  
  return new NextResponse(pdfBuffer, {
    headers: {"content-disposition": `attachment; filename="${filename}"`}
  });
}