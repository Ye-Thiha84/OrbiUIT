
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Lock, Eye } from 'lucide-react';

interface LoginFormProps {
  onForgotPassword: () => void;
}

const LoginForm = ({ onForgotPassword }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:9090/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      // console.log(email, password);

      const data = await response.text();

      if (response.ok) {
        toast({
          title: "Success",
          description: data,
        });
      } else {
        toast({
          title: "Login Failed",
          description: data,
          variant: "destructive",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOutlookLogin = () => {
    toast({
      title: "Microsoft Authentication",
      description: "Redirecting to Microsoft Outlook authentication...",
    });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-600">Sign in to access your OrbiUIT account</p>
      </div>

      {/* Microsoft Outlook Login */}
      <Button
        onClick={handleOutlookLogin}
        variant="outline"
        className="w-full mb-6 h-12 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
      >
        <div className="flex items-center justify-center space-x-3">
          <div className="w-5 h-5 bg-gradient-to-r from-gray-700 to-black rounded flex items-center justify-center">
            <Mail className="w-3 h-3 text-white" />
          </div>
          <span className="font-medium text-gray-700">Continue with Outlook</span>
        </div>
      </Button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-4 text-gray-500 font-medium">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-300 text-gray-600 focus:ring-gray-500" />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-gray-700 hover:text-black font-medium"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-medium rounded-lg transition-all duration-200"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
