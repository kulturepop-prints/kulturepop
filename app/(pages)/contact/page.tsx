"use client";

import { useState } from "react";
import { useTheme } from "@/lib/theme-context";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Thank you for reaching out! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@kulturepop.com",
      link: "mailto:support@kulturepop.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Art Street, Creative District, CA 90210",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-exo2-blackitalic mb-6 ${
              isDark
                ? "text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]"
                : "text-gray-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
            }`}
          >
            Let&apos;s Connect
          </h1>
          <p
            className={`text-lg md:text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions? Custom requests? We&apos;re here to help bring your
            vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark
                    ? "bg-gray-700 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <info.icon size={28} />
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {info.title}
              </h3>
              <p
                className={`${
                  isDark ? "text-gray-400" : "text-gray-600"
                } text-sm`}
              >
                {info.content}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className={`rounded-2xl p-8 md:p-12 shadow-2xl ${
              isDark ? "bg-gray-800" : "bg-white border border-gray-200"
            }`}
          >
            <h2
              className={`text-2xl md:text-3xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name *
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      isDark
                        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                        : "bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500"
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      isDark
                        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                        : "bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500"
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject *
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    isDark
                      ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                      : "bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500"
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Custom poster request"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  suppressHydrationWarning
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg transition-colors resize-none ${
                    isDark
                      ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                      : "bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500"
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <Button
                suppressHydrationWarning
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                className="w-full flex gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-16 px-4 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        } transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What are your shipping times?",
                a: "We ship within 1-2 business days. Delivery typically takes 3-7 days depending on your location.",
              },
              {
                q: "Do you offer custom poster designs?",
                a: "Yes! Contact us with your idea and we'll work with you to create something unique.",
              },
              {
                q: "What's your return policy?",
                a: "We offer 30-day returns for any reason. Your satisfaction is our priority.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className={`group rounded-lg ${
                  isDark ? "bg-gray-700" : "bg-white"
                } p-6 cursor-pointer`}
              >
                <summary
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  } list-none flex justify-between items-center`}
                >
                  {faq.q}
                  <span className="text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p
                  className={`mt-4 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}