import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutralDark text-white py-8">
      {/* Bottom text */}
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Kool kats. All rights reserved.
      </div>
    </footer>
  );
}
