"use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function NavBubble({ defaultOpen = false }: { defaultOpen?: boolean }) {
//   const [open, setOpen] = useState(defaultOpen);

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       <motion.div
//         initial={false}
//         animate={open ? { width: 130, height: 100, borderRadius: 12 } : { width: 48, height: 48, borderRadius: 9999 }}
//         transition={{ type: "spring", stiffness: 320, damping: 30 }}
//         className="bg-white shadow-lg border border-gray-200 overflow-hidden flex flex-col"
//         style={{ backgroundColor: "rgba(255,255,255,1)" }}
//       >
//         <button
//           onClick={() => setOpen((s) => !s)}
//           aria-expanded={open}
//           aria-label="Toggle navigation"
//           className="w-3 h-12 flex items-center justify-center focus:outline-none"
//         >
//           <motion.span
//             className="block w-3 h-[2px] bg-[rgb(165,28,48)] origin-center"
//             animate={open ? { rotate: 45, y: 0 } : { rotate: 0 }}
//           />
//         </button>

//         <motion.nav
//           initial={false}
//           animate={open ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
//           transition={{ delay: open ? 0.05 : 0 }}
//           className="px-4 py-2 flex-1"
//         >
//           <ul className="flex flex-col gap-3">
//             <li className="text-sm font-medium">
//               <a href="/" className="text-[rgb(27,27,27)]">Home</a>
//             </li>
//             <li className="text-sm font-medium">
//               <a href="/#mission" className="text-[rgb(27,27,27)]">Mission</a>
//             </li>
//             <li className="text-sm font-medium">
//               <a href="/about" className="text-[rgb(27,27,27)]">About</a>
//             </li>
//             <li className="text-sm font-medium mt-2">
//               <a href="/contact" className="text-[rgb(165,28,48)]">Contact</a>
//             </li>
//           </ul>
//         </motion.nav>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavBubble({
  defaultOpen = false,
  openOnScroll = true,
  threshold = 50,
}: {
  defaultOpen?: boolean;
  openOnScroll?: boolean;
  threshold?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  // open/close based on scroll position
  useEffect(() => {
    if (!openOnScroll) return;

    const onScroll = () => {
      if (window.scrollY > threshold) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    // initialize state based on current scroll
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openOnScroll, threshold]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        initial={false}
        animate={
          open
            ? { width: 130, height: 100, borderRadius: 12 }
            : { width: 48, height: 48, borderRadius: 9999 }
        }
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="bg-white/100 shadow-lg border border-gray-200 overflow-hidden flex flex-col"
        style={{ backgroundColor: "rgba(255,255,255,1)" }}
      >
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="w-12 h-12 flex items-center justify-center focus:outline-none"
        >
          <motion.span
            className="block w-6 h-[2px] bg-[rgb(165,28,48)] origin-center"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0 }}
          />
        </button>

        <motion.nav
          initial={false}
          animate={
            open
              ? { opacity: 1, pointerEvents: "auto" }
              : { opacity: 0, pointerEvents: "none" }
          }
          transition={{ delay: open ? 0.05 : 0 }}
          className="px-4 py-2 flex-1"
        >
          <ul className="flex flex-col gap-3">
            <li className="text-sm font-medium">
              <a href="/" className="text-[rgb(27,27,27)]">
                Home
              </a>
            </li>
            <li className="text-sm font-medium">
              <a href="/#mission" className="text-[rgb(27,27,27)]">
                Mission
              </a>
            </li>
            <li className="text-sm font-medium">
              <a href="/about" className="text-[rgb(27,27,27)]">
                About
              </a>
            </li>
            <li className="text-sm font-medium mt-2">
              <a href="/contact" className="text-[rgb(165,28,48)]">
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>
      </motion.div>
    </div>
  );
}