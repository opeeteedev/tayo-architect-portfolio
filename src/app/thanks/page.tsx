import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Received | Tayo Opeyemi",
  description: "Thank you for reaching out. I will get back to you within 24 hours.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] text-[#F5F5F7] px-6">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-8 bg-green-500/20 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-[#F5F5F7] mb-4">
          Message <span className="font-medium text-[#D4AF37]">Received!</span>
        </h1>
        <p className="text-lg md:text-xl text-[#F5F5F7]/70 leading-relaxed mb-10">
          Thank you for reaching out. I will get back to you within 24 hours to discuss your project.
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-4 bg-[#D4AF37] text-[#0A0A0B] font-semibold text-base rounded-full hover:bg-[#D4AF37]/90 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}