import React, { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      {/* Navigation */}
      <nav className="bg-white shadow px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-[#00AEEF]">Visi-On</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-[#00AEEF]">
              기능
            </a>
            <a href="#faq" className="hover:text-[#00AEEF]">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#00AEEF]">
              문의하기
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded text-[#00AEEF] hover:bg-[#D9F4FD]">
              로그인
            </button>
            <button className="px-4 py-2 bg-[#00AEEF] text-white rounded hover:bg-[#0095CF]">
              회원가입
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              집을 <span className="text-[#00AEEF]">언제 어디서나</span>
              <br />
              안전하게 지켜보세요
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Visi-On으로 실시간 모니터링, 움직임 감지 알림, <br />
              클라우드 저장 기능을 통해 소중한 공간을 안전하게 보호하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0095CF] font-medium">
                무료 체험 시작하기
              </button>
              <button className="px-8 py-3 border border-[#00AEEF] text-[#00AEEF] rounded-lg hover:bg-[#D9F4FD] font-medium">
                자세히 알아보기
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#D9F4FD] rounded-lg"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <video
                  className="w-full rounded shadow-sm h-64 object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/videos/main.mp4" type="video/mp4" />
                  동영상을 지원하지 않는 브라우저입니다.
                </video>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">현관 카메라</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      실시간
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">마지막 움직임: 5분 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-[#D9F4FD]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">핵심 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["📹", "🔔", "☁️"].map((icon, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {icon === "📹" && "실시간 모니터링"}
                  {icon === "🔔" && "움직임 감지 알림"}
                  {icon === "☁️" && "클라우드 저장"}
                </h3>
                <p className="text-gray-600">
                  {icon === "📹" &&
                    "언제 어디서나 스마트폰으로 집안을 실시간으로 확인할 수 있습니다."}
                  {icon === "🔔" &&
                    "의심스러운 움직임이 감지되면 즉시 알림을 받을 수 있습니다."}
                  {icon === "☁️" &&
                    "영상 기록이 자동으로 클라우드에 저장되어 언제든지 확인할 수 있습니다."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 방법 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">이용 방법</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {["01", "02", "03"].map((step, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#D9F4FD] text-[#00AEEF] flex items-center justify-center font-bold text-xl mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === "01" && "기기 설치"}
                  {step === "02" && "앱 연결"}
                  {step === "03" && "실시간 모니터링"}
                </h3>
                <p className="text-gray-600">
                  {step === "01" && "간편한 설치로 5분만에 홈캠을 연결하세요."}
                  {step === "02" &&
                    "Visi-On 앱을 다운로드하고 기기를 등록하세요."}
                  {step === "03" && "언제 어디서나 실시간으로 확인하세요."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-[#D9F4FD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            {["설치는 어렵지 않나요?", "인터넷이 끊기면 어떻게 되나요?"].map(
              (q, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">{q}</h3>
                  <p className="text-gray-600">
                    {index === 0
                      ? "아니요, Visi-On은 누구나 쉽게 설치할 수 있도록 설계되었습니다."
                      : "로컬에 저장되며 인터넷 연결이 복구되면 클라우드로 자동 업로드됩니다."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
