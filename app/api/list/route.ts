// app/api/list/route.ts
import { NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/constants/r2";


export async function POST(req: Request) {
  try {
    const { prefix } = await req.json();

    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET!,
      Prefix: prefix ?? "",
      Delimiter: "/", // groups "folders"
      MaxKeys: 1000,
    });

    const data = await r2.send(command);

    return NextResponse.json({
      folders: data.CommonPrefixes?.map((p) => p.Prefix) || [],
      files: data.Contents?.filter((c) => c.Key !== (prefix ?? "")) || [],
    });
  } catch (err: any) {
    console.error("R2 LIST ERROR", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
