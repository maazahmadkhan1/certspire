import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">CertSpire</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#courses"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-courses"
            >
              Courses
            </a>
            <a
              href="#practice"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-practice"
            >
              AI Practice
            </a>
            <a
              href="#resources"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-resources"
            >
              Resources
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About Us
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" data-testid="button-login">
              Login
            </Button>
            <Button variant="default" size="sm" data-testid="button-get-started">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
