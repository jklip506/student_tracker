"use client";

import React from "react";
import { Button } from "./ui/button";
import { createStudent } from "@/lib/actions/student.action";

import { checkin } from "@/lib/actions/checkin.action";
import { useAuth } from "@clerk/nextjs";

const CheckIn = () => {
  const { userId } = useAuth();

  async function handleClick() {
    try {
      await checkin({ studentId: userId ?? "" });
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
