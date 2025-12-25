import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

type ThemeColor = "cyan" | "purple" | "amber" | "emerald" | "rose";

interface ThemeOption {
  id: ThemeColor;
  name: string;
  primary: string;
  glow: string;
}

const themes: ThemeOption[] = [
  { id: "cyan", name: "سماوي", primary: "185 100% 50%", glow: "185 100% 60%" },
  { id: "purple", name: "بنفسجي", primary: "270 100% 60%", glow: "270 100% 70%" },
  { id: "amber", name: "ذهبي", primary: "45 100% 50%", glow: "45 100% 60%" },
  { id: "emerald", name: "زمردي", primary: "160 100% 40%", glow: "160 100% 50%" },
  { id: "rose", name: "وردي", primary: "350 100% 60%", glow: "350 100% 70%" },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>("cyan");

  useEffect(() => {
    const savedTheme = localStorage.getItem("site-theme") as ThemeColor;
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeId: ThemeColor) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--glow-primary", theme.glow);
    root.style.setProperty("--ring", theme.primary);
  };

  const handleThemeChange = (themeId: ThemeColor) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    localStorage.setItem("site-theme", themeId);
    setIsOpen(false);
  };

  const getCurrentThemeColor = () => {
    const theme = themes.find(t => t.id === currentTheme);
    return theme ? `hsl(${theme.primary})` : "hsl(185 100% 50%)";
  };

  return (
    <div className="fixed top-6 left-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full glass-panel border border-border/50 hover:border-primary/50 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="تغيير لون الموقع"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Palette 
            className="w-5 h-5 transition-colors duration-300" 
            style={{ color: getCurrentThemeColor() }}
          />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 glass-panel rounded-xl p-3 border border-border/50 min-w-[140px]"
          >
            <p className="text-xs text-muted-foreground mb-3 text-center">اختر اللون</p>
            <div className="flex flex-col gap-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentTheme === theme.id 
                      ? "bg-primary/20 border border-primary/50" 
                      : "hover:bg-surface-elevated border border-transparent"
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: `hsl(${theme.primary})` }}
                    whileHover={{ scale: 1.2 }}
                    animate={currentTheme === theme.id ? { 
                      boxShadow: `0 0 15px hsl(${theme.glow})` 
                    } : {}}
                  />
                  <span className="text-sm text-foreground">{theme.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
