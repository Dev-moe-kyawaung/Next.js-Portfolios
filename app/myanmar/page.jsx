export async function generateMetadata() {
  return {
    title: "မြန်မာ",
    description: "Moe Kyaw Aung portfolio in Burmese language.",
    alternates: {
      canonical: "/myanmar",
      languages: {
        en: "/",
        my: "/myanmar"
      }
    },
    openGraph: {
      title: "မြန်မာ | Moe-Kyaw-Aung-Portfolio V02",
      description: "Burmese language portfolio page.",
      url: "/myanmar",
      type: "website"
    }
  };
}

export default function MyanmarPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <div className="glass p-4 reveal">
          <h1 className="section-title">မြန်မာဘာသာ</h1>
          <p>
            Android Senior Developer အဖြစ် Kotlin, Jetpack Compose, Firebase, REST API, CI/CD နှင့် Clean Architecture ကို အသုံးပြု၍ secure ဖြစ်ပြီး scalable ဖြစ်သော mobile applications များ ဖန်တီးသည်။
          </p>
          <p className="mb-0">
            Professional profile, app collections, certificates, and contact options များကို ဤစာမျက်နှာမှ Burmese language support ဖြင့် ကြည့်ရှုနိုင်သည်။
          </p>
        </div>
      </div>
    </main>
  );
}
