"use client";

import { useRouter } from "next/navigation";

export default function Details() {
    const router = useRouter();

    return (
        <div>
            <h1>DETAILS</h1>
            <button onClick={() => router.push("/")}>Go to /</button>
        </div>
    );
}
