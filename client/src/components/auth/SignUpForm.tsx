
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Lock, User, Eye } from 'lucide-react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:9090/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          studentId: formData.studentId,
          email: formData.email,
          password: formData.password,
        }),
      });
      console.log(formData);

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      toast({
        title: "Account Created!",
        description: "Welcome to OrbitUIT! Please check your email to verify your account.",
      });
    } catch (error) {
      const err = error as Error;
      toast({
        title: "Error",
        description: "Failed to sign up: " + err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };


  const handleOutlookSignup = () => {
    toast({
      title: "Microsoft Authentication",
      description: "Redirecting to Microsoft Outlook registration...",
    });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Join OrbiUIT</h2>
        <p className="text-gray-600">Create your account and start sharing knowledge</p>
      </div>

      {/* Microsoft Outlook Signup */}
      <Button
        onClick={handleOutlookSignup}
        variant="outline"
        className="w-full mb-6 h-12 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-5 h-5 bg-gradient-to-r from-gray-700 to-black rounded flex items-center justify-center">
            <Mail className="w-3 h-3 text-white" />
          </div>
          <span className="font-medium text-gray-700">Sign up with Outlook</span>
        </div>
      </Button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-4 text-gray-500 font-medium">Or create account with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              className="pl-10 h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="studentId" className="text-sm font-medium text-gray-700">
            Student ID
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="studentId"
              type="text"
              value={formData.studentId}
              onChange={(e) => handleInputChange('studentId', e.target.value)}
              placeholder="Enter your UIT student ID"
              className="pl-10 h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your UIT email"
              className="pl-10 h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Create a strong password"
              className="pl-10 pr-10 h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirm Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              placeholder="Confirm your password"
              className="pl-10 pr-10 h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            className="mt-1 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
            required
          />
          <div className="text-sm text-gray-600 leading-relaxed">
            I agree to OrbiUIT's{' '}
            <a href="#" className="text-gray-800 hover:text-black font-medium">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-gray-800 hover:text-black font-medium">
              Privacy Policy
            </a>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-medium rounded-lg transition-all duration-200"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Creating account...</span>
            </div>
          ) : (
            'Create Account'
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
