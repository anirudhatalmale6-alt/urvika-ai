import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Upload to file.io (free, temporary file hosting - files expire after 1 download or 14 days)
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const uploadRes = await fetch("https://file.io", {
      method: "POST",
      body: uploadFormData,
    });

    const uploadData = await uploadRes.json();

    if (!uploadData.success) {
      throw new Error("Upload failed");
    }

    return NextResponse.json({
      success: true,
      url: uploadData.link,
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
