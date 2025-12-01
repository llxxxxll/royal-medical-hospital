import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scan, XCircle, TestTube, Radio, Activity, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Scan,
      name: "التصوير المقطعي المحوسب (CT Scan)",
      description: "أحدث أجهزة CT Scan متعددة الشرائح لتشخيص دقيق وسريع",
      details: "توفر أجهزة التصوير المقطعي لدينا صورًا عالية الدقة لجميع أجزاء الجسم، مما يساعد في التشخيص المبكر للأمراض والإصابات. تستخدم في فحص الرأس، الصدر، البطن، العمود الفقري، والمفاصل.",
      features: [
        "تصوير عالي الدقة بجرعة إشعاع منخفضة",
        "فحوصات سريعة لا تتجاوز دقائق معدودة",
        "تشخيص الأورام، الكسور، والنزيف الداخلي",
        "نتائج فورية مع قراءة من أخصائيين",
      ],
    },
    {
      icon: XCircle,
      name: "الأشعة السينية (X-Ray)",
      description: "تصوير شعاعي رقمي متطور لجميع أجزاء الجسم",
      details: "نستخدم تقنية الأشعة الرقمية التي توفر صورًا واضحة بإشعاع أقل من الأشعة التقليدية. مناسبة لتشخيص الكسور، أمراض الصدر، والمشاكل العظمية.",
      features: [
        "تقنية رقمية حديثة",
        "إشعاع منخفض وآمن",
        "تشخيص الكسور والخلع",
        "فحص الصدر والجهاز التنفسي",
      ],
    },
    {
      icon: Radio,
      name: "الأشعة التداخلية والقسطرة القلبية",
      description: "قسم متخصص للقسطرة القلبية التشخيصية والعلاجية",
      details: "غرفة قسطرة مجهزة بأحدث الأجهزة لإجراء قسطرة القلب التشخيصية والعلاجية، بالإضافة إلى بعض الإجراءات التداخلية الأخرى. يشرف على القسم فريق طبي متخصص.",
      features: [
        "قسطرة تشخيصية لشرايين القلب",
        "قسطرة علاجية وتوسيع الشرايين",
        "إجراءات آمنة تحت إشراف متخصصين",
        "رعاية ما بعد الإجراء في العناية المركزة",
      ],
    },
    {
      icon: TestTube,
      name: "المختبر الطبي",
      description: "مختبر متكامل لجميع أنواع التحاليل الطبية",
      details: "مختبر طبي مجهز بأحدث الأجهزة الأوتوماتيكية لإجراء مختلف التحاليل بدقة عالية وسرعة في النتائج. يشمل تحاليل الدم، البول، الهرمونات، وعلامات الأورام.",
      features: [
        "تحاليل شاملة للدم والبول",
        "تحاليل الهرمونات والفيتامينات",
        "علامات الأورام والأمراض المعدية",
        "نتائج دقيقة وسريعة",
      ],
    },
    {
      icon: Activity,
      name: "أجهزة المراقبة والعناية المركزة",
      description: "أحدث أجهزة المراقبة الحيوية والعناية المركزة",
      details: "وحدة العناية المركزة مجهزة بأحدث أجهزة المراقبة الحيوية، أجهزة التنفس الصناعي، وأجهزة دعم وظائف الأعضاء الحيوية.",
      features: [
        "مراقبة مستمرة لجميع العلامات الحيوية",
        "أجهزة تنفس صناعي متطورة",
        "أجهزة ديفبريليتر وإنعاش",
        "مضخات الأدوية الذكية",
      ],
    },
    {
      icon: Microscope,
      name: "خدمات تشخيصية إضافية",
      description: "خدمات تشخيصية متنوعة لتشخيص شامل",
      details: "بالإضافة للخدمات الرئيسية، نوفر العديد من الخدمات التشخيصية المساعدة لتقديم تشخيص شامل ودقيق.",
      features: [
        "تخطيط القلب (ECG/EKG)",
        "الموجات فوق الصوتية (Ultrasound)",
        "تخطيط الصدى (Echocardiography)",
        "فحوصات الحساسية",
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
              <span className="text-sm font-medium text-royal">الخدمات التشخيصية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              أحدث التقنيات التشخيصية
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نستخدم أحدث الأجهزة والتقنيات الطبية لضمان دقة التشخيص وسرعة العلاج
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    <div className={isEven ? "" : "lg:col-start-2"}>
                      <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                        <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-3">{service.name}</h2>
                        <p className="text-royal font-medium mb-4">{service.description}</p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.details}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-royal mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                      <div className="bg-marble rounded-3xl p-12 aspect-square flex items-center justify-center">
                        <Icon className="w-32 h-32 text-royal/20" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                أهمية التشخيص المبكر
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                التشخيص المبكر هو مفتاح العلاج الناجح. باستخدام أحدث الأجهزة التشخيصية وفريق من الأخصائيين المهرة، نضمن اكتشاف الأمراض في مراحلها المبكرة، مما يزيد من فرص الشفاء ويقلل من مضاعفات الأمراض. دقة أجهزتنا وسرعة النتائج تساعد الأطباء على اتخاذ القرارات العلاجية الصحيحة في الوقت المناسب.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-royal-gradient rounded-3xl p-12 text-center text-white shadow-gold max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                احجز فحصك التشخيصي اليوم
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                اطمئن على صحتك مع أحدث الأجهزة التشخيصية وفريق طبي متخصص
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

export default Services;
