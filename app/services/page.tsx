"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceCard from "@/components/services-card";
// import FloatingBubblesHero from "@/components/floating-bubbles-hero";
import BackgroundPaths from "@/components/ui/background-paths";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "تحليل شامل ودقيق لمكونات الجسم باستخدام أحدث الأجهزة",
      description: "تحليل شامل ودقيق لمكونات الجسم باستخدام أحدث الأجهزة",
      features: [
        "تحليل InBody",
        "قياس نسبة الدهون",
        "تحديد الكتلة العضلية",
        "تقييم معدل الأيض",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "تقييم شامل للحالة الجسمانية وتحديد الوزن المثالي",
      description: "تقييم شامل للحالة الجسمانية وتحديد الوزن المثالي",
      features: [
        "حساب مؤشر كتلة الجسم",
        "تحديد الوزن المثالي",
        "قياس محيط الخصر",
        "تقييم التوزيع الدهني",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "خطط غذائية مدروسة لخسارة الوزن بطريقة صحية وآمنة",
      description: "خطط غذائية مدروسة لخسارة الوزن بطريقة صحية وآمنة",
      features: [
        "حمية منخفضة السعرات",
        "نظام الصيام المتقطع",
        "حمية الكيتو",
        "متابعة أسبوعية",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "برامج غذائية متخصصة لزيادة الوزن والكتلة العضلية",
      description: "برامج غذائية متخصصة لزيادة الوزن والكتلة العضلية",
      features: [
        "حمية عالية السعرات",
        "تقوية العضلات",
        "مكملات غذائية",
        "متابعة التقدم",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "أنظمة غذائية مخصصة للحالات الخاصة والأهداف المحددة",
      description: "أنظمة غذائية مخصصة للحالات الخاصة والأهداف المحددة",
      features: [
        "حمية البحر المتوسط",
        "النظام النباتي",
        "حمية خالية من الجلوتين",
        "أنظمة رياضية",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "برامج غذائية متخصصة لمرضى السكري من النوع الأول والثاني",
      description: "برامج غذائية متخصصة لمرضى السكري من النوع الأول والثاني",
      features: [
        "تنظيم السكر",
        "حساب الكربوهيدرات",
        "وجبات متوازنة",
        "متابعة مستمرة",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "أنظمة غذائية لتنظيم ضغط الدم ومستوى الكوليسترول",
      description: "أنظمة غذائية لتنظيم ضغط الدم ومستوى الكوليسترول",
      features: [
        "حمية قليلة الصوديوم",
        "أطعمة مفيدة للقلب",
        "تقليل الدهون المشبعة",
        "زيادة الألياف",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "علاج مشاكل الجهاز الهضمي من خلال التغذية المتخصصة",
      description: "علاج مشاكل الجهاز الهضمي من خلال التغذية المتخصصة",
      features: [
        "علاج القولون العصبي",
        "حمية لقرحة المعدة",
        "علاج الارتجاع",
        "تحسين الهضم",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "برامج غذائية متخصصة للأمهات في فترة الحمل والرضاعة",
      description: "برامج غذائية متخصصة للأمهات في فترة الحمل والرضاعة",
      features: [
        "فيتامينات الحمل",
        "تغذية الجنين",
        "زيادة الوزن الصحية",
        "تغذية المرضعة",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "أنظمة غذائية مخصصة للأطفال في مراحل النمو المختلفة",
      description: "أنظمة غذائية مخصصة للأطفال في مراحل النمو المختلفة",
      features: [
        "نمو صحي",
        "علاج سوء التغذية",
        "زيادة الوزن للأطفال",
        "تغذية المراهقين",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "برامج غذائية تناسب احتياجات كبار السن الخاصة",
      description: "برامج غذائية تناسب احتياجات كبار السن الخاصة",
      features: [
        "تقوية العظام",
        "تحسين الذاكرة",
        "الوقاية من الأمراض",
        "سهولة البلع",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "أنظمة غذائية متخصصة لتحسين الأداء الرياضي",
      description: "أنظمة غذائية متخصصة لتحسين الأداء الرياضي",
      features: [
        "زيادة الطاقة",
        "بناء العضلات",
        "تسريع الاستشفاء",
        "مكملات رياضية",
      ],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "جلسات المتابعة",
      description: "متابعة دورية لضمان تحقيق الأهداف المرجوة",
      features: ["متابعة أسبوعية", "تعديل الخطة", "قياس التقدم", "حل المشاكل"],
    },
    {
      imageUrl: "/img3.jpg?height=80&width=80",
      title: "ورش تعليمية لنشر الوعي الغذائي والصحي",
      description: "ورش تعليمية لنشر الوعي الغذائي والصحي",
      features: [
        "ورش تعليمية",
        "محاضرات توعوية",
        "مواد تثقيفية",
        "نصائح يومية",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Floating Bubbles */}
      <BackgroundPaths>
        <div className="h-[70vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
              {/* Left Side - Text Content */}
              <motion.div
                className="text-center lg:text-right space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Main Title */}
                <motion.h1
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  خدماتنا
                </motion.h1>

                {/* Small Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-lg mx-auto lg:mx-0"
                >
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                    عيادة متخصصة في التغذية العلاجية تقدم حلولاً صحية مدروسة لكل
                    فرد
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Subtle background glow */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl blur-2xl" />

                  {/* Main image container with modern design */}
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Image */}
                    <img
                      src="/img4.jpg"
                      alt="عيادة التغذية"
                      className="w-full h-80 md:h-96 lg:h-[28rem] rounded-2xl object-cover shadow-lg"
                      crossOrigin="anonymous"
                    />

                    {/* Decorative overlay elements */}
                    <div className="absolute top-8 right-8 w-4 h-4 bg-white/60 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/40 rounded-full shadow-lg"></div>

                    {/* Modern geometric accent */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-2 border-white/30 rounded-lg rotate-12"></div>
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-white/20 rounded-full"></div>
                  </motion.div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full shadow-lg"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full shadow-lg"
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </BackgroundPaths>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          {/* Section 1 */}
          <div className="mb-16 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🧪 أولاً: التقييم والتحليل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(0, 2).map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🥗 ثانياً: الخطط الغذائية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(2, 5).map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              💊 ثالثاً: التغذية العلاجية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(5, 8).map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              👨‍👩‍👧‍👦 رابعاً: الفئات الخاصة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(8, 12).map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🗓 خامساً: المتابعة والتوعية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(12, 14).map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            هل تحتاج لاستشارة غذائية متخصصة؟
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            احجز موعدك الآن واحصل على خطة غذائية مخصصة تناسب حالتك وأهدافك
            الصحية
          </p>
          <a
            href="/contact"
            style={{ backgroundColor: "#5a9e9d" }}
            className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors duration-300 inline-block"
          >
            احجز موعد الآن
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
