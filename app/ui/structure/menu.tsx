import Link from 'next/link';

export default function Menu() {
  return (
    <div className="hidden w-full md:block">
      <nav className="flex justify-end gap-16 text-2xl">
        <Link href="/">Toolkits</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
