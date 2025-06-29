import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, ArrowLeft } from 'lucide-react';

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string } = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsEmailSent(true);
        toast({
          title: "Reset Email Sent!",
          description: "Check your inbox for password reset instructions.",
        });
      }, 1500);
    }
  };

  if (isEmailSent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-gray-700" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We've sent password reset instructions to{' '}
          <span className="font-medium text-gray-900">{email}</span>
        </p>

        <div className="space-y-4">
          <Button
            onClick={onBackToLogin}
            className="w-full h-12 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-medium rounded-lg transition-all duration-200"
          >
            Back to Sign In
          </Button>
          
          <p className="text-sm text-gray-500">
            Didn't receive the email?{' '}
            <button
              onClick={() => {
                setIsEmailSent(false);
                setEmail('');
                setErrors({});
              }}
              className="text-gray-700 hover:text-black font-medium"
            >
              Try again
            </button>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <button
          onClick={onBackToLogin}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Back to Sign In</span>
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
        <p className="text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="reset-email" className="text-sm font-medium text-gray-700">
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
                id="reset-email"
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
              <span>Sending...</span>
            </div>
          ) : (
            'Send Reset Instructions'
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Remember your password?{' '}
          <button
            onClick={onBackToLogin}
            className="text-gray-700 hover:text-black font-medium"
          >
            Sign in instead
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordForm;