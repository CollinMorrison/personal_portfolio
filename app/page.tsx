import Image from "next/image";
import Navbar from "./components";


export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24">
      <div>
        <div className="text-9xl ml-20">Hi,</div>
        <div className="text-9xl m-20">I'm Collin</div>
      </div>
    </main>
  );
}
