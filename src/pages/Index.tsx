import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Expertise from "@/components/Expertise";
import Statement from "@/components/Statement";
import FinalLine from "@/components/FinalLine";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Sections */}
      <Hero />
      <About />
      <Philosophy />
      <Expertise />
      <Statement />
      <FinalLine />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/yzi7.i?igsh=OGdrdHBqcjIxaGpj"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zm8.5 1.5h-8.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0z" />
            </svg>
          </a>

          <a
            href="https://wa.me/967779782716"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.41 0 .04 5.37.04 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.93 11.93 0 0012.04 24C18.66 24 24 18.63 24 12a11.82 11.82 0 00-3.48-8.52zM12.04 21.82a9.84 9.84 0 01-5.02-1.38l-.36-.21-3.66.96.98-3.57-.24-.37A9.78 9.78 0 012.22 12c0-5.43 4.41-9.84 9.82-9.84A9.82 9.82 0 0121.86 12c0 5.43-4.4 9.82-9.82 9.82zm5.39-7.37c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49h-.55c-.19 0-.49.07-.74.37-.26.29-.97.95-.97 2.32 0 1.37.99 2.69 1.13 2.88.15.19 1.95 2.97 4.72 4.17.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.71-.7 1.95-1.38.24-.69.24-1.27.17-1.38-.07-.11-.26-.18-.55-.33z" />
            </svg>
          </a>

          <a
            href="https://https://www.linkedin.com/in/azaam-alamrini-a1292b355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="mailto:azaamalamrini67@gmail.com"
            className="group p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="Email"
          >
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
        <p className="text-muted-foreground text-sm font-mono" dir="ltr">
          © 2024 — All rights reserved
        </p>
      </footer>
    </main>
  );
};

export default Index;
