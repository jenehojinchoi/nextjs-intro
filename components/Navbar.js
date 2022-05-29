import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	console.log(router);
	return (
		<nav>
			<Link href="/">
				<a style={{ color: router.pathname === "/" ? "red" : "blue"}}>Home</a>
			</Link>
			<Link href="/about">
				<a style={{ color: router.pathname === "/" ? "blue" : "red"}}>About</a>
			</Link>
		</nav>
	)
}