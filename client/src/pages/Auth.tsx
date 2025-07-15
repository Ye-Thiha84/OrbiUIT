import {useState} from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignUpForm';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';
import { Users, BookOpen, Share2 } from 'lucide-react';

type AuthMode = 'login' | 'signup' | 'forgot';

const Auth = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  // ✅ Add this state to store users
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
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-gray-300/10 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gray-400/20 rounded-full blur-md"></div>
          
          <div className="relative z-10 flex flex-col items-center px-12 text-white min-h-screen w-full">
            <div className="text-center max-w-lg pt-32">
              <h2 className="text-4xl font-bold mb-10 leading-tight">
                Centralized Knowledge
                <br />
                <span className="text-gray-300">Sharing Platform</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-12">
                Connect with fellow UIT students, share resources, and build knowledge together in one unified platform.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-lg">Connect with students across all departments</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-lg">Access shared study materials and resources</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-lg">Share knowledge and collaborate effectively</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Just for debug display */}
            {/*<div className="bg-gray-100 p-4 rounded mt-4">*/}
            {/*  <h2 className="text-sm font-semibold mb-2">Fetched Users</h2>*/}
            {/*  <ul className="text-xs text-gray-700 space-y-1">*/}
            {/*    {users.map((user, index) => (*/}
            {/*        <li key={index}>{user.name}</li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</div>*/}

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              {/* Auth Mode Toggle */}
              {authMode !== 'forgot' && (
                <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => handleAuthModeChange('login')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      authMode === 'login'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-current={authMode === 'login' ? 'true' : 'false'}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleAuthModeChange('signup')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      authMode === 'signup'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-current={authMode === 'signup' ? 'true' : 'false'}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Form Content */}
              <div className="transition-all duration-300">
                {authMode === 'login' && (
                  <LoginForm onForgotPassword={() => setAuthMode('forgot')} />
                )}
                {authMode === 'signup' && <SignupForm />}
                {authMode === 'forgot' && (
                  <ForgotPasswordForm onBackToLogin={() => setAuthMode('login')} />
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By continuing, you agree to OrbiUIT's Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;