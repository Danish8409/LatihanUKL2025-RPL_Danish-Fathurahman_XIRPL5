"use client";
import { useState } from "react";

export default function PresensiPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Presensi berhasil dikirim sebagai: ${status}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Presensi Hari Ini</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Pilih Status Presensi
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border rounded"
              required
            >
              <option value="" disabled>
                -- Pilih Status --
              </option>
              <option value="Masuk">Masuk</option>
              <option value="Sakit">Sakit</option>
              <option value="Izin">Izin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-3 rounded"
          >
            Kirim Presensi
          </button>
        </form>
      </div>
    </div>
  );
}
