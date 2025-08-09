import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WhyUsItem {
  id: number;
  title: string;
  content: string;
}

export default function WhyUsCard({ item }: { item: WhyUsItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-dark text-light py-10 px-6 rounded shadow transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className={`block text-3xl font-bold transition-colors duration-300 ${
          isHovered ? 'text-white' : 'text-primary'
        }`}
        animate={{ y: isHovered ? -6 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        0{item.id}
      </motion.span>

      <motion.div
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <h4 className="text-xl font-semibold mt-2 mb-1">{item.title}</h4>
        <p className="text-sm">{item.content}</p>
      </motion.div>
    </div>
  );
}
