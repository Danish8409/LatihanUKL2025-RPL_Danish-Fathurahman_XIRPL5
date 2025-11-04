export default function Dashboard() {
  const sudahPresensi = false;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#000' }}>Dashboard</h1>
      <p style={{ fontSize: '20px', color: '#000' }}>
        Status hari ini:
        <span style={{ color: sudahPresensi ? 'green' : 'red' }}>
          {sudahPresensi ? " Sudah Presensi ✅" : " Belum Presensi ❌"}
        </span>
      </p>
    </div>
  );
}
