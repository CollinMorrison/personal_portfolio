import Link from "next/link"

export default function Navbar() {

    return (
        <div className="w-full h-20 bg-slate-400 sticky top-0">
            <Link href="/contact">
                <p>Contact Me</p>
            </Link>
        </div>
    )
}