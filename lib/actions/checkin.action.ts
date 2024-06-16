import { connectToDatabase } from "../mongoose";

export async function checkin() {
  try {
    await connectToDatabase();
  } catch (error) {
    console.log("Error checking in", error);
  }
}
