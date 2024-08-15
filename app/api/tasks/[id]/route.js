import dbConnect from "@/app/lib/mongoose";
import Task from "@/app/models/Task";
import {NextResponse} from "next/server";

export async function GET(request,{params}) {
	await dbConnect();
	const {id} = params;

	const tasks = await Task.findById(id);

	return NextResponse.json(tasks, {status: 200});
}

export async function PUT(request, {params}) {
	await dbConnect();

	const {id} = params;
	const body = await request.json();

	const updatedTask = await Task.findByIdAndUpdate(id, body, {new: true});

	return new Response(JSON.stringify(updatedTask), {status: 200});
}

export async function DELETE(request, {params}) {
	await dbConnect();
	const {id} = params;

	await Task.findByIdAndDelete(id);

	return new Response(JSON.stringify({message: "Item deleted"}), {status: 200});
}
