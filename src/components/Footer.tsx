export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tight inline-block mb-4">
              <span className="text-white">OCASIO</span>
              <span className="text-[#c9a96e]">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              오카시오 디자인은 감각적이고 실용적인 인테리어 디자인과
              시설유지보수 서비스를 제공합니다. 공간에 가치를 더하는
              전문가와 함께하세요.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400 hover:text-[#c9a96e] transition-colors cursor-pointer">주거 인테리어</span></li>
              <li><span className="text-gray-400 hover:text-[#c9a96e] transition-colors cursor-pointer">상업 공간</span></li>
              <li><span className="text-gray-400 hover:text-[#c9a96e] transition-colors cursor-pointer">시설 유지보수</span></li>
              <li><span className="text-gray-400 hover:text-[#c9a96e] transition-colors cursor-pointer">디자인 컨설팅</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">회사 정보</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>오카시오 디자인</li>
              <li>대표자: 김승완</li>
              <li>사업자번호: 146-25-01782</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 OCASIO DESIGN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
