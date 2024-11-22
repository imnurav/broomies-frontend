"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userForm } from "../constant";
import Input from "./input";

const InitialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};
export type IFormType = typeof InitialFormState;

const RightContainer = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormType>();

  const submitForm = async (data: IFormType) => {
    try {
      const {
        confirmPassword,
        email,
        firstName,
        lastName,
        password,
        username,
      } = data;
      const payload = {
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        confirm_password: confirmPassword,
      };
      const res = await axios.post("http://localhost:3001/api/user", payload);
      if (res.data) {
        toast(res.data.message, { type: "success" });
        reset(InitialFormState);
      }
    } catch (error: any) {
      toast(error.response.data.message, { type: "error" });
      //   console.log(error);
    }
  };
  
  return (
    <div className="right-section">
      <button className="signin-button">Sign In</button>
      <h2>Explore & Experience</h2>
      <p>Get onto your most comfortable journey yet. All the way up.</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          {userForm.slice(0, 2).map((field, index) => (
            <Input
              key={index}
              control={control}
              name={field.name}
              type={field.type}
              placeholder={field.label}
              rules={field.rules}
              className="!w-full"
              error={errors[field.name as keyof IFormType]}
            />
          ))}
        </div>
        {userForm.slice(2, userForm.length).map((field, index) => (
          <Input
            key={index}
            control={control}
            name={field.name}
            type={field.type}
            placeholder={field.label}
            rules={field.rules}
            error={errors[field.name as keyof IFormType]}
          />
        ))}
        <button className="register-button " type="submit">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default RightContainer;
