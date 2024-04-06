'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const router =useRouter();
export default function GiveName() {
  const router = useRouter();
    return (
      <div>
            Muhammad Usman Shahid.
            <br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
      
      </div>
    )
  }