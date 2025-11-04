export default function ProfilPage() {
  const student = {
    nama: "Danish Fathurahman",
    kelas: "X RPL 1",
    absen: "07",
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Profil Saya</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nama</label>
            <input
              type="text"
              defaultValue={student.nama}
              className="w-full p-3 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Kelas</label>
            <input
              type="text"
              defaultValue={student.kelas}
              className="w-full p-3 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">No. Absen</label>
            <input
              type="number"
              defaultValue={student.absen}
              className="w-full p-3 border rounded"
            />
          </div>
          <button className="w-full bg-gray-800 text-white p-3 rounded">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
