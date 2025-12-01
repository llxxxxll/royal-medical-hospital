import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-marble border-t border-royal/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Royal Medical Hospital" className="h-16 w-auto" />
            </Link>
            <h3 className="font-bold text-royal mb-2">مستشفى رويال الطبي</h3>
            <p className="text-sm text-muted-foreground mb-4">
              رعاية صحية متكاملة بمعايير عالمية في قلب مدينة الزاوية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-royal transition-colors">
                  عن المستشفى
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-sm text-muted-foreground hover:text-royal transition-colors">
                  الأقسام الطبية
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-sm text-muted-foreground hover:text-royal transition-colors">
                  الأطباء
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-royal transition-colors">
                  الخدمات التشخيصية
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-sm text-muted-foreground hover:text-royal transition-colors">
                  حجز موعد
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-royal flex-shrink-0 mt-0.5" />
                <span>الزاوية – الطريق الساحلي بالقرب من الإشارة الضوئية القرضابية</span>
              </li>
              <li>
                <a href="tel:0920505555" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-royal transition-colors">
                  <Phone className="w-5 h-5 text-royal" />
                  <span>0920505555</span>
                </a>
              </li>
              <li>
                <a href="tel:0917085555" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-royal transition-colors">
                  <Phone className="w-5 h-5 text-royal" />
                  <span>0917085555</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-royal" />
                <span>info@royalmedical.ly</span>
              </li>
            </ul>
          </div>

          {/* Working Hours & Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">أوقات العمل</h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="w-5 h-5 text-royal flex-shrink-0 mt-0.5" />
              <div>
                <p>خدمة طوارئ 24 ساعة</p>
                <p className="text-xs mt-1">نحن في خدمتكم على مدار الساعة</p>
              </div>
            </div>
            
            <h4 className="font-bold text-foreground mb-3 mt-6">تابعنا</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center text-royal hover:bg-royal hover:text-white transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center text-royal hover:bg-royal hover:text-white transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-royal/20 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} مستشفى رويال الطبي – الزاوية، ليبيا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
