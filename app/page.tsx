"use client";

import { useEffect, useMemo, useState } from "react";
import { categoryLabels, localeLabels, localeNames, locales, ui, videoText, type Locale } from "./i18n";

type Video = {
  id: string;
  title: string;
  duration: string;
  category: "Advanced" | "Intermediate" | "Standing" | "Sitting" | "Interview";
  description?: string;
};

const videos: Video[] = [
  { id: "egNdbDDS_Ws", title: "Interview 01 — A/Prof CK Seow", duration: "0:39", category: "Interview" },
  { id: "dyYVJnccUx0", title: "Interview 02 — A/Prof CK Seow", duration: "0:38", category: "Interview" },
  { id: "IsGAZrjEMp4", title: "Interview 03 — Ms LP Lim", duration: "0:48", category: "Interview" },
  { id: "jV6KZ2no0Pg", title: "Interview 02 — Ms LP Lim", duration: "0:42", category: "Interview" },
  { id: "CiJ0R9ZugeY", title: "Interview 01 — Ms LP Lim", duration: "0:50", category: "Interview" },
  {
    id: "mzqsdpvfDto",
    title: "Sun Salutation Flow",
    duration: "1:51",
    category: "Advanced",
    description:
      "A dynamic sequence that links breath with movement, warming up the whole body while improving flexibility, mobility, and circulation.",
  },
  {
    id: "m0b_BebYNBQ",
    title: "Baby Cobra",
    duration: "0:55",
    category: "Intermediate",
    description:
      "A gentle backbend that opens the chest and strengthens the upper back while encouraging mobility through the spine.",
  },
  {
    id: "hComtEvbgN4",
    title: "Eight-Point Pose",
    duration: "1:21",
    category: "Intermediate",
    description:
      "A controlled lowering position where eight points of the body connect with the floor, helping strengthen the arms, shoulders, chest, and core.",
  },
  {
    id: "Ma93Zxwp_-o",
    title: "Plank",
    duration: "1:08",
    category: "Intermediate",
    description:
      "A full body strength pose that engages the core, shoulders, arms, and legs while building stability and body control.",
  },
  {
    id: "0MUxqZmmmq8",
    title: "Downward Dog",
    duration: "1:43",
    category: "Intermediate",
    description:
      "A full body stretch that lengthens the spine, shoulders, hamstrings, and calves while strengthening the upper body.",
  },
  {
    id: "ze9cJVnkYOg",
    title: "Triangle Pose",
    duration: "1:23",
    category: "Standing",
    description:
      "A standing stretch that opens the hips and chest while lengthening the sides of the body and improving balance.",
  },
  {
    id: "aP40k--wiPo",
    title: "Side Angle Pose",
    duration: "1:33",
    category: "Standing",
    description:
      "A deep standing stretch that strengthens the legs while opening the hips, chest, shoulders, and side body.",
  },
  {
    id: "1EmtCVdAKuI",
    title: "Reverse Warrior 2",
    duration: "1:21",
    category: "Standing",
    description:
      "A flowing side stretch from Warrior 2 that opens the ribs and waist while maintaining strength and stability through the legs.",
  },
  {
    id: "D8OEOqj6LKo",
    title: "Warrior 2",
    duration: "1:15",
    category: "Standing",
    description:
      "A strong standing pose that builds leg endurance and hip mobility while opening the chest and improving balance.",
  },
  {
    id: "ETFrnz9CCsw",
    title: "Warrior 1",
    duration: "1:34",
    category: "Standing",
    description:
      "A powerful standing pose that strengthens the legs while stretching the hips and opening the chest and shoulders.",
  },
  {
    id: "vpECbuWGnVw",
    title: "Warrior 3",
    duration: "1:05",
    category: "Standing",
    description:
      "A single leg balance that challenges stability while strengthening the legs, core, back, and glutes.",
  },
  {
    id: "zr-EsTGQE3g",
    title: "Standing Crunch",
    duration: "1:09",
    category: "Standing",
    description:
      "A standing core movement that brings the upper and lower body together, activating the abdominal muscles while improving coordination and balance.",
  },
  {
    id: "qJHd5KIO35I",
    title: "Back and Chest Stretch",
    duration: "1:05",
    category: "Standing",
    description:
      "A mobility stretch that opens the chest and shoulders while releasing tension through the upper back.",
  },
  {
    id: "Z_LIRhABH7c",
    title: "Goddess Pose (Leg Stretch)",
    duration: "1:19",
    category: "Sitting",
    description:
      "A wide stance squat that opens the hips and inner thighs while strengthening the glutes, thighs, and legs.",
  },
  {
    id: "r4ixF0BmzfI",
    title: "Goddess Pose (Shoulders and Torso Twist)",
    duration: "1:34",
    category: "Sitting",
    description:
      "A Goddess stance combined with an upper body rotation to stretch the shoulders and spine while maintaining lower body strength.",
  },
  {
    id: "78t9qqSWf4Q",
    title: "Leg Raise (Straight)",
    duration: "1:14",
    category: "Sitting",
    description:
      "A controlled straight leg lift that strengthens the hip flexors and core while helping improve lower body mobility.",
  },
  {
    id: "6tlBgzidSuU",
    title: "Leg Raise (Bent)",
    duration: "1:12",
    category: "Sitting",
    description:
      "A bent knee leg lift that activates the core and hip muscles with a more controlled and accessible range of motion.",
  },
  {
    id: "vkb-jrEq4sc",
    title: "Shoulders and Torso Twist",
    duration: "1:21",
    category: "Sitting",
    description:
      "A rotational stretch that mobilizes the spine while releasing tension through the shoulders, chest, and upper back.",
  },
  {
    id: "5jSzGqTOTeY",
    title: "Shoulders Lateral Stretch",
    duration: "1:03",
    category: "Sitting",
    description:
      "A side bending stretch that lengthens the shoulders, upper back, waist, and sides of the torso.",
  },
  {
    id: "-K7puFfQgIc",
    title: "Bent Arm Rotation",
    duration: "1:01",
    category: "Sitting",
    description:
      "A shoulder mobility movement using bent arms to gently rotate the shoulder joints and loosen the upper body.",
  },
  {
    id: "oCGcR5GgpWI",
    title: "Straight Arms Rotation",
    duration: "1:11",
    category: "Sitting",
    description:
      "A controlled arm rotation that works through a larger shoulder range of motion to improve mobility and warm up the shoulders.",
  },
  {
    id: "ZhelQy85j3M",
    title: "Head, Neck and Shoulders Stretch",
    duration: "1:24",
    category: "Sitting",
    description:
      "A gentle mobility sequence designed to release tension around the neck, shoulders, and upper back while improving comfortable range of motion.",
  },
];

const practiceVideos = videos.filter((video) => video.category !== "Interview");
const interviewVideos = videos.filter((video) => video.category === "Interview");
const categories = ["All", "Standing", "Sitting", "Intermediate", "Advanced"] as const;

function localizedVideo(video: Video, locale: Locale) {
  const text = videoText[locale][video.id] ?? videoText.en[video.id];
  return {
    title: text?.title ?? video.title,
    description: text?.description ?? video.description,
  };
}

function VideoPlayer({ video, locale }: { video: Video; locale: Locale }) {
  const { title } = localizedVideo(video, locale);
  return (
    <div className="player-shell">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
        title={title}
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
  locale,
}: {
  video: Video;
  selected: boolean;
  onSelect: () => void;
  locale: Locale;
}) {
  const { title, description } = localizedVideo(video, locale);
  return (
    <button
      className={`video-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
      aria-label={title}
      aria-pressed={selected}
    >
      <span className="thumb">
        <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
        <span className="thumb-shade" />
        <span className="play-icon" aria-hidden="true" />
        <span className="duration">{video.duration}</span>
      </span>
      <span className="card-copy">
        <span className="category">{categoryLabels[locale][video.category]}</span>
        <strong>{title}</strong>
        {description && <span className="watch-label">{description}</span>}
      </span>
    </button>
  );
}

function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange: (l: Locale) => void }) {
  return (
    <div className="lang-switcher" aria-label={ui[locale].languageLabel}>
      {locales.map((l) => (
        <button
          key={l}
          className={locale === l ? "active" : ""}
          onClick={() => onChange(l)}
          aria-pressed={locale === l}
          title={localeNames[l]}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [page, setPage] = useState<"practice" | "interviews" | "credits">("practice");
  const [selectedPractice, setSelectedPractice] = useState(practiceVideos[0]);
  const [selectedInterview, setSelectedInterview] = useState(interviewVideos[0]);
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#/", "");
      if (hash === "interviews" || hash === "credits" || hash === "practice") setPage(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const detectLocale = () => {
      const stored = window.localStorage.getItem("healyoga-locale");
      if (stored && (locales as string[]).includes(stored)) return stored as Locale;
      const browser = navigator.language.toLowerCase();
      if (browser.startsWith("zh")) {
        return browser.includes("hans") || browser.includes("cn") || browser.includes("sg") ? "zh-Hans" : "zh-Hant";
      }
      if (browser.startsWith("ta")) return "ta";
      if (browser.startsWith("ms")) return "ms";
      return null;
    };
    const detected = detectLocale();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time locale hydration from browser storage/language, not an external subscription
    if (detected) setLocale(detected);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("healyoga-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = ui[locale];
  const catLabel = categoryLabels[locale];

  const filteredVideos = useMemo(() => {
    return practiceVideos.filter((video) => {
      const inCategory = category === "All" || video.category === category;
      const title = (videoText[locale][video.id] ?? videoText.en[video.id])?.title ?? video.title;
      return inCategory && title.toLowerCase().includes(query.toLowerCase());
    });
  }, [category, query, locale]);

  function navigate(next: "practice" | "interviews" | "credits") {
    window.location.hash = `/${next}`;
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => navigate("practice")} aria-label={t.brandHome}>
          <span className="brand-mark">H</span>
          <span><b>Heal</b><strong>Yoga</strong></span>
        </button>
        <nav aria-label="Main navigation">
          <button className={page === "practice" ? "active" : ""} onClick={() => navigate("practice")}>{t.navPractice}</button>
          <button className={page === "interviews" ? "active" : ""} onClick={() => navigate("interviews")}>{t.navInterviews}</button>
          <button className={page === "credits" ? "active" : ""} onClick={() => navigate("credits")}>{t.navCredits}</button>
        </nav>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
      </header>

      {page === "practice" && (
        <>
          <section className="hero">
            <div>
              <span className="eyebrow">{t.heroEyebrow}</span>
              <h1>{t.heroTitleLine1}<br /><em>{t.heroTitleLine2}</em></h1>
              <p>{t.heroBody}</p>
              <button className="primary" onClick={() => document.getElementById("library")?.scrollIntoView({ behavior: "smooth" })}>
                {t.heroCta} <span>↓</span>
              </button>
            </div>
            <div className="featured">
              <VideoPlayer video={selectedPractice} locale={locale} />
              <div className="featured-meta">
                <div><span>{catLabel[selectedPractice.category]}</span><h2>{localizedVideo(selectedPractice, locale).title}</h2></div>
                <span className="time">{selectedPractice.duration}</span>
              </div>
            </div>
          </section>

          <section className="library" id="library">
            <div className="section-heading">
              <div><span className="eyebrow">{t.libraryEyebrow}</span><h2>{t.libraryTitle}</h2></div>
              <label className="search">
                <span aria-hidden="true">⌕</span>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchAriaLabel} />
              </label>
            </div>
            <div className="filters" aria-label={t.filtersAriaLabel}>
              {categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{catLabel[item]}</button>)}
            </div>
            <div className="video-grid">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} selected={selectedPractice.id === video.id} locale={locale} onSelect={() => {
                  setSelectedPractice(video);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} />
              ))}
            </div>
            {filteredVideos.length === 0 && <p className="empty">{t.emptyResults}</p>}
          </section>
        </>
      )}

      {page === "interviews" && (
        <section className="interview-page">
          <div className="page-intro">
            <span className="eyebrow">{t.interviewsEyebrow}</span>
            <h1>{t.interviewsTitleLine1}<br /><em>{t.interviewsTitleLine2}</em></h1>
            <p>{t.interviewsBody}</p>
          </div>
          <div className="interview-layout">
            <div>
              <VideoPlayer video={selectedInterview} locale={locale} />
              <div className="interview-now"><span>{t.nowPlaying}</span><h2>{localizedVideo(selectedInterview, locale).title}</h2></div>
            </div>
            <div className="interview-list">
              {interviewVideos.map((video, index) => (
                <button key={video.id} className={selectedInterview.id === video.id ? "active" : ""} onClick={() => setSelectedInterview(video)}>
                  <span className="interview-number">0{index + 1}</span>
                  <span><b>{localizedVideo(video, locale).title}</b><small>{video.duration} · {t.playInterview}</small></span>
                  <span className="round-play" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          <div className="written-interview">
            <figure className="written-photo">
              <img src="/kamala.jpg" alt={t.writtenPhotoName} loading="lazy" />
              <figcaption>
                <b>{t.writtenPhotoName}</b>
                <small>{t.writtenPhotoAffiliation1}<br />{t.writtenPhotoAffiliation2}</small>
              </figcaption>
            </figure>
            <div className="written-copy">
              <span className="eyebrow">{t.writtenEyebrow}</span>
              <h2>{t.writtenTitle}</h2>
              <p>{t.writtenP1}</p>
              <p>{t.writtenP2}</p>
              <p>{t.writtenP3}</p>
              <p>{t.writtenP4}</p>
              <p>{t.writtenP5}</p>
              <h3>{t.writtenContentHeading}</h3>
              <p><b>{t.writtenContentChairLabel}</b>{t.writtenContentChairBody}</p>
              <p><b>{t.writtenContentSunLabel}</b>{t.writtenContentSunBody}</p>
              <h3>{t.writtenFeaturesHeading}</h3>
              <p>{t.writtenFeaturesBody}</p>
              <h3>{t.writtenNursingHeading}</h3>
              <p>{t.writtenNursingBody}</p>
            </div>
          </div>
        </section>
      )}

      {page === "credits" && (
        <section className="credits-page">
          <div className="credits-hero">
            <span className="eyebrow">{t.creditsEyebrow}</span>
            <h1>{t.creditsTitleLine1}<br /><em>{t.creditsTitleLine2}</em></h1>
            <p>{t.creditsBody}</p>
          </div>
          <div className="credits-grid">
            <article className="team-card">
              <span className="card-kicker">{t.devTeamKicker}</span>
              <h2>CSC2101 & CSC2102</h2>
              <p className="course">{t.devTeamCourse}</p>
              <div className="member-grid">
                {["Jocasta Tan", "Daniel Soong", "Kaam Yan Hye", "Natalie Narayanan"].map((name) => (
                  <div key={name}><b>{name}</b></div>
                ))}
              </div>
            </article>
            <div className="credit-stack">
              <article><span>{t.facultyAdvisorLabel}</span><h3>{t.facultyAdvisorName}</h3></article>
              <article><span>{t.supportedByLabel}</span><h3>{t.supportedBy1}</h3><p>{t.supportedBy2}<br />{t.supportedBy3}</p></article>
            </div>
          </div>
          <aside className="thanks">
            <span className="quote-mark">“</span>
            <div><span className="eyebrow">{t.specialThanksLabel}</span><h2>{t.specialThanksName}</h2><p>{t.specialThanksBody}</p></div>
          </aside>
          <div className="open-source">
            <div><span className="brand-mark">H</span><p><b>{t.openByDesign}</b><br />{t.openByDesignBody}</p></div>
            <a href="https://github.com/drpeteryau/lts-proj-yoga" target="_blank" rel="noreferrer">{t.viewOnGithub}</a>
          </div>
        </section>
      )}

      <footer>
        <button className="brand" onClick={() => navigate("practice")}><span className="brand-mark">H</span><span><b>Heal</b><strong>Yoga</strong></span></button>
        <p>{t.footerTagline}</p>
        <span>{t.footerAttribution}</span>
      </footer>
    </main>
  );
}
