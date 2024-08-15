"use client";
import React, {useState, useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import {Input, Button} from "@material-tailwind/react";
import axios from "axios";
import Header from "@/app/components/header";

export default function Update() {
	const navigate = useRouter();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const {id} = useParams();

	useEffect(() => {
		axios.get(`/api/tasks/${id}`).then((res) => {
			setTitle(res.data.title);
			setDescription(res.data.description);
		});
	}, [id]);
	const handleForm = async (e) => {
		e.preventDefault();
		axios
			.put(`/api/tasks/${id}`, {title, description})
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
				<Button type="submit">Update</Button>
			</form>
		</>
	);
}
