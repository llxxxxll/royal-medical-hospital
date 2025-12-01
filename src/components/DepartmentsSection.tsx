import { Heart, Stethoscope, Baby, Users, Activity, Bone, Siren, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DepartmentsSection = () => {
  const departments = [
    {
      icon: Stethoscope,
      name: "الباطنية العامة",
      description: "تشخيص وعلاج الأمراض الباطنية والمزمنة",
    },
    {
      icon: Activity,
      name: "الجراحة العامة",
      description: "عمليات جراحية متقدمة بأحدث التقنيات",
    },
    {
      icon: Bone,
      name: "العظام والمفاصل",
      description: "طب وجراحة العظام والعلاج الطبيعي",
    },
    {
      icon: Heart,
      name: "القلب والقسطرة",
      description: "أمراض القلب والقسطرة القلبية التشخيصية والعلاجية",
    },
    {
      icon: Baby,
      name: "طب الأطفال",
      description: "رعاية صحية شاملة للأطفال وحديثي الولادة",
    },
    {
      icon: Users,
      name: "النساء والولادة",
      description: "رعاية صحة المرأة والحمل والولادة",
    },
    {
      icon: Activity,
      name: "العناية المركزة",
      description: "عناية فائقة للحالات الحرجة للكبار والأطفال",
    },
    {
      icon: Siren,
      name: "الطوارئ",
      description: "خدمة طوارئ متاحة على مدار الساعة",
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
            <span className="text-sm font-medium text-royal">الأقسام الطبية</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أقسامنا الطبية المتخصصة
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم رعاية طبية متكاملة من خلال أقسام متخصصة مجهزة بأحدث المعدات الطبية
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-card rounded-2xl p-6 shadow-elegant border border-royal/10 hover:shadow-gold hover:border-royal/30 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-royal-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-royal transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-2 border-royal text-royal hover:bg-royal hover:text-white hover:scale-[1.03] transition-all duration-300">
            <Link to="/departments">استكشف جميع الأقسام</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
