import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-[490px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white text-center">
      <h2>Not Found - 404</h2>
      <p>Página não foi encontrada</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
