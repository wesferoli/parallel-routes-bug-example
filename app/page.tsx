/** Add your relevant code here for the issue to reproduce */
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <h1>HOME</h1>
            <button onClick={() => router.push("/details")}>
                Go to /details
            </button>
        </div>
    );
}
