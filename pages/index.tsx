import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home 
      <div>
        <Link href={'/chat'}>Chat</Link>
      </div>
    </div>


  )
}
