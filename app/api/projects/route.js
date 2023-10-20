import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(req) {
  const jsonDirectory = path.join(process.cwd(), "json");
  if (req.method === "GET") {
    const posts = await fs.readFileSync(jsonDirectory + "/projects.json", {
      encoding: "utf-8",
      flag: "r",
    });
    return NextResponse.json(JSON.parse(posts));
  } else {
    NextResponse.status(405).json({ message: "Method not allowed" });
  }
}