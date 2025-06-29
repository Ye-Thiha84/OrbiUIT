import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignUpForm';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';
import { Users, BookOpen, Share2 } from 'lucide-react';

type AuthMode = 'login' | 'signup' | 'forgot';

const Auth = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  const handleAuthModeChange = (mode: AuthMode) => {
    setAuthMode(mode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div></div>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Side - Branding & Info */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Decorative Elements with Animation */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-40 right-20 w-24 h-24 bg-gray-300/10 rounded-full blur-lg"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
          ></motion.div>
          <motion.div
            className="absolute top-1/2 left-10 w-16 h-16 bg-gray-400/20 rounded-full blur-md"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 5 }}
          ></motion.div>
          
          <div className="relative z-10 flex flex-col items-center px-12 text-white min-h-screen w-full">
            <motion.div
              className="text-center max-w-lg pt-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-10 leading-tight">
                Centralized Knowledge
                <br />
                <span className="text-gray-300">Sharing Platform</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-12">
                Connect with fellow UIT students, share resources, and build knowledge together in one unified platform.
              </p>
              
              <div className="space-y-8">
                <motion.div className="flex items-center justify-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-lg">Connect with students across all departments</span>
                </motion.div>
                <motion.div className="flex items-center justify-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-lg">Access shared study materials and resources</span>
                </motion.div>
                <motion.div className="flex items-center justify-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-lg">Share knowledge and collaborate effectively</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Auth Forms */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              {/* Auth Mode Toggle */}
              {authMode !== 'forgot' && (
                <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => handleAuthModeChange('login')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      authMode === 'login'
                        ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-current={authMode === 'login' ? 'true' : 'false'}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleAuthModeChange('signup')}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                      authMode === 'signup'
                        ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-current={authMode === 'signup' ? 'true' : 'false'}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Form Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={authMode}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {authMode === 'login' && (
                    <LoginForm onForgotPassword={() => handleAuthModeChange('forgot')} />
                  )}
                  {authMode === 'signup' && <SignupForm />}
                  {authMode === 'forgot' && (
                    <ForgotPasswordForm onBackToLogin={() => handleAuthModeChange('login')} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By continuing, you agree to OrbiUIT's Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;