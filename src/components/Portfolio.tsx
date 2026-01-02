"use client";

const portfolioItems = [
  {
    title: "모던 아파트 리모델링",
    category: "주거 인테리어",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
  },
  {
    title: "감성 카페 인테리어",
    category: "상업 공간",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
  },
  {
    title: "미니멀 오피스 디자인",
    category: "상업 공간",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    title: "럭셔리 펜트하우스",
    category: "주거 인테리어",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    title: "부티크 호텔 로비",
    category: "상업 공간",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&h=600&fit=crop",
  },
  {
    title: "스칸디나비안 주택",
    category: "주거 인테리어",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
  },
];

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">
            프로젝트 갤러리
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            오카시오 디자인이 만들어온 감각적인 공간들을 만나보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#c9a96e] text-sm mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 border-2 border-[#2c2c2c] text-[#2c2c2c] px-8 py-4 text-sm font-medium hover:bg-[#2c2c2c] hover:text-white transition-all duration-300"
          >
            프로젝트 상담하기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
