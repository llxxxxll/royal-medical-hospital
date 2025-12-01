import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";
import receptionImage from "@/assets/reception.png";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${receptionImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-royal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-royal/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-royal animate-pulse" />
            <span className="text-sm font-medium text-royal">رعاية صحية متكاملة</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">مستشفى رويال الطبي</span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="text-royal"
            >
              رعاية ملكية لصحتك
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            رعاية صحية متكاملة في قلب مدينة الزاوية، مع فريق طبي متخصص وأحدث الأجهزة التشخيصية والعلاجية
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-royal-gradient hover:opacity-90 hover:scale-[1.03] shadow-gold text-lg h-14 px-8 transition-all duration-300"
            >
              <Link to="/appointment">
                احجز موعدك الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-royal text-royal hover:bg-royal hover:text-white hover:scale-[1.03] text-lg h-14 px-8 transition-all duration-300"
            >
              <a href="tel:0920505555">
                <Phone className="ml-2 h-5 w-5" />
                اتصل بنا فورًا
              </a>
            </Button>
          </motion.div>

          {/* Contact Numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-royal" />
              <a href="tel:0920505555" className="text-muted-foreground hover:text-royal transition-colors font-medium">
                0920505555
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-royal" />
              <a href="tel:0917085555" className="text-muted-foreground hover:text-royal transition-colors font-medium">
                0917085555
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background">
        <svg
          className="absolute top-0 w-full h-16"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q600,60 1200,0 L1200,60 L0,60 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
