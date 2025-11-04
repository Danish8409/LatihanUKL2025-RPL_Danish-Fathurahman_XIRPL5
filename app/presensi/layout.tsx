import Sidebar from "@/components/Sidebar";

export default function PresensiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 flex-1">{children}</main>
    </div>
  );
}
