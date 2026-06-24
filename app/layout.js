import "./globals.css";
import LenisProvider from "./providers/LenisProvider";

export const metadata = {
  title: "FEXDESIGN | Diseño Visual, Branding y Producción Multimedia",
  description:
    "Creamos experiencias visuales que conectan emoción, estrategia y diseño.",

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