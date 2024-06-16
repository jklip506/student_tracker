import { Schema, models, model, Document } from "mongoose";

export interface IStudent extends Document {
  studentId: string;
  attendance: number;
  belt: string;
}

const StudentSchema: Schema = new Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  attendance: { type: Number, default: 0 },
  belt: { type: String, default: "White" },
});

const Student = models.Student || model("Student", StudentSchema);

export default Student;
