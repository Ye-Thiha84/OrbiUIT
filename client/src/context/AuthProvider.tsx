// context/AuthProvider.tsx
"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";

interface AuthFormData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  formData: AuthFormData;
  setFormData: (data: AuthFormData) => void;
  submitLogin: () => Promise<void>;
  submitSignup: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    name: "",
    email: "",
    password: "",
  });

  const BASE_URL = "http://localhost:9090";

  const submitLogin = async () => {
    console.log("Submitting login with data:", formData);
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });
      console.log("Login success:", res.data);
    } catch (err: any) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  const submitSignup = async () => {
    console.log("Submitting signup with data:", formData);
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/signup`, formData);
      console.log("Signup success:", res.data);
    } catch (err: any) {
      console.error("Signup failed:", err.response?.data || err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ formData, setFormData, submitLogin, submitSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
