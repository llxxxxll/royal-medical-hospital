import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const articles = [
    {
      title: "أهمية الفحص الدوري للقلب",
      category: "صحة القلب",
      date: "2025-11-25",
      author: "د. خالد القاضي",
      excerpt: "الفحص الدوري للقلب يساعد في الكشف المبكر عن أمراض القلب والشرايين. تعرف على أهم الفحوصات الموصى بها وكم مرة يجب إجراؤها.",
      image: "bg-gradient-to-br from-royal/20 to-royal/5",
    },
    {
      title: "التطعيمات الأساسية للأطفال",
      category: "صحة الأطفال",
      date: "2025-11-20",
      author: "د. سارة الطرابلسي",
      excerpt: "دليل شامل للتطعيمات الإلزامية والموصى بها للأطفال من الولادة حتى سن المدرسة، وأهمية الالتزام بجدول التطعيمات.",
      image: "bg-gradient-to-br from-royal/20 to-royal/5",
    },
    {
      title: "نصائح للوقاية من مرض السكري",
      category: "الأمراض المزمنة",
      date: "2025-11-15",
      author: "د. أحمد الزوي",
      excerpt: "السكري من الأمراض المزمنة الشائعة. إليك أهم النصائح الغذائية ونمط الحياة الصحي للوقاية من السكري والسيطرة عليه.",
      image: "bg-gradient-to-br from-royal/20 to-royal/5",
    },
    {
      title: "الرعاية الصحية أثناء الحمل",
      category: "صحة المرأة",
      date: "2025-11-10",
      author: "د. فاطمة السنوسي",
      excerpt: "كل ما تحتاجين معرفته عن المتابعة الطبية خلال فترة الحمل، الفحوصات الضرورية، والتغذية الصحية للحامل.",
      image: "bg-gradient-to-br from-royal/20 to-royal/5",
    },
    {
      title: "علاج آلام المفاصل والعظام",
      category: "جراحة العظام",
      date: "2025-11-05",
      author: "د. محمد العبيدي",
      excerpt: "تعرف على أحدث طرق علاج آلام المفاصل والعظام، من العلاج الطبيعي إلى التدخلات الجراحية البسيطة.",
      image: "bg-gradient-to-br from-royal/20 to-royal/5",
    },
    {
      title: "أهمية الفحص المبكر للسرطان",
      category: "الوقاية",
      date: "2025-11-01",
      author: "فريق التوعية الطبية",
      excerpt: "الكشف المبكر عن السرطان ينقذ الحياة. تعرف على أنواع الفحوصات الدورية الموصى بها حسب العمر والجنس.",
      image: "bg-gradient-to-br from-royal/20 to-royal/5",
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
              <span className="text-sm font-medium text-royal">الأخبار والتوعية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              أخبار ونصائح صحية
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              آخر الأخبار الطبية ومقالات التوعية الصحية من فريقنا الطبي المتخصص
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="bg-card rounded-3xl overflow-hidden shadow-elegant border border-royal/10 hover:shadow-gold hover:border-royal/30 transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Image Placeholder */}
                  <div className={`h-48 ${article.image} flex items-center justify-center`}>
                    <div className="text-4xl">📰</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-medium mb-3">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-royal transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{article.author}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <Button
                      variant="ghost"
                      className="group/btn w-full justify-between text-royal hover:text-royal hover:bg-royal/10"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowLeft className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital News Section */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                أخبار المستشفى
              </h2>
              <p className="text-muted-foreground text-lg">
                آخر الإنجازات والفعاليات في مستشفى رويال الطبي
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  زيارة أطباء استشاريين من تونس
                </h3>
                <p className="text-sm text-muted-foreground mb-2">ديسمبر 2025</p>
                <p className="text-muted-foreground">
                  نستضيف مجموعة من الأطباء الاستشاريين من تونس في تخصصات الجراحة العامة وجراحة العظام. للحجز والاستفسار اتصل بنا.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  عمليات ناجحة في قسم القسطرة
                </h3>
                <p className="text-sm text-muted-foreground mb-2">نوفمبر 2025</p>
                <p className="text-muted-foreground">
                  فريقنا الطبي أجرى عددًا من عمليات القسطرة القلبية الناجحة، مما يعكس التزامنا بتقديم أفضل مستوى من الرعاية الطبية.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
