import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename =
      Date.now() + "_" + file.name.replace(/\s+/g, "_");

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await writeFile(path.join(uploadDir, filename), buffer);

    return NextResponse.json({ success: true, filename });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
