import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Upload to tmpfiles.org (free file hosting - files available for 1 hour)
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const uploadRes = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: uploadFormData,
    });

    const uploadData = await uploadRes.json();

    if (uploadData.status !== "success") {
      throw new Error("Upload failed");
    }

    // Convert URL from http://tmpfiles.org/ID/file to http://tmpfiles.org/dl/ID/file for direct download
    const url = uploadData.data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");

    return NextResponse.json({
      success: true,
      url: url,
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
