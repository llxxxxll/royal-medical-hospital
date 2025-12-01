import { Scan, XCircle, TestTube, Radio, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      icon: Scan,
      name: "التصوير المقطعي CT",
      description: "أحدث أجهزة CT Scan لتشخيص دقيق وسريع",
      features: ["تصوير عالي الدقة", "نتائج فورية", "فحوصات شاملة"],
    },
    {
      icon: XCircle,
      name: "الأشعة السينية X-Ray",
      description: "تصوير شعاعي متطور لجميع أجزاء الجسم",
      features: ["تقنية رقمية", "إشعاع منخفض", "تشخيص سريع"],
    },
    {
      icon: Radio,
      name: "القسطرة القلبية",
      description: "أشعة تداخلية وقسطرة قلبية تشخيصية وعلاجية",
      features: ["غرفة قسطرة متطورة", "فريق متخصص", "رعاية فائقة"],
    },
    {
      icon: TestTube,
      name: "المختبر الطبي",
      description: "تحاليل طبية شاملة بأحدث الأجهزة",
      features: ["نتائج دقيقة", "سرعة في الإنجاز", "جودة عالية"],
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
            <span className="text-sm font-medium text-royal">الخدمات التشخيصية</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أحدث التقنيات التشخيصية
          </h2>
          <p className="text-muted-foreground text-lg">
            نستخدم أحدث الأجهزة والتقنيات الطبية لضمان دقة التشخيص وسرعة العلاج
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-card rounded-3xl p-8 shadow-elegant border border-royal/10 hover:shadow-gold transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-royal-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-royal transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-royal" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-royal-gradient rounded-3xl p-8 md:p-12 text-center text-white shadow-gold"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            التشخيص المبكر ينقذ الحياة
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            احجز فحصك الطبي اليوم واطمئن على صحتك مع فريقنا الطبي المتخصص وأحدث الأجهزة التشخيصية
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-royal hover:bg-white/90 hover:scale-[1.03] transition-all duration-300">
            <Link to="/services">
              تعرف على جميع خدماتنا
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
