'use client'; // This directive is needed for client-side components in Next.js App Router

import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'; // Fallback to localhost:3001 if env var not set
        const res = await fetch(`${backendUrl}/api/hello`);
        const text = await res.text();
        setData(text);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setData('Error fetching data.');
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main>
      <h1>Frontend Page</h1>
      <p>Message from API: {data}</p>
    </main>
  );
}