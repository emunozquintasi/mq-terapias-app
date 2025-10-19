// src/components/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-4">MedFlow</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/clients">Clients</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/sessions">Sessions</Link>
      <Link href="/payments">Payments</Link>
      <Link href="/practitioners">Practitioners</Link>
    </nav>
  );
};

export default Sidebar;
