import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: '', color: '' });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.studentId) newErrors.studentId = 'Student ID is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 6) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    let label = 'Weak';
    let color = 'bg-red-500';
    if (score >= 3) {
      label = 'Strong';
      color = 'bg-green-500';
    } else if (score >= 2) {
      label = 'Medium';
      color = 'bg-yellow-500';
    }

    setPasswordStrength({ score, label, color });
  };

  useEffect(() => {
    calculatePasswordStrength(formData.password);
  }, [formData.password]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Account Created!",
          description: "Welcome to OrbiUIT! Please check your email to verify your account.",
        });
      }, 2000);
    }
  };

  const handleOutlookSignup = () => {
    toast({
      title: "Microsoft Authentication",
      description: "Redirecting to Microsoft Outlook registration...",
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Join OrbiUIT</h2>
        <p className="text-gray-600">Create your account and start sharing knowledge</p>
      </div>

      <Button
        onClick={handleOutlookSignup}
        variant="outline"
        className="w-full mb-6 h-12 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
      >
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
          <motion.div
            className={`relative ${errors.fullName ? 'animate-shake' : ''}`}
            animate={errors.fullName ? { x: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className={`pl-10 h-12 border ${
                  errors.fullName ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-200'
                } focus:border-gray-500 focus:ring-gray-500`}
              />
            </div>
            {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
          </motion.div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="studentId" className="text-sm font-medium text-gray-700">
            Student ID
          </Label>
          <motion.div
            className={`relative ${errors.studentId ? 'animate-shake' : ''}`}
            animate={errors.studentId ? { x: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="studentId"
                type="text"
                value={formData.studentId}
                onChange={(e) => handleInputChange('studentId', e.target.value)}
                placeholder="Enter your UIT student ID"
                className={`pl-10 h-12 border ${
                  errors.studentId ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-200'
                } focus:border-gray-500 focus:ring-gray-500`}
              />
            </div>
            {errors.studentId && <p className="mt-1 text-sm text-red-500">{errors.studentId}</p>}
          </motion.div>
        </div>

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
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
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
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Create a strong password"
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
          {formData.password && (
            <div className="mt-2">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <motion.div
                  className={`h-full rounded-full ${passwordStrength.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(passwordStrength.score + 1) * 25}%` }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Password Strength: {passwordStrength.label}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirm Password
          </Label>
          <motion.div
            className={`relative ${errors.confirmPassword ? 'animate-shake' : ''}`}
            animate={errors.confirmPassword ? { x: [0, -5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
                className={`pl-10 pr-10 h-12 border ${
                  errors.confirmPassword ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-200'
                } focus:border-gray-500 focus:ring-gray-500`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
          </motion.div>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            className="mt-1 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
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
              <span>Creating account...</span>
            </div>
          ) : (
            'Create Account'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SignupForm;