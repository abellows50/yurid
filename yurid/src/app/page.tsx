"use client";
import "@/styles/globals.css";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // As you scroll, YERID moves up and fades
  const y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Mission fades in after
  const missionOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const missionY = useTransform(scrollYProgress, [0.05, 0.3], ["50%", "0%"]);

  return (
    <main className="h-[200vh] bg-white overflow-hidden">
      {/* YERID */}
      <motion.div
        style={{ y, opacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
  <h1 className="title text-[12rem] font-light tracking-[0.0em] flex items-center justify-center bg-white" >
    <h1 className="text-[5rem]">the</h1>YARID
    </h1>
      </motion.div>

      {/* Mission section */}
      <motion.section
        style={{ opacity: missionOpacity, y: missionY }}
        className="h-screen flex flex-col items-center justify-center text-center mission"
      >
        <div
          className="text-left leading-relaxed text-gray-300"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            textAlign: "justify",
            marginLeft: "25%",
            marginRight: "25%",
            maxWidth: "90vw", // keeps it readable
            fontSize: 30,
          }}
        >
          <p>
            <em>YURID</em> is a pluralistic marketplace of ideas. It draws thickly on traditional Jewish voices
            as well as contemporary frameworld to dream a Jewish future which is deeply relevent in a modern world
            but also retaining a tradtional core. <em>YURID</em> is the space for college students to formulate the
            tennents of the Jewish world they want to live in: arguing, holding tension, finding points of release, and
            new frameworks for thinking about the fundemental issues of the Jewish people.
          </p>
        </div>
      </motion.section>

    </main>
  );
}
