"use client";

import { useEffect, useMemo, useState } from "react";

type Video = {
  id: string;
  title: string;
  duration: string;
  category: "Advanced" | "Intermediate" | "Standing" | "Sitting" | "Interview";
};

const videos: Video[] = [
  { id: "egNdbDDS_Ws", title: "Interview 01 — A/Prof CK Seow", duration: "0:39", category: "Interview" },
  { id: "dyYVJnccUx0", title: "Interview 02 — A/Prof CK Seow", duration: "0:38", category: "Interview" },
  { id: "IsGAZrjEMp4", title: "Interview 03 — Ms LP Lim", duration: "0:48", category: "Interview" },
  { id: "jV6KZ2no0Pg", title: "Interview 02 — Ms LP Lim", duration: "0:42", category: "Interview" },
  { id: "CiJ0R9ZugeY", title: "Interview 01 — Ms LP Lim", duration: "0:50", category: "Interview" },
  { id: "mzqsdpvfDto", title: "Sun Salutation Flow", duration: "1:51", category: "Advanced" },
  { id: "m0b_BebYNBQ", title: "Baby Cobra", duration: "0:55", category: "Intermediate" },
  { id: "hComtEvbgN4", title: "Eight-Point Pose", duration: "1:21", category: "Intermediate" },
  { id: "Ma93Zxwp_-o", title: "Plank", duration: "1:08", category: "Intermediate" },
  { id: "0MUxqZmmmq8", title: "Downward Dog", duration: "1:43", category: "Intermediate" },
  { id: "ze9cJVnkYOg", title: "Triangle Pose", duration: "1:23", category: "Standing" },
  { id: "aP40k--wiPo", title: "Side Angle Pose", duration: "1:33", category: "Standing" },
  { id: "1EmtCVdAKuI", title: "Reverse Warrior 2", duration: "1:21", category: "Standing" },
  { id: "D8OEOqj6LKo", title: "Warrior 2", duration: "1:15", category: "Standing" },
  { id: "ETFrnz9CCsw", title: "Warrior 1", duration: "1:34", category: "Standing" },
  { id: "vpECbuWGnVw", title: "Warrior 3", duration: "1:05", category: "Standing" },
  { id: "zr-EsTGQE3g", title: "Standing Crunch", duration: "1:09", category: "Standing" },
  { id: "qJHd5KIO35I", title: "Back and Chest Stretch", duration: "1:05", category: "Standing" },
  { id: "Z_LIRhABH7c", title: "Goddess Pose (Leg Stretch)", duration: "1:19", category: "Sitting" },
  { id: "r4ixF0BmzfI", title: "Goddess Pose (Shoulders and Torso Twist)", duration: "1:34", category: "Sitting" },
  { id: "78t9qqSWf4Q", title: "Leg Raise (Straight)", duration: "1:14", category: "Sitting" },
  { id: "6tlBgzidSuU", title: "Leg Raise (Bent)", duration: "1:12", category: "Sitting" },
  { id: "vkb-jrEq4sc", title: "Shoulders and Torso Twist", duration: "1:21", category: "Sitting" },
  { id: "5jSzGqTOTeY", title: "Shoulders Lateral Stretch", duration: "1:03", category: "Sitting" },
  { id: "-K7puFfQgIc", title: "Bent Arm Rotation", duration: "1:01", category: "Sitting" },
  { id: "oCGcR5GgpWI", title: "Straight Arms Rotation", duration: "1:11", category: "Sitting" },
  { id: "ZhelQy85j3M", title: "Head, Neck and Shoulders Stretch", duration: "1:24", category: "Sitting" },
];

const practiceVideos = videos.filter((video) => video.category !== "Interview");
const interviewVideos = videos.filter((video) => video.category === "Interview");
const categories = ["All", "Standing", "Sitting", "Intermediate", "Advanced"] as const;

function VideoPlayer({ video }: { video: Video }) {
  return (
    <div className="player-shell">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function VideoCard({
  video,
  selected,
  onSelect,
}: {
  video: Video;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      className={`video-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
      aria-label={`Play ${video.title}`}
      aria-pressed={selected}
    >
      <span className="thumb">
        <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
        <span className="thumb-shade" />
        <span className="play-icon" aria-hidden="true">▶</span>
        <span className="duration">{video.duration}</span>
      </span>
      <span className="card-copy">
        <span className="category">{video.category}</span>
        <strong>{video.title}</strong>
        <span className="watch-label">{selected ? "Now playing" : "Watch demonstration"} <b>→</b></span>
      </span>
    </button>
  );
}

export default function Home() {
  const [page, setPage] = useState<"practice" | "interviews" | "credits">("practice");
  const [selectedPractice, setSelectedPractice] = useState(practiceVideos[0]);
  const [selectedInterview, setSelectedInterview] = useState(interviewVideos[0]);
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#/", "");
      if (hash === "interviews" || hash === "credits" || hash === "practice") setPage(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const filteredVideos = useMemo(() => {
    return practiceVideos.filter((video) => {
      const inCategory = category === "All" || video.category === category;
      return inCategory && video.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [category, query]);

  function navigate(next: "practice" | "interviews" | "credits") {
    window.location.hash = `/${next}`;
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => navigate("practice")} aria-label="Heal Yoga home">
          <span className="brand-mark">H</span>
          <span><b>Heal</b><strong>Yoga</strong></span>
        </button>
        <nav aria-label="Main navigation">
          <button className={page === "practice" ? "active" : ""} onClick={() => navigate("practice")}>Practice</button>
          <button className={page === "interviews" ? "active" : ""} onClick={() => navigate("interviews")}>Interviews</button>
          <button className={page === "credits" ? "active" : ""} onClick={() => navigate("credits")}>Credits</button>
        </nav>
      </header>

      {page === "practice" && (
        <>
          <section className="hero">
            <div>
              <span className="eyebrow">Movement for every body</span>
              <h1>Find your balance,<br /><em>one pose at a time.</em></h1>
              <p>Accessible, instructor-led yoga demonstrations designed for students, older adults, and everyone beginning their wellness journey.</p>
              <button className="primary" onClick={() => document.getElementById("library")?.scrollIntoView({ behavior: "smooth" })}>
                Explore 22 practices <span>↓</span>
              </button>
            </div>
            <div className="featured">
              <VideoPlayer video={selectedPractice} />
              <div className="featured-meta">
                <div><span>{selectedPractice.category}</span><h2>{selectedPractice.title}</h2></div>
                <span className="time">{selectedPractice.duration}</span>
              </div>
            </div>
          </section>

          <section className="library" id="library">
            <div className="section-heading">
              <div><span className="eyebrow">Guided library</span><h2>Choose your practice</h2></div>
              <label className="search">
                <span aria-hidden="true">⌕</span>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search poses" aria-label="Search yoga poses" />
              </label>
            </div>
            <div className="filters" aria-label="Filter by practice type">
              {categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
            <div className="video-grid">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} selected={selectedPractice.id === video.id} onSelect={() => {
                  setSelectedPractice(video);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} />
              ))}
            </div>
            {filteredVideos.length === 0 && <p className="empty">No poses match your search. Try a different term.</p>}
          </section>
        </>
      )}

      {page === "interviews" && (
        <section className="interview-page">
          <div className="page-intro">
            <span className="eyebrow">Conversations on wellbeing</span>
            <h1>Hear from the people<br /><em>behind the practice.</em></h1>
            <p>Short perspectives from clinical and yoga professionals on accessible movement, healthy ageing, and the thinking behind Heal Yoga.</p>
          </div>
          <div className="interview-layout">
            <div>
              <VideoPlayer video={selectedInterview} />
              <div className="interview-now"><span>Now playing</span><h2>{selectedInterview.title}</h2></div>
            </div>
            <div className="interview-list">
              {interviewVideos.map((video, index) => (
                <button key={video.id} className={selectedInterview.id === video.id ? "active" : ""} onClick={() => setSelectedInterview(video)}>
                  <span className="interview-number">0{index + 1}</span>
                  <span><b>{video.title}</b><small>{video.duration} · Play interview</small></span>
                  <span className="round-play">▶</span>
                </button>
              ))}
            </div>
          </div>

          <div className="written-interview">
            <figure className="written-photo">
              <img src="/kamala.jpg" alt="A/Prof Kamala Devi" loading="lazy" />
              <figcaption>
                <b>A/Prof Kamala Devi</b>
                <small>School of Medicine, Dentistry &amp; Nursing<br />University of Glasgow</small>
              </figcaption>
            </figure>
            <div className="written-copy">
              <span className="eyebrow">In her own words</span>
              <h2>A nursing perspective on Heal Yoga</h2>
              <p>The objectives of launching this app are to help seniors build a foundation in yoga practice; help them turn their practice into a habit; help them strengthen their body, calm their mind and feel happy through regular practice.</p>
              <p>There are numerous yoga poses. This app highlights a few well-known and accessible poses for seniors, as it is crucial for seniors to learn useful poses while ensuring the poses are not too difficult to follow.</p>
              <p>The term &ldquo;seniors&rdquo; is used loosely here: it can mean retirees; people who have reached the retirement age but are working; people who have not hit the retirement age but choose to step down; or working adults who feel that they lack the stamina to exercise but want to try out yoga.</p>
              <p>This app contains chair yoga poses for beginners, as well as intermediate and advanced poses on the mat. As this app caters to seniors who do self-practice without guidance, the poses are kept simple and accessible. The sequence is designed so seniors get to warm up, do the poses and cool down. The poses aim to provide stretching, muscle strengthening, cardio training, balancing and breath work, and cover the sagittal, frontal and transverse planes of motion so practice is well covered in all directions.</p>
              <p>An important reminder for seniors using this app is to breathe deeply and calmly during their practice, which is the essence of yoga. Regular yoga practice helps to strengthen the body, align posture, calm the mind, focus better, improve endurance and promote positive living.</p>
              <h3>Content</h3>
              <p><b>Chair yoga (beginner&rsquo;s level)</b> &mdash; Practising with a chair helps seniors ease into poses they find challenging and stay in the pose longer to reap its benefits. Chair yoga is highly recommended when ground practice is inaccessible or impractical.</p>
              <p><b>Sun salutation (intermediate and advanced level)</b> &mdash; An important flow sequence in yoga asana which promotes spine health, shoulders and chest opening, and limbs and core strength. It can be used as a warm-up once seniors become familiar with the poses; intermediate level focuses on isolated poses while advanced level focuses on the flow sequence and cardio training.</p>
              <h3>App features</h3>
              <p>To encourage regular and frequent practice, the app helps seniors track their progress by showing their weekly cumulative practice duration. Once a milestone is reached, they receive a trophy. We also track how seniors feel by asking a number of questions after a month of practice, to increase their body awareness.</p>
              <h3>A nursing standpoint</h3>
              <p>Regular yoga practice offers multidimensional health benefits that are particularly relevant for seniors. Physiologically, yoga enhances musculoskeletal strength, joint mobility, and balance, thereby reducing the risk of falls, a major concern in geriatric care. Controlled breathing and mindful movement improve cardiopulmonary endurance and support better management of chronic conditions such as hypertension, diabetes, and arthritis. Psychologically, yoga fosters relaxation, reduces anxiety, and promotes emotional resilience, which is essential for maintaining mental wellbeing in later life. Importantly, yoga encourages self-efficacy and active participation in health maintenance, aligning with nursing goals of empowering individuals to take ownership of their health and promoting holistic, person-centred care.</p>
            </div>
          </div>
        </section>
      )}

      {page === "credits" && (
        <section className="credits-page">
          <div className="credits-hero">
            <span className="eyebrow">A university collaboration</span>
            <h1>Built with care.<br /><em>Shared with purpose.</em></h1>
            <p>Heal Yoga is a higher education initiative using open-source mobile technology to make yoga practice and public health awareness more accessible to youth and older adults.</p>
          </div>
          <div className="credits-grid">
            <article className="team-card">
              <span className="card-kicker">Development team</span>
              <h2>CSC2101 & CSC2102</h2>
              <p className="course">Professional Software Development & Team Project</p>
              <div className="member-grid">
                {["Jocasta Tan", "Daniel Soong", "Kaam Yan Hye", "Natalie Narayanan"].map((name, i) => (
                  <div key={name}><span>{String(i + 1).padStart(2, "0")}</span><b>{name}</b></div>
                ))}
              </div>
            </article>
            <div className="credit-stack">
              <article><span>Faculty advisor</span><h3>Dr Peter CY Yau</h3></article>
              <article><span>Supported by</span><h3>School of Computing Science</h3><p>& School of Medicine, Dentistry & Nursing<br />University of Glasgow</p></article>
            </div>
          </div>
          <aside className="thanks">
            <span className="quote-mark">“</span>
            <div><span className="eyebrow">Special thanks</span><h2>Ms Lim Li Peng</h2><p>Professional yoga instructor leading the demonstrations featured throughout Heal Yoga.</p></div>
          </aside>
          <div className="open-source">
            <div><span className="brand-mark">H</span><p><b>Open by design.</b><br />Created for learning, wellbeing, and public benefit.</p></div>
            <a href="https://github.com/drpeteryau/lts-proj-yoga" target="_blank" rel="noreferrer">View the project on GitHub ↗</a>
          </div>
        </section>
      )}

      <footer>
        <button className="brand" onClick={() => navigate("practice")}><span className="brand-mark">H</span><span><b>Heal</b><strong>Yoga</strong></span></button>
        <p>Move gently. Breathe freely. Practice safely.</p>
        <span>University of Glasgow · Academic project</span>
      </footer>
    </main>
  );
}
