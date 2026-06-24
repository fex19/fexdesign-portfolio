import "./globals.css";
import LenisProvider from "./providers/LenisProvider";

export const metadata = {
  metadataBase: new URL("https://fexdesign-portfolio.vercel.app"),
  
  title: "FEXDESIGN | Branding, Diseño Gráfico, Visualización 3D y Producción Audiovisual",
  description:
    "Estudio creativo especializado en branding, visualización arquitectónica 3D, diseño publicitario y producción audiovisual. Solicita tu cotización.",

  openGraph: {
    title: "FEXDESIGN",
    description:
      "Branding, edición de video, visualización 3D y producción multimedia.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <LenisProvider>
        {children}
        </LenisProvider>
      </body>
    </html>
  );
}