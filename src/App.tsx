/**
 * Lz Agencia — Site Institucional para Verificação Meta Business Manager
 * Domínio: woowlife.com
 */

import {
  BookOpen,
  Megaphone,
  Monitor,
  Settings,
  GraduationCap,
  HardDrive,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Instagram,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Info,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

/* ─── Data ─── */

const WHATSAPP_URL =
  "https://wa.me/5569993043883?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const services = [
  {
    title: "Livros e Conteúdo Educacional",
    description: "Comercialização e edição de materiais que promovem conhecimento e desenvolvimento.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Marketing e Publicidade",
    description: "Consultoria, marketing direto e promoção de vendas para fortalecimento de marcas.",
    icon: <Megaphone className="w-6 h-6" />,
  },
  {
    title: "Soluções Digitais",
    description: "Desenvolvimento de sistemas, web design e serviços online.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: "Tecnologia da Informação",
    description: "Suporte técnico, manutenção e serviços especializados em TI.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Treinamentos Profissionais",
    description: "Capacitação em desenvolvimento profissional e gerencial.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Comércio de Equipamentos",
    description: "Venda varejista e atacadista de produtos de informática, telefonia, áudio e vídeo.",
    icon: <HardDrive className="w-6 h-6" />,
  },
  {
    title: "Intermediação de Negócios",
    description: "Agenciamento e conexão de serviços e oportunidades comerciais.",
    icon: <Handshake className="w-6 h-6" />,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="font-bold text-lg leading-tight">Lz Agencia</span>
            <span className="text-[10px] text-slate-500 font-mono">15828478000181</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["QUEM SOMOS?", "Serviços", "Nossos Projetos", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace("?", "").replace(" ", "-"))}
                className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/5569993043883?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              CONVERSAR AGORA
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {["QUEM SOMOS?", "Serviços", "Nossos Projetos", "Contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace("?", "").replace(" ", "-"))}
                  className="text-xl font-bold uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Fale comigo:</p>
                <a
                  href="https://wa.me/5569993043883?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-4 rounded-xl text-lg font-bold uppercase tracking-widest block"
                >
                  CONVERSAR AGORA
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none uppercase">
              Lz Agencia Marketing Assessoria e Comunicacao LTDA
            </h1>
            <div className="mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">NOSSA MISSÃO:</h2>
              <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic">
                “Oferecer soluções integradas em marketing, comunicação, tecnologia e desenvolvimento profissional, conectando pessoas e negócios por meio de estratégias inovadoras, conteúdo de qualidade e serviços que impulsionem resultados e crescimento sustentável.”
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5569993043883?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center gap-3"
              >
                CONVERSAR AGORA
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollTo("contato")}
                className="px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
              >
                CONTATO
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="quem-somos" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">QUEM SOMOS?</h2>
              <div className="h-2 w-24 bg-blue-600 mb-8"></div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Sobre a Lz Agencia Marketing Assessoria e Comunicação LTDA
              </p>
            </div>
            <div className="md:col-span-8 space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                A Lz Agencia Marketing Assessoria e Comunicação LTDA, registrada sob o CNPJ 15.828.478/0001-81, foi fundada em 04 de dezembro de 1986, na cidade de Porto Velho, Rondônia. Com quase quatro décadas de atuação, a empresa se consolida como uma organização versátil e inovadora, oferecendo soluções que integram marketing, tecnologia, comunicação e desenvolvimento profissional.
              </p>
              <p>
                Sua atividade principal, conforme a Receita Federal, é o Comércio Varejista de Livros (CNAE 47.61-0-01), promovendo o acesso à informação, educação e cultura. Além disso, a Lz Agencia atua de forma estratégica em diversas áreas, como consultoria em publicidade, marketing direto, promoção de vendas, desenvolvimento de sistemas, web design, suporte em tecnologia da informação, treinamentos profissionais e serviços digitais.
              </p>
              <p>
                Ao longo dos anos, a Lz Agencia tem se destacado pela capacidade de adaptação às transformações do mercado, unindo conhecimento técnico, criatividade e inovação para oferecer soluções completas. Com um portfólio diversificado, atende desde demandas comerciais até projetos digitais e educacionais, sempre com foco em qualidade, responsabilidade e evolução constante.
              </p>
              <div className="pt-8 grid md:grid-cols-2 gap-8 text-slate-800">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-sm leading-relaxed">
                    Na Lz Agencia, acreditamos que conhecimento, tecnologia e comunicação são pilares fundamentais para o crescimento sustentável. Por isso, nosso compromisso vai além da prestação de serviços: buscamos conectar pessoas, ideias e oportunidades, impulsionando negócios e projetos com responsabilidade e inovação.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-sm leading-relaxed">
                    Na Lz Agencia, acreditamos que conhecimento, tecnologia e comunicação são pilares fundamentais para o sucesso. Por isso, nosso compromisso vai além da prestação de serviços: buscamos conectar pessoas, ideias e oportunidades, impulsionando negócios e transformando resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Produtos e Serviços Disponíveis:</h2>
            <div className="h-1 w-20 bg-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">✔ {service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="nossos-projetos" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">“Nossos Projetos”</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 rounded-[2rem] p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-tight">Protocolo ProstaBom</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  O Protocolo ProstaBom é um programa informativo voltado ao público masculino, com foco em bem-estar, qualidade de vida e cuidados com a saúde ao longo do envelhecimento.
                </p>
                <div className="grid gap-4">
                  {[
                    "O projeto reúne conteúdos educativos, orientações de hábitos saudáveis e sugestões de suplementação alimentar natural, sempre respeitando as diretrizes de saúde e segurança.",
                    "O protocolo conta com acompanhamento de especialista da área da saúde, contribuindo com informações técnicas e educativas para apoiar os participantes em suas rotinas de autocuidado.",
                    "O projeto conta com a participação da especialista Mislaine Pantoja, que contribui com conteúdos informativos e orientações baseadas em boas práticas de saúde e bem-estar."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl text-xs italic text-blue-200 leading-relaxed">
                  Os produtos apresentados no projeto são suplementos alimentares e não substituem acompanhamento médico. Seus resultados podem variar de acordo com o organismo de cada pessoa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 flex items-center gap-3">
              <Info className="w-8 h-8 text-blue-600" />
              Informações da Empresa:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <InfoItem label="Razão Social" value="Lz Agencia Marketing Assessoria e Comunicação LTDA" />
              <InfoItem label="Nome Fantasia" value="Lz Agencia" />
              <InfoItem label="CNPJ" value="15.828.478/0001-81" />
            </div>
            <div className="space-y-4">
              <InfoItem label="Data de Abertura" value="04/12/1986" />
              <InfoItem label="Porte" value="Empresa de Pequeno Porte" />
              <InfoItem label="Natureza Jurídica" value="Sociedade Empresária Limitada" />
            </div>
            <div className="space-y-4">
              <InfoItem label="Situação Cadastral" value="Ativa" />
              <InfoItem label="Tipo" value="Matriz" />
              <InfoItem label="Capital Social" value="R$ 200.000,00" />
              <InfoItem label="Opção pelo Simples" value="Não (período anterior: 01/01/2012 a 31/12/2025)" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Localização e Contato:</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">📍 Endereço:</h4>
                    <p className="font-bold text-lg leading-tight">Rua Vicunha, 3472, Bairro Conceição, Porto Velho-RO, CEP 76808-384</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Localizada na Rua Vicunha, 3472, bairro Conceição, em Porto Velho-RO (CEP 76808-384), a Lz Agencia mantém uma presença sólida na região Norte do Brasil, contribuindo para o desenvolvimento de empresas e projetos digitais.
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Com uma gestão comprometida e visão estratégica, liderada pelos sócios Laiana Cavalcante Regis Vieira (Sócio-Administrador) e Landerson Jernes Vieira Belarmino (Sócio), a empresa segue expandindo suas atividades e fortalecendo sua atuação no mercado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">📞 Telefone(s):</h4>
                    <p className="font-bold text-lg">(69) 99304-3883</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">📧 E-mail:</h4>
                    <p className="font-bold text-lg">rondoniaagencia@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">INSTAGRAM</h4>
                    <p className="font-bold text-lg">@lzagencia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-200">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Atendimento:</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Nosso atendimento é realizado por meio do WhatsApp, com foco em suporte ao cliente, esclarecimento de dúvidas e orientações sobre nossos conteúdos e produtos.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                  <p className="text-xs font-black uppercase tracking-[0.2em] mb-4">Fale comigo:</p>
                  <a
                    href="https://wa.me/5569993043883?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-blue-600 py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center gap-3"
                  >
                    CONVERSAR AGORA
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-950 text-slate-400 text-[10px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8">
            <div className="uppercase tracking-widest font-bold text-slate-200 text-xs mb-4">
              Lz Agencia Marketing Assessoria e Comunicação LTDA
            </div>
            <p className="max-w-5xl">
              Lz Agencia Marketing Assessoria e Comunicação LTDA CNPJ: 15.828.478/0001-81 Razão Social: LZ AGENCIA MARKETING ASSESSORIA E COMUNICACAO LTDA Data de Abertura: 04/12/1986 Porte: Empresa de Pequeno Porte Natureza Jurídica: Sociedade Empresária Limitada Situação Cadastral: Ativa Tipo: Matriz Capital Social: R$ 200.000,00 Endereço: Rua Vicunha, 3472, Conceição, Porto Velho-RO CEP: 76808-384 E-mail: rondoniaagencia@gmail.com Telefone/WhatsApp: (69) 99304-3883 Protocolo ProstaBom é uma iniciativa de Lz Agencia Marketing Assessoria e Comunicacao LTDA Conectando ideias, tecnologia e resultados desde 1986 🚀
            </p>
            <div className="flex justify-between items-center pt-8 border-t border-white/5">
              <a
                href="/privacidade"
                className="hover:text-white transition-colors uppercase tracking-widest font-bold"
              >
                Políticas de privacidade
              </a>
              <div className="font-mono">© {new Date().getFullYear()} LZ AGENCIA</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</div>
      <div className="text-sm font-bold text-slate-800">{value}</div>
    </div>
  );
}
