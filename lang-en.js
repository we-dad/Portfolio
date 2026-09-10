// English text for the portfolio.
//
// SOURCES (every CV string below is copied word-for-word):
//   [CV-1] = Wedad_Salem_Software_Developer_CV.docx  (the previous CV)
//   [CV-2] = Wedad_Salem_Game_Programmer_CV.pdf      (the newer CV)
// The "UI TEXT" block at the bottom is website-only wording with no CV equivalent.
//
window.I18N = window.I18N || {};
window.I18N.en = {

  /* ===== IDENTITY, SUMMARY — [CV-1] ===== */

  "name": "WEDAD SALEM",
  "job_title": "C# / .NET Software Developer",
  "job_title_short": "Software Developer",
  "location_value": "Riyadh, Saudi Arabia",

  "summary": "Software developer with 4+ years building and shipping production software in C# and Swift, a Windows desktop management application, an iOS app connecting property owners with interior designers, and five game titles as sole or lead programmer. Own a product end to end: architecture, database design, offline sync, access control, and the release pipeline. B.Sc. in Computer Science and Apple Developer Academy graduate.",

  /* ===== SKILLS — [CV-1] ===== */

  "head_skills": "SKILLS",
  "skill_languages": "Languages",
  "skill_frameworks": "Frameworks and Engines",
  "skill_backend": "Backend and Data",
  "skill_architecture": "Architecture",
  "skill_tools": "Tools and Delivery",
  "skill_platforms": "Platforms",
  "skill_spoken": "Spoken Languages",
  "lang_arabic": "Arabic (Native)",
  "lang_english": "English (Professional Working)",

  /* ===== EXPERIENCE — [CV-2] ===== */

  "head_experience": "EXPERIENCE",

  "exp1_role": "Freelance Game and Software Developer",
  "exp1_org": "Self-employed",
  "exp1_meta": "Remote  |  Jan 2025 – Present",
  "exp1_b1": "Deliver game and software projects end to end on short term contracts, owning design input, architecture, and release.",
  "exp1_b2": "Designed and built Cyber Hero, a security education game for children, sole developer from concept to a released macOS build.",
  "exp1_b3": "Built a Windows desktop management application covering role-based access control, offline-first data sync, and in-place updates that leave live business data intact.",

  "exp2_role": "Game Programmer",
  "exp2_meta": "Contract  |  Remote  |  Dec 2023 – May 2024",
  "exp2_b1": "Shipped three mobile games as sole or lead programmer, from spec to release: Albalsha-Beileid (Eid mini-game collection, mobile web), Jaber Chem (educational chemistry title), and a Saudi Foundation Day memory card game.",
  "exp2_b2": "Integrated PlayFab leaderboards and backend services to add competition and replayability across titles.",
  "exp2_b3": "Worked with designers and artists across iteration cycles to refine mechanics and hold ship dates.",

  "exp3_role": "Game Development Instructor",
  "exp3_meta": "Seasonal contract  |  Riyadh, KSA  |  Jul 2023 – Sep 2023",
  "exp3_b1": "Mentored student teams through the Gamers8 program, guiding them from concept to a playable Unity build across a sprint that ran several weeks, reviewing code and supporting both design decisions and technical implementation.",

  "exp4_role": "Game Developer, Incubator Program",
  "exp4_meta": "Riyadh, KSA  |  Oct 2022 – Apr 2023",
  "exp4_b1": "Selected for a games-focused startup incubator; developed and pitched a game concept to investors and publishers under industry mentorship, collaborating with international teams on design, marketing, and monetization.",

  "exp5_role": "Game Programmer",
  "exp5_meta": "Contract  |  Remote  |  Feb 2022 – Apr 2022",
  "exp5_b1": "Shipped a Unity mobile game to the Google Play Store, contributing across gameplay code, UI, and the full release pipeline.",
  "exp5_b2": "Integrated PlayFab for login, player ID assignment, and leaderboards.",
  "exp5_b3": "Built UI that adapts across screen sizes using Unity's Grid Layout Group, UI masking, and sprite configuration, and created gameplay animations.",

  "exp6_role": "Web Developer",
  "exp6_org": "Ministry of Communications and Information Technology",
  "exp6_meta": "Training program  |  KSA  |  Nov 2021 – Dec 2021",
  "exp6_b1": "Built a full stack web application using ASP.NET MVC, C#, JavaScript, HTML/CSS, and SQL.",

  /* ===== PROJECTS ===== */

  "head_projects": "PROJECTS",

  /* Cyber Hero — [CV-2] */
  "proj1_sub": "Security Education Game for Children",
  "proj1_meta": "Unity 2D, C#, PlayFab, RTLTMPro, ScriptableObjects, Unity Test Framework | Freelance client, released for macOS",
  "proj1_b1": "Built a four-stage educational game solo, giving each stage a different genre so the interaction itself carries the lesson: a password builder driven by dragging characters into slots, a shooter that separates firewall from antivirus, a sorting game on what to keep private, and a quiz gate.",
  "proj1_b2": "Chose composition over inheritance to run three unrelated genres under one progression system, with a persistent GameManager owning hearts, timer, dialogue, and scene flow, and one StageRules component per stage holding only its own logic, so adding the fourth stage required no change to the first three.",
  "proj1_b3": "Built the progression layer shared by every stage: lives, countdown timer, stars and coins awarded on time and accuracy, a cosmetic name-tag shop, and a personalized certificate reporting per-stage times, attempts, and quiz accuracy, with the same figures sent to PlayFab analytics.",
  "proj1_b4": "Authored quiz questions and shop items as ScriptableObject data assets so content is revised without a rebuild, and covered the heart-loss system with EditMode and PlayMode tests.",

  /* Space Genie — [CV-1] */
  "proj2_sub": "iOS App Connecting Property Owners and Interior Designers",
  "proj2_meta": "Swift, SwiftUI, Firebase, OpenAI API | Apple Developer Academy project, 2023",
  "proj2_b1": "Shipped an iOS app connecting property owners with interior designers, serving both account types from one SwiftUI codebase with role-based navigation.",
  "proj2_b2": "Led technical direction for a three-person team, defining a shared design system and component library before feature work so the UI stayed consistent across parallel development.",
  "proj2_b3": "Modeled the Firestore chat as a denormalized dual-write, cutting the conversation list to a single ordered listener with no composite index and trading write cost for the far more frequent read path.",
  "proj2_b4": "Integrated the OpenAI API as an in-app design assistant presented as an ordinary chat thread, so AI and human conversations shared one interface.",

  /* Cows & Bulls — [CV-2] */
  "proj3_sub": "Guessing Number Game",
  "proj3_meta": "Unity 6, C#, PlayFab, Unity Localization, Addressables | Personal, three months solo",
  "proj3_b1": "Designed and built the full game solo, framing the entire UI as a card payment terminal that prints each guess as a paper receipt.",
  "proj3_b2": "Built a set of coordinated management systems that work together, each owning its own responsibility.",
  "proj3_b3": "Enabled sharing a full game by rendering the entire guess history through a content-sized camera into one image passed to the native iOS and Android share sheet.",

  /* Battle Simulator — [CV-2] */
  "proj4_sub": "ECS/DOTS Strategy Game",
  "proj4_meta": "Unity ECS/DOTS, C# | Personal",
  "proj4_b1": "Built a strategy game on a data-oriented architecture where players compose a Blue Team to counter a procedurally generated Red Team each match.",
  "proj4_b2": "Made unit behaviors and stats fully modular and swappable without touching combat code, keeping the simulation stable as entity counts scale.",

  /* Sambosa Shop — [CV-2] */
  "proj5_sub": "Timed Mobile Prototype",
  "proj5_meta": "Unity URP, C# | Personal prototype, 2026",
  "proj5_b1": "Turned paper-folding mechanics into a samosa-making game built on procedural fold mesh math, an event-driven state machine, and ScriptableObject order data. Demo video and technical documentation included.",

  /* Al-Masar Al-Thahabi — [CV-2] */
  "proj6_sub": "Real Estate and Installment Contract Management",
  "proj6_meta": ".NET 10, C#, Avalonia UI 11.3 (MVVM), SQLite, Supabase, QuestPDF, Velopack | Freelance client, in production",
  "proj6_b1": "Shipped a Windows desktop application with an offline-first SQLite and Supabase architecture so a dropped connection never blocks a contract from being written, four-role access control enforced through database row-level security, and in-place updates that leave live business data intact.",

  /* ===== EDUCATION — [CV-1] ===== */

  "head_education": "EDUCATION",

  "edu1_title": "iOS App Developer Program",
  "edu1_org": "Apple Developer Academy, TUWAIQ",
  "edu1_meta": "Riyadh, KSA  |  Oct 2022 – Jun 2023",
  "edu1_desc": "Nine-month Challenge-Based Learning program. Shipped four iOS apps in Swift and Xcode with cross-functional teams, including Space Genie (above), Memory Cards, and Roomade.",

  "edu2_title": "Game Development Bootcamp",
  "edu2_org": "Saudi Digital Academy and Coding Dojo",
  "edu2_meta": "Remote  |  Jul 2021 – Nov 2021",
  "edu2_desc": "Unity, C#, game design, UX, multiplayer patterns, mobile publishing, and cloud collaboration.",

  "edu3_title": "B.Sc. Computer Science",
  "edu3_org": "Taibah University",
  "edu3_meta": "KSA  |  Jan 2016 – Apr 2021",

  /* ===== UI TEXT — website labels only, NOT from any CV ===== */

  "nav_skills": "Skills",
  "nav_experience": "Experience",
  "nav_projects": "Projects",
  "nav_education": "Education",
  "ui_head_contact": "CONTACT",
  "ui_contact": "Contact",
  "ui_system_boot": "// SYSTEM BOOT",
  "ui_loading": "LOADING WEDAD_SALEM.profile",
  "ui_open_to_work": "OPEN TO WORK",
  "ui_view_projects": "▶ View Projects",
  "ui_get_in_touch": "✉ Get in Touch",
  "ui_role": "ROLE",
  "ui_stack": "STACK",
  "ui_experience_years": "EXPERIENCE",
  "ui_years": "4+ years",
  "ui_location": "LOCATION",
  "ui_education": "EDUCATION",
  "ui_01": "// 01",
  "ui_02": "// 02",
  "ui_03": "// 03",
  "ui_04": "// 04",
  "ui_05": "// 05",
  "ui_email": "Email",
  "ui_phone": "Phone",
  "ui_profiles": "Profiles",
  "ui_copyright": "© 2026 WEDAD SALEM"
};