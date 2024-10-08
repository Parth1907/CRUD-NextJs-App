import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col  w-full items-center`}>
				<div className="w-full px-4 lg:w-3/4">{children}</div>
			</body>
		</html>
	);
}
