"use client";

import { FaCloud, FaGithub, FaWhatsapp, FaBars, FaHome, FaCog, FaEnvelope, FaMemory, FaTerminal } from "react-icons/fa";
import { BsShield } from "react-icons/bs";
import { FaSquareXTwitter, FaNpm, FaDiscord } from "react-icons/fa6";
import { FiServer, FiX, FiCheck, FiArrowRight, FiHardDrive } from "react-icons/fi";
import { CiCloud, CiGlobe, CiCalendar } from "react-icons/ci";
import { GoDependabot, GoArrowUp } from "react-icons/go";
import { LuZap, LuRocket } from "react-icons/lu";
import { RiCodeView, RiCpuLine } from "react-icons/ri";
import { MdGpsFixed, MdPayments } from "react-icons/md";
import { GrMemory } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { BiShield } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Page() {
  const [ativo, setAtivo] = useState("bots");
  const [open, setOpen] = useState(false);
  const [ativoo, setAtivoo] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 60) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "servicos", label: "Serviços", icon: FaCog },
    { id: "cloud", label: "Cloud", icon: FaCloud },
    { id: "contato", label: "Contato", icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Ytsixx", label: "GitHub" },
    { icon: FaWhatsapp, url: "https://wa.me/258851907875", label: "WhatsApp" },
    { icon: FaSquareXTwitter, url: "https://twitter.com/seu-usuario", label: "Twitter" },
    { icon: FaDiscord, url: "https://discord.gg/seu-servidor", label: "Discord" },
    { icon: FaNpm, url: "https://npmjs.com/~seu-usuario", label: "NPM" },
  ];

  const botsPricing = [
    { title: "Iniciante", price: "8.000", ram: "1GB", cpu: "50%", storage: "3GB" },
    { title: "Profissional", price: "15.000", ram: "2GB", cpu: "100%", storage: "5GB" },
    { title: "Enterprise", price: "25.000", ram: "4GB", cpu: "150%", storage: "10GB" }
  ];

  const whyUsFeatures = [
    { 
      id: 1, 
      icon: SlEnergy, 
      title: "Configuração instantânea", 
      desc: "Serviço ativo automático em segundos após o pagamento confirmado.",
      colorActive: "text-yellow-400",
      colorInactive: "text-purple-600"
    },
    { 
      id: 2, 
      icon: BiShield, 
      title: "Anti DDoS", 
      desc: "Sistema de proteção avançado que protege seus servidores contra ataques 24 horas por dia, 7 dias por semana.",
      colorActive: "text-green-400",
      colorInactive: "text-green-600"
    },
    { 
      id: 3, 
      icon: IoTimeOutline, 
      title: "99,9% de tempo de atividade", 
      desc: "Uma infraestrutura estável garante que seus serviços estejam sempre online sem parar.",
      colorActive: "text-blue-400",
      colorInactive: "text-blue-600"
    },
    { 
      id: 4, 
      icon: LuRocket, 
      title: "Escalável", 
      desc: "Atualize os pacotes a qualquer momento de acordo com as necessidades crescentes.",
      colorActive: "text-red-400",
      colorInactive: "text-red-600"
    }
  ];

  const techSpecs = [
    { icon: RiCodeView, title: "Multilíngue", desc: "Suporta NodeJS, Python, Java, Go e outras linguagens.", bgColor: "bg-purple-500" },
    { icon: FaTerminal, title: "Acesso root completo", desc: "Controle total do servidor com acesso root completo.", bgColor: "bg-green-500" },
    { icon: FiServer, title: "Virtualização KVM", desc: "Tecnologia de virtualização KVM para desempenho ideal.", bgColor: "bg-blue-500" },
    { icon: CiGlobe, title: "IPv4 e IPv6", desc: "Equipado com IPv4 e IPv6 para máxima conectividade.", bgColor: "bg-yellow-400" }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f5f3ee]">

      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8E4DC 1px, transparent 1px),
            linear-gradient(to bottom, #E8E4DC 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* HEADER BACKGROUND */}
      <div
        className={`fixed top-0 left-0 w-full z-40 h-16 bg-yellow-400 border-b-2 border-black shadow-[0_4px_0_0_#000] transition-all duration-300 ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      />

      {/* HEADER CONTENT */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3">
        <div className="flex space-x-4 text-2xl items-center">
          <FaCloud className="border-2 border-black text-4xl p-2 shadow-[4px_4px_0_0_#000] bg-white" />
          <p className="uppercase font-semibold text-black">Cloud</p>
        </div>

        <FaBars
          onClick={() => setOpen(true)}
          className="border-2 border-black text-4xl p-2 shadow-[4px_4px_0_0_#000] bg-white cursor-pointer hover:bg-gray-100 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000] transition-all"
        />
      </div>

      <div className="h-20" />

      {/* SIDEBAR MENU */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white border-l-2 border-black shadow-[-8px_0_0_0_#000] z-50 transition-transform duration-300 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <FiX
            onClick={() => setOpen(false)}
            className="border-2 border-black text-3xl p-2 shadow-[4px_4px_0_0_#000] cursor-pointer bg-white hover:bg-red-100 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000] transition-all"
          />
        </div>

        {/* MENU ITEMS */}
        <ul className="px-6 space-y-4 text-lg uppercase">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            
            return (
              <li
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`flex items-center gap-3 border-2 border-black p-3 shadow-[4px_4px_0_0_#000] cursor-pointer transition-all active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000] ${isActive ? "bg-yellow-400 font-bold" : "bg-white hover:bg-gray-50"}`}
              >
                <Icon className="text-2xl p-1 border-2 border-black bg-white" />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        <div className="mx-6 my-6 border-t-2 border-black" />

        {/* PROFILE CARD */}
        <div className="px-6 pb-6">
          <div className="border-2 border-black bg-white shadow-[6px_6px_0_0_#000] p-4">
            <img
              src="https://files.catbox.moe/nhswjh.jpg"
              alt="Profile"
              className="w-full border-2 border-black shadow-[4px_4px_0_0_#000] mb-4"
              draggable={false}
            />

            <h3 className="text-xl font-bold text-black mb-2">SixxHxRx.js</h3>
            
            <div className="mb-4 space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <CiCalendar />
                <span><strong>Idade:</strong> 21 anos</span>
              </p>
              <p className="flex items-center gap-2">
                <MdGpsFixed />
                <span><strong>Localização:</strong> Moçambique</span>
              </p>
              <p className="flex items-start gap-2 pt-2">
                <RiCodeView />
                <span>Apaixonado por JavaScript e tudo que termina com <strong>.js</strong> || <strong>.mjs</strong> || <strong>.cjs</strong></span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black bg-white p-2 shadow-[3px_3px_0_0_#000] hover:bg-yellow-400 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_0_#000] transition-all cursor-pointer"
                    title={social.label}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-8 space-y-12">

        {/* HERO SECTION */}
        <div className="flex items-center justify-center min-h-[30vh] pt-8 uppercase">
          <p className="text-center text-lg font-semibold border-2 border-black p-2.5 bg-white text-black shadow-[6px_6px_0_0_#000] animate-[bounce_2s_infinite]">
            亗 Cloud Moçambique #1 亗
          </p>
        </div>

        <div 
          className="text-6xl font-bold text-center text-black"
          style={{ 
            textShadow: `2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff` 
          }}
        >
          Cloud
        </div>

        <div className="bg-black text-white px-4 py-6 uppercase font-semibold text-center cursor-pointer select-none -skew-y-2 shadow-[8px_8px_0_0_#a855f7] translate-x-[-2px] translate-y-[2px] transition-all duration-150 ease-out hover:translate-x-[-1px] hover:translate-y-[1px] hover:shadow-[6px_6px_0_0_#a855f7] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[3px_3px_0_0_#a855f7] active:scale-[0.98]">
          provedor seguro
        </div>

        {/* INFO BOX */}
        <div className="border-4 border-black bg-white text-black p-4 shadow-[6px_6px_0_0_#000]">
          <p className="inline-block border-2 border-black bg-red-500 text-white px-2 py-1 mr-1">
            Hospedagem de bots
          </p> 
          ou 
          <p className="inline-block border-2 border-black bg-blue-500 text-white px-2 py-1 mx-1">
            Servidor VPS
          </p>
          ? Temos tudo! Implante em segundos com desempenho máximo e preços acessíveis.
        </div>

        {/* QUICK ACTION BUTTONS */}
        <div className="space-y-4">
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#bots" className="bg-purple-700 text-white border-2 border-black px-4 py-2 flex items-center justify-center gap-2 cursor-pointer select-none shadow-[4px_4px_0_0_#000] transition-all duration-100 font-semibold text-sm whitespace-nowrap hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#000]">
              <GoDependabot className="text-base" /> Hospedagem de bots
            </a>

            <a href="#vps" className="bg-blue-600 text-white border-2 border-black px-4 py-2 flex items-center justify-center gap-2 cursor-pointer select-none shadow-[4px_4px_0_0_#000] transition-all duration-100 font-semibold text-sm whitespace-nowrap hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#000]">
              <FiServer className="text-base" /> Servidor VPS
            </a>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#protecao" className="bg-green-500 text-black border-2 border-black px-4 py-2 flex items-center justify-center gap-2 cursor-pointer select-none shadow-[4px_4px_0_0_#000] transition-all duration-100 font-semibold text-sm whitespace-nowrap hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#000]">
              <BsShield className="text-base" /> DDoS Protected
            </a>

            <a href="#configuracao" className="bg-yellow-400 text-black border-2 border-black px-4 py-2 flex items-center justify-center gap-2 cursor-pointer select-none shadow-[4px_4px_0_0_#000] transition-all duration-100 font-semibold text-sm whitespace-nowrap hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#000]">
              <LuZap className="text-base" /> Configuração instantânea
            </a>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#pedido" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 text-black border-2 border-black px-8 py-3 font-bold uppercase text-sm cursor-pointer select-none shadow-[8px_8px_0_0_#000] transition-all duration-150 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#000] active:bg-purple-600 active:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_#000] active:scale-[0.98]">
            PEDIDO DE GÁS AGORA <FiArrowRight className="text-lg" />
          </a>

          <a href="#recursos" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#f5c542] text-black border-2 border-black px-8 py-3 font-bold uppercase text-sm cursor-pointer select-none shadow-[8px_8px_0_0_#000] transition-all duration-150 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#000] active:bg-white active:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_#000] active:scale-[0.98]">
            VERIFIQUE PRIMEIRO OS RECURSOS
          </a>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-yellow-400 border-2 border-black p-6 shadow-[8px_8px_0_0_#000] transition-all duration-200 hover:shadow-[12px_12px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] mx-auto mb-4">
              <LuZap className="text-3xl text-black" />
            </div>
            <h3 className="text-black font-bold text-lg text-center uppercase mb-2">Configuração Instantânea</h3>
            <p className="text-black text-sm text-center">Pague diretamente e ative esse segundo!</p>
          </div>

          <div className="bg-purple-500 border-2 border-black p-6 shadow-[8px_8px_0_0_#000] transition-all duration-200 hover:shadow-[12px_12px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] mx-auto mb-4">
              <BsShield className="text-3xl text-black" />
            </div>
            <h3 className="text-black font-bold text-lg text-center uppercase mb-2">Proteção DDoS</h3>
            <p className="text-black text-sm text-center">Segurança máxima contra ataques!</p>
          </div>

          <div className="bg-green-400 border-2 border-black p-6 shadow-[8px_8px_0_0_#000] transition-all duration-200 hover:shadow-[12px_12px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] mx-auto mb-4">
              <FiServer className="text-3xl text-black" />
            </div>
            <h3 className="text-black font-bold text-lg text-center uppercase mb-2">Servidores Rápidos</h3>
            <p className="text-black text-sm text-center">Performance de alta velocidade!</p>
          </div>
        </div>

        {/* PRICING HEADER */}
        <div className="flex flex-col gap-4">
          <div className="bg-white text-black border-2 border-black shadow-[6px_6px_0_0_#000] px-6 py-4 uppercase font-bold text-center">
            SELECIONE O PACOTE
          </div>
          <div className="bg-white text-black border-2 border-black shadow-[6px_6px_0_0_#000] px-6 py-4 text-center text-sm">
            Bot de hospedagem ou VPS? Temos tudo. Escolha o certo!
          </div>
        </div>

        {/* PRICING TABS */}
        <div className="w-full max-w-6xl mx-auto space-y-6 px-4">
          <div className="flex gap-4 justify-center">
            <button onClick={() => setAtivo("bots")} className={`flex items-center justify-center gap-2 border-2 border-black px-8 py-3 uppercase font-semibold text-sm transition-all duration-200 shadow-[4px_4px_0_0_#000] ${ativo === "bots" ? "bg-purple-600 text-white translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0_0_#000]" : "bg-white text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000]"}`}>
              <FiServer /> Hospedagem de Bots
            </button>

            <button onClick={() => setAtivo("vps")} className={`flex items-center justify-center gap-2 border-2 border-black px-8 py-3 uppercase font-semibold text-sm transition-all duration-200 shadow-[4px_4px_0_0_#000] ${ativo === "vps" ? "bg-blue-600 text-white translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0_0_#000]" : "bg-white text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000]"}`}>
              <FiHardDrive /> Servidor VPS
            </button>
          </div>

          {/* BOTS PRICING CARDS */}
          {ativo === "bots" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animate-duration-300">
              {botsPricing.map((plan, idx) => (
                <div key={idx} className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
                  <div className={`${idx === 0 ? "bg-purple-600" : idx === 1 ? "bg-purple-700" : "bg-purple-800"} text-white p-4 border-b-2 border-black`}>
                    <h3 className="text-xl font-bold uppercase text-center">{plan.title}</h3>
                    <p className="text-center text-2xl font-bold mt-2">Mt {plan.price}/mês</p>
                  </div>

                  <div className="p-4">
                    <div className="flex gap-2">
                      <div className="flex items-center justify-center gap-2 bg-purple-600 text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] flex-1 text-sm">
                        <FaMemory />
                        <span className="font-semibold">{plan.ram}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 bg-green-600 text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] flex-1 text-sm">
                        <RiCpuLine />
                        <span className="font-semibold">{plan.cpu}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 bg-pink-500 text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] flex-1 text-sm">
                        <GrMemory />
                        <span className="font-semibold">{plan.storage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-green-600 flex-shrink-0" />
                      <span>Largura de banda ilimitada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-green-600 flex-shrink-0" />
                      <span>Proteção DDoS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-green-600 flex-shrink-0" />
                      <span>Painel Pterodactyl</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-green-600 flex-shrink-0" />
                      <span>Configuração instantânea</span>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button className={`w-full flex items-center justify-center gap-2 ${idx === 0 ? "bg-purple-600" : idx === 1 ? "bg-purple-700" : "bg-purple-800"} text-white border-2 border-black py-3 font-bold uppercase text-sm shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] transition-all duration-150`}>
                      <MdPayments className="text-xl" />
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VPS PRICING */}
          {ativo === "vps" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animate-duration-300">
              <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
                <div className="bg-blue-600 text-white p-4 border-b-2 border-black">
                  <h3 className="text-xl font-bold uppercase text-center">VPS Básico</h3>
                  <p className="text-center text-2xl font-bold mt-2">Mt 20.000/mês</p>
                </div>

                <div className="p-4">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center gap-2 bg-blue-600 text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] flex-1 text-sm">
                      <FaMemory />
                      <span className="font-semibold">2GB</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-green-600 text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] flex-1 text-sm">
                      <RiCpuLine />
                      <span className="font-semibold">1 vCPU</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-pink-500 text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] flex-1 text-sm">
   
<GrMemory />
                      <span className="font-semibold">20GB</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600 flex-shrink-0" />
                    <span>Acesso root completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600 flex-shrink-0" />
                    <span>1TB de transferência</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600 flex-shrink-0" />
                    <span>Proteção DDoS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600 flex-shrink-0" />
                    <span>Deploy instantâneo</span>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white border-2 border-black py-3 font-bold uppercase text-sm shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] transition-all duration-150">
                    <MdPayments className="text-xl" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* WHY US SECTION */}
        <div className="space-y-6">
          <div className="inline-block bg-purple-600 text-white font-bold text-lg px-6 py-3 border-2 border-black shadow-[4px_4px_0_0_#000] uppercase tracking-wide">
            PORQUÊ NÓS?
          </div>

          <div className="bg-white text-black border-2 border-black shadow-[4px_4px_0_0_#000] px-6 py-4 text-base leading-relaxed max-w-2xl">
            Infraestrutura premium para hospedagem de bots e VPS com desempenho máximo.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {whyUsFeatures.map((feature) => {
              const Icon = feature.icon;
              const isActive = ativoo === feature.id;
              
              return (
                <div
                  key={feature.id}
                  onClick={() => setAtivoo(isActive ? null : feature.id)}
                  className={`border-2 border-black p-6 cursor-pointer transition-all duration-200 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] ${isActive ? "bg-black text-white" : "bg-white text-black"}`}
                >
                  <Icon className={`text-4xl mb-3 ${isActive ? feature.colorActive : feature.colorInactive}`} />
                  <p className="font-bold text-lg mb-2 uppercase">{feature.title}</p>
                  <p className="text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TECHNICAL SPECS SECTION */}
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="bg-yellow-400 text-black border-2 border-black shadow-[6px_6px_0_0_#000] px-6 py-3 uppercase font-bold tracking-wide inline-block">
            Especificações Técnicas
          </div>

          <div className="bg-white text-black border-2 border-black shadow-[6px_6px_0_0_#000] px-6 py-4 text-base leading-relaxed">
            Poder em suas mãos. Suporte tecnológico mais recente para desenvolvedores modernos.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {techSpecs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div key={idx} className="bg-white border-2 border-black p-6 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
                <div className={`inline-flex ${spec.bgColor} border-2 border-black p-3 shadow-[4px_4px_0_0_#000] mb-4`}>
                  <Icon className={`text-3xl ${spec.bgColor === "bg-yellow-400" ? "text-black" : "text-white"}`} />
                </div>
                <p className="font-bold text-lg mb-2 uppercase text-black">{spec.title}</p>
                <p className="text-sm text-gray-700">{spec.desc}</p>
              </div>
            );
          })}
        </div>

        {/* DIVIDER */}
        <hr className="border-t-2 border-black" />

        {/* CTA WHATSAPP SECTION */}
        <section className="py-16 px-4">
          <div className="bg-yellow-400 text-black border-2 border-black shadow-[8px_8px_0_0_#000] p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Pronto para o ar?</h2>
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Escolha hospedagem de bots ou VPS agora! Configuração instantânea, desempenho máximo, preço acessível.
            </p>

            <a
              href="https://wa.me/258851907875?text=Olá,%20quero%20saber%20mais%20sobre%20hospedagem!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 font-bold uppercase text-sm md:text-base shadow-[6px_6px_0_0_#000] transition-all duration-200 hover:bg-black hover:text-yellow-400 hover:shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:bg-black active:text-yellow-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_#000]"
            >
              <FaWhatsapp className="text-xl md:text-2xl" />
              <span>Entre em contato com o WhatsApp</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white -mx-6 mt-16">
          <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* COLUMN 1 - ABOUT */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CiCloud className="text-4xl text-yellow-400" />
                  <p className="text-xl font-bold uppercase">Nuvem Athars</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Provedor de nuvem Moçambique. Fornecendo hospedagem de bots e servidores VPS com infraestrutura premium para todas as suas necessidades.
                </p>
              </div>

              {/* COLUMN 2 - MENU */}
              <div>
                <p className="text-lg font-bold uppercase mb-4">Menu</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#pacotes" className="hover:text-yellow-400 transition-colors">
                      Pacotes de hospedagem
                    </a>
                  </li>
                  <li>
                    <a href="#excelencia" className="hover:text-yellow-400 transition-colors">
                      Excelência
                    </a>
                  </li>
                  <li>
                    <a href="#caracteristicas" className="hover:text-yellow-400 transition-colors">
                      Características técnicas
                    </a>
                  </li>
                  <li>
                    <a href="#termos" className="hover:text-yellow-400 transition-colors">
                      Termos de Serviço
                    </a>
                  </li>
                </ul>
              </div>

              {/* COLUMN 3 - CONTACT */}
              <div>
                <p className="text-lg font-bold uppercase mb-4">Contato</p>
                <a
                  href="https://wa.me/258851907875?text=Olá,%20quero%20saber%20mais!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>+258 85 190 7875</span>
                </a>
              </div>

            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-gray-800 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                © 2026 Nuvem Athars. Todos os direitos reservados.
              </p>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                <GoArrowUp className="text-xl" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
