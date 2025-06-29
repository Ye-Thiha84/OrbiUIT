import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Lock, Eye } from 'lucide-react';

interface LoginFormProps {
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (email && password) {
          toast({
            title: "Welcome back!",
            description: "Successfully signed in to OrbiUIT",
          });
        } else {
          toast({
            title: "Error",
            description: "Please fill in all fields",
            variant: "destructive",
          });
        }
      }, 1500);
    }
  };

  const handleOutlookLogin = () => {
    toast({
      title: "Microsoft Authentication",
      description: "Redirecting to Microsoft Outlook authentication...",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-600">Sign in to access your OrbiUIT account</p>
      </div>

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
          <motion.div
            className={`relative ${errors.email ? 'animate-shake' : ''}`}
            animate={errors.email ? { x: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your UIT email"
                className={`pl-10 h-12 border ${
                  errors.email ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-200'
                } focus:border-gray-500 focus:ring-gray-500`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </motion.div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <motion.div
            className={`relative ${errors.password ? 'animate-shake' : ''}`}
            animate={errors.password ? { x: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`pl-10 pr-10 h-12 border ${
                  errors.password ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-200'
                } focus:border-gray-500 focus:ring-gray-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </motion.div>
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

        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-medium rounded-lg transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LoginForm;