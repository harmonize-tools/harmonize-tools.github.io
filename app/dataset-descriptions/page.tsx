"use client";

import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { name: string, description: string } }) {
    const pathname = usePathname();
    return <main>
      <h1>Project name</h1>
      <h2>Project description</h2>
    </main>
  }
