import { useState } from "react";
import { Sparkles, Shield, Zap } from "lucide-react";
import AuthForm from "@/components/AuthForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex">
      {/* Left showcase */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white w-full">
          <div className="text-center space-y-8 animate-fade-in max-w-lg mx-auto">
            <h1 className="text-5xl font-bold">Orbi<span className="text-white">UIT</span></h1>
            <p className="text-xl text-gray-300 font-light">Next-generation solutions for modern businesses</p>
            <div className="grid gap-6 mt-12">
              {[{
                icon: <Sparkles className="w-6 h-6" />,
                title: "Innovation First",
                desc: "Cutting-edge technology solutions"
              }, {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security"
              }, {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                desc: "Optimized for performance"
              }].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="p-2 bg-white/20 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      {/* Right form side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <AuthForm isLogin={isLogin} toggleMode={toggleMode} />
      </div>
    </div>
  );
};

export default Auth;
