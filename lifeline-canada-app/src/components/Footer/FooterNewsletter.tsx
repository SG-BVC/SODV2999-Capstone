import React, { type FormEvent, useState } from 'react';
import { Mail, ArrowRight, Shield, Sparkles, Send } from 'lucide-react';

export default function FooterNewsletter() {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
    setTimeout(() => setIsEmailSubmitted(false), 3000);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/30 border-y border-blue-700/30 backdrop-blur-sm">
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")]`}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 rounded-2xl backdrop-blur-sm border border-blue-700/30">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <Send className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                      Stay Connected
                    </h3>
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-blue-200 text-sm lg:text-base">
                    Join{' '}
                    <span className="font-semibold text-blue-100">10,000+</span>{' '}
                    subscribers
                  </p>
                </div>
              </div>

              <p className="text-blue-200 max-w-lg text-lg leading-relaxed">
                Receive exclusive mental health resources, inspiring stories,
                and community updates directly to your inbox.
                <span className="block mt-2 text-blue-300 text-sm">
                  🎁 Monthly giveaways • 📚 Free e-books • 🧠 Expert insights
                </span>
              </p>
            </div>

            {/* Email Form */}
            <div className="w-full lg:w-auto">
              <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200" />

                <div className="relative flex flex-col sm:flex-row gap-4 p-1 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-blue-700/30">
                  <div className="flex-1">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border border-blue-500/20 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-300"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isEmailSubmitted}
                    className="relative overflow-hidden group/btn px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isEmailSubmitted ? 'Subscribed!' : 'Subscribe'}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${isEmailSubmitted ? 'rotate-45 scale-0' : 'group-hover/btn:translate-x-1'}`}
                      />
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </button>
                </div>

                {isEmailSubmitted && (
                  <div className="absolute -bottom-8 left-0 right-0 text-center">
                    <p className="text-green-400 text-sm animate-fadeIn">
                      🎉 Welcome to our community! Check your email for
                      confirmation.
                    </p>
                  </div>
                )}
              </form>

              <p className="mt-6 text-center text-blue-300/70 text-sm">
                <Shield className="inline-block w-4 h-4 mr-1" />
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
