import Timeline from "@/components/Timeline";

export async function generateMetadata() {
  return {
    title: "About",
    description:
      "About Moe Kyaw Aung — Android Senior Developer with nearly 12 years of experience in Kotlin, Compose, Firebase, and clean architecture.",
    alternates: {
      canonical: "/about"
    },
    openGraph: {
      title: "About | Moe-Kyaw-Aung-Portfolio V02",
      description:
        "Android Senior Developer portfolio about page with timeline, stats, and technical focus.",
      url: "/about",
      type: "website"
    }
  };
}

export default function AboutPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 reveal">
            <div className="glass p-4">
              <h1 className="section-title">About Moe Kyaw Aung</h1>
              <p className="section-subtitle">
                Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications.
              </p>
              <Timeline />
            </div>
          </div>
          <div className="col-lg-6 reveal">
            <div className="glass p-4">
              <h2 className="h4 fw-bold">Tech-heavy categories</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-reset">Android Developer | Kotlin | Jetpack Compose | MVVM | Clean Architecture</li>
                <li className="list-group-item bg-transparent text-reset">Android Engineer | Kotlin, Coroutines, Room, Retrofit, Dagger/Hilt</li>
                <li className="list-group-item bg-transparent text-reset">Android Developer | Jetpack Compose, Material 3, Firebase, CI/CD</li>
                <li className="list-group-item bg-transparent text-reset">Android Developer | Native Android, Modular Architecture, Performance Optimization</li>
                <li className="list-group-item bg-transparent text-reset">Android Engineer | Kotlin Multiplatform (KMM) | Android | Backend Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
