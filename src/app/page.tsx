import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Welcome to My AI Engineering Portfolio</h1>
      <div className="flex items-center mb-8">
        <div className="w-1/2 pr-4">
          <p className="text-2xl mb-4">
            I'm a Generative AI Engineer passionate about creating intelligent systems and pushing the boundaries of
            artificial intelligence.
          </p>
          <Link href="/projects" className="bg-green-600 text-white font-bold absolute bottom-30 left-8 px-8 py-4 rounded hover:bg-green-700 transition">
            View My Projects
          </Link>
        </div>
        <div className="w-1/2 flex">
          <Image
            src="/ai-robt.jpg"
            alt=""
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
