"use server";

import Student from "@/database/student.model";
import { connectToDatabase } from "../mongoose";
import { CheckInParams } from "./shared.types";

export async function checkin(params: CheckInParams) {
  try {
    await connectToDatabase();
    const checkin = await Student.findOneAndUpdate(
      { studentId: params.studentId },
      // add today's date to attendance array
      { $push: { attendance: new Date() } },
      { new: true }
    );
    if (!checkin) {
      throw new Error("Student not found");
    }
  } catch (error) {
    console.log("Error checking in", error);
  }
}
