import Link from "next/link";
import React from "react";
import {Button} from "@material-tailwind/react";

export default function Header() {
	return (
		<div className="bg-black p-4 my-4 flex justify-between items-center">
			<h1 className="text-center font-bold text-2xl text-white">All Tasks</h1>
			<Link href={"/create"}>
				<Button color="white">Create Task</Button>
			</Link>
		</div>
	);
}
