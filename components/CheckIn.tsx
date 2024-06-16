"use client";

import React from "react";
import { Button } from "./ui/button";
import { createStudent } from "@/lib/actions/student.action";

const CheckIn = () => {
  async function handleClick() {
    try {
      await createStudent({
        studentId: "123",
        name: "John Doe",
        username: "johndoe",
        email: "test@test.com",
        attendance: 0,
        belt: "White",
      });
    } catch (error) {
      console.log("Error checking in", error);
    }
  }

  return (
    <Button
      onClick={() => {
        handleClick();
      }}
    >
      Check-in
    </Button>
  );
};

export default CheckIn;
