import React from "react";
import { motion } from "framer-motion";

function Note() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col bg-base-300 justify-center items-center w-full h-60"
    >
      <h1 className="mb-2">LAISSEZ NOUS UNE NOTE</h1>
      <div className="rating rating-lg rating-half">
        <input type="radio" name="rating-11" className="rating-hidden" />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-[var(--red-color)]"
          aria-label="0.5 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-[var(--red-color)]"
          aria-label="1 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-[var(--red-color)]"
          aria-label="1.5 star"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-[var(--red-color)]"
          aria-label="2 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-[var(--red-color)]"
          aria-label="2.5 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-[var(--red-color)]"
          aria-label="3 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-[var(--red-color)]"
          aria-label="3.5 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-[var(--red-color)]"
          aria-label="4 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-[var(--red-color)]"
          aria-label="4.5 star"
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-[var(--red-color)]"
          aria-label="5 star"
        />
      </div>
    </motion.div>
  );
}

export default Note;
