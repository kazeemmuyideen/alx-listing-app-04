import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">🏠 LuxStay</div>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/users">Users</Link>
        </nav>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search properties"
            className="px-2 py-1 rounded text-black"
          />
          <button className="bg-white text-black px-3 py-1 rounded">
            Login
          </button>
          <button className="bg-blue-500 px-3 py-1 rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
