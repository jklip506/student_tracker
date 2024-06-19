import CheckIn from "@/components/CheckIn";
import { createStudent } from "@/lib/actions/student.action";
import { connectToDatabase } from "@/lib/mongoose";
import Image from "next/image";
import { getStudentData } from "@/lib/actions/student.action";
import StudentProgress from "@/components/StudentProgress";
import { useAuth } from "@clerk/nextjs";
import { Check } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  // const { userId } = useAuth();

  const { userId }: { userId: string | null } = auth();
  // const { isInstructor } = await getStudentData(userId ?? "");
  // Use optional chaining:

  const isInstructor = (await getStudentData(userId ?? ""))?.isInstructor;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isInstructor ? <StudentProgress /> : <CheckIn />}
    </main>
  );
}
