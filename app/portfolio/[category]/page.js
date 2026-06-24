import Link from "next/link";
import DroneGallery from "./DroneGallery";
import DroneStats from "./DroneStats";

const portfolioData = {
  branding: {
    title: "Branding & Identidad Visual",
    description:
      "Desarrollo sistemas visuales estratégicos que fortalecen la identidad y diferenciación de cada marca.",

    projects: [
      {
        title: "Eficaz",
        image: "/projects/eficaz.jpg",
        slug: "eficaz",
        url: "https://www.behance.net/gallery/243978567/Eficaz-Logo-Visual-Idenity",
      },
      {
        title: "El Rincón Casero",
        image: "/projects/rincon-casero.jpg",
        url: "https://www.behance.net/gallery/243995105/El-Rincon-Casero-Logo-Visual-Idenity",
      },
      {
        title: "RM 2016",
        image: "/projects/rm2016.jpg",
        url: "https://www.behance.net/gallery/248484713/RM-2016-Identidad-Visual-para-Transporte-Areo",
      },
      {
        title: "ROVEMA CA",
        image: "/projects/rovema.jpg",
        url: "https://www.behance.net/gallery/247733703/ROVEMA-CA-Portafolio-Corporativo-Comercial",
      },
    ],
  },

  archviz: {
    title: "Visualización 3D",
    description:
      "Renders y recorridos virtuales diseñados para comunicar proyectos con realismo e impacto visual.",

    projects: [
      {
        title: "CABISOAVIA",
        image: "/projects/cabisoavia.jpg",
        url: "https://www.behance.net/gallery/244117153/Viviendas-Turisticas-CABISOAVIA-Modelado-3D-Renders",
      },
      {
        title: "Beach House Caribbean",
        image: "/projects/beach-house.jpg",
        url: "https://www.behance.net/gallery/247108913/Beach-House-CARIBBEAN-Visualizacion-Arquitectonica-3D",
      },
      {
        title: "Grúa GMC 250",
        image: "/projects/grua-gmc.jpg",
        url: "https://www.behance.net/gallery/244594363/Grua-GMC-250-Modelado-3D-Renders",
      },
    ],
  },

  advertising: {
    title: "Diseño Publicitario",
    description:
      "Campañas, material promocional y piezas visuales diseñadas para atraer y generar recordación.",

    projects: [
      {
        title: "Turpial Airlines",
        image: "/projects/turpial.jpg",
        url: "https://www.behance.net/gallery/249380355/Turpial-Airlines-Diseno-Publicitario-Premium",
      },
      {
        title: "Miniaturas YouTube",
        image: "/projects/youtube-thumbnails.jpg",
        url: "https://www.behance.net/gallery/248257957/Diseno-de-Miniaturas-para-YouTube",
      },
    ],
  },

  motion: {
    title: "Producción Audiovisual",
    description:
      "Edición de video, motion graphics y piezas audiovisuales orientadas a comunicación y posicionamiento.",

    projects: [
      {
        title: "Cinematic Truck",
        image: "/projects/truck-motion.jpg",
        url: "https://www.behance.net/gallery/249181483/Cinematic-Truck-Motion-Flyer-Ramivas-CA",
      },
      {
        title: "Rucking 360 Promo",
        image: "/projects/rucking-promo.jpg",
        url: "https://www.behance.net/gallery/244057689/RUCKING-360-Video-Promo-Sport-Vertical",
      },
      {
        title: "Rucking 360 Girl",
        image: "/projects/rucking-girl.jpg",
        url: "https://www.behance.net/gallery/244145347/RUCKING-360-GIRL-Flyer-Animado-Promo-Sport",
      },
      {
        title: "Tribu 360 Guatire",
        image: "/projects/tribu-guatire.jpg",
        url: "https://www.behance.net/gallery/249163313/Viral-Sports-Flyer-Design-Tribu-360-Guatire",
      },
      {
        title: "Tribus 360 San Martín",
        image: "/projects/tribus-sanmartin.jpg",
        url: "https://www.behance.net/gallery/249181819/Viral-Sports-Flyer-Design-Tribus-360-San-Martin",
      },
      {
        title: "La Gran Peluchada",
        image: "/projects/peluchada.jpg",
        url: "https://www.behance.net/gallery/249443807/La-Gran-Peluchada-360-Flyer-Sport-Premium",
      },
    ],
  },

  drone: {
    title: "Cinematografía Aérea",
    description:
      "Perspectivas aéreas que capturan la magnitud, el diseño y la identidad de cada proyecto.",

    projects: [
      {
        title: "Cinematic Truck",
        image: "/projects/truck-motion.jpg",
        url: "https://www.behance.net/gallery/249181483/Cinematic-Truck-Motion-Flyer-Ramivas-CA",
      },
    ],
},  
};

export default async function PortfolioCategory({ params }) {

  const { category } = await params;

  const data = portfolioData[category];

const heroImages = {
  branding: "/hero/branding.jpg",
  archviz: "/hero/archviz.jpg",
  advertising: "/hero/advertising.jpg",
  motion: "/hero/motion.jpg",
  drone: "/hero/drone.jpg",
  default: "/hero/default.jpg",
};

const heroImage = heroImages[category] || heroImages.default;

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Categoría no encontrada
      </main>
    );
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-lime-400/10 blur-[200px] rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">

  {/* 🖼️ BACKGROUND IMAGE */}
  <div className="absolute inset-0 z-0">
    <img
      src={heroImage}
      alt="Hero background"
      className="w-full h-full object-cover scale-105"
    />

    {/* 🌑 OSCURECIMIENTO GENERAL */}
    <div className="absolute inset-0 bg-black/50" />

    {/* 🔻 DIFUMINADO INFERIOR */}
    <div className="absolute bottom-0 left-0 right-0 h-44 
                    bg-gradient-to-t from-black via-black/70 to-transparent" />
  </div>

  {/* 💨 PARTICULAS */}
<div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
  {Array.from({ length: 80 }).map((_, i) => (
    <span
      key={i}
      className="absolute w-[4px] h-[4px] bg-lime-400/60 rounded-full animate-pulse-slow"
      style={{
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: `${Math.random() * 4 + 2}px`,
  height: `${Math.random() * 4 + 2}px`,
  animationDelay: `${Math.random() * 5}s`,
  opacity: Math.random() * 0.7 + 0.3,
  boxShadow: "0 0 8px rgba(163,230,53,0.8)",
}}
    />
  ))}
</div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <Link
      href="/"
      className="inline-flex items-center gap-3 text-lime-400 mb-16 hover:translate-x-[-5px] transition"
    >
      ← Volver al Home
    </Link>

    <p className="text-lime-400 uppercase tracking-[0.35em] text-xs mb-6">
      FEXDESIGN PORTFOLIO
    </p>

    <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
      {data.title}
    </h1>

    <p className="text-white/60 text-xl max-w-3xl leading-relaxed">
      {data.description}
    </p>

    {category === "drone" && <DroneStats />}

  </div>

</section>

      {/* Projects */}
<section className="relative pb-32">

  <div className="max-w-7xl mx-auto px-6">

    {category === "drone" ? (

      <DroneGallery />

    ) : (

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {data.projects.map((project) => (

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            className="group relative overflow-hidden rounded-[32px] min-h-[420px] border border-white/10 hover:border-lime-400/50 transition-all duration-500"
          >

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">

              <h2 className="text-3xl font-black mb-3">
                {project.title}
              </h2>

              <span className="text-lime-400">
                Ver proyecto →
              </span>

            </div>

          </a>

        ))}

      </div>

    )}

  </div>

</section>

    </main>
  );
}