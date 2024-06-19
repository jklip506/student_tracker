import { Schema, models, model, Document } from "mongoose";

export interface IStudent extends Document {
  studentId: string;
  attendance: [Date];
  belt: string;
  name: string;
  username: string;
  email: string;
  isInstructor: boolean;
}

const StudentSchema: Schema = new Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  attendance: { type: [Date], default: [] },
  belt: { type: String, default: "White" },
  isInstructor: { type: Boolean, default: false },
});

const Student = models.Student || model("Student", StudentSchema);

export default Student;
