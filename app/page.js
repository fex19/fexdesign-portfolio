'use client'
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import Link from "next/link";
import {
 Search,
Lightbulb,
PenTool,
 Rocket
} from "lucide-react";
const MotionLink = motion.create(Link);

export default function FexDesignLanding() {
const { scrollY } = useScroll();

  const glowY = useTransform(
  scrollY,
  [0, 1500],
  [0, -300]
);

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, 80]
  );

  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

const [leadForm, setLeadForm] = useState({
  nombre: "",
  telefono: "",
  servicio: "",
  descripcion: "",
});

const [errorServicio, setErrorServicio] = useState(false);
const [errorDescripcion, setErrorDescripcion] = useState(false);

useEffect(() => {
  if (window.innerWidth < 768) return;

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  const services = [
    {
      title: 'Branding & Identidad Visual',
      desc: 'Desarrollo sistemas visuales estrategicos que fortalecen la identidad y diferenciacion de cada marca.',
      image:
        "/ICONO1.png",
    },
    {
      title: 'Visualización 3D',
      desc: 'Modelado 3D, renders fotorrealistas y recorridos virtuales creados para visualizar proyectos con precision, realismo y una presentacion visual impactante.',
      image:
        "/ICONO2.png",
    },
    {
      title: 'Producción Audiovisual',
      desc: 'Edición de video, motion graphics y piezas audiovisuales orientadas a comunicación y posicionamiento.',
      image:
        "/ICONO3.png",
    },
    {
      title: 'Diseño Publicitario',
      desc: 'Campañas, material promocional y piezas visuales diseñadas para conectar y destacar',
      image:
        "/ICONO4.png",
    },
    {
      title: 'Contenido Digital',
      desc: 'Diseño de contenido para entornos digitales.',
      image:
        "/ICONO5.png",
    },
  ]

const portfolio = [
  {
    title: "Identidades de Marca",
    category: "Brand Identity",
    slug: "branding",
    image: "/portfolio-branding.jpg",
  },

  {
    title: "Arquitectura Visual",
    category: "Visualización 3D",
    slug: "archviz",
    image: "/portfolio-archviz.jpg",
  },

  {
    title: "Campañas de Impacto",
    category: "Publicidad",
    slug: "advertising",
    image: "/portfolio-advertising.jpg",
  },

  {
    title: "Narrativas en Movimiento",
    category: "Edición & Motion",
    slug: "motion",
    image: "/portfolio-motion.jpg",
  },

  {
    title: "Perspectivas Aéreas",
    category: "Drone Content",
    slug: "drone",
    image: "/portfolio-drone.jpg",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const handleLeadSubmit = (e) => {
  e.preventDefault();
// Validar servicio
if (!leadForm.servicio) {
  setErrorServicio(true);
  return;
}

setErrorServicio(false);

// Validar descripción
if (leadForm.descripcion.trim().length < 10) {
  alert("Describe brevemente tu proyecto");
  return;
}

setErrorDescripcion(false);

  const mensaje = `Hola 👋

Soy ${leadForm.nombre}

📱 Teléfono:
${leadForm.telefono}

🎯 Servicio:
${leadForm.servicio}

📝 Proyecto:
${leadForm.descripcion}

Quiero recibir una propuesta para mi proyecto.`;

  const whatsapp = `https://wa.me/584144058207?text=${encodeURIComponent(
    mensaje
  )}`;

  window.open(whatsapp, "_blank");
};

  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
<div
  className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
  style={{
    background: `radial-gradient(
      600px circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(163,230,53,0.12),
      transparent 35%
    )`,
  }}
/>
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">

        <motion.div
  style={{ y: glowY }}
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400/20 blur-[180px] rounded-full"
/>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      {/* WHATSAPP FLOAT */}
      <a
  href="https://wa.me/584144058207"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-7 right-7 z-[100] group"
>

        {/* Glow */}
        <span className="absolute right-[90px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xl bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em]">
  Hablemos
</span>

        {/* Button */}
        <div className="relative w-[72px] h-[72px] rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(163,230,53,0.25)] hover:border-lime-400/50 hover:shadow-[0_0_60px_rgba(163,230,53,0.45)] hover:scale-110 transition-all duration-500">

          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  className="w-9 h-9 fill-lime-400"
>
            <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.737 5.574 2.137 8.006L0 32l7.82-2.053a15.944 15.944 0 0 0 8.18 2.24h.006c8.835 0 16-7.164 16-16S24.84.396 16 .396zm0 29.02h-.005a13.3 13.3 0 0 1-6.774-1.86l-.486-.288-4.64 1.218 1.238-4.525-.316-.465a13.282 13.282 0 0 1-2.05-7.1c0-7.336 5.968-13.304 13.31-13.304 3.556.002 6.897 1.389 9.41 3.904a13.205 13.205 0 0 1 3.895 9.402c-.003 7.338-5.97 13.308-13.282 13.308zm7.29-9.967c-.4-.2-2.36-1.164-2.726-1.296-.365-.133-.63-.2-.896.2-.266.398-1.03 1.296-1.263 1.562-.233.266-.466.3-.865.1-.398-.2-1.68-.62-3.2-1.975-1.183-1.054-1.98-2.354-2.213-2.753-.232-.398-.025-.613.175-.812.18-.18.398-.466.598-.698.2-.233.266-.4.4-.665.132-.266.066-.5-.034-.698-.1-.2-.896-2.16-1.228-2.96-.323-.775-.652-.67-.896-.682l-.764-.013c-.266 0-.698.1-1.063.5-.365.398-1.395 1.363-1.395 3.323 0 1.96 1.428 3.853 1.627 4.12.2.266 2.81 4.29 6.81 6.014.95.41 1.69.655 2.267.84.952.303 1.818.26 2.503.158.764-.114 2.36-.964 2.693-1.894.332-.93.332-1.727.232-1.894-.1-.167-.365-.266-.764-.466z" />
          </svg>

        </div>

      </a>

      {/* HERO */}
<section className="relative min-h-screen overflow-hidden">

  {/* Imagen Hero Completa */}
  <motion.img
  src="/nueva hero2.png"
  alt="FEXDESIGN"
  style={{ y: heroY }}
  initial={{ scale: 1.08, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    duration: 1.4,
    ease: "easeOut",
  }}
  className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Overlay Suave */}
  <div className="absolute inset-0 bg-black/5" />

  {/* Gradiente */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

  {/* Estadísticas */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.8,
    ease: "easeOut",
  }}
  className="absolute top-24 left-6 right-6 md:top-[32%] md:left-auto md:right-[8%] md:bottom-auto z-50 flex flex-row justify-center md:justify-start gap-3"
>
    {[
      ["120+", "PROYECTOS"],
      ["8+", "AÑOS CREANDO"],
      ["50+", "CLIENTES & MARCAS"],
    ].map(([number, label]) => (
  <motion.div
  key={label}
  whileHover={{
  y: -10,
  scale: 1.04,
  boxShadow: "0 0 60px rgba(163,230,53,0.35)",
}}
transition={{
  type: "spring",
  stiffness: 300,
  damping: 18,
}}
  className="relative overflow-hidden backdrop-blur-xl bg-black/30 border border-lime-400/20 rounded-[20px] px-4 py-3 md:px-8 md:py-5 min-w-[100px] md:min-w-[160px]"
>
  <div className="absolute inset-0 bg-lime-400/5 blur-2xl" />

  <div className="relative">
    <h3 className="text-2xl md:text-5xl font-black text-lime-400">
      {number}
    </h3>

    <p className="text-[11px] tracking-[0.25em] text-white/60 uppercase">
      {label}
    </p>
  </div>
</motion.div>
    ))}
  </motion.div>

  {/* Contenido */}
  <div className="relative z-20 min-h-screen">

    <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
  className="absolute left-[8%] bottom-[10%] max-w-[620px] md:max-w-[620px] max-w-[90%]"
>
      <p className="text-lime-400 uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-6">
  DIRECCIÓN CREATIVA • BRANDING • VISUALIZACIÓN 3D
</p>

      <p className="text-white/85 text-lg sm:text-xl md:text-3xl leading-tight mb-10 font-light">
  Transformo ideas en experiencias visuales que conectan, inspiran y generan confianza.
</p>

      

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Ver Portafolio
        </button>

        <button
  onClick={() =>
    document
      .getElementById("contacto")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  className="border border-white/10 backdrop-blur-xl bg-white/5 px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:border-lime-400 transition-all"
>
  Solicitar Cotización
</button>

      </div>
      </motion.div>

  </div>

</section>

{/* SERVICES */}
      <motion.section
  id="servicios"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="relative overflow-hidden pt-8 pb-40"
>
{/* Fondo personalizado */}
<div className="absolute inset-0 z-0">
  <img
    src="/services-bg.jpg"
    alt=""
    className="w-full h-full object-cover"
  />

  {/* Oscurecer para mejor lectura */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Gradiente superior */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black/40" />
</div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">


{/* MARQUEE */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 mb-24">

          <div className="border-y border-white/10 py-5 overflow-hidden whitespace-nowrap backdrop-blur-md bg-black/20">

            <div className="marquee-animation flex gap-16 text-white/60 uppercase tracking-[0.25em] text-xs min-w-max px-8">

              <span>Branding Corporativo</span>
              <span>Modelado 3D</span>
              <span>Diseño Grafico</span>
              <span>Edición de Videos</span>
              <span>Publicidad</span>
              <span>Motion Graphics</span>
              <span>Diseño para redes sociales</span>
              <span>Visualización Arquitectónica</span>

            </div>

          </div>

        </div>

        <div className="mb-14">

          <p className="text-lime-400 uppercase tracking-[0.35em] text-[11px] mb-5">
            Servicios
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl">
            Soluciones visuales para 
            <span className="text-lime-400 block">
                  MARCAS Y PROYECTOS.
                </span>
          </h2>

        </div>

        <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
  style={{
    perspective: "1200px"
  }}
>

          {services.map((service) => (

            <motion.div
            key={service.title}
            style={{
    transformStyle: "preserve-3d"
  }}
  whileHover={{
    y: -10,
    rotateX: 4,
    rotateY: 2,
    scale: 1.15
  }}
  transition={{
    duration: 0.4
  }}
  className="group relative overflow-hidden rounded-[30px] h-[340px] md:h-[520px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
>
  <img
  src={service.image}
  alt={service.title}
  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
/>

{/* Bisel superior */}
<div
  className="absolute top-0 left-0 right-0 h-[35%] rounded-t-[30px] bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none"
/>

<div
  className="absolute inset-[2px] rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] pointer-events-none"
/>

  {/* Overlay normal */}
  <div className="absolute inset-0 bg-black/10 group-hover:bg-lime-400/90 transition-all duration-500" />

  {/* Contenido */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">

    {/* Icono */}

    {/* Texto oculto inicialmente */}
    <div className="absolute bottom-8 md:bottom-40 left-0 right-0 px-6 opacity-100 translate-y-0 transition-all duration-500 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
      <h3 className="text-black font-black text-xl mb-3">
        {service.title}
      </h3>

      <p className="text-black/80 text-sm leading-relaxed">
        {service.desc}
      </p>
    </div>

  </div>

  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-700 group-hover:w-full" />
</motion.div>

          ))}

       </div>
       
       </div> {/* relative z-10 */}

       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />

</motion.section>

      {/* ABOUT */}
      <section className="relative min-h-screen overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent z-10" />

        <img
          src="/about-fexdesign.png"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

        <div className="relative z-10 min-h-screen flex items-center py-32">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-4xl">

              <p className="text-lime-400 uppercase tracking-[0.35em] text-[11px] mb-5">
                Sobre mí
              </p>

              <h2 className="text-4xl md:text-7xl xl:text-[60px] font-black leading-[0.95] tracking-[-0.04em] mb-8">
                Creatividad que une
                <span className="text-lime-400 block">
                  ESTRATEGIA
                </span>
                y emosión visual.
              </h2>

              <div className="text-white/65 text-base md:text-xl leading-8 max-w-3xl mb-12 space-y-6">
  <p>
    Soy Félix, Ingeniero en Telecomunicaciones y Director Creativo especializado en branding, visualización arquitectónica 3D y producción audiovisual.
  </p>

  <p>
    Mi enfoque combina estrategia, tecnología y diseño para desarrollar marcas, espacios y experiencias visuales que conectan con las personas y generan impacto.
  </p>

  <p>
    Cada proyecto comienza con una idea y una intención clara: comunicar de forma efectiva y crear experiencias visuales con significado. Trabajo desde una visión donde la creatividad, la estrategia y la atención al detalle convergen para construir propuestas visuales sólidas, coherentes y memorables.
  </p>

  <p>
    Mi objetivo no es solo crear algo atractivo, sino desarrollar soluciones que transmitan identidad, generen confianza y establezcan conexiones auténticas con las personas.
  </p>
</div>

              <div className="flex flex-wrap gap-4 mb-14">

                <a
  href="/CV FELIX JOSE SALAS GARCIA.pdf"
  target="_blank"
  className="group inline-flex items-center gap-5 backdrop-blur-xl bg-white/5 border border-lime-400/30 px-6 py-5 rounded-2xl hover:border-lime-400 transition-all duration-500"
>
  <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold">
    CV
  </div>

  <div>
    <p className="text-white font-semibold">
      Curriculum Vitae
    </p>
    <p className="text-white/50 text-sm">
      Experiencia y trayectoria profesional
    </p>
  </div>
</a>

              
              </div>

            </div>

          </div>

        </div>

        {/* Transición inferior */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />

      </section>

{/* PORTFOLIO */}

      {/* PORTFOLIO */}
      <motion.section
  id="portfolio"
  variants={scaleIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="relative overflow-hidden"
>
  
  {/* Fondo */}
  <div className="absolute inset-0 -z-0">
    
    <img
      src="/clientes-bg.webp"
      alt="Portfolio"
      className="w-full h-full object-cover opacity-25"
    />

    <div className="absolute inset-0 bg-black/30" />

    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-black" />

  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <div className="mb-14">

          <p className="text-lime-400 uppercase tracking-[0.35em] text-[11px] mb-5">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-5xl">
            Proyectos que venden 
            <span className="text-lime-400 block">
                  POR SÍ SOLOS.
                </span>
          </h2>

        </div>

        <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-6"
>

  {portfolio.map((item) => (

    <MotionLink
      key={item.title}
      href={`/portfolio/${item.slug}`}
      variants={fadeUp}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative overflow-hidden rounded-[42px] min-h-[380px] md:min-h-[620px] border border-white/10 hover:border-lime-400/50 hover:shadow-[0_0_80px_rgba(163,230,53,0.22)] transition-all duration-500"
    >

  <img
    src={item.image}
    alt={item.title}
    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
  />

  {/* 2. OVERLAY OSCURO */}
  <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

  {/* Bisel superior */}
  <div
    className="absolute top-0 left-0 right-0 h-[35%] rounded-t-[30px] bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none"
  />

  {/* Borde interno / brillo */}
  <div
    className="absolute inset-[2px] rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] pointer-events-none"
  />

  <div className="absolute inset-0 bg-black/5" />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">

    <p className="text-lime-400 uppercase tracking-[0.3em] text-[11px] mb-4">
      {item.category}
    </p>

    <h3 className="text-2xl md:text-5xl font-black mb-5">
      {item.title}
    </h3>

    <span className="text-white/70 group-hover:text-lime-400 transition">
      Ver proyectos →
    </span>

  </div>

</MotionLink>
))}
</motion.div>

</div>

      </motion.section>

      {/* PROCESS */}
<motion.section
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative overflow-hidden py-32"
>
  
{/* Imagen de proceso */}
<div className="absolute inset-0 pointer-events-none">

  <img
    src="/proceso-bg.webp"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Oscurecer */}
  <div className="absolute inset-0 bg-black/70" />

</div>

  {/* Glow central */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

  <div className="w-[900px] h-[900px] rounded-full bg-lime-400/10 blur-[180px]" />

</div>

{/* Gradiente superior */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />

{/* Red SVG */}
<svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  viewBox="0 0 1200 500"
  preserveAspectRatio="none"
>

  <path
  d="M300 220 H900"
  stroke="#A3E635"
  strokeWidth="1"
  opacity="0.25"
  fill="none"
/>

<path
  d="M300 420 H900"
  stroke="#A3E635"
  strokeWidth="1"
  opacity="0.25"
  fill="none"
/>

<path
  d="M300 220 V420"
  stroke="#A3E635"
  strokeWidth="1"
  opacity="0.25"
  fill="none"
/>

<path
  d="M900 220 V420"
  stroke="#A3E635"
  strokeWidth="1"
  opacity="0.25"
  fill="none"
/>
<path
  d="M300 220 H900 V420 H300 V220"
  stroke="#A3E635"
  strokeWidth="3"
  fill="none"
  strokeDasharray="40 120"
>
  <animate
    attributeName="stroke-dashoffset"
    from="160"
    to="0"
    dur="3s"
    repeatCount="indefinite"
  />
</path>

{/* NODOS */}
  <circle cx="300" cy="220" r="8" fill="#A3E635" filter="url(#glow)" className="node-pulse"
 />
  <circle cx="900" cy="220" r="8" fill="#A3E635" filter="url(#glow)" className="node-pulse"
 />
  <circle cx="300" cy="420" r="8" fill="#A3E635" filter="url(#glow)" className="node-pulse"
 />
  <circle cx="900" cy="420" r="8" fill="#A3E635" filter="url(#glow)" className="node-pulse"
 />

<defs>
  <filter id="glow">
    <feGaussianBlur
      stdDeviation="6"
      result="coloredBlur"
    />

    <feMerge>
      <feMergeNode in="coloredBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

<circle
  r="3"
  fill="#A3E635"
  filter="url(#glow)"
>
  <animateMotion
    dur="8s"
    repeatCount="indefinite"
    path="M300 220 H900 V420 H300 V220"
  />
</circle>

<circle
  r="3"
  fill="#BEF264"
  filter="url(#glow)"
>
  <animateMotion
    dur="8s"
    begin="-4s"
    repeatCount="indefinite"
    path="M300 220 H900 V420 H300 V220"
  />
</circle>
</svg>

<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-14">

  <p className="text-lime-400 uppercase tracking-[0.35em] text-[11px] mb-5">
    Proceso
  </p>

  <h2 className="text-4xl md:text-5xl md:text-6xl font-black leading-tight max-w-4xl">
    De la idea a la 
    <span className="text-lime-400 block">
                  EXPERIENCIA VISUAL.
                </span>
  </h2>

</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

          {[
  {
    number: '01',
    icon: <Search size={28} />,
    title: 'Descubrimiento',
    text: 'Comprensión del proyecto, objetivos y oportunidades.'
  },
  {
    number: '02',
    icon: <Lightbulb size={28} />,
    title: 'Dirección Creativa',
    text: 'Definición del concepto, identidad visual y enfoque estratégico.'
  },
  {
    number: '03',
    icon: <PenTool size={28} />,
    title: 'Desarrollo Visual',
    text: 'Diseño, visualización 3D y producción de contenidos.'
  },
  {
    number: '04',
    icon: <Rocket size={28} />,
    title: 'Implementación',
    text: 'Entrega final y preparación para su aplicación.'
  }
].map((step) => (

  <motion.div
  whileHover={{ y: -10 }}
  key={step.title}
  className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-[34px] p-8"
>

  {/* Glow interno */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.12),transparent_70%)]"
  />

  {/* Contenido */}
  <div className="relative z-10">

    <div className="flex items-center gap-3 mb-6">
      <div className="text-lime-400">
        {step.icon}
      </div>

      <h3 className="text-2xl font-bold">
        {step.title}
      </h3>
    </div>

    <span className="text-lime-400 text-6xl font-black block mb-5">
      {step.number}
    </span>

    <p className="text-white/60 leading-relaxed">
      {step.text}
    </p>

  </div>
  

</motion.div>

))}

  </div>

</div>

{/* Oscurece abajo */}
<div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent" />

</motion.section>
{/* CLIENTES */}

<motion.section
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative py-24 overflow-hidden"
>

  {/* Fondo */}
  <div className="absolute inset-0">
    <img
      src="/clientes-bg.webp"
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-100"
    />

    <div className="absolute inset-0 bg-[#050505]/60" />
  </div>

  {/* Glow verde */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-500/10 blur-[140px] rounded-full" />

{/* Gradiente superior */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />

<div className="relative z-10">
  <div className="text-center mb-14">

    <p className="text-lime-400 uppercase tracking-[0.35em] text-[11px] mb-4">
      Clientes
    </p>

    <h2 className="text-4xl md:text-6xl font-black">
      Marcas que <span className="text-lime-400 block">
                  CONFÍAN
                </span>
    </h2>

  </div>

  <div className="relative overflow-hidden">

    {/* Fade izquierdo */}
    <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />

    {/* Fade derecho */}
    <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />

    <div className="logos-marquee flex items-center gap-20">

      {/* Logos */}

      <img
        src="/logos/logo1.png"
        alt="Logo 1"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo2.png"
        alt="Logo 2"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo3.png"
        alt="Logo 3"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo4.png"
        alt="Logo 4"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo5.png"
        alt="Logo 5"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo6.png"
        alt="Logo 6"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo7.png"
        alt="Logo 7"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      {/* Duplicados para loop infinito */}

      <img
        src="/logos/logo1.png"
        alt="Logo 1"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo2.png"
        alt="Logo 2"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo3.png"
        alt="Logo 3"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo4.png"
        alt="Logo 4"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo5.png"
        alt="Logo 5"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo6.png"
        alt="Logo 6"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

      <img
        src="/logos/logo7.png"
        alt="Logo 7"
        className="h-32 md:h-44 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />

    </div>

    </div>

  </div>

  {/* Oscurece abajo */}
<div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent" />

</motion.section>
      {/* FORMULARIO LEADS */}

<section
  id="contacto"
  className="relative overflow-hidden py-32"
>

  {/* Imagen de fondo */}
  <div className="absolute inset-0 pointer-events-none">
    <img
      src="/contact-bg.webp"
      alt=""
      className="w-full h-full object-cover"
    />

    {/* Oscurecer para que el formulario destaque */}
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* Gradiente superior */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />

  {/* Contenido */}
  <div className="relative z-10 max-w-4xl mx-auto px-6">
  

  <div className="text-center mb-14">

    <p className="text-lime-400 uppercase tracking-[0.35em] text-[11px] mb-4">
      Solicita tu presupuesto
    </p>

    <h2 className="text-4xl md:text-6xl font-black mb-6">
      Cuéntame sobre <span className="text-lime-400 block">
                  TU PROYECTO
                </span>
    </h2>

    <p className="text-white/60 max-w-xl mx-auto">
      Completa este formulario y te responderé por WhatsApp.
    </p>

  </div>

  <form
    onSubmit={handleLeadSubmit}
    className="space-y-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-6 md:p-10"
  >

    <input
      type="text"
      placeholder="Tu nombre"
      required
      value={leadForm.nombre}
      onChange={(e) =>
        setLeadForm({
          ...leadForm,
          nombre: e.target.value,
        })
      }
      className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
    />

    <input
      type="tel"
      placeholder="WhatsApp"
      required
      value={leadForm.telefono}
      onChange={(e) =>
        setLeadForm({
          ...leadForm,
          telefono: e.target.value,
        })
      }
      className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
    />

    <div>

      <p className="mb-4 text-white/80">
        ¿Qué servicio necesitas?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {[
           {
    icon: "🎨",
    name: "Diseño Gráfico",
  },
  {
    icon: "🎬",
    name: "Edición de Video",
  },
  {
    icon: "🧊",
    name: "Modelado 3D",
  },
        ].map((service) => (

          <button
            key={service.name}
            type="button"
            onClick={() =>
              setLeadForm({
                ...leadForm,
                servicio: service.name,
              })
            }
            className={`rounded-2xl p-5 border transition-all duration-300 ${
  leadForm.servicio === service.name
    ? "border-lime-400 bg-lime-400/10 shadow-[0_0_40px_rgba(163,230,53,0.35)] scale-[1.02]"
    : "border-white/10 bg-white/5 hover:border-white/20"
}`}
          >
            <div className="flex flex-col items-center gap-2">
  <span className="text-3xl">
    {service.icon}
  </span>

  <span className="font-medium">
    {service.name}
  </span>
</div>
          </button>

        ))}

      </div>

    </div>

    {errorServicio && (
  <p className="text-red-400 text-sm mt-3">
    Selecciona un servicio para continuar.
  </p>
)}

    <textarea
      rows={5}
      placeholder="Describe brevemente tu proyecto..."
      value={leadForm.descripcion}
      onChange={(e) =>
        setLeadForm({
          ...leadForm,
          descripcion: e.target.value,
        })
      }
      className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none resize-none"
    />
    {errorDescripcion && (
  <p className="text-red-400 text-sm mt-2">
    Describe brevemente tu proyecto.
  </p>
)}

    <button
      type="submit"
      className="w-full bg-lime-400 text-black font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all"
    >
      💬 Cotizar Mi Proyecto
    </button>

<p className="text-center text-sm text-white/50 mt-4">
  ⚡ Respuesta rápida • Atención personalizada • Sin compromiso
</p>

  </form>

  </div>
{/* Oscurece abajo */}
<div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent" />

</section>

<section className="relative overflow-hidden pt-40">

  {/* Imagen de fondo de toda la sección */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/background.jpg')"
    }}
  />

  {/* Gradiente superior */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />
  
  {/* Overlay opcional */}
  <div className="absolute inset-0 bg-black/60" />
  
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-28 -translate-y-6">

        <div className="relative overflow-hidden rounded-[48px] border border-white/10 min-h-[420px] md:min-h-[650px] flex items-center justify-center text-center hover:border-lime-400/50 hover:shadow-[0_0_80px_rgba(163,230,53,0.22)]">

  {/* Imagen */}
  <img
    src="/cta-background.jpg"
    alt="CTA Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Gradiente */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

  {/* Glow */}
  <div className="absolute inset-0 bg-lime-400/10 blur-[140px]" />

  {/* Contenido */}
  <div className="relative z-10 max-w-xl mx-auto px-8">

    <h2 className="text-3xl md:text-5xl xl:text-6xl font-black leading-tight mb-12">
      ¿Listo para <span className="text-lime-400 block">
                DESTACAR
              </span> visualmente?
    </h2>

    <p className="max-w-xl mx-auto text-white/85 text-lg md:text-xl leading-relaxed mb-12">
      Construyamos una experiencia visual premium
      que conecte y eleve el valor de tu marca.
    </p>

    <a
      href="https://wa.me/584144058207"
      target="_blank"
      className="group relative overflow-hidden inline-flex items-center justify-center border border-white/10 backdrop-blur-xl bg-white/10 px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:border-lime-400 transition-all duration-500"
    >
      <span className="relative z-10 group-hover:text-black transition duration-500">
        Hablemos
      </span>

      <div className="absolute inset-0 bg-lime-400 translate-y-full group-hover:translate-y-0 transition duration-500" />
    </a>

  </div>

</div>

</section>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-3xl font-black mb-2">
              FEX<span className="text-lime-400">DESIGN</span>
            </h3>

            <p className="text-white/50 text-sm">
              © 2026 FEXDESING · Diseñado y desarrollado por Félix Salas.
            </p>

          </div>

          <div className="flex gap-8 text-white/50 uppercase tracking-[0.2em] text-[11px]">

            <a href="https://www.instagram.com/fex19/">Instagram</a>
            <a href="https://www.behance.net/felixsalas1">Behance</a>
            <a href="https://www.linkedin.com/in/felix-salas-32b241263/?skipRedirect=true">LinkedIn</a>

          </div>

        </div>

      </footer>

    </main>
  )
}