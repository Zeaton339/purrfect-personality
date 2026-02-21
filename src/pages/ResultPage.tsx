import { useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { calculateResult, type Scores } from "@/data/quizData";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const scores: Scores = useMemo(
    () => ({
      E: Number(searchParams.get("E")) || 0,
      S: Number(searchParams.get("S")) || 0,
      A: Number(searchParams.get("A")) || 0,
      C: Number(searchParams.get("C")) || 0
    }),
    [searchParams]
  );

  const result = useMemo(() => calculateResult(scores), [scores]);

  useEffect(() => {
    // Fire confetti
    const end = Date.now() + 2000;
    const colors = ["#f9a8d4", "#c4b5fd", "#a7f3d0", "#fde68a", "#93c5fd"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleShare = () => {
    const text = `我是「${result.name}」！${result.subtitle} ${result.emoji}\n快来测测你是哪种猫系人格？🐱`;
    if (navigator.share) {
      navigator.share({ title: "猫系人格测试", text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert("已复制到剪贴板！分享给朋友吧～");
    }
  };

  const handleRetry = () => navigate("/quiz");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 max-w-lg mx-auto">
      <motion.div
        className="w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>

        <motion.p
          className="text-sm text-muted-foreground font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>

          你的猫系人格是...
        </motion.p>

        {/* Cat emoji */}
        <motion.div
          className="text-7xl sm:text-8xl mb-4"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>

          {result.emoji}
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-3xl sm:text-4xl font-black text-foreground mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>

          {result.name}
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-semibold text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>

          {result.subtitle}
        </motion.p>

        {/* Result card */}
        <motion.div
          className="bg-card border-2 border-border rounded-3xl p-6 text-left shadow-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}>

          <p className="text-foreground text-sm sm:text-base leading-relaxed mb-5">
            {result.description}
          </p>

          {/* Traits */}
          <div className="flex flex-wrap gap-2 mb-5">
            {result.traits.map((trait) =>
            <span
              key={trait}
              className="bg-muted text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full">

                {trait}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <StatBar label="活力值" value={normalizeScore(scores.E)} color="bg-kawaii-peach" />
            <StatBar label="社交值" value={normalizeScore(scores.S)} color="bg-kawaii-sky" />
            <StatBar label="粘人值" value={normalizeScore(scores.A)} color="bg-kawaii-pink" />
            <StatBar label="好奇值" value={normalizeScore(scores.C)} color="bg-kawaii-mint" />
          </div>
        </motion.div>

        {/* Compatibility & rarity */}
        <motion.div
          className="flex gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}>

          <div className="flex-1 bg-card border border-border rounded-2xl p-4 text-center">
            <p className="text-xs text-muted-foreground mb-1">最佳拍档</p>
            <p className="font-bold text-foreground text-sm">
              {result.compatibility}
            </p>
          </div>
          <div className="flex-1 bg-card border border-border rounded-2xl p-4 text-center">
            <p className="text-xs text-muted-foreground mb-1">稀有度</p>
            <p className="font-bold text-foreground text-sm">
              仅 {result.percentage} 的人
            </p>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}>

          





          <button
            onClick={handleRetry}
            className="w-full bg-card text-foreground font-bold text-base py-4 px-8 rounded-2xl border-2 border-border active:scale-95 transition-transform">

            再测一次 🔄
          </button>
        </motion.div>
      </motion.div>
    </div>);

};

function normalizeScore(score: number): number {
  // Map score range roughly -15 to 15 → 0 to 100
  return Math.max(5, Math.min(95, (score + 15) / 30 * 100));
}

function StatBar({ label, value, color }: {label: string;value: number;color: string;}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground font-semibold">{label}</span>
        <span className="text-muted-foreground">{Math.round(value)}%</span>
      </div>
      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} />

      </div>
    </div>);

}

export default ResultPage;