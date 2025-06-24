"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServiceCard from "@/components/services-card";
import {
  Activity,
  Apple,
  Heart,
  Users,
  Target,
  Eye,
  Award,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Activity,
      title: "التقييم والتحليل",
      description: "تحليل شامل لمكونات الجسم وتقييم الحالة الغذائية",
      features: [
        "تحليل مكونات الجسم",
        "تقييم الوزن والطول",
        "قياس نسبة الدهون",
      ],
    },
    {
      icon: Apple,
      title: "الخطط الغذائية",
      description: "خطط غذائية مخصصة حسب الهدف والحالة الصحية",
      features: ["نظام خسارة الوزن", "نظام لزيادة الوزن", "حميات خاصة"],
    },
    {
      icon: Heart,
      title: "التغذية العلاجية",
      description: "علاج الأمراض المزمنة من خلال التغذية المتخصصة",
      features: ["السكري والضغط", "أمراض الجهاز الهضمي", "الكوليسترول"],
    },
    {
      icon: Users,
      title: "الفئات الخاصة",
      description: "برامج غذائية مخصصة للفئات ذات الاحتياجات الخاصة",
      features: ["الحوامل والمرضعات", "الأطفال", "كبار السن", "الرياضيين"],
    },
  ];

  const stats = [
    { number: "500+", label: "حالة ناجحة", icon: Users },
    { number: "95%", label: "نسبة النجاح", icon: TrendingUp },
    { number: "5+", label: "سنوات خبرة", icon: Award },
    { number: "24/7", label: "دعم متواصل", icon: Heart },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-teal-100/50 rounded-full blur-2xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`scroll-animate text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 opacity-0 translate-y-8`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-glow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 animate-count-up">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400/30 rounded-full animate-bounce-slow" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-teal-400/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-cyan-400/50 rounded-full animate-ping-slow" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 translate-x-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow" />
                <img
                  src="1.jpg"
                  alt="عن العيادة"
                  className="relative w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg animate-float">
                  <p className="font-bold text-lg">+5 سنوات</p>
                  <p className="text-sm opacity-90">من الخبرة</p>
                </div>
              </div>
            </div>

            <div className="scroll-animate opacity-0 translate-x-8 animation-delay-300">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-shimmer">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>من نحن</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-400">
                عيادة متخصصة في
                <span className="text-gradient-animated block">
                  {" "}
                  التغذية العلاجية
                </span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg animate-fade-in-up animation-delay-600">
                نحن عيادة التغذية العلاجية والحميات، نقدم خدمات واستشارات متخصصة
                في مجال التغذية العلاجية والحميات الغذائية. نتميز بنهج علمي مخصص
                لكل حالة، مع متابعة دقيقة ومستمرة من قبل أخصائية تغذية معتمدة.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">نهج مخصص</h4>
                    <p className="text-sm text-gray-600">
                      خطة مبنية على تقييم دقيق
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-1000">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">خبرة معتمدة</h4>
                    <p className="text-sm text-gray-600">أخصائية تغذية مؤهلة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%2310b981" fillOpacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] animate-pulse-slow' />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Eye className="w-4 h-4 animate-pulse" />
              <span>رسالتنا ورؤيتنا</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
              نسعى لتقديم أفضل الخدمات
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-400">
              في مجال التغذية العلاجية والحميات الغذائية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "الرسالة",
                description:
                  "نقدم في عيادتنا خططًا غذائية مخصصة ومدروسة علمياً لتحسين الحالة الصحية والوصول للوزن المثالي.",
                gradient: "from-emerald-500 to-emerald-600",
                bgGradient: "from-emerald-100 to-emerald-200",
              },
              {
                icon: Eye,
                title: "الرؤية",
                description:
                  "نطمح لأن نكون الخيار الأول في مجال التغذية العلاجية والحميات الغذائية في المنطقة.",
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-100 to-teal-200",
              },
              {
                icon: Award,
                title: "الأهداف",
                description: null,
                gradient: "from-cyan-500 to-cyan-600",
                bgGradient: "from-cyan-100 to-cyan-200",
                goals: [
                  "تحسين الحالة الصحية",
                  "نشر الوعي الغذائي",
                  "رعاية فعالة ومتخصصة",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`scroll-animate bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 hover:scale-105 opacity-0 translate-y-8`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.bgGradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}
                  >
                    <item.icon
                      className={`w-8 h-8 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl animate-shimmer" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>

                {item.description ? (
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                ) : (
                  <ul className="text-gray-600 space-y-3 text-right">
                    {item.goals?.map((goal, goalIndex) => (
                      <li
                        key={goalIndex}
                        className="flex items-center gap-3 animate-fade-in-up"
                        style={{
                          animationDelay: `${1000 + goalIndex * 200}ms`,
                        }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full animate-pulse`}
                        />
                        {goal}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-4 h-4 animate-pulse" />
              <span>خدماتنا المتخصصة</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
              خدمات شاملة في
              <span className="text-gradient-animated block">
                {" "}
                التغذية العلاجية
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-400">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التغذية العلاجية والحميات
              الغذائية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`scroll-animate opacity-0 translate-y-8`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Info */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-6 h-6 bg-emerald-400/20 rounded-full animate-bounce-slow" />
          <div className="absolute bottom-20 right-20 w-8 h-8 bg-teal-400/20 rotate-45 animate-spin-slow" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 scroll-animate opacity-0 translate-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up animation-delay-200">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Shield className="w-4 h-4 animate-pulse" />
                  <span>أخصائية معتمدة</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-400">
                  أخصائية التغذية
                </h2>
                <h3 className="text-2xl font-semibold mb-8 text-gradient-animated animate-fade-in-up animation-delay-600">
                  سلمى محمد الحبيشي
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-800">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      خريجة جامعة العلوم والتكنولوجيا - 2019
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-1000">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      أخصائية تغذية حاصلة على درجة البكالوريوس
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg animate-fade-in-up animation-delay-1200">
                  أخصائية تغذية حاصلة على درجة البكالوريوس في التغذية العلاجية
                  من جامعة العلوم والتكنولوجيا. تتمتع بخبرة واسعة في مجال
                  التغذية العلاجية والحميات الغذائية، مع التركيز على تقديم خطط
                  غذائية مخصصة ومدروسة علمياً لكل حالة.
                </p>
              </div>

              <div className="relative animate-fade-in-up animation-delay-400">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow" />

                  <div className="relative">
                    <img
                      src="/1.jpg"
                      alt="أخصائية التغذية سلمى محمد الحبيشي"
                      className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Experience badge */}
                    <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg animate-float hover:scale-105 transition-all duration-300">
                      <p className="font-bold text-xl">+5 سنوات</p>
                      <p className="text-sm opacity-90">في التغذية العلاجية</p>
                    </div>

                    {/* Success rate badge */}
                    <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-gray-100 animate-bounce-slow hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">
                          نسبة نجاح 95%
                        </span>
                      </div>
                    </div>

                    {/* Certification badge */}
                    <div className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-gray-100 animate-float-delayed hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-600" />
                        <div>
                          <div className="font-bold text-xs text-gray-900">
                            معتمدة
                          </div>
                          <div className="text-xs text-gray-600">رسمياً</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
