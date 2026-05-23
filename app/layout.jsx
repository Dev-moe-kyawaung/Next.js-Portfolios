import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "Moe-Kyaw-Aung-Portfolio V02",
    template: "%s | Moe-Kyaw-Aung-Portfolio V02"
  },
  description:
    "⭐MOE KYAW AUNG ⭐ANDROID SENIOR DEVELOPER — secure, scalable Android apps with Kotlin, Compose, Firebase, and clean architecture.",
  keywords: [
    "Android developer",
    "Kotlin",
    "Jetpack Compose",
    "MVVM",
    "Clean Architecture",
    "Firebase",
    "Portfolio"
  ],
  openGraph: {
    title: "Moe-Kyaw-Aung-Portfolio V02",
    description:
      "Professional Android Senior Developer portfolio with glasspunk design.",
    url: "/",
    siteName: "Moe-Kyaw-Aung-Portfolio V02",
    images: ["/og-image.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe-Kyaw-Aung-Portfolio V02",
    description: "Android Senior Developer portfolio.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
