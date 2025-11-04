export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Username" className="w-full p-3 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
        <button className="w-full bg-gray-800 text-white p-3 rounded">Masuk</button>
      </form>
    </div>
  );
}
