"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, CheckCircle, XCircle } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  otherTopic?: string;
  message: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    topic: "",
    otherTopic: "",
    message: "",
  });

  const router = useRouter();
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      topic: e.target.value,
      otherTopic: e.target.value === "Other" ? "" : undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const payload =
        formData.topic === "Other"
          ? formData
          : { ...formData, otherTopic: undefined };

      const response = await fetch("/api/proxy/Contact/SendContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({
          name: "",
          email: "",
          topic: "",
          otherTopic: "",
          message: "",
        });
      } else {
        setFormState("error");
        console.error("Failed to send form data:", response.statusText);
      }
    } catch (error) {
      setFormState("error");
      console.error("Submission error:", error);
    }
  };

  useEffect(() => {
    if (formState === "success") {
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formState, router]);

  const isFormDisabled = formState === "submitting" || formState === "success";

  return (
    <main className="min-h-screen bg-[#151515] text-gray-200 font-sans relative transition-colors duration-500">
      <nav className="absolute top-8 left-6 md:left-12 ">
        <motion.button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors cursor-pointer"
          aria-label="Go back to the previous page"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          <span className="hidden md:inline">Home</span>
        </motion.button>
      </nav>
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
        <div className="flex flex-col text-center w-full mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Please use the form below to contact me about a variety of topics.
          </motion.p>
        </div>
        <motion.div
          className="lg:w-2/3 md:w-2/3 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isFormDisabled}
                  className="w-full bg-[#111111] bg-opacity-50 rounded border border-gray-700/50 focus:border-emerald-500 focus:bg-transparent focus:ring-2 focus:ring-emerald-400 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isFormDisabled}
                  className="w-full bg-[#111111] bg-opacity-50 rounded border border-gray-700/50 focus:border-emerald-500 focus:bg-transparent focus:ring-2 focus:ring-emerald-400 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <label className="block leading-7 text-sm text-gray-400 mb-2">
                Topic
              </label>
              <div className="flex flex-wrap items-center -mx-2">
                {["Project", "Software Engineering", "Other"].map(
                  (topic, index) => (
                    <div key={index} className="px-2">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="topic"
                          value={topic}
                          checked={formData.topic === topic}
                          onChange={handleTopicChange}
                          disabled={isFormDisabled}
                          className="form-radio h-5 w-5 text-emerald-600 border-gray-700/50 bg-[#111111] checked:bg-emerald-600 focus:ring-emerald-400"
                        />
                        <span className="ml-2 text-gray-400">{topic}</span>
                      </label>
                    </div>
                  ),
                )}
              </div>
            </div>
            <AnimatePresence>
              {formData.topic === "Other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-full overflow-hidden"
                >
                  <div className="relative">
                    <label
                      htmlFor="otherTopic"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Please specify your topic
                    </label>
                    <input
                      type="text"
                      id="otherTopic"
                      name="otherTopic"
                      value={formData.otherTopic}
                      onChange={handleChange}
                      required
                      disabled={isFormDisabled}
                      className="w-full bg-[#111111] bg-opacity-50 rounded border border-gray-700/50 focus:border-emerald-500 focus:bg-transparent focus:ring-2 focus:ring-emerald-400 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isFormDisabled}
                  rows={6}
                  className="w-full bg-[#111111] bg-opacity-50 rounded border border-gray-700/50 focus:border-emerald-500 focus:bg-transparent focus:ring-2 focus:ring-emerald-400 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full text-center">
              <button
                type="submit"
                disabled={
                  isFormDisabled ||
                  !formData.topic ||
                  (formData.topic === "Other" && !formData.otherTopic)
                }
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              >
                {formState === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : formState === "success" ? (
                  <>
                    Message Sent! <CheckCircle size={20} />
                  </>
                ) : formState === "error" ? (
                  <>
                    Error <XCircle size={20} />
                  </>
                ) : (
                  <>
                    Send Message <SendHorizonal size={20} />
                  </>
                )}
              </button>
            </div>
            {formState === "error" && (
              <div className="p-2 w-full text-center text-red-400 mt-4">
                <p>
                  There was an error sending your message. Please try again or
                  contact me directly.
                </p>
              </div>
            )}
          </form>
        </motion.div>
      </section>
    </main>
  );
}
