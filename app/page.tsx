import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di Presensi Online</h1>
      <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
        Login untuk lanjut
      </Link>
    </main>
  );
}
