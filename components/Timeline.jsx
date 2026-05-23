export default function Timeline() {
  return (
    <div className="timeline mt-4">
      <div className="timeline-item">
        <h3 className="h5 mb-1">Android Engineering</h3>
        <p className="mb-0">Kotlin, Jetpack Compose, ViewModel, Room, Retrofit, Coroutines, Hilt, Firebase, CI/CD.</p>
      </div>
      <div className="timeline-item">
        <h3 className="h5 mb-1">Architecture</h3>
        <p className="mb-0">MVVM, Clean Architecture, modularization, scalable patterns, and testable design.</p>
      </div>
      <div className="timeline-item">
        <h3 className="h5 mb-1">Delivery</h3>
        <p className="mb-0">Performance optimization, release hardening, product polish, and stable production shipping.</p>
      </div>
    </div>
  );
}
