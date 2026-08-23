import React, { useState } from 'react';
import { X, LogIn, UserPlus, KeyRound, Mail, Lock, User, Phone, CheckCircle2, Shield } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'signin' | 'signup' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'signin'
}) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup' | 'forgot'>(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === 'signin') {
        setStatusMessage({
          type: 'success',
          text: 'Authentication successful! Welcome to your corporate dashboard.'
        });
        setTimeout(() => {
          onClose();
        }, 1200);
      } else if (activeTab === 'signup') {
        setStatusMessage({
          type: 'success',
          text: 'Account created successfully! Verification link sent to your email.'
        });
        setTimeout(() => {
          setActiveTab('signin');
          setStatusMessage(null);
        }, 1500);
      } else {
        setStatusMessage({
          type: 'success',
          text: 'Password reset link has been dispatched to your registered email address.'
        });
      }
    }, 1000);
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: 'success',
        text: 'Google authentication successful! Logging into compliance portal...'
      });
      setTimeout(() => {
        onClose();
      }, 1200);
    }, 900);
  };

  return (
    <div
      id="auth-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-slate-900 overflow-hidden">
        {/* Close Button */}
        <button
          id="auth-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] border border-blue-100 flex items-center justify-center flex-shrink-0">
            {activeTab === 'signin' && <LogIn className="w-5 h-5" />}
            {activeTab === 'signup' && <UserPlus className="w-5 h-5" />}
            {activeTab === 'forgot' && <KeyRound className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {activeTab === 'signin' && 'Client & Partner Login'}
              {activeTab === 'signup' && 'Create Your Business Account'}
              {activeTab === 'forgot' && 'Reset Your Password'}
            </h3>
            <p className="text-xs text-slate-500">
              {activeTab === 'signin' && 'Access company incorporation documents & GST filings'}
              {activeTab === 'signup' && 'Fast-track your corporate registrations with 24/7 tracking'}
              {activeTab === 'forgot' && 'Enter your email to receive recovery instructions'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 mb-5">
          <button
            type="button"
            onClick={() => { setActiveTab('signin'); setStatusMessage(null); }}
            className={`flex-1 pb-2.5 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'signin'
                ? 'border-[#0B3D91] text-[#0B3D91]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('signup'); setStatusMessage(null); }}
            className={`flex-1 pb-2.5 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'signup'
                ? 'border-[#0B3D91] text-[#0B3D91]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('forgot'); setStatusMessage(null); }}
            className={`flex-1 pb-2.5 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'forgot'
                ? 'border-[#0B3D91] text-[#0B3D91]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Forgot Password
          </button>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div
            className={`mb-4 p-3 rounded-xl text-xs flex items-center gap-2 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Google OAuth Button for Sign In & Sign Up */}
        {activeTab !== 'forgot' && (
          <div className="mb-4">
            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center justify-center gap-3 transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-2 text-[11px] uppercase tracking-wider text-slate-400 font-semibold absolute">
                or with email
              </span>
            </div>
          </div>
        )}

        {/* Main Forms */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Sign Up Fields */}
          {activeTab === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Akshay Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                  />
                </div>
              </div>
            </>
          )}

          {/* Email for all tabs */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B3D91]"
              />
            </div>
          </div>

          {/* Password for Sign In & Sign Up */}
          {activeTab !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Password *
                </label>
                {activeTab === 'signin' && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('forgot')}
                    className="text-[11px] text-[#0B3D91] hover:underline font-semibold cursor-pointer"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-2.5 bg-[#0B3D91] hover:bg-blue-900 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Shield className="w-4 h-4 text-[#F5A623]" />
            <span>
              {isLoading
                ? 'Processing...'
                : activeTab === 'signin'
                ? 'Sign In to Account'
                : activeTab === 'signup'
                ? 'Complete Free Registration'
                : 'Send Password Reset Link'}
            </span>
          </button>
        </form>

        {/* Security guarantee */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-bit SSL Bank-Grade Document Vault Encryption</span>
        </div>
      </div>
    </div>
  );
};
