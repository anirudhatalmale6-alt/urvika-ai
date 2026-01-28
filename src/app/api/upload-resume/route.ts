import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Upload to Litterbox (catbox.moe) - free file hosting with 24h retention
    const uploadFormData = new FormData();
    uploadFormData.append("reqtype", "fileupload");
    uploadFormData.append("time", "24h");
    uploadFormData.append("fileToUpload", file);

    const uploadRes = await fetch("https://litterbox.catbox.moe/resources/internals/api.php", {
      method: "POST",
      body: uploadFormData,
    });

    if (!uploadRes.ok) {
      throw new Error("Upload failed");
    }

    const url = await uploadRes.text();

    if (!url.startsWith("https://")) {
      throw new Error("Upload failed: " + url);
    }

    return NextResponse.json({
      success: true,
      url: url.trim(),
      filename: file.name,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
