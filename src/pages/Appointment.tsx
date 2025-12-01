import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال طلب الحجز بنجاح! سنتواصل معك قريبًا لتأكيد الموعد.");
    setFormData({
      name: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const departments = [
    "الباطنية العامة",
    "الجراحة العامة",
    "طب وجراحة العظام",
    "أمراض القلب والقسطرة",
    "طب الأطفال",
    "النساء والولادة",
    "العناية المركزة",
    "الطوارئ",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-marble py-20 border-b border-royal/20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 border border-royal/20 mb-6">
              <span className="text-sm font-medium text-royal">حجز موعد</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              احجز موعدك الآن
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              املأ النموذج أدناه وسنتواصل معك لتأكيد موعدك
            </p>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-royal/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-royal" />
                      <span>الاسم الكامل</span>
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-royal" />
                      <span>رقم الهاتف</span>
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="09xxxxxxxx"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <Label htmlFor="department" className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-royal" />
                      <span>القسم المطلوب</span>
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      required
                      value={formData.department}
                      onValueChange={(value) => setFormData({ ...formData, department: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="اختر القسم" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Doctor (Optional) */}
                  <div>
                    <Label htmlFor="doctor" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-royal" />
                      <span>اسم الطبيب (اختياري)</span>
                    </Label>
                    <Input
                      id="doctor"
                      type="text"
                      placeholder="إذا كنت تفضل طبيبًا معينًا"
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-royal" />
                        <span>التاريخ المفضل</span>
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-royal" />
                        <span>الوقت المفضل</span>
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <Label htmlFor="notes" className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-royal" />
                      <span>ملاحظات إضافية</span>
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="أي معلومات إضافية تود مشاركتها"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-royal-gradient hover:opacity-90 shadow-gold h-14 text-lg"
                  >
                    إرسال طلب الحجز
                  </Button>

                  {/* Note */}
                  <p className="text-sm text-muted-foreground text-center">
                    سيتم التواصل معك من قسم الاستعلامات لتأكيد موعدك على الرقم الذي أدخلته
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-marble">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                أو اتصل بنا مباشرة
              </h2>
              <p className="text-muted-foreground mb-8">
                يمكنك الاتصال بنا مباشرة على أحد الأرقام التالية للحجز أو الاستفسار
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="border-2 border-royal text-royal hover:bg-royal hover:text-white h-14">
                  <a href="tel:0920505555">
                    <Phone className="ml-2 h-5 w-5" />
                    0920505555
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-royal text-royal hover:bg-royal hover:text-white h-14">
                  <a href="tel:0917085555">
                    <Phone className="ml-2 h-5 w-5" />
                    0917085555
                  </a>
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

export default Appointment;
