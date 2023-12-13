import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description, newfamous:famous, newrange: range } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, description, famous, range });
  return NextResponse.json({ message: "BLog updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}