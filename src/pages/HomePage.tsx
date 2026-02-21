import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const floatingCats = ["😺", "😸", "😻", "🐱", "😽", "😹"];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Floating decorative elements */}
      {floatingCats.map((cat, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl sm:text-3xl opacity-30 pointer-events-none select-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {cat}
        </motion.div>
      ))}

      {/* Paw prints decoration */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`paw-${i}`}
          className="absolute text-lg opacity-10 pointer-events-none select-none"
          style={{
            right: `${5 + i * 12}%`,
            bottom: `${10 + (i % 4) * 20}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.15, 0.08] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 4 }}
        >
          🐾
        </motion.div>
      ))}

      <motion.div
        className="text-center max-w-md w-full z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main cat emoji */}
        <motion.div
          className="text-7xl sm:text-8xl mb-6"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          🐱
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl font-black text-foreground mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          你是哪种
          <span className="text-gradient-kawaii"> 猫系人格</span>
          ？
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          30道趣味小测试，发现你的猫咪灵魂 🐾
        </motion.p>

        <motion.p
          className="text-muted-foreground/70 text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          超过 280,000 人已经测试 ✨
        </motion.p>

        <motion.button
          onClick={() => navigate("/quiz")}
          className="w-full max-w-xs mx-auto block bg-gradient-kawaii text-primary-foreground font-bold text-lg py-4 px-8 rounded-2xl shadow-kawaii active:scale-95 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          开始测试 🐾
        </motion.button>

        <motion.div
          className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>⏱ 3分钟</span>
          <span>🎯 8种结果</span>
          <span>🆓 完全免费</span>
        </motion.div>

        {/* Cat result preview pills */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {["🧡 活力橘猫", "🤍 温柔布偶", "🩶 高冷英短", "💙 社交暹罗"].map(
            (label) => (
              <span
                key={label}
                className="bg-card text-card-foreground text-xs px-3 py-1.5 rounded-full border border-border"
              >
                {label}
              </span>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
