import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import logoIntro from "@/assets/logo-intro.png";

interface IntroSplashProps {
  onComplete: () => void;
}

const IntroSplash = ({ onComplete }: IntroSplashProps) => {
  const [progress, setProgress] = useState(0);
  const INTRO_DURATION = 7000; // 7 seconds

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / INTRO_DURATION) * 100, 100);
      setProgress(progressPercent);

      if (progressPercent >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #111827 50%, #1a1f35 100%)",
        }}
      >
        {/* Golden Glow Corners */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/20 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/20 rounded-full blur-[100px] opacity-30" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-royal/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
        >
          <span>تخطي الانترو</span>
          <X className="w-4 h-4" />
        </motion.button>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-2xl mx-auto">
          {/* Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(218, 165, 32, 0.3)",
                  "0 0 60px rgba(218, 165, 32, 0.5)",
                  "0 0 30px rgba(218, 165, 32, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full"
            >
              <img
                src={logoIntro}
                alt="Royal Medical Hospital Logo"
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center space-y-3 mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              مستشفى رويال الطبي
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              رعاية ملكية… بمعايير طبية حديثة
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="w-full max-w-md"
          >
            <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(40 70% 55%), hsl(40 85% 70%))",
                  boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)",
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroSplash;
