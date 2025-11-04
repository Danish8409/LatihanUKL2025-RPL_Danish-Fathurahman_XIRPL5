export default function RiwayatPage() {
  const dataRiwayat = [
    { tanggal: "2025-11-01", status: "Masuk" },
    { tanggal: "2025-11-02", status: "Izin" },
    { tanggal: "2025-11-03", status: "Sakit" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Riwayat Presensi</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-4 text-left">Tanggal</th>
              <th className="border-b p-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {dataRiwayat.map((item, index) => (
              <tr key={index}>
                <td className="border-b p-4">{item.tanggal}</td>
                <td
                  className={`border-b p-4 ${
                    item.status === "Masuk"
                      ? "text-green-600"
                      : item.status === "Izin"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
