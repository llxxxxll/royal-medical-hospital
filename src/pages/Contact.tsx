import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-marble py-20 border-b border-royal/20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
              <span className="text-sm font-medium text-royal">اتصل بنا</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              نحن هنا لخدمتك
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              تواصل معنا في أي وقت، نسعد بالرد على استفساراتك
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">معلومات التواصل</h2>
                  <p className="text-muted-foreground mb-8">
                    يمكنك التواصل معنا عبر أي من الطرق التالية، ونحن سعداء دائمًا بخدمتك
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <div className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">العنوان</h3>
                        <p className="text-muted-foreground">
                          الزاوية – الطريق الساحلي بالقرب من الإشارة الضوئية القرضابية
                        </p>
                        <Button
                          asChild
                          variant="link"
                          className="text-royal hover:text-royal/80 px-0 mt-2"
                        >
                          <a
                            href="https://maps.app.goo.gl/XDHV4vsspettFg63A"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            فتح في خرائط Google
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">أرقام الهواتف</h3>
                        <div className="space-y-1">
                          <a
                            href="tel:0920505555"
                            className="block text-muted-foreground hover:text-royal transition-colors"
                          >
                            0920505555
                          </a>
                          <a
                            href="tel:0917085555"
                            className="block text-muted-foreground hover:text-royal transition-colors"
                          >
                            0917085555
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">البريد الإلكتروني</h3>
                        <a
                          href="mailto:info@royalmedical.ly"
                          className="text-muted-foreground hover:text-royal transition-colors"
                        >
                          info@royalmedical.ly
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">أوقات العمل</h3>
                        <p className="text-muted-foreground">خدمة طوارئ 24 ساعة</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          نحن في خدمتكم على مدار الساعة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card rounded-3xl p-8 shadow-elegant border border-royal/10">
                  <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">نوع الاستفسار *</Label>
                      <Select
                        required
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="اختر نوع الاستفسار" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">حجز موعد</SelectItem>
                          <SelectItem value="inquiry">استفسار عام</SelectItem>
                          <SelectItem value="complaint">شكوى أو اقتراح</SelectItem>
                          <SelectItem value="insurance">استفسار عن التأمين</SelectItem>
                          <SelectItem value="other">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="mt-2 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-royal-gradient hover:opacity-90 shadow-gold"
                    >
                      <MessageSquare className="ml-2 h-5 w-5" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">موقعنا على الخريطة</h2>
              <div className="bg-card rounded-3xl overflow-hidden shadow-elegant border border-royal/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.7945837363746!2d12.722838!3d32.752778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ1JzEwLjAiTiAxMsKwNDMnMjIuMiJF!5e0!3m2!1sen!2sly!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Medical Hospital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">أسئلة شائعة</h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "كيف يمكنني حجز موعد؟",
                    a: "يمكنك حجز موعد عبر نموذج الحجز الإلكتروني، أو الاتصال بنا مباشرة على 0920505555 أو 0917085555",
                  },
                  {
                    q: "هل يتعامل المستشفى مع شركات التأمين؟",
                    a: "نعم، نتعامل مع معظم شركات التأمين المحلية. يرجى الاتصال بنا للاستفسار عن شركة التأمين الخاصة بك.",
                  },
                  {
                    q: "هل توجد خدمة طوارئ على مدار الساعة؟",
                    a: "نعم، قسم الطوارئ لدينا متاح 24 ساعة يوميًا طوال أيام الأسبوع.",
                  },
                  {
                    q: "متى يتم استضافة الأطباء الزائرين؟",
                    a: "نستضيف أطباء زائرين بشكل دوري. يرجى متابعة صفحتنا على فيسبوك أو الاتصال بنا للاستفسار عن المواعيد القادمة.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-elegant border border-royal/10">
                    <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
