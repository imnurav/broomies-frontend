import { IFormType } from "../components/RightContainer";

export const userForm = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    required: "First Name is required.",
    rules: {
      required: "First Name is required.",
      minLength: {
        value: 3,
        message: "First Name must be at least 3 characters.",
      },
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "First Name must only contain letters.",
      },
    },
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    required: "Last Name is required.",
    rules: {
      required: "Last Name is required.",
      minLength: {
        value: 3,
        message: "Last Name must be at least 3 characters.",
      },
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "Last Name must only contain letters.",
      },
    },
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: "Email is required.",
    rules: {
      required: "Email is required.",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address.",
      },
    },
  },
  {
    label: "Username",
    name: "username",
    type: "text",
    required: "Username is required.",
    rules: {
      required: "Username is required.",
      minLength: {
        value: 3,
        message: "Username must be at least 3 characters.",
      },
      pattern: {
        value: /^[A-Za-z][A-Za-z0-9_]{2,15}$/,
        message: "Please enter a valid username",
      },
    },
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: "Password is required.",
    rules: {
      required: "Password is required.",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters.",
      },
    },
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    required: "Confirm Password is required.",
    rules: {
      required: "Confirm Password is required.",
      validate: (value: string, formValues: IFormType) => {
        const password = formValues.password;
        return password === value || "Passwords must match.";
      },
    },
  },
];
