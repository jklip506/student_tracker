import CheckIn from "@/components/CheckIn";
import { createStudent } from "@/lib/actions/student.action";
import { connectToDatabase } from "@/lib/mongoose";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CheckIn />
    </main>
  );
}
