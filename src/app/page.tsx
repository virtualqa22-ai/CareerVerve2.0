export default async function Home() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.text();

  return (
    <main>
      <h1>Frontend Page</h1>
      <p>Message from API: {data}</p>
    </main>
  );
}