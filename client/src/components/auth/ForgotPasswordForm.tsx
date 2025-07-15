import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

interface ForgotPasswordFormProps {
    onBackToLogin: () => void;
}

const ForgotPasswordForm = ({ onBackToLogin }: ForgotPasswordFormProps) => {
    const [step, setStep] = useState<'email' | 'verify' | 'reset'>('email');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Step 1: Submit email
    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:9090/api/get-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok && data.exists) {
                toast({ title: 'Email Found', description: data.message });
                setStep('verify');
            } else {
                toast({
                    title: 'User Not Found',
                    description: data.message || 'No user with this email.',
                    variant: 'destructive',
                });
            }
        } catch {
            toast({
                title: 'Error',
                description: 'Server error. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Step 2: Submit OTP
    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:9090/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await response.text();
            if (response.ok) {
                toast({ title: 'OTP Verified', description: data });
                setStep('reset');
            } else {
                toast({
                    title: 'Failed to verify OTP',
                    description: data,
                    variant: 'destructive',
                });
            }
        } catch {
            toast({
                title: 'Error',
                description: 'Failed to verify OTP.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Step 3: Reset password
    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast({
                title: 'Password Mismatch',
                description: 'Passwords do not match.',
                variant: 'destructive',
            });
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:9090/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.text();
            if (response.ok) {
                toast({ title: 'Password Reset Successful', description: data });
                onBackToLogin();
            } else {
                toast({
                    title: 'Failed to reset password',
                    description: data,
                    variant: 'destructive',
                });
            }
        } catch {
            toast({
                title: 'Error',
                description: 'Could not reset password.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    // === Render Reset Password ===
    if (step === 'reset') {
        return (
            <div>
                <div className="flex items-center mb-6">
                    <button
                        onClick={() => setStep('verify')}
                        className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </div>

                <div className="text-center mb-8">
                    <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>
                    <p className="text-gray-600">Enter your new password below</p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-6">
                    <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-gray-800 to-black text-white"
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </Button>
                </form>
            </div>
        );
    }

    // === Render OTP ===
    if (step === 'verify') {
        return (
            <div>
                <div className="flex items-center mb-6">
                    <button
                        onClick={() => setStep('email')}
                        className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </div>

                <div className="text-center mb-8">
                    <ShieldCheck className="w-12 h-12 mx-auto text-gray-700 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h2>
                    <p className="text-gray-600">
                        Enter the 6-digit OTP sent to <span className="font-medium">{email}</span>
                    </p>
                </div>

                <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="otp">OTP Code</Label>
                        <Input
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-gray-800 to-black text-white"
                    >
                        {isLoading ? 'Verifying...' : 'Verify OTP'}
                    </Button>
                </form>
            </div>
        );
    }

    // === Render Email Form ===
    return (
        <div>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBackToLogin}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Back to Sign In</span>
                </button>
            </div>

            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
                <p className="text-gray-600">Enter your email address to get reset instructions.</p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        id="reset-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your UIT email"
                        className="pl-10 h-12"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-gray-800 to-black text-white"
                >
                    {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                </Button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;

