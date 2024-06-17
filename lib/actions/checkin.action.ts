"use server";

import Student from "@/database/student.model";
import { connectToDatabase } from "../mongoose";
import { CheckInParams } from "./shared.types";

export async function checkin(params: CheckInParams) {
  try {
    await connectToDatabase();
    // find by studentId and update attendance by incrementing count by 1
    const checkin = await Student.findOneAndUpdate(
      { studentId: params.studentId },
      { $inc: { attendance: 1 } },
      { new: true }
    );
    if (!checkin) {
      throw new Error("Student not found");
    }
  } catch (error) {
    console.log("Error checking in", error);
  }
}
