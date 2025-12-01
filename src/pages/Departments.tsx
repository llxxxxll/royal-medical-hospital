import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Stethoscope, Baby, Users, Activity, Bone, Siren, Eye, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Departments = () => {
  const departments = [
    {
      icon: Stethoscope,
      name: "الباطنية العامة",
      description: "قسم الباطنية يختص بتشخيص وعلاج الأمراض الباطنية والمزمنة مثل السكري، الضغط، أمراض الكبد والكلى",
      features: [
        "تشخيص وعلاج الأمراض المزمنة",
        "متابعة مرضى السكري والضغط",
        "علاج أمراض الجهاز الهضمي",
        "رعاية صحية شاملة للبالغين",
      ],
    },
    {
      icon: Activity,
      name: "الجراحة العامة",
      description: "قسم جراحة متطور يقدم عمليات جراحية متنوعة بأحدث التقنيات الجراحية",
      features: [
        "جراحات البطن والأمعاء",
        "جراحة الغدة الدرقية",
        "جراحات الفتق",
        "جراحة المناظير",
      ],
    },
    {
      icon: Bone,
      name: "طب وجراحة العظام",
      description: "علاج الكسور، إصابات المفاصل، والأمراض العظمية بأحدث الطرق",
      features: [
        "علاج الكسور والخلع",
        "جراحة المفاصل",
        "علاج إصابات الرياضيين",
        "جراحة العمود الفقري",
      ],
    },
    {
      icon: Heart,
      name: "أمراض القلب والقسطرة القلبية",
      description: "قسم متخصص في تشخيص وعلاج أمراض القلب مع قسطرة قلبية متطورة",
      features: [
        "تخطيط القلب والإيكو",
        "قسطرة تشخيصية وعلاجية",
        "علاج أمراض الشرايين",
        "متابعة مرضى القلب",
      ],
    },
    {
      icon: Baby,
      name: "طب الأطفال",
      description: "رعاية صحية شاملة للأطفال من حديثي الولادة حتى سن المراهقة",
      features: [
        "فحص الأطفال الدوري",
        "التطعيمات",
        "علاج الأمراض المعدية",
        "متابعة النمو والتطور",
      ],
    },
    {
      icon: Users,
      name: "النساء والولادة",
      description: "رعاية صحة المرأة خلال فترة الحمل والولادة وما بعدها",
      features: [
        "متابعة الحمل",
        "الولادة الطبيعية والقيصرية",
        "علاج أمراض النساء",
        "رعاية ما بعد الولادة",
      ],
    },
    {
      icon: Activity,
      name: "العناية المركزة للكبار",
      description: "وحدة عناية مركزة مجهزة بأحدث الأجهزة للحالات الحرجة",
      features: [
        "مراقبة مستمرة 24/7",
        "أجهزة تنفس صناعي",
        "رعاية ما بعد العمليات",
        "فريق تمريض متخصص",
      ],
    },
    {
      icon: Baby,
      name: "العناية المركزة لحديثي الولادة",
      description: "رعاية متخصصة للأطفال الخدج والحالات الحرجة لحديثي الولادة",
      features: [
        "حضانات متطورة",
        "أجهزة تنفس للأطفال",
        "مراقبة حيوية دقيقة",
        "فريق طبي متخصص",
      ],
    },
    {
      icon: Siren,
      name: "قسم الطوارئ",
      description: "خدمة طوارئ متاحة على مدار الساعة لاستقبال جميع الحالات الطارئة",
      features: [
        "متاح 24/7",
        "فريق طبي مناوب",
        "استجابة سريعة",
        "إسعافات أولية متقدمة",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-marble py-20 border-b border-royal/20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
              <span className="text-sm font-medium text-royal">الأقسام الطبية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              أقسامنا الطبية المتخصصة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نقدم رعاية طبية متكاملة من خلال أقسام متخصصة مجهزة بأحدث المعدات الطبية
            </p>
          </div>
        </section>

        {/* Departments List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10 hover:shadow-gold hover:border-royal/30 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-3">{dept.name}</h3>
                    <p className="text-muted-foreground mb-4">{dept.description}</p>
                    <ul className="space-y-2">
                      {dept.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-royal mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="bg-royal-gradient rounded-3xl p-12 text-center text-white shadow-gold max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                هل تحتاج لاستشارة طبية؟
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                احجز موعدك الآن مع أحد أقسامنا المتخصصة
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-royal hover:bg-white/90">
                <Link to="/appointment">احجز موعدك الآن</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
