import { prisma } from "../lib/prisma";

export default async function Home() {
  const applications = await prisma.application.findMany();

  return (
    <main>
      <h1>Job Tracker</h1>
      <p>Applications: {applications.length}</p>
    </main>
  );
}