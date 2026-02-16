"use client";

import { ButtonHTMLAttributes } from "react";

export type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>;

const createTestCrud = async (name: string, value: number) => {
  try {
    const response = await fetch("/api/test-crud", {
      method: "POST",
      body: JSON.stringify({ name, value }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Failed to create Test CRUD");
    }
    const data = await response.json();
    console.log("Test CRUD created:", data);
    return data;
  } catch (error) {
    console.error("Error creating Test CRUD:", error);
  }
};

export const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
  return (
    <button {...props} onClick={() => createTestCrud("bbbb", 126)}></button>
  );
};

export default ButtonBase;
