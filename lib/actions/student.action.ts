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

export async function getStudentData(studentId: string) {
  try {
    await connectToDatabase();

    const student = await Student.findOne({ studentId }).select(
      "name belt attendance isInstructor"
    );

    return student;
  } catch (error) {
    console.log("Error getting student data", error);
    throw error;
  }
}

export async function getAllStudentsData() {
  try {
    await connectToDatabase();

    const students = await Student.find().select(
      "name belt attendance isInstructor"
    );

    return students;
  } catch (error) {
    console.log("Error getting all students data", error);
    throw error;
  }
}
