"use client";

import { useState } from "react";

export default function HomePage() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="relative min-h-screen text-white">

      {/* 🔥 Vídeo Fixo + Parallax + Blur + Overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video 
          src="/videos/bg.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="
            w-full h-full object-cover 
            scale-105 
            brightness-50
            blur-[1px]
            transition-all duration-[2000ms]
          "
        />

        {/* Overlay com cores da paleta */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#9f7e69]/40 via-[#d2bba0]/30 to-[#9f7e69]/50"></div>
      </div>

      {/* 🔥 NAVBAR COM PALETA PERSONALIZADA */}
      <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-[#9f7e69]/50 via-[#d2bba0]/40 to-[#9f7e69]/50 backdrop-blur-2xl border-b border-[#f2efc7]/20 z-20 relative shadow-lg shadow-[#9f7e69]/20">
        
        {/* Logo elegante com brilho */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d2bba0] to-[#f2efc7] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <h1 className="relative text-4xl font-black tracking-wider">
            <span className="bg-gradient-to-r from-[#f2efc7] via-[#f7ffe0] to-[#ffeee2] bg-clip-text text-transparent">
              SIXX
            </span>
            <span className="text-[#ffeee2]">SITE</span>
          </h1>
        </div>

        {/* Botão hamburguer sofisticado */}
        <div 
          onClick={() => setAberto(!aberto)} 
          className="relative group cursor-pointer p-3 bg-gradient-to-br from-[#d2bba0]/30 to-[#f2efc7]/20 rounded-xl border border-[#f2efc7]/40 hover:border-[#f7ffe0]/70 transition-all hover:shadow-lg hover:shadow-[#f2efc7]/40"
        >
          <div className="space-y-2">
            <div className={`w-8 h-0.5 bg-gradient-to-r from-[#f2efc7] to-[#ffeee2] rounded-full transition-all duration-300 ${aberto ? "rotate-45 translate-y-2.5" : ""}`} />
            <div className={`w-8 h-0.5 bg-gradient-to-r from-[#f2efc7] to-[#ffeee2] rounded-full transition-all duration-300 ${aberto ? "opacity-0 scale-0" : ""}`} />
            <div className={`w-8 h-0.5 bg-gradient-to-r from-[#f2efc7] to-[#ffeee2] rounded-full transition-all duration-300 ${aberto ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </div>

        {/* Menu lateral ELEGANTE */}
        <div className={`absolute top-24 right-6 transition-all duration-500 ${aberto ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}>
          <div className="relative">
            {/* Brilho de fundo suave */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d2bba0] via-[#f2efc7] to-[#d2bba0] rounded-3xl blur-xl opacity-30"></div>
            
            {/* Container do menu */}
            <ul className="relative bg-gradient-to-br from-[#9f7e69]/95 via-[#d2bba0]/80 to-[#9f7e69]/95 backdrop-blur-2xl rounded-3xl p-8 border border-[#f2efc7]/30 shadow-2xl min-w-[280px]">
              
              {/* Título do menu */}
              <li className="mb-6 pb-4 border-b border-[#f2efc7]/30">
                <span className="text-xs uppercase tracking-widest text-[#f7ffe0] font-bold">Menu</span>
              </li>

              {/* Items do menu */}
              {[
                { nome: "Home", icon: "🏠" },
                { nome: "Sobre", icon: "📖" },
                { nome: "Loja", icon: "🛒" },
                { nome: "Host", icon: "🚀" },
                { nome: "Contatos", icon: "📱" },
                { nome: "Códigos", icon: "💻" },
                { nome: "Ferramentas", icon: "🛠️" }
              ].map((item, index) => (
                <li key={item.nome} className="mb-2" style={{ animationDelay: `${index * 50}ms` }}>
                  <a 
                    href="#" 
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#d2bba0]/40 hover:to-[#f2efc7]/30 transition-all duration-300 border border-transparent hover:border-[#f2efc7]/50 text-[#ffeee2]"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#f7ffe0] group-hover:to-[#ffeee2] group-hover:bg-clip-text transition-all">
                      {item.nome}
                    </span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#f7ffe0]">
                      →
                    </span>
                  </a>
                </li>
              ))}

              {/* Botão especial */}
              <li className="mt-6 pt-4 border-t border-[#f2efc7]/30">
                <a 
                  href="#" 
                  className="block text-center py-3 px-6 bg-gradient-to-r from-[#d2bba0] to-[#f2efc7] text-[#9f7e69] rounded-xl font-bold hover:shadow-lg hover:shadow-[#f2efc7]/50 transition-all hover:scale-105"
                >
                  ✨ Premium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🎯 CONTAINER PRINCIPAL - COLOQUE SEU CONTEÚDO AQUI */}
      <p>ou</p>
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Container de conteúdo com fundo */}
        <div className="bg-[#9f7e69]/40 backdrop-blur-lg rounded-3xl p-8 border border-[#f2efc7]/20 shadow-2xl">
          
          {/* Hero Section */}
          <section className="text-center mb-16">

          </section>

          {/* Cards de exemplo - SUBSTITUA PELO SEU CONTEÚDO */}
          <section className="grid md:grid-cols-3 gap-6 mb-12">
            
           
          </section>

          {/* Seção de texto - ADICIONE SEU CONTEÚDO AQUI */}
          <section className="prose prose-invert max-w-none">

          </section>

        </div>

        {/* Segundo container (opcional) */}
        <div className="bg-[#9f7e69]/40 backdrop-blur-lg rounded-3xl p-8 border border-[#f2efc7]/20 shadow-2xl mt-8">
          <h3 className="text-3xl font-bold mb-6 text-center text-[#ffeee2]">Mais Conteúdo Aqui</h3>
          <p className="text-[#f7ffe0] text-center">
            Adicione quantas seções precisar! Cada div com essa classe cria um novo container estilizado.
          </p>
        </div>

      </main>

      {/* RODAPÉ MELHORADO */}
      <footer className="relative z-10 text-center p-8 mt-12 border-t border-[#f2efc7]/20 bg-[#9f7e69]/30 backdrop-blur-md">
        <p className="text-[#ffeee2]">Feito com 💛 por <span className="text-[#f7ffe0] font-bold">Sixx.js</span></p>
        <p className="text-[#d2bba0] text-sm mt-2">© 2024 Todos os direitos reservados</p>
      </footer>

    </div>
  );
}