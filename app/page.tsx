import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">Go to Dashboard</Link>
      <Link href="/website">Go to Website</Link>
    </main>
  );
}
