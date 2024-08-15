import {NextResponse} from "next/server";
import dbConnect from "../../lib/mongoose"; //"../../app/lib/mongoose
import Task from "../../models/Task"; //@/app/models/Task

export async function GET() {
	await dbConnect();

	const tasks = await Task.find();

	return NextResponse.json(tasks, {status: 200});
}

export async function POST(request) {
	await dbConnect();

	const {title, description} = await request.json();
	const newTask = new Task({
		title,
		description,
	});
	const savedTask = await newTask.save();

	return NextResponse.json(savedTask, {status: 201});
}
