export type Locale = "en" | "zh-Hant" | "zh-Hans";

export const locales: Locale[] = ["en", "zh-Hant", "zh-Hans"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "zh-Hant": "繁體",
  "zh-Hans": "简体",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
};

type Category = "Advanced" | "Intermediate" | "Standing" | "Sitting" | "Interview";

export const ui: Record<Locale, Record<string, string>> = {
  en: {
    navPractice: "Practice",
    navInterviews: "Interviews",
    navCredits: "Credits",
    brandHome: "Heal Yoga home",

    heroEyebrow: "Movement for every body",
    heroTitleLine1: "Find your balance,",
    heroTitleLine2: "one pose at a time.",
    heroBody: "Accessible, instructor-led yoga demonstrations designed for students, older adults, and everyone beginning their wellness journey.",
    heroCta: "Explore 22 practices",

    libraryEyebrow: "Guided library",
    libraryTitle: "Choose your practice",
    searchPlaceholder: "Search poses",
    searchAriaLabel: "Search yoga poses",
    filtersAriaLabel: "Filter by practice type",
    emptyResults: "No poses match your search. Try a different term.",

    interviewsEyebrow: "Conversations on wellbeing",
    interviewsTitleLine1: "Hear from the people",
    interviewsTitleLine2: "behind the practice.",
    interviewsBody: "Short perspectives from clinical and yoga professionals on accessible movement, healthy ageing, and the thinking behind Heal Yoga.",
    nowPlaying: "Now playing",
    playInterview: "Play interview",

    writtenPhotoName: "A/Prof Kamala Devi",
    writtenPhotoAffiliation1: "School of Medicine, Dentistry & Nursing",
    writtenPhotoAffiliation2: "University of Glasgow",
    writtenEyebrow: "In her own words",
    writtenTitle: "A nursing perspective on Heal Yoga",
    writtenP1: "The objectives of launching this app are to help seniors build a foundation in yoga practice; help them turn their practice into a habit; help them strengthen their body, calm their mind and feel happy through regular practice.",
    writtenP2: "There are numerous yoga poses. This app highlights a few well-known and accessible poses for seniors, as it is crucial for seniors to learn useful poses while ensuring the poses are not too difficult to follow.",
    writtenP3: "The term “seniors” is used loosely here: it can mean retirees; people who have reached the retirement age but are working; people who have not hit the retirement age but choose to step down; or working adults who feel that they lack the stamina to exercise but want to try out yoga.",
    writtenP4: "This app contains chair yoga poses for beginners, as well as intermediate and advanced poses on the mat. As this app caters to seniors who do self-practice without guidance, the poses are kept simple and accessible. The sequence is designed so seniors get to warm up, do the poses and cool down. The poses aim to provide stretching, muscle strengthening, cardio training, balancing and breath work, and cover the sagittal, frontal and transverse planes of motion so practice is well covered in all directions.",
    writtenP5: "An important reminder for seniors using this app is to breathe deeply and calmly during their practice, which is the essence of yoga. Regular yoga practice helps to strengthen the body, align posture, calm the mind, focus better, improve endurance and promote positive living.",
    writtenContentHeading: "Content",
    writtenContentChairLabel: "Chair yoga (beginner’s level)",
    writtenContentChairBody: " — Practising with a chair helps seniors ease into poses they find challenging and stay in the pose longer to reap its benefits. Chair yoga is highly recommended when ground practice is inaccessible or impractical.",
    writtenContentSunLabel: "Sun salutation (intermediate and advanced level)",
    writtenContentSunBody: " — An important flow sequence in yoga asana which promotes spine health, shoulders and chest opening, and limbs and core strength. It can be used as a warm-up once seniors become familiar with the poses; intermediate level focuses on isolated poses while advanced level focuses on the flow sequence and cardio training.",
    writtenFeaturesHeading: "App features",
    writtenFeaturesBody: "To encourage regular and frequent practice, the app helps seniors track their progress by showing their weekly cumulative practice duration. Once a milestone is reached, they receive a trophy. We also track how seniors feel by asking a number of questions after a month of practice, to increase their body awareness.",
    writtenNursingHeading: "A nursing standpoint",
    writtenNursingBody: "Regular yoga practice offers multidimensional health benefits that are particularly relevant for seniors. Physiologically, yoga enhances musculoskeletal strength, joint mobility, and balance, thereby reducing the risk of falls, a major concern in geriatric care. Controlled breathing and mindful movement improve cardiopulmonary endurance and support better management of chronic conditions such as hypertension, diabetes, and arthritis. Psychologically, yoga fosters relaxation, reduces anxiety, and promotes emotional resilience, which is essential for maintaining mental wellbeing in later life. Importantly, yoga encourages self-efficacy and active participation in health maintenance, aligning with nursing goals of empowering individuals to take ownership of their health and promoting holistic, person-centred care.",

    creditsEyebrow: "A university collaboration",
    creditsTitleLine1: "Built with care.",
    creditsTitleLine2: "Shared with purpose.",
    creditsBody: "Heal Yoga is a higher education initiative using open-source mobile technology to make yoga practice and public health awareness more accessible to youth and older adults.",
    devTeamKicker: "Development team",
    devTeamCourse: "Professional Software Development & Team Project",
    facultyAdvisorLabel: "Faculty advisor",
    facultyAdvisorName: "Dr Peter CY Yau",
    facultyAdvisorGithub: "github.com/drpeteryau ↗",
    supportedByLabel: "Supported by",
    supportedByUniversity: "University of Glasgow",
    supportedBySchool1: "School of Computing Science",
    supportedBySchool2: "School of Medicine, Dentistry & Nursing",
    supportedByInstitute: "Singapore Institute of Technology",
    specialThanksLabel: "Special thanks",
    specialThanksName: "Ms Lim Li Peng",
    specialThanksBody:
      "This project simply could not have come together without Ms Lim Li Peng's generous support. As our professional yoga instructor, she gave countless hours to the many rounds of video filming — patiently demonstrating and re-demonstrating every pose, guiding retakes, and sharing her expertise so each movement would be safe and easy to follow. Her time, care, and encouragement carried this project from an idea to something we're genuinely proud of, and we're deeply grateful for it.",
    specialThanksLink: "Visit Ms Lim's yoga workshop ↗",
    openByDesign: "Open by design.",
    openByDesignBody: "Created for learning, wellbeing, and public benefit.",
    viewOnGithub: "View the project on GitHub ↗",

    footerTagline: "Move gently. Breathe freely. Practice safely.",
    footerAttribution: "University of Glasgow · Academic project",

    languageLabel: "Language",
  },
  "zh-Hant": {
    navPractice: "練習",
    navInterviews: "訪談",
    navCredits: "製作團隊",
    brandHome: "回到 Heal Yoga 首頁",

    heroEyebrow: "適合每一種體態的運動",
    heroTitleLine1: "找回你的平衡，",
    heroTitleLine2: "從每一個體式開始。",
    heroBody: "由專業教練示範、簡單易懂的瑜伽練習，專為學生、年長者，以及每一位剛踏上健康旅程的人而設計。",
    heroCta: "探索 22 個練習",

    libraryEyebrow: "引導式影片庫",
    libraryTitle: "選擇你的練習",
    searchPlaceholder: "搜尋體式",
    searchAriaLabel: "搜尋瑜伽體式",
    filtersAriaLabel: "依練習類型篩選",
    emptyResults: "找不到符合搜尋的體式，請嘗試其他關鍵字。",

    interviewsEyebrow: "關於健康的對話",
    interviewsTitleLine1: "聆聽這些人的分享，",
    interviewsTitleLine2: "看見練習背後的故事。",
    interviewsBody: "來自臨床與瑜伽專業人士的簡短分享，談論無障礙運動、健康老化，以及 Heal Yoga 背後的理念。",
    nowPlaying: "現正播放",
    playInterview: "播放訪談",

    writtenPhotoName: "Kamala Devi 副教授",
    writtenPhotoAffiliation1: "醫學、牙科與護理學院",
    writtenPhotoAffiliation2: "格拉斯哥大學",
    writtenEyebrow: "她的第一手分享",
    writtenTitle: "從護理角度看 Heal Yoga",
    writtenP1: "推出這款應用程式的目的，是協助年長者建立瑜伽練習的基礎，幫助他們把練習變成日常習慣，並透過持續練習強健身體、安定心神、感受快樂。",
    writtenP2: "瑜伽體式種類繁多。這款應用程式精選了幾種廣為人知、容易上手的體式，因為對年長者而言，學習實用且不會太難跟上的體式非常重要。",
    writtenP3: "這裡所說的「年長者」定義較為寬鬆：可以是退休人士；已達退休年齡但仍在工作的人；尚未到退休年齡卻選擇提前退下來的人；或是自覺體力不足以運動、但想嘗試瑜伽的在職人士。",
    writtenP4: "這款應用程式收錄了適合初學者的椅子瑜伽體式，以及在瑜伽墊上進行的中階與進階體式。由於這款應用程式主要提供給無人指導、自行練習的年長者使用，體式設計力求簡單易懂。整套練習依序安排暖身、體式練習與收操。這些體式旨在提供伸展、肌肉強化、心肺訓練、平衡與呼吸練習，並涵蓋矢狀面、額狀面與水平面等多個動作平面，讓練習能全方位兼顧各個方向。",
    writtenP5: "提醒使用這款應用程式的年長者，練習時務必保持深沉、平穩的呼吸，這正是瑜伽的精髓所在。規律的瑜伽練習有助強健身體、端正體態、安定心神、提升專注力、增強耐力，並促進積極正向的生活態度。",
    writtenContentHeading: "內容",
    writtenContentChairLabel: "椅子瑜伽（初學者程度）",
    writtenContentChairBody: " —— 藉助椅子練習，能幫助年長者更容易進入具挑戰性的體式，並延長停留時間以獲得更多效益。當無法在地面練習或不方便這樣做時，特別推薦椅子瑜伽。",
    writtenContentSunLabel: "拜日式（中階與進階程度）",
    writtenContentSunBody: " —— 這是瑜伽體位法中重要的連貫動作序列，有助促進脊椎健康、打開肩胸，並強化四肢與核心力量。當年長者熟悉各個體式後，可作為暖身之用；中階程度著重個別體式，進階程度則著重連貫動作序列與心肺訓練。",
    writtenFeaturesHeading: "應用程式功能",
    writtenFeaturesBody: "為鼓勵規律且頻繁的練習，這款應用程式會顯示每週累積練習時長，協助年長者追蹤進度。達成里程碑後，即可獲得獎盃。我們也會在練習滿一個月後，透過幾個問題了解年長者的感受，提升他們對自己身體狀態的覺察。",
    writtenNursingHeading: "護理角度的觀點",
    writtenNursingBody: "規律的瑜伽練習能帶來多方面的健康效益，對年長者尤其重要。從生理層面來看，瑜伽能增進肌肉骨骼力量、關節活動度與平衡感，進而降低老年照護中特別關注的跌倒風險。控制呼吸與專注的動作有助改善心肺耐力，並協助更妥善地管理高血壓、糖尿病、關節炎等慢性病。從心理層面來看，瑜伽有助放鬆身心、減輕焦慮，並增強情緒韌性，這對維持晚年心理健康至關重要。更重要的是，瑜伽能提升自我效能，鼓勵人們主動參與自身健康管理，呼應護理專業以人為本、賦權個人掌握自身健康的整全照護理念。",

    creditsEyebrow: "大學合作計畫",
    creditsTitleLine1: "用心打造。",
    creditsTitleLine2: "與眾人分享。",
    creditsBody: "Heal Yoga 是一項高等教育計畫，運用開源行動技術，讓瑜伽練習與公共衛生意識更容易觸及青年與年長者。",
    devTeamKicker: "開發團隊",
    devTeamCourse: "專業軟體開發與團隊專案",
    facultyAdvisorLabel: "指導教師",
    facultyAdvisorName: "Dr Peter CY Yau",
    facultyAdvisorGithub: "github.com/drpeteryau ↗",
    supportedByLabel: "支持單位",
    supportedByUniversity: "格拉斯哥大學",
    supportedBySchool1: "電腦科學學院",
    supportedBySchool2: "醫學、牙科與護理學院",
    supportedByInstitute: "新加坡理工學院",
    specialThanksLabel: "特別感謝",
    specialThanksName: "Ms Lim Li Peng",
    specialThanksBody:
      "若沒有林麗萍女士的慷慨支持，這個專案絕不可能完成。身為專業瑜伽導師，她為了多次的影片拍攝付出了無數時間——耐心地一次又一次示範每個體位、配合重拍，並分享她的專業知識，確保每個動作都安全易學。她的時間、用心與鼓勵，讓這個專案從一個構想走到我們如今引以為傲的成果，我們由衷感激。",
    specialThanksLink: "造訪林女士的瑜伽工作坊 ↗",
    openByDesign: "開放，是我們的設計理念。",
    openByDesignBody: "為學習、身心健康與公眾利益而生。",
    viewOnGithub: "在 GitHub 上查看專案 ↗",

    footerTagline: "輕柔活動身體，自在呼吸，安全練習。",
    footerAttribution: "格拉斯哥大學 · 學術專案",

    languageLabel: "語言",
  },
  "zh-Hans": {
    navPractice: "练习",
    navInterviews: "访谈",
    navCredits: "制作团队",
    brandHome: "回到 Heal Yoga 首页",

    heroEyebrow: "适合每一种体态的运动",
    heroTitleLine1: "找回你的平衡，",
    heroTitleLine2: "从每一个体式开始。",
    heroBody: "由专业教练示范、简单易懂的瑜伽练习，专为学生、年长者，以及每一位刚踏上健康旅程的人而设计。",
    heroCta: "探索 22 个练习",

    libraryEyebrow: "引导式视频库",
    libraryTitle: "选择你的练习",
    searchPlaceholder: "搜索体式",
    searchAriaLabel: "搜索瑜伽体式",
    filtersAriaLabel: "按练习类型筛选",
    emptyResults: "没有找到符合搜索的体式，请尝试其他关键词。",

    interviewsEyebrow: "关于健康的对话",
    interviewsTitleLine1: "聆听这些人的分享，",
    interviewsTitleLine2: "看见练习背后的故事。",
    interviewsBody: "来自临床与瑜伽专业人士的简短分享，谈论无障碍运动、健康老龄化，以及 Heal Yoga 背后的理念。",
    nowPlaying: "正在播放",
    playInterview: "播放访谈",

    writtenPhotoName: "Kamala Devi 副教授",
    writtenPhotoAffiliation1: "医学、牙科与护理学院",
    writtenPhotoAffiliation2: "格拉斯哥大学",
    writtenEyebrow: "她的第一手分享",
    writtenTitle: "从护理角度看 Heal Yoga",
    writtenP1: "推出这款应用程序的目的，是帮助年长者建立瑜伽练习的基础，帮助他们把练习变成日常习惯，并通过持续练习强健身体、安定心神、感受快乐。",
    writtenP2: "瑜伽体式种类繁多。这款应用程序精选了几种广为人知、容易上手的体式，因为对年长者而言，学习实用且不会太难跟上的体式非常重要。",
    writtenP3: "这里所说的“年长者”定义较为宽泛：可以是退休人士；已达退休年龄但仍在工作的人；尚未到退休年龄却选择提前退下来的人；或是自觉体力不足以运动、但想尝试瑜伽的在职人士。",
    writtenP4: "这款应用程序收录了适合初学者的椅子瑜伽体式，以及在瑜伽垫上进行的中阶与进阶体式。由于这款应用程序主要提供给无人指导、自行练习的年长者使用，体式设计力求简单易懂。整套练习依序安排热身、体式练习与放松。这些体式旨在提供拉伸、肌肉强化、心肺训练、平衡与呼吸练习，并涵盖矢状面、额状面与水平面等多个动作平面，让练习能全方位兼顾各个方向。",
    writtenP5: "提醒使用这款应用程序的年长者，练习时务必保持深沉、平稳的呼吸，这正是瑜伽的精髓所在。规律的瑜伽练习有助强健身体、端正体态、安定心神、提升专注力、增强耐力，并促进积极正向的生活态度。",
    writtenContentHeading: "内容",
    writtenContentChairLabel: "椅子瑜伽（初学者程度）",
    writtenContentChairBody: " —— 借助椅子练习，能帮助年长者更容易进入具挑战性的体式，并延长停留时间以获得更多益处。当无法在地面练习或不方便这样做时，特别推荐椅子瑜伽。",
    writtenContentSunLabel: "拜日式（中阶与进阶程度）",
    writtenContentSunBody: " —— 这是瑜伽体位法中重要的连贯动作序列，有助促进脊椎健康、打开肩胸，并强化四肢与核心力量。当年长者熟悉各个体式后，可作为热身之用；中阶程度着重个别体式，进阶程度则着重连贯动作序列与心肺训练。",
    writtenFeaturesHeading: "应用程序功能",
    writtenFeaturesBody: "为鼓励规律且频繁的练习，这款应用程序会显示每周累计练习时长，协助年长者追踪进度。达成里程碑后，即可获得奖杯。我们也会在练习满一个月后，通过几个问题了解年长者的感受，提升他们对自己身体状态的觉察。",
    writtenNursingHeading: "护理角度的观点",
    writtenNursingBody: "规律的瑜伽练习能带来多方面的健康益处，对年长者尤其重要。从生理层面来看，瑜伽能增进肌肉骨骼力量、关节活动度与平衡感，进而降低老年照护中特别关注的跌倒风险。控制呼吸与专注的动作有助改善心肺耐力，并协助更妥善地管理高血压、糖尿病、关节炎等慢性病。从心理层面来看，瑜伽有助放松身心、减轻焦虑，并增强情绪韧性，这对维持晚年心理健康至关重要。更重要的是，瑜伽能提升自我效能，鼓励人们主动参与自身健康管理，呼应护理专业以人为本、赋权个人掌握自身健康的整全照护理念。",

    creditsEyebrow: "大学合作计划",
    creditsTitleLine1: "用心打造。",
    creditsTitleLine2: "与众人分享。",
    creditsBody: "Heal Yoga 是一项高等教育计划，运用开源移动技术，让瑜伽练习与公共卫生意识更容易触及青年与年长者。",
    devTeamKicker: "开发团队",
    devTeamCourse: "专业软件开发与团队项目",
    facultyAdvisorLabel: "指导教师",
    facultyAdvisorName: "Dr Peter CY Yau",
    facultyAdvisorGithub: "github.com/drpeteryau ↗",
    supportedByLabel: "支持单位",
    supportedByUniversity: "格拉斯哥大学",
    supportedBySchool1: "计算机科学学院",
    supportedBySchool2: "医学、牙科与护理学院",
    supportedByInstitute: "新加坡理工学院",
    specialThanksLabel: "特别感谢",
    specialThanksName: "Ms Lim Li Peng",
    specialThanksBody:
      "若没有林丽萍女士的慷慨支持，这个项目绝不可能完成。身为专业瑜伽导师，她为了多次的视频拍摄付出了无数时间——耐心地一次又一次示范每个体式、配合重拍，并分享她的专业知识，确保每个动作都安全易学。她的时间、用心与鼓励，让这个项目从一个构想走到我们如今引以为傲的成果，我们由衷感激。",
    specialThanksLink: "访问林女士的瑜伽工作坊 ↗",
    openByDesign: "开放，是我们的设计理念。",
    openByDesignBody: "为学习、身心健康与公众利益而生。",
    viewOnGithub: "在 GitHub 上查看项目 ↗",

    footerTagline: "轻柔活动身体，自在呼吸，安全练习。",
    footerAttribution: "格拉斯哥大学 · 学术项目",

    languageLabel: "语言",
  },
};

export const categoryLabels: Record<Locale, Record<Category | "All", string>> = {
  en: {
    All: "All",
    Advanced: "Advanced",
    Intermediate: "Intermediate",
    Standing: "Standing",
    Sitting: "Sitting",
    Interview: "Interview",
  },
  "zh-Hant": {
    All: "全部",
    Advanced: "進階",
    Intermediate: "中階",
    Standing: "站姿",
    Sitting: "坐姿",
    Interview: "訪談",
  },
  "zh-Hans": {
    All: "全部",
    Advanced: "进阶",
    Intermediate: "中阶",
    Standing: "站姿",
    Sitting: "坐姿",
    Interview: "访谈",
  },
};

type VideoText = { title: string; description?: string };

export const videoText: Record<Locale, Record<string, VideoText>> = {
  en: {
    egNdbDDS_Ws: { title: "Interview 01 — A/Prof CK Seow" },
    dyYVJnccUx0: { title: "Interview 02 — A/Prof CK Seow" },
    IsGAZrjEMp4: { title: "Interview 03 — Ms LP Lim" },
    jV6KZ2no0Pg: { title: "Interview 02 — Ms LP Lim" },
    CiJ0R9ZugeY: { title: "Interview 01 — Ms LP Lim" },
    mzqsdpvfDto: {
      title: "Sun Salutation Flow",
      description: "A dynamic sequence that links breath with movement, warming up the whole body while improving flexibility, mobility, and circulation.",
    },
    m0b_BebYNBQ: {
      title: "Baby Cobra",
      description: "A gentle backbend that opens the chest and strengthens the upper back while encouraging mobility through the spine.",
    },
    hComtEvbgN4: {
      title: "Eight-Point Pose",
      description: "A controlled lowering position where eight points of the body connect with the floor, helping strengthen the arms, shoulders, chest, and core.",
    },
    "Ma93Zxwp_-o": {
      title: "Plank",
      description: "A full body strength pose that engages the core, shoulders, arms, and legs while building stability and body control.",
    },
    "0MUxqZmmmq8": {
      title: "Downward Dog",
      description: "A full body stretch that lengthens the spine, shoulders, hamstrings, and calves while strengthening the upper body.",
    },
    ze9cJVnkYOg: {
      title: "Triangle Pose",
      description: "A standing stretch that opens the hips and chest while lengthening the sides of the body and improving balance.",
    },
    "aP40k--wiPo": {
      title: "Side Angle Pose",
      description: "A deep standing stretch that strengthens the legs while opening the hips, chest, shoulders, and side body.",
    },
    "1EmtCVdAKuI": {
      title: "Reverse Warrior 2",
      description: "A flowing side stretch from Warrior 2 that opens the ribs and waist while maintaining strength and stability through the legs.",
    },
    D8OEOqj6LKo: {
      title: "Warrior 2",
      description: "A strong standing pose that builds leg endurance and hip mobility while opening the chest and improving balance.",
    },
    ETFrnz9CCsw: {
      title: "Warrior 1",
      description: "A powerful standing pose that strengthens the legs while stretching the hips and opening the chest and shoulders.",
    },
    vpECbuWGnVw: {
      title: "Warrior 3",
      description: "A single leg balance that challenges stability while strengthening the legs, core, back, and glutes.",
    },
    "zr-EsTGQE3g": {
      title: "Standing Crunch",
      description: "A standing core movement that brings the upper and lower body together, activating the abdominal muscles while improving coordination and balance.",
    },
    qJHd5KIO35I: {
      title: "Back and Chest Stretch",
      description: "A mobility stretch that opens the chest and shoulders while releasing tension through the upper back.",
    },
    Z_LIRhABH7c: {
      title: "Goddess Pose (Leg Stretch)",
      description: "A wide stance squat that opens the hips and inner thighs while strengthening the glutes, thighs, and legs.",
    },
    r4ixF0BmzfI: {
      title: "Goddess Pose (Shoulders and Torso Twist)",
      description: "A Goddess stance combined with an upper body rotation to stretch the shoulders and spine while maintaining lower body strength.",
    },
    "78t9qqSWf4Q": {
      title: "Leg Raise (Straight)",
      description: "A controlled straight leg lift that strengthens the hip flexors and core while helping improve lower body mobility.",
    },
    "6tlBgzidSuU": {
      title: "Leg Raise (Bent)",
      description: "A bent knee leg lift that activates the core and hip muscles with a more controlled and accessible range of motion.",
    },
    "vkb-jrEq4sc": {
      title: "Shoulders and Torso Twist",
      description: "A rotational stretch that mobilizes the spine while releasing tension through the shoulders, chest, and upper back.",
    },
    "5jSzGqTOTeY": {
      title: "Shoulders Lateral Stretch",
      description: "A side bending stretch that lengthens the shoulders, upper back, waist, and sides of the torso.",
    },
    "-K7puFfQgIc": {
      title: "Bent Arm Rotation",
      description: "A shoulder mobility movement using bent arms to gently rotate the shoulder joints and loosen the upper body.",
    },
    oCGcR5GgpWI: {
      title: "Straight Arms Rotation",
      description: "A controlled arm rotation that works through a larger shoulder range of motion to improve mobility and warm up the shoulders.",
    },
    ZhelQy85j3M: {
      title: "Head, Neck and Shoulders Stretch",
      description: "A gentle mobility sequence designed to release tension around the neck, shoulders, and upper back while improving comfortable range of motion.",
    },
  },
  "zh-Hant": {
    egNdbDDS_Ws: { title: "訪談 01 — A/Prof CK Seow" },
    dyYVJnccUx0: { title: "訪談 02 — A/Prof CK Seow" },
    IsGAZrjEMp4: { title: "訪談 03 — Ms LP Lim" },
    jV6KZ2no0Pg: { title: "訪談 02 — Ms LP Lim" },
    CiJ0R9ZugeY: { title: "訪談 01 — Ms LP Lim" },
    mzqsdpvfDto: {
      title: "拜日式流",
      description: "一套結合呼吸與動作的連貫序列，能喚醒全身、提升柔軟度、關節活動度與血液循環。",
    },
    m0b_BebYNBQ: {
      title: "嬰兒眼鏡蛇式",
      description: "溫和的後彎體式，能打開胸腔、強化上背肌力，同時促進脊椎的活動度。",
    },
    hComtEvbgN4: {
      title: "八點式",
      description: "身體以八個支點緩緩下降貼地的控制性動作，有助強化手臂、肩膀、胸部與核心肌群。",
    },
    "Ma93Zxwp_-o": {
      title: "棒式",
      description: "全身性的力量體式，同時運用核心、肩膀、手臂與雙腿，建立穩定度與身體控制能力。",
    },
    "0MUxqZmmmq8": {
      title: "下犬式",
      description: "全身性的伸展體式，能拉長脊椎、肩膀、大腿後側與小腿，同時強化上半身力量。",
    },
    ze9cJVnkYOg: {
      title: "三角式",
      description: "站姿伸展體式，能打開髖部與胸腔，同時拉長身體側面並改善平衡感。",
    },
    "aP40k--wiPo": {
      title: "側角式",
      description: "深層的站姿伸展體式，能強化雙腿肌力，同時打開髖部、胸部、肩膀與身體側面。",
    },
    "1EmtCVdAKuI": {
      title: "反轉戰士二式",
      description: "由戰士二式延伸而出的流動側身伸展，能打開肋骨與腰側，同時維持雙腿的力量與穩定度。",
    },
    D8OEOqj6LKo: {
      title: "戰士二式",
      description: "強而有力的站姿體式，能增強雙腿耐力與髖部活動度，同時打開胸腔並改善平衡感。",
    },
    ETFrnz9CCsw: {
      title: "戰士一式",
      description: "強而有力的站姿體式，能強化雙腿肌力，同時伸展髖部並打開胸腔與肩膀。",
    },
    vpECbuWGnVw: {
      title: "戰士三式",
      description: "單腳平衡體式，考驗身體穩定度，同時強化雙腿、核心、背部與臀部肌群。",
    },
    "zr-EsTGQE3g": {
      title: "站姿捲腹",
      description: "站立進行的核心動作，將上下半身連結在一起，啟動腹部肌群，同時提升協調性與平衡感。",
    },
    qJHd5KIO35I: {
      title: "背胸伸展",
      description: "提升活動度的伸展體式，能打開胸腔與肩膀，同時釋放上背部的緊繃感。",
    },
    Z_LIRhABH7c: {
      title: "女神式（腿部伸展）",
      description: "寬站姿深蹲體式，能打開髖部與大腿內側，同時強化臀部、大腿與雙腿肌力。",
    },
    r4ixF0BmzfI: {
      title: "女神式（肩部與軀幹扭轉）",
      description: "結合女神式站姿與上半身旋轉動作，伸展肩膀與脊椎，同時維持下半身的力量。",
    },
    "78t9qqSWf4Q": {
      title: "直腿抬升",
      description: "控制性的直腿抬升動作，能強化髖屈肌與核心，同時協助改善下半身活動度。",
    },
    "6tlBgzidSuU": {
      title: "屈膝抬腿",
      description: "屈膝進行的抬腿動作，能啟動核心與髖部肌群，動作範圍更可控、也更容易上手。",
    },
    "vkb-jrEq4sc": {
      title: "肩部與軀幹扭轉",
      description: "旋轉伸展動作，能活動脊椎，同時釋放肩膀、胸部與上背部的緊繃感。",
    },
    "5jSzGqTOTeY": {
      title: "肩部側向伸展",
      description: "側彎伸展體式，能拉長肩膀、上背部、腰部與軀幹側面。",
    },
    "-K7puFfQgIc": {
      title: "屈臂旋轉",
      description: "以屈臂方式進行的肩部活動動作，能輕柔轉動肩關節並放鬆上半身。",
    },
    oCGcR5GgpWI: {
      title: "直臂旋轉",
      description: "控制性的手臂旋轉動作，透過更大範圍的肩部活動，提升活動度並為肩膀暖身。",
    },
    ZhelQy85j3M: {
      title: "頭頸肩伸展",
      description: "溫和的活動序列，能釋放頸部、肩膀與上背部的緊繃感，同時改善舒適的活動範圍。",
    },
  },
  "zh-Hans": {
    egNdbDDS_Ws: { title: "访谈 01 — A/Prof CK Seow" },
    dyYVJnccUx0: { title: "访谈 02 — A/Prof CK Seow" },
    IsGAZrjEMp4: { title: "访谈 03 — Ms LP Lim" },
    jV6KZ2no0Pg: { title: "访谈 02 — Ms LP Lim" },
    CiJ0R9ZugeY: { title: "访谈 01 — Ms LP Lim" },
    mzqsdpvfDto: {
      title: "拜日式流",
      description: "一套结合呼吸与动作的连贯序列，能唤醒全身、提升柔软度、关节活动度与血液循环。",
    },
    m0b_BebYNBQ: {
      title: "婴儿眼镜蛇式",
      description: "温和的后弯体式，能打开胸腔、强化上背肌力，同时促进脊椎的活动度。",
    },
    hComtEvbgN4: {
      title: "八点式",
      description: "身体以八个支点缓缓下降贴地的控制性动作，有助强化手臂、肩膀、胸部与核心肌群。",
    },
    "Ma93Zxwp_-o": {
      title: "平板支撑式",
      description: "全身性的力量体式，同时运用核心、肩膀、手臂与双腿，建立稳定度与身体控制能力。",
    },
    "0MUxqZmmmq8": {
      title: "下犬式",
      description: "全身性的伸展体式，能拉长脊椎、肩膀、大腿后侧与小腿，同时强化上半身力量。",
    },
    ze9cJVnkYOg: {
      title: "三角式",
      description: "站姿伸展体式，能打开髋部与胸腔，同时拉长身体侧面并改善平衡感。",
    },
    "aP40k--wiPo": {
      title: "侧角式",
      description: "深层的站姿伸展体式，能强化双腿肌力，同时打开髋部、胸部、肩膀与身体侧面。",
    },
    "1EmtCVdAKuI": {
      title: "反转战士二式",
      description: "由战士二式延伸而出的流动侧身伸展，能打开肋骨与腰侧，同时维持双腿的力量与稳定度。",
    },
    D8OEOqj6LKo: {
      title: "战士二式",
      description: "强而有力的站姿体式，能增强双腿耐力与髋部活动度，同时打开胸腔并改善平衡感。",
    },
    ETFrnz9CCsw: {
      title: "战士一式",
      description: "强而有力的站姿体式，能强化双腿肌力，同时伸展髋部并打开胸腔与肩膀。",
    },
    vpECbuWGnVw: {
      title: "战士三式",
      description: "单脚平衡体式，考验身体稳定度，同时强化双腿、核心、背部与臀部肌群。",
    },
    "zr-EsTGQE3g": {
      title: "站姿卷腹",
      description: "站立进行的核心动作，将上下半身连结在一起，启动腹部肌群，同时提升协调性与平衡感。",
    },
    qJHd5KIO35I: {
      title: "背胸伸展",
      description: "提升活动度的伸展体式，能打开胸腔与肩膀，同时释放上背部的紧绷感。",
    },
    Z_LIRhABH7c: {
      title: "女神式（腿部伸展）",
      description: "宽站姿深蹲体式，能打开髋部与大腿内侧，同时强化臀部、大腿与双腿肌力。",
    },
    r4ixF0BmzfI: {
      title: "女神式（肩部与躯干扭转）",
      description: "结合女神式站姿与上半身旋转动作，伸展肩膀与脊椎，同时维持下半身的力量。",
    },
    "78t9qqSWf4Q": {
      title: "直腿抬升",
      description: "控制性的直腿抬升动作，能强化髋屈肌与核心，同时协助改善下半身活动度。",
    },
    "6tlBgzidSuU": {
      title: "屈膝抬腿",
      description: "屈膝进行的抬腿动作，能启动核心与髋部肌群，动作范围更可控、也更容易上手。",
    },
    "vkb-jrEq4sc": {
      title: "肩部与躯干扭转",
      description: "旋转伸展动作，能活动脊椎，同时释放肩膀、胸部与上背部的紧绷感。",
    },
    "5jSzGqTOTeY": {
      title: "肩部侧向伸展",
      description: "侧弯伸展体式，能拉长肩膀、上背部、腰部与躯干侧面。",
    },
    "-K7puFfQgIc": {
      title: "屈臂旋转",
      description: "以屈臂方式进行的肩部活动动作，能轻柔转动肩关节并放松上半身。",
    },
    oCGcR5GgpWI: {
      title: "直臂旋转",
      description: "控制性的手臂旋转动作，通过更大范围的肩部活动，提升活动度并为肩膀热身。",
    },
    ZhelQy85j3M: {
      title: "头颈肩伸展",
      description: "温和的活动序列，能释放颈部、肩膀与上背部的紧绷感，同时改善舒适的活动范围。",
    },
  },
};
