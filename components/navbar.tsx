"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "الخدمات" },
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/aboutus", label: "من نحن" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div style={{ backgroundColor: "#5a9e9d" }} className="text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>771794448</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>الدائري - الجامعة الجديدة - برج الرشيد</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>مواعيد العمل: السبت - الخميس 9:00 ص - 6:00 م</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(to bottom right, #5a9e9d, #9fbd47)",
              }}
            >
              <span className="text-white font-bold text-xl">ع</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                عيادة التغذية العلاجية
              </h1>
              <p className="text-sm text-gray-600">
                أخصائية التغذية سلمى محمد الحبيشي
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#5a9e9d] transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{ backgroundColor: "#5a9e9d" }}
              className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-colors duration-300"
            >
              احجز موعد
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#5a9e9d] transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                style={{ backgroundColor: "#5a9e9d" }}
                className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-colors duration-300 text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                احجز موعد
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
