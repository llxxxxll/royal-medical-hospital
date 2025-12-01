import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserCircle, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "د. أحمد محمد الزوي",
      specialty: "استشاري الباطنية العامة",
      experience: "15 سنة خبرة",
      description: "متخصص في علاج الأمراض المزمنة والباطنية مع خبرة واسعة في المستشفيات الليبية والأوروبية",
    },
    {
      name: "د. فاطمة علي السنوسي",
      specialty: "استشارية النساء والولادة",
      experience: "12 سنة خبرة",
      description: "خبيرة في متابعة الحمل والولادة وجراحات النساء، مع اهتمام خاص بصحة الأم والطفل",
    },
    {
      name: "د. خالد إبراهيم القاضي",
      specialty: "استشاري القلب والقسطرة",
      experience: "18 سنة خبرة",
      description: "متخصص في أمراض القلب والقسطرة القلبية التشخيصية والعلاجية مع خبرة دولية",
    },
    {
      name: "د. سارة محمود الطرابلسي",
      specialty: "أخصائية طب الأطفال",
      experience: "10 سنوات خبرة",
      description: "متخصصة في رعاية الأطفال وحديثي الولادة مع اهتمام خاص بالتطعيمات والنمو",
    },
    {
      name: "د. محمد سالم العبيدي",
      specialty: "استشاري جراحة العظام",
      experience: "16 سنة خبرة",
      description: "خبير في جراحة العظام والمفاصل وعلاج الكسور والإصابات الرياضية",
    },
    {
      name: "د. ليلى حسن المصراتي",
      specialty: "أخصائية الأشعة التشخيصية",
      experience: "11 سنة خبرة",
      description: "متخصصة في قراءة وتفسير جميع أنواع الأشعة التشخيصية بدقة عالية",
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
              <span className="text-sm font-medium text-royal">الأطباء</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              فريقنا الطبي المتميز
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نخبة من الأطباء الاستشاريين والأخصائيين ذوي الخبرة والكفاءة العالية
            </p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10 hover:shadow-gold hover:border-royal/30 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Doctor Avatar */}
                  <div className="w-24 h-24 rounded-full bg-royal-gradient flex items-center justify-center mx-auto mb-6">
                    <UserCircle className="w-16 h-16 text-white" />
                  </div>

                  {/* Doctor Info */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-xl text-foreground mb-2">{doctor.name}</h3>
                    <p className="text-royal font-medium mb-1">{doctor.specialty}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                    {doctor.description}
                  </p>

                  {/* Schedule Placeholder */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground border-t border-royal/10 pt-4">
                    <Calendar className="w-4 h-4 text-royal" />
                    <span>مواعيد العيادة: اتصل للاستفسار</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visiting Doctors Note */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 shadow-elegant border border-royal/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                أطباء زائرون من خارج ليبيا
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                بالإضافة لفريقنا الدائم، نستضيف بشكل دوري أطباء استشاريين زائرين من تونس وبلدان أخرى في مختلف التخصصات الطبية. للاستفسار عن مواعيد الأطباء الزائرين والحجز معهم، يرجى الاتصال بنا.
              </p>
              <Button asChild size="lg" className="bg-royal-gradient hover:opacity-90 shadow-gold">
                <Link to="/contact">اتصل للاستفسار</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-royal-gradient rounded-3xl p-12 text-center text-white shadow-gold max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                احجز موعدك مع أحد أطبائنا
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                نحن هنا لخدمتك، احجز موعدك الآن أو اتصل بنا للاستفسار
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-royal hover:bg-white/90">
                  <Link to="/appointment">احجز موعد</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-royal">
                  <a href="tel:0920505555">اتصل بنا</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
