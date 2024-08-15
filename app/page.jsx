"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardBody, Button} from "@material-tailwind/react";
import {FaEdit, FaTrash} from "react-icons/fa";
import Header from "./components/header";

export default function Home() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		axios
			.get("/api/tasks")
			.then((res) => setTasks(res.data))
			.catch((err) => console.error(err));
	}, []);

	const handleDelete = (id) => {
		axios.delete(`/api/tasks/${id}`).then((task) => {
			const updatedTasks = tasks.filter((task) => task._id !== id);
			setTasks(updatedTasks);
		});
	};
	return (
		<>
			<Header />
			{tasks.map((task) => (
				<Card className="mt-4 hover:shadow-lg" key={task._id}>
					<CardBody>
						<span className="text-xl flex justify-between">
							{task.title}{" "}
							<div className="flex gap-2 text-lg">
								<button>
									<Link href={`/${task._id}/update`}>
										<FaEdit />
									</Link>
								</button>
								<button onClick={() => handleDelete(task._id)}>
									<FaTrash />
								</button>
							</div>
						</span>
						<p className="text-sm ">{task.description} </p>
					</CardBody>
				</Card>
			))}
		</>
	);
}
