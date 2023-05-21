import Link from "next/link"

function Nav() {
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold">
                <Link href="/">
                    <div> <img src="logo2.png" alt="Logo" className="h-24"></img></div></Link>
            </h1>
            <ul className="flex text-2xl space-x-20">
                <li className="p-2 text-[#1ee1ff] hover:text-[#ff3bbe]">
                    <Link href="/mrequete">
                        <div>Request</div>
                    </Link>
                </li>
                <li className="p-2 text-[#1ee1ff] hover:text-[#ff38db]">
                    <Link href="/mhistorique">
                        <div>History</div>
                    </Link>
                </li>
                <li className="p-2 text-[#1ee1ff] hover:text-[#ff26de]">
                    <Link href="/mdetail">
                        <div>Result</div>
                    </Link>
                </li>
            </ul>
            <div>
                <Link href="/ellogin">
                    <button className="bg-[#e711ff3f] hover:bg-gray-900 text-[#ffffff] font-bold py-3 px-6 rounded">
            Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Nav
