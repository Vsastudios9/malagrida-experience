import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  UtensilsCrossed,
  Wine,
  Palmtree,
  HeartHandshake,
  Star,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";
import drink1 from "@/assets/drink1.jpg";
import drink2 from "@/assets/drink2.jpg";
import drink3 from "@/assets/drink3.jpg";
import gal1 from "@/assets/gallery1.jpg";
import gal3 from "@/assets/gallery3.jpg";
import gal4 from "@/assets/gallery4.jpg";
import ambienteVideo from "@/assets/malagrida-ambiente.mp4.asset.json";
import galPratoCamarao from "@/assets/galeria-prato-camarao.jpg.asset.json";
import galDrinkRosa from "@/assets/galeria-drink-rosa.jpg.asset.json";
import galBurgerFritas from "@/assets/galeria-burger-fritas.jpg.asset.json";
import logoIvory from "@/assets/logo-malagrida-ivory.png.asset.json";
import shareCard from "@/assets/malagrida-card.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malagrida Restobar — Sabores de Boipeba" },
      {
        name: "description",
        content:
          "Gastronomia diferenciada, drinks autorais e atmosfera acolhedora na Ilha de Boipeba, Bahia. Reserve sua experiência no Malagrida.",
      },
      { property: "og:title", content: "Malagrida Restobar — Sabores de Boipeba" },
      {
        property: "og:description",
        content: "Boa comida, drinks especiais e momentos inesquecíveis em Boipeba.",
      },
      { property: "og:image", content: shareCard.url },
      { name: "twitter:image", content: shareCard.url },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Malagrida.";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <MenuHighlights />
        <Drinks />
        <Gallery />
        <Testimonials />
        <Reservations />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#drinks", label: "Drinks" },
    { href: "#galeria", label: "Galeria" },
    { href: "#reservas", label: "Reservas" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-deep/85 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="Malagrida Restobar">
          <img
            src={logoIvory.url}
            alt="Malagrida Restobar"
            width={919}
            height={418}
            className="h-9 sm:h-11 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ivory/80 hover:text-gold transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservas"
          className="hidden lg:inline-flex items-center gap-2 rounded-2xl bg-gold text-deep px-5 py-2.5 text-sm font-medium hover:bg-gold/90 transition-all hover:shadow-gold"
        >
          Reservar Mesa
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-ivory p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-deep/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ivory/85 hover:text-gold py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gold text-deep px-5 py-3 font-medium"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const trust = [
    "Ambiente acolhedor",
    "Drinks autorais",
    "Gastronomia diferenciada",
    "Atendimento especial",
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center text-ivory overflow-hidden">
      <img
        src={heroImg}
        alt="Pratos e drinks do Malagrida Restobar em Boipeba"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/60 to-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">Ilha de Boipeba · Bahia</p>
          <h1 className="reveal reveal-delay-1 mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Sabores de Boipeba
            <span className="block italic text-gold/95">em uma experiência única.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-7 text-lg text-ivory/80 max-w-xl leading-relaxed">
            Boa comida, drinks especiais e momentos inesquecíveis em um ambiente
            acolhedor à beira do paraíso.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-4">
            <a
              href="#reservas"
              className="inline-flex items-center gap-2 rounded-2xl bg-gold text-deep px-7 py-4 font-medium hover:bg-gold/90 transition-all hover:shadow-gold"
            >
              Reservar Agora <ArrowRight size={18} />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-2xl border border-ivory/30 text-ivory px-7 py-4 font-medium hover:bg-ivory/10 transition-all"
            >
              Ver Cardápio
            </a>
          </div>

          <ul className="reveal reveal-delay-4 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 max-w-2xl">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-ivory/85">
                <Check size={16} className="text-gold shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50 text-xs tracking-[0.3em] uppercase">
        Role para descobrir
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (reduce.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    apply();
    reduce.addEventListener("change", apply);
    return () => reduce.removeEventListener("change", apply);
  }, []);

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-luxe h-[420px] sm:h-[520px] lg:h-[600px]">
            <video
              ref={videoRef}
              src={ambienteVideo.url}
              poster={aboutImg}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Ambiente do Malagrida Restobar em movimento"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-luxe max-w-[220px]">
            <p className="font-display text-3xl text-gold">+1000</p>
            <p className="text-sm text-ivory/80 mt-1">clientes encantados em nossa casa</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Sobre o Malagrida</p>
          <div className="gold-divider my-5" />
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-balance">
            Mais que um restaurante,
            <span className="italic text-primary"> uma experiência.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nascido da paixão pela Ilha de Boipeba, o Malagrida une o melhor da
            gastronomia contemporânea aos sabores autênticos do litoral baiano. Cada
            prato carrega a alma do mar, e cada drink, a brisa da ilha.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Em um ambiente acolhedor, entre madeiras quentes e luz de velas, criamos
            momentos para serem lembrados — refeições demoradas, conversas
            despretensiosas, o tempo da ilha em cada detalhe.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <Stat value="+1000" label="Clientes atendidos" />
            <Stat value="4.9★" label="Avaliação excelente" />
            <Stat value="100%" label="Sabor autêntico" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 text-center">
      <p className="font-display text-2xl text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground leading-snug">{label}</p>
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const cards = [
    {
      icon: UtensilsCrossed,
      title: "Gastronomia Especial",
      text: "Cozinha autoral inspirada nos frutos do mar e ingredientes locais da Bahia.",
    },
    {
      icon: Wine,
      title: "Drinks Autorais",
      text: "Coquetelaria criativa com cachaças artesanais, ervas frescas e frutas tropicais.",
    },
    {
      icon: Palmtree,
      title: "Clima de Boipeba",
      text: "A atmosfera única da ilha, entre brisa do mar, madeira e luz de velas.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Acolhedor",
      text: "Uma equipe apaixonada que faz cada visita parecer voltar para casa.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Experiência Malagrida</p>
          <div className="gold-divider my-5" />
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Quatro elementos que tornam cada noite{" "}
            <span className="italic text-primary">inesquecível.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl bg-card border border-border p-7 transition-all hover:shadow-luxe hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                <c.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENU HIGHLIGHTS ---------------- */
function MenuHighlights() {
  const dishes = [
    { img: dish1, name: "Camarões na Manteiga de Garrafa", desc: "Camarões grelhados, molho cítrico de coentro e dendê." },
    { img: dish2, name: "Peixe do Dia ao Coco", desc: "Filé fresco do litoral com salsa tropical de manga e pimenta." },
    { img: dish3, name: "Risoto de Camarão & Coco", desc: "Cremoso risoto al dente com camarões selados ao fogo alto." },
    { img: dish4, name: "Cacau de Boipeba", desc: "Bombom de chocolate 70% com frutas tropicais e flor de sal." },
  ];
  return (
    <section id="cardapio" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">Destaques do Cardápio</p>
            <div className="gold-divider my-5" />
            <h2 className="font-display text-4xl lg:text-5xl text-balance">
              Pratos que carregam o
              <span className="italic text-primary"> sabor da ilha.</span>
            </h2>
          </div>
          <a
            href="#reservas"
            className="self-start inline-flex items-center gap-2 text-primary hover:text-gold transition-colors text-sm font-medium link-underline"
          >
            Conheça o cardápio completo <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dishes.map((d) => (
            <article key={d.name} className="group">
              <div className="hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-xl">{d.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DRINKS ---------------- */
function Drinks() {
  const drinks = [
    { img: drink1, name: "Pôr-do-Sol de Boipeba", desc: "Cachaça envelhecida, maracujá, alecrim defumado e cítricos." },
    { img: drink2, name: "Caipira da Casa", desc: "Cachaça artesanal, limão tahiti, mel de cana e tomilho fresco." },
    { img: drink3, name: "Ilha em Chamas", desc: "Mezcal, abacaxi grelhado, pimenta rosa e toque de fumaça." },
  ];
  return (
    <section id="drinks" className="py-24 lg:py-32 bg-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Drinks Especiais</p>
          <div className="gold-divider my-5" />
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Coquetelaria autoral,
            <span className="italic text-gold"> servida sob a lua.</span>
          </h2>
          <p className="mt-5 text-ivory/70 leading-relaxed">
            Nossos bartenders criam drinks únicos com cachaças premiadas, ervas
            colhidas no dia e os frutos mais doces da Bahia.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {drinks.map((d, i) => (
            <article
              key={d.name}
              className={`grid md:grid-cols-[2fr_3fr] gap-6 md:gap-10 items-center rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden hover:border-gold/30 transition-colors ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="hover-zoom h-72 md:h-80 [direction:ltr]">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 md:p-10 [direction:ltr]">
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="mt-3 font-display text-3xl text-ivory">{d.name}</h3>
                <p className="mt-3 text-ivory/70 leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { src: gal1, alt: "Restaurante ao pôr do sol", span: "row-span-2" },
    { src: galPratoCamarao.url, alt: "Camarões crocantes com purê e glaze", span: "" },
    { src: gal3, alt: "Chef finalizando prato", span: "" },
    { src: gal4, alt: "Casal jantando à luz de velas", span: "row-span-2" },
    { src: galDrinkRosa.url, alt: "Drink Rosa com twist de limão", span: "" },
    { src: galBurgerFritas.url, alt: "Burger artesanal com fritas", span: "" },
  ];
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Galeria</p>
          <div className="gold-divider my-5 mx-auto" />
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Momentos que vivem
            <span className="italic text-primary"> além da mesa.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-2 gap-4 auto-rows-[200px] lg:auto-rows-[260px]">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`hover-zoom rounded-xl overflow-hidden relative group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-deep/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-ivory/80 hover:text-gold p-2"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-10 text-ivory/80 hover:text-gold p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p! - 1 + items.length) % items.length);
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-10 text-ivory/80 hover:text-gold p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p! + 1) % items.length);
            }}
            aria-label="Próxima"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Marina Cardoso",
      role: "São Paulo, SP",
      text: "Uma experiência sensorial. Cada prato conta uma história de Boipeba e os drinks são simplesmente memoráveis. Voltaria mil vezes.",
    },
    {
      name: "Rafael Lima",
      role: "Rio de Janeiro, RJ",
      text: "O ambiente, o atendimento, o sabor — tudo impecável. Jantamos sob as estrelas e foi a melhor noite da nossa viagem.",
    },
    {
      name: "Camila e João",
      role: "Belo Horizonte, MG",
      text: "Comemoramos nosso aniversário de casamento aqui. Atenção aos detalhes de verdadeira hospitalidade. Inesquecível.",
    },
  ];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(t);
  }, [paused, idx, items.length]);

  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Depoimentos</p>
        <div className="gold-divider my-5 mx-auto" />
        <h2 className="font-display text-4xl lg:text-5xl text-balance">
          O que dizem sobre <span className="italic text-primary">o Malagrida.</span>
        </h2>

        <div className="mt-14 relative">
          <div
            className="rounded-2xl bg-card border border-border p-8 lg:p-14 shadow-luxe"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div key={idx} className="quote-in">
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-7 font-display text-2xl lg:text-3xl leading-snug text-balance italic">
                “{items[idx].text}”
              </p>
              <div className="mt-8">
                <p className="font-medium">{items[idx].name}</p>
                <p className="text-sm text-muted-foreground">{items[idx].role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="h-10 w-10 rounded-full border border-border hover:border-gold hover:text-gold transition flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-gold" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo"
              className="h-10 w-10 rounded-full border border-border hover:border-gold hover:text-gold transition flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESERVATIONS ---------------- */
function Reservations() {
  const [form, setForm] = useState({ nome: "", telefone: "", data: "", pessoas: "2" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de fazer uma reserva no Malagrida.%0A%0A*Nome:* ${encodeURIComponent(
      form.nome
    )}%0A*Telefone:* ${encodeURIComponent(form.telefone)}%0A*Data:* ${encodeURIComponent(
      form.data
    )}%0A*Pessoas:* ${encodeURIComponent(form.pessoas)}`;
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
  };

  return (
    <section id="reservas" className="relative py-24 lg:py-32 bg-deep text-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${gal1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/95 to-deep" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow">Reservas</p>
        <div className="gold-divider my-5 mx-auto" />
        <h2 className="font-display text-4xl lg:text-5xl text-balance">
          Reserve sua <span className="italic text-gold">experiência.</span>
        </h2>
        <p className="mt-5 text-ivory/70 max-w-xl mx-auto">
          Garanta sua mesa para uma noite inesquecível à beira do paraíso. Atendemos
          rapidamente pelo WhatsApp.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid sm:grid-cols-2 gap-4 text-left bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-10 backdrop-blur"
        >
          <Field label="Nome">
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="input"
              placeholder="Seu nome completo"
            />
          </Field>
          <Field label="Telefone">
            <input
              required
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="input"
              placeholder="(00) 00000-0000"
              type="tel"
            />
          </Field>
          <Field label="Data">
            <input
              required
              value={form.data}
              onChange={(e) => setForm({ ...form, data: e.target.value })}
              className="input"
              type="date"
            />
          </Field>
          <Field label="Número de pessoas">
            <select
              value={form.pessoas}
              onChange={(e) => setForm({ ...form, pessoas: e.target.value })}
              className="input"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n} className="text-foreground">
                  {n} {n === 1 ? "pessoa" : "pessoas"}
                </option>
              ))}
              <option value="9+" className="text-foreground">9 ou mais</option>
            </select>
          </Field>

          <button
            type="submit"
            className="sm:col-span-2 mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold text-deep px-7 py-4 font-medium hover:bg-gold/90 transition-all hover:shadow-gold"
          >
            <MessageCircle size={18} /> Reservar pelo WhatsApp
          </button>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 0.85rem 1rem;
          color: var(--ivory);
          font-size: 0.95rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--gold);
          background: rgba(255,255,255,0.06);
        }
        .input::placeholder { color: rgba(248, 245, 239, 0.4); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-ivory/60 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section id="local" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">Localização</p>
          <div className="gold-divider my-5" />
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Encontre-nos no
            <span className="italic text-primary"> coração da ilha.</span>
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <div className="flex gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-foreground">Malagrida Restobar</p>
                <p>Ilha de Boipeba — Bahia, Brasil</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <p>Aberto todos os dias · 18h — 23h</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=Ilha+de+Boipeba,+Bahia"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-primary/90 transition-all hover:shadow-luxe"
          >
            Como Chegar <ArrowRight size={18} />
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-luxe border border-border h-[420px]">
          <iframe
            title="Mapa Malagrida Restobar"
            src="https://www.google.com/maps?q=Ilha+de+Boipeba,+Bahia&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-deep text-ivory/80 pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-3xl text-ivory">Malagrida</p>
          <p className="mt-2 text-sm text-gold tracking-[0.3em] uppercase">Restobar</p>
          <p className="mt-6 text-sm leading-relaxed max-w-sm text-ivory/60">
            Sabores autênticos da Bahia em uma experiência gastronômica única na
            Ilha de Boipeba.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Navegação</p>
          <ul className="space-y-2 text-sm">
            {["Home", "Sobre", "Cardápio", "Drinks", "Galeria", "Reservas"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase() === "home" ? "home" : l.toLowerCase()}`}
                  className="hover:text-gold transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Contato</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5" /> Ilha de Boipeba, Bahia</li>
            <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5" /> Aberto · 18h — 23h</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-ivory/40">
        <p>© {new Date().getFullYear()} Malagrida Restobar. Todos os direitos reservados.</p>
        <p>Ilha de Boipeba · Bahia · Brasil</p>
      </div>
    </footer>
  );
}
