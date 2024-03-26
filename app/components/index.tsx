import Link from "next/link"

export default function Navbar() {

    return (
        <div className="flex w-full justify-center pt-4">
            <div className="w-11/12 h-12 bg-slate-950 opacity-50 flex justify-center sticky top-0 border-2 border-slate-500 rounded-full p-2">
                <Link href="/contact">
                    <p>Contact Me</p>
                </Link>
            </div>
        </div>
    )
}