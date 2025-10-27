"use client";
import "@/styles/globals.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Title (YERID) scroll behavior
  const y = useTransform(scrollYProgress, [0, 0.3], ["0vh", "-75vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Mission text behavior — fades fully in before button starts
  const missionOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const missionY = useTransform(scrollYProgress, [0.15, 0.4], ["100vh", "40vh"]);

  // Button starts *after* mission text finishes
  const buttonOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.5, 0.85], ["90vh", "90vh"]);

  return (
    <main className="h-[270vh] bg-white overflow-x-hidden relative">
      {/* YERID Title */}
      <motion.div
        style={{ y, opacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
      >
        <h1 className="title text-[12vw] font-light tracking-[0.0em] flex items-center justify-center">
          <p className="text-[5vw] mr-2">the</p> YARID
        </h1>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        style={{ opacity: missionOpacity, y: missionY }}
        className="h-screen flex flex-col items-center justify-center text-center"
      >
        <div
          className="text-left leading-relaxed text-gray-700"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            textAlign: "justify",
            marginLeft: "20%",
            marginRight: "20%",
            maxWidth: "800px",
            fontSize: "28px",
          }}
        >
          <p>
            The YARID is a student-run journal for exploring the future of Jewish culture and thought.
            Based at Harvard and open to college writers everywhere, it gathers new voices shaping Jewish life today.
            <br />
            <br />
            The word YARID means fair or gathering: a meeting place where people came to trade, haggle,
            and exchange ideas. In that spirit, The YARID is a modern fair of Jewish thought: a space for debate,
            imagination, and discovery about what Jewish life can become.
            <br />
            <br />
            We publish college voices asking what comes next for Jewish culture—how tradition adapts, where it resists,
            and what new forms it can take. Our aim is simple: dialogue over dogma, questions over answers, and writing
            that’s as daring as it is thoughtful.
          </p>
        </div>
      </motion.section>

      {/* Apply Button — appears later, never overlapping text */}
      <motion.div
        style={{ opacity: buttonOpacity, y: buttonY }}
        className="h-[60vh] flex items-start justify-center"
      >
        <button
          className="button mt-10 px-8 py-3 text-lg rounded-full border border-black hover:bg-black hover:text-white transition-colors"
          onClick={() => window.open("https://harvard.pdx1.qualtrics.com/jfe/preview/previewId/9132c010-eee3-4ad0-b9ee-5315ae7b989d/SV_1X5Q8YgwVyHGCeG?Q_CHL=preview&Q_SurveyVersionID=current", "_blank")}
        >
          APPLY HERE
        </button>
      </motion.div>
    </main>
  );
}
