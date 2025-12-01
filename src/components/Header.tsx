import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "عن المستشفى", path: "/about" },
    { name: "الأقسام الطبية", path: "/departments" },
    { name: "الأطباء", path: "/doctors" },
    { name: "الخدمات التشخيصية", path: "/services" },
    { name: "حجز موعد", path: "/appointment" },
    { name: "الأخبار", path: "/news" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-royal/20 shadow-elegant" 
          : "bg-background/80 backdrop-blur-sm border-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-royal-gradient text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0920505555" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>0920505555</span>
            </a>
            <a href="tel:0917085555" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>0917085555</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>خدمة طوارئ 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src={logo} alt="Royal Medical Hospital Logo" className="h-16 w-auto" />
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-royal">مستشفى رويال الطبي</h1>
              <p className="text-xs text-muted-foreground">Royal Medical Hospital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-lg text-foreground hover:text-royal hover:bg-secondary/50 transition-all duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-royal-gradient hover:opacity-90 shadow-gold">
              <Link to="/appointment">احجز موعدك الآن</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-royal"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-royal/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground hover:text-royal hover:bg-secondary/50 transition-all duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-royal-gradient hover:opacity-90">
                  <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                    احجز موعدك الآن
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
