import Link from "next/link"

export default function Navbar() {

    type portfolioItem = {
        title: string,
        description: string,
        image: string,
        link: string
    }

    const portfolioItems: portfolioItem[] = [
        {
            title: "AWS CDK Project",
            description: "A project that uses the AWS Cloud Development Kit and React to create a serverless application",
            image: "",
            link: "https://github.com/CollinMorrison/FovusCodeChallenge"
        },
        
    ]

    return (
        <div className="flex w-full justify-center pt-4">
            <div className="w-11/12 h-12 bg-slate-950 opacity-50 flex justify-end sticky top-0 border-2 border-slate-500 rounded-full p-2">
                <Link href="/contact" className="mr-5">
                    <p>Contact Me</p>
                </Link>
            </div>
        </div>
    )
}