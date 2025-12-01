import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-marble py-20 border-b border-royal/20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
              <span className="text-sm font-medium text-royal">من نحن</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              عن مستشفى رويال الطبي
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              رعاية صحية متكاملة بمعايير عالمية في قلب مدينة الزاوية
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون الخيار الأول للرعاية الصحية المتكاملة في مدينة الزاوية والمناطق المحيطة، من خلال تقديم خدمات طبية متميزة تجمع بين الجودة العالية والتعاطف الإنساني.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم رعاية طبية آمنة، متقدمة، وإنسانية لكل مريض، باستخدام أحدث ما توصلت إليه التكنولوجيا الطبية، مع التركيز على راحة المريض وسرعة الشفاء.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">قيمنا</h2>
              <p className="text-muted-foreground text-lg">المبادئ التي نلتزم بها في خدمة مرضانا</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "الأمانة",
                  description: "نحافظ على ثقة مرضانا في كل ما نقدمه",
                },
                {
                  icon: Award,
                  title: "الجودة",
                  description: "نلتزم بأعلى معايير الرعاية الصحية",
                },
                {
                  icon: Heart,
                  title: "التعاطف",
                  description: "نتعامل مع كل مريض بحب وإنسانية",
                },
                {
                  icon: Target,
                  title: "التطوير المستمر",
                  description: "نسعى دائمًا لتحسين خدماتنا",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10 text-center hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                البنية التحتية
              </h2>
              
              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-royal mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">غرف إقامة مريحة:</span> غرف فردية وثنائية مجهزة بأحدث وسائل الراحة
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-royal mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">غرف عمليات متطورة:</span> مجهزة بأحدث التقنيات الجراحية
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-royal mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">وحدة العناية المركزة:</span> للكبار والأطفال وحديثي الولادة
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-royal mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">قسم الطوارئ:</span> متاح على مدار الساعة مع فريق طبي متخصص
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-royal mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">أجهزة تشخيصية متقدمة:</span> CT Scan، X-Ray، مختبر طبي، وقسطرة قلبية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
