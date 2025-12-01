import { Shield, Award, Users, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "الجودة والسلامة",
      description: "معايير عالمية في الرعاية الصحية",
    },
    {
      icon: Award,
      title: "فريق متخصص",
      description: "أطباء استشاريون وأخصائيون",
    },
    {
      icon: Users,
      title: "عناية شاملة",
      description: "رعاية متكاملة لجميع الأعمار",
    },
    {
      icon: Heart,
      title: "تعاطف وإنسانية",
      description: "نهتم براحتكم وصحتكم",
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
              <span className="text-sm font-medium text-royal">من نحن</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              عن مستشفى رويال الطبي
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                مستشفى رويال الطبي هو مستشفى خاص حديث في مدينة الزاوية، يقدّم رعاية صحية متكاملة بمعايير عالية من الجودة والسلامة. يضم المستشفى فريقًا من الأطباء الاستشاريين والأخصائيين، وطاقم تمريض مؤهل، إضافة إلى تجهيزات طبية متطورة.
              </p>
              <p>
                نحن ملتزمون بتقديم أفضل مستوى من الرعاية الطبية باستخدام أحدث ما توصلت إليه التكنولوجيا الطبية، مثل أجهزة الأشعة المقطعية CT، جهاز X-Ray، وقسم قسطرة قلبية، بما يضمن دقة التشخيص وسرعة التدخل العلاجي.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-royal" />
                <span className="text-foreground font-medium">عناية مركزة متطورة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-royal" />
                <span className="text-foreground font-medium">غرف إقامة مريحة وحديثة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-royal" />
                <span className="text-foreground font-medium">تنسيق مع أطباء زائرين من خارج ليبيا</span>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-royal-gradient hover:opacity-90 hover:scale-[1.03] shadow-gold transition-all duration-300">
                <Link to="/about">اعرف المزيد عنا</Link>
              </Button>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-royal-gradient flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
