import { Clock, MapPin, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InfoBar = () => {
  const features = [
    {
      icon: Clock,
      title: "خدمة طوارئ 24/7",
      description: "نحن في خدمتكم على مدار الساعة",
    },
    {
      icon: MapPin,
      title: "موقع متميز",
      description: "الزاوية – الطريق الساحلي قرب إشارة القرضابية",
    },
    {
      icon: Activity,
      title: "خدمات متقدمة",
      description: "عمليات متطورة وعناية مركزة",
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-8 -mt-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
