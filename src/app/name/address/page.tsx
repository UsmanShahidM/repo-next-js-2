'use client';
import React from "react";
import { useRouter } from "next/router";
export default function GiveAge() {
const router = useRouter();
    return (
        <div>
            Lahore.
            <br />
            <button type="button" onClick={() => router.push('/name/address/age')}>
                Get Age
            </button>

        </div>
    )
}

