import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Create properly formatted mailto URL
      const subject = encodeURIComponent(
        formData.subject || "Contact Form Submission"
      );

      const body = encodeURIComponent(
        `Hi Mardan,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      );

      const mailtoUrl = `mailto:mahmut.m@northeastern.edu?subject=${subject}&body=${body}`;

      // Check if mailto URL is too long (some email clients have limits)
      if (mailtoUrl.length > 2000) {
        throw new Error("Message is too long. Please shorten your message.");
      }

      // Open email client
      window.location.href = mailtoUrl;

      // Show success message and reset form
      setSubmitStatus("success");
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="kunaiCursor flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center min-h-screen py-20">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="narutoTextName absolute top-24 tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-center"
      >
        Contact
      </motion.h3>

      {/* <h3 className="narutoTextName absolute top-24 uppercase tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Contact
      </h3> */}

      <div className="flex flex-col mt-10 space-y-4 md:space-y-5 lg:space-y-6 2xl:space-y-10">
        <h4 className="ninjaText text-sm sm:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center text-[#fff]">
          I got the skills to pay the bills.{" "}
          <span className="decoration-[#e31e24] underline text-[#ff4500] hover:text-[#e31e24] transition-colors duration-300">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-1 md:space-y-3 xl:space-y-5">
          <div className="flex items-center space-x-2 md:space-x-5 justify-center group">
            <EnvelopeIcon className="text-[#fa5000] h-7 w-7 animate-pulse group-hover:text-[#e31e24] transition-colors duration-300" />
            <p className="ninjaText text-sm sm:text-lg md:text-2xl lg:text-2xl tracking-[2px] text-[#fff] group-hover:text-[#ff4500] transition-colors duration-300">
              mahmut.m@northeastern.edu
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center group">
            <MapPinIcon className="text-[#fa5000] h-7 w-7 animate-pulse group-hover:text-[#e31e24] transition-colors duration-300" />
            <p className="ninjaText text-sm sm:text-lg md:text-2xl lg:text-2xl tracking-[2px] text-[#fff] group-hover:text-[#ff4500] transition-colors duration-300">
              Boston, MA (Open to Relocation)
            </p>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-lg text-sm">
            Email client opened! Your message is ready to send.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm">
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-64 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
            <div className="w-64 md:w-auto">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="ninjaText text-[#fff] placeholder-[#fff]/60 kunaiCursor bg-[#000]/20 border border-[#ff4500]/30 rounded-lg px-4 py-3 focus:border-[#e31e24] focus:outline-none focus:ring-2 focus:ring-[#ff4500]/20 hover:border-[#ff4500] transition-all duration-300 w-full"
                type="text"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="w-64 md:w-auto">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                className="ninjaText text-[#fff] placeholder-[#fff]/60 kunaiCursor bg-[#000]/20 border border-[#ff4500]/30 rounded-lg px-4 py-3 focus:border-[#e31e24] focus:outline-none focus:ring-2 focus:ring-[#ff4500]/20 hover:border-[#ff4500] transition-all duration-300 w-full"
                type="email"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <input
            {...register("subject")}
            placeholder="Subject (optional)"
            className="ninjaText text-[#fff] placeholder-[#fff]/60 kunaiCursor bg-[#000]/20 border border-[#ff4500]/30 rounded-lg px-4 py-3 focus:border-[#e31e24] focus:outline-none focus:ring-2 focus:ring-[#ff4500]/20 hover:border-[#ff4500] transition-all duration-300"
            type="text"
          />

          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              rows={4}
              className="ninjaText text-[#fff] placeholder-[#fff]/60 kunaiCursor bg-[#000]/20 border border-[#ff4500]/30 rounded-lg px-4 py-3 focus:border-[#e31e24] focus:outline-none focus:ring-2 focus:ring-[#ff4500]/20 hover:border-[#ff4500] transition-all duration-300 resize-none w-full"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#ff4500] to-[#e31e24] narutoText2 rasenganCursor tracking-[4px] py-3 md:py-5 px-10 rounded-lg text-[#fa5000] font-bold text-lg md:text-lg lg:text-3xl xl:text-4xl hover:from-[#e31e24] hover:to-[#ff4500] hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#ff4500]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}
