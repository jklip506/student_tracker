"use server";

import { connectToDatabase } from "../mongoose";
import { CreateUserParams } from "./shared.types";
import Student from "@/database/student.model";

export async function createStudent(userData: CreateUserParams) {
  try {
    await connectToDatabase();

    const newStudent = await Student.create(userData);
  } catch (error) {
    console.log("Error creating student", error);
    throw error;
  }
}
