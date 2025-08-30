import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to File Upload App</h1>
      <p>
        Go to <Link href="/upload">Upload Page</Link>
      </p>
    </div>
  );
}
