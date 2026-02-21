import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { questions, type Scores } from "@/data/quizData";

const QuizPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>({ E: 0, S: 0, A: 0, C: 0 });
  const [direction, setDirection] = useState(1);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  const handleAnswer = useCallback(
    (optionScores: { E?: number; S?: number; A?: number; C?: number }) => {
      const newScores = { ...scores };
      if (optionScores.E) newScores.E += optionScores.E;
      if (optionScores.S) newScores.S += optionScores.S;
      if (optionScores.A) newScores.A += optionScores.A;
      if (optionScores.C) newScores.C += optionScores.C;
      setScores(newScores);

      if (current < questions.length - 1) {
        setDirection(1);
        setCurrent((prev) => prev + 1);
      } else {
        // Navigate to result with scores
        const params = new URLSearchParams({
          E: String(newScores.E),
          S: String(newScores.S),
          A: String(newScores.A),
          C: String(newScores.C),
        });
        navigate(`/result?${params.toString()}`);
      }
    },
    [scores, current, navigate]
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-4 py-6 max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground font-semibold">
            {current + 1} / {questions.length}
          </span>
          <span className="text-xs text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-kawaii rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Cat walking on progress */}
      <div className="relative h-6 mb-4">
        <motion.span
          className="absolute text-lg -top-1"
          animate={{ left: `calc(${Math.min(progress, 95)}% - 10px)` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          🐾
        </motion.span>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="text-center mb-8">
              <motion.span
                className="text-5xl block mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.15 }}
              >
                {q.emoji}
              </motion.span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {q.question}
              </h2>
            </div>

            <div className="space-y-3">
              {q.options.map((option, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleAnswer(option.scores)}
                  className="w-full text-left bg-card hover:bg-primary/10 border-2 border-border hover:border-primary/40 text-card-foreground font-semibold py-3.5 px-5 rounded-2xl transition-colors active:scale-[0.97] duration-150"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-sm sm:text-base">{option.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
