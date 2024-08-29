import Link from "next/link";
import { ReactNode } from "react";

export default function ProductLayout({children}: {children: ReactNode}) {
    return <div className="flex-col">
        <Link href="/products">Home</Link>
        <div>{ children }</div>
        <div>Footer</div>
    </div>
}