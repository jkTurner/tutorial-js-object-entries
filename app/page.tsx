import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col w-full max-w-[1280px] h-[60vh] justify-center items-center mx-auto">
			<h1 className="font-semibold text-lg mb-4">JavaScript Object.entries()</h1>
			<p className="opacity-70 mb-4 w-[400px] text-center">
				Explore how to use Object.entries() in modern React projects. This tutorial covers object iteration, dynamic forms, grouped data, and more.
			</p>
			<div className="flex gap-4 flex-wrap justify-center">
				<Link href="/simple">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 hover:opacity-70">
						Simple Display
					</button>
				</Link>
				<Link href="/grouped-data">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 hover:opacity-70">
						Grouped Data
					</button>
				</Link>
				<Link href="/form-fields">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 hover:opacity-70">
						Dynamic Form
					</button>
				</Link>
				<Link href="/count-properties">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 hover:opacity-70">
						Count by Status
					</button>
				</Link>
				<Link href="/tips">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 hover:opacity-70">
						Bonus Tips
					</button>
				</Link>
			</div>
		</div>
	);
}
