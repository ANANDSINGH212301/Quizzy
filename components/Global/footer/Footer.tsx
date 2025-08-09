import React from "react";
import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="bg-[#F7F5FA] text-zinc-600 border-t border-zinc-200">
      <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-semibold text-[#6C4AB6]">Quizzy</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-zinc-500 text-center sm:text-left">
          © 2025 Quizzy —{" "}
          <a
            href="https://twitter.com/knyttneve"
            className="text-[#6C4AB6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @BrijeshAnand
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            {
              href: "#",
              icon: (
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              ),
            },
            {
              href: "#",
              icon: (
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              ),
            },
            {
              href: "#",
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              ),
            },
            {
              href: "#",
              icon: (
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-zinc-500 hover:text-[#6C4AB6] transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
