import { getAllStudentsData } from "@/lib/actions/student.action";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentProgress = async () => {
  const students = await getAllStudentsData();

  return (
    <Table>
      <TableCaption>A list of your students.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Belt</TableHead>
          <TableHead>Last Checked-in</TableHead>
          <TableHead className="text-right">Total Days Trained</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student._id}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.belt}</TableCell>
            <TableCell>
              {student.attendance && student.attendance.length > 0
                ? student.attendance[
                    student.attendance.length - 1
                  ].toDateString()
                : null}
            </TableCell>
            <TableCell className="text-right">
              {student.attendance && student.attendance.length > 0
                ? student.attendance.length
                : null}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentProgress;
