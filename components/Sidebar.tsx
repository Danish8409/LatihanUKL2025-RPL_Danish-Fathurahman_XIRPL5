import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed">
      <h1 className="text-xl font-bold mb-8">PresensiApp</h1>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-cream">Dashboard</Link>
        <Link href="/presensi" className="block hover:text-cream">Presensi</Link>
        <Link href="/riwayat" className="block hover:text-cream">Riwayat</Link>
        <Link href="/profil" className="block hover:text-cream">Profil</Link>
        <button className="block mt-6 text-red-400 hover:text-red-600">Logout</button>
      </nav>
    </div>
  );
}
