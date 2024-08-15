"use client";
import axios from "axios";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {
	Input,
	Button,
} from "@material-tailwind/react";
import Header from "@/app/components/header";

export default function Create() {
	const navigate = useRouter();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const handleForm = async (e) => {
		e.preventDefault();
		axios
			.post("/api/tasks", {title, description})
			.then(navigate.back())
			.catch((err) => console.error(err));
	};
	return (
		<>
			<Header />
			<form onSubmit={handleForm} className="flex flex-col gap-4">
				<Input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					label="Title"
				/>
				<Input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					label="Description"
				/>
				<Button type="submit">Create</Button>
			</form>
		</>
	);
}
