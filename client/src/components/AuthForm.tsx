"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import MicrosoftAuthButton from "./MicrosoftAuthButton";
import { useAuth } from "@/context/AuthProvider";

interface AuthFormProps {
  isLogin: boolean;
  toggleMode: () => void;
}

const AuthForm = ({ isLogin, toggleMode }: AuthFormProps) => {
  const { formData, setFormData, submitLogin, submitSignup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      await submitLogin();
    } else {
      await submitSignup();
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-black">
          {isLogin ? "Welcome back" : "Create account"}
        </h2>
        <p className="text-gray-600">
          {isLogin
            ? "Sign in to your OrbiUIT account"
            : "Join OrbiUIT and start your journey"}
        </p>
      </div>

      <div className="p-8 shadow-lg border border-gray-200 bg-white rounded-lg">
        <MicrosoftAuthButton />

        <div className="relative">
          <Separator className="my-6 bg-gray-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 h-12"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 pr-10 h-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-black border-gray-300 rounded"
                />
                <span className="text-sm text-black">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-black hover:text-gray-600 font-medium"
              >
                Forgot password?
              </button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-black hover:bg-gray-800 text-white"
          >
            {isLogin ? "Sign In" : "Create Account"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleMode}
            className="ml-2 text-black hover:text-gray-600 font-semibold"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>

      <div className="text-center text-xs text-gray-500">
        By continuing, you agree to our{" "}
        <a href="#" className="text-black hover:text-gray-600">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-black hover:text-gray-600">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

export default AuthForm;
