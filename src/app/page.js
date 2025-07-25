import Link from "next/link";
import "./globals.css";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-amber-50 to-white">
			<div className=" bg-root mx-5 px-5 lg:px-28 py-10 lg:py-32 rounded-3xl shadow-lg">
        <div className="text-center text-black">
        			<h1 className=" text-xl lg:text-3xl font-bold ">Welcome to the Project</h1>
				<p className="text-gray-700 text-sm mt-2">Choose where you want to go</p>  
        </div>
	

  			<div className=" my-10">
					<Link  href="/AdminDashboard">
						<button className=" flex m-auto bg-gradient-to-t from-blue-700 to-[#2651f8] text-white lg:text-lg px-10 py-3 rounded-xl capitalize font-semibold">
							Go to Dashboard
						</button>
					</Link>
				</div>

				<div>
					<Link href="/Store">
						<button className=" font-pacifico flex m-auto bg-gradient-to-r from-[#ffcf64] to-[#ff8969] text-black text-xl lg:text-3xl font-semibold px-14 py-3 rounded-full">
							Go to Store
						</button>
					</Link>
				</div>
	
			</div>
		</main>
	);
}
