"use client";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/homeoffice-7419338_1280.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in">
            Interior & Facility Maintenance
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fade-in-up">
            공간에<br />
            <span className="text-[#c9a96e]">가치</span>를 더하다
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            감각적인 디자인과 세심한 시공으로<br className="hidden sm:block" />
            당신의 공간을 특별하게 만들어 드립니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button
              onClick={scrollToContact}
              className="bg-[#c9a96e] text-white px-8 py-4 text-sm font-medium hover:bg-[#b8986d] transition-all duration-300 transform hover:scale-105"
            >
              무료 상담 신청
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-[#2c2c2c] transition-all duration-300"
            >
              포트폴리오 보기
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
