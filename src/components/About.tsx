"use client";

const stats = [
  { number: "500+", label: "완료 프로젝트" },
  { number: "98%", label: "고객 만족도" },
  { number: "15+", label: "전문 디자이너" },
  { number: "10+", label: "경력 년수" },
];

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">
              공간의 가치를<br />새롭게 정의합니다
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              오카시오 디자인은 단순한 인테리어를 넘어, 공간에 새로운 가치를 부여합니다.
              고객의 라이프스타일과 비전을 깊이 이해하고, 감각적이면서도 실용적인
              디자인 솔루션을 제공합니다.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              숙련된 디자이너와 시공 전문가로 구성된 팀이 기획부터 완공까지
              모든 과정을 책임지며, 시설 유지보수 서비스를 통해 공간의 가치를
              오래도록 유지할 수 있도록 도와드립니다.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-[#c9a96e]">{stat.number}</p>
                  <p className="text-sm text-[#6b7280]">{stat.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-[#2c2c2c] text-white px-8 py-4 text-sm font-medium hover:bg-[#c9a96e] transition-colors"
            >
              상담 예약하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop"
                alt="오카시오 디자인 작업"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#c9a96e] hidden lg:block" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-[#2c2c2c] hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
