import photo from "../assets/athiyaman.jpg";

export const profile = {
  name: "ATHIYAMAN T",
  role: "iOS Developer | Swift • SwiftUI • UIKit",
  tag: "Building seamless and powerful iOS experiences.",
  desc: "I build high-quality, scalable, and user-focused iOS applications with a passion for clean architecture, performance, and intuitive interfaces.",
  about:
    "iOS Developer with 3+ years of experience building scalable and high-performance iOS applications using Swift, SwiftUI, and UIKit. Experienced in REST API integration, Core Data, performance optimization, and secure mobile application development. Currently contributing to SportsTechNeo mobile applications at Beeyond Gaming, developing features, fixing bugs, and improving performance and stability.",
  email: "athiyamanthirumurugan@gmail.com",
  phone: "+91 8012891537",
  linkedin: "https://www.linkedin.com/in/athiyaman-tathiyaman-t-475573240",
  photo,
};

export const highlights = ["3+ years in iOS development", "Swift / SwiftUI / UIKit", "Clean architecture"];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  { title: "Languages & Frameworks", items: "Swift SwiftUI UIKit Cocoa Touch Programmatic UI", icon: "</>" },
  { title: "Database & Storage", items: "Core Data UserDefaults", icon: "DB" },
  { title: "Networking", items: "REST APIs URLSession Alamofire JSON Parsing", icon: "API" },
  { title: "Notifications", items: "Push Notifications APNs Firebase Cloud Messaging Local Notifications", icon: "APN" },
  { title: "Security", items: "SSL Pinning App Transport Security Secure API Communication", icon: "SSL" },
  { title: "Performance", items: "Memory Management Multithreading Performance Tuning", icon: "⚡" },
  { title: "Architecture", items: "Clean Architecture MVC MVVM SOLID Principles OOP", icon: "MVVM" },
  { title: "Tools & Delivery", items: "Git Code Review Xcode TestFlight App Store Connect", icon: "Git" },
];

export const experience = [
  {
    company: "BEYOND GAMING",
    role: "SportsTech • iOS Application Developer",
    period: "August 2025–Present",
    points: [
      "Developing Sportstech Neo fitness and gamified rewards application.",
      "Building SwiftUI and UIKit features.",
      "Implementing step-count-based XP rewards and mini-game workflows.",
      "Integrating REST APIs for rewards management, progress tracking, and crypto conversion.",
      "Improving performance, stability, and responsiveness.",
      "Collaborating with backend, QA, and product teams.",
    ],
  },
  {
    company: "DOT COM INFOWAY LTD",
    role: "iOS Developer",
    period: "March 2024–July 2025",
    points: [
      "Worked on Direct Surety (under development), Clubinn Night Life, and XTRM.",
      "Delivered iOS features and interface optimization.",
      "Fixed bugs and improved application quality.",
      "Supported API security implementation.",
    ],
  },
  {
    company: "ABSERVERTECH PRIVATE LTD",
    role: "Junior iOS Application Developer",
    period: "October 2022–February 2024",
    points: [
      "Contributed to RebuStar taxi booking and Fooza food delivery.",
      "Built features and polished UI behavior.",
      "Resolved bugs and performance issues.",
      "Assisted in deployment workflows.",
    ],
  },
];

export const projects = [
  {
    category: "SportsTech",
    name: "Sportstech Neo",
    stack: "SwiftUI UIKit REST APIs",
    summary: "Gamified rewards application for fitness engagement.",
    overview: "Step rewards, XP progress, mini-games, and crypto conversion workflows.",
    ui: "Dark fitness interface with lime and violet rings, progress cards, and activity metrics.",
    screen: "fit",
  },
  {
    category: "Financial",
    name: "Direct Surety",
    stack: "Swift Xcode",
    summary: "Financial calculator for bond premium planning.",
    overview: "Focused on structured data entry and quick premium estimation states.",
    ui: "Light calculator interface with clean form rows and a highlighted computed result.",
    screen: "fin",
    inDevelopment: true,
  },
  {
    category: "Nightlife",
    name: "Clubinn Night Life",
    stack: "SwiftUI Xcode",
    summary: "Night life discovery and booking app for parties, DJ venues, and ticket access.",
    overview: "Event discovery, venue browsing, and a booking-oriented experience.",
    ui: "Dark violet event view with poster art, time slots, and booking highlights.",
    screen: "nig",
  },
  {
    category: "Currency Exchange",
    name: "XTRM",
    stack: "Swift SSL Pinning",
    summary: "International payments and currency exchange application.",
    overview: "Exchange flow with security-first handling for SSL pinning and ATS requirements.",
    ui: "Clean blue conversion layout with transfer breakdown and secure status indicators.",
    screen: "xtm",
  },
  {
    category: "Transportation",
    name: "RebuStar",
    stack: "Swift Xcode",
    summary: "Taxi booking app for daily rides, outstation, and rental options.",
    overview: "Route and ride selection with practical status and ETA blocks.",
    ui: "Stylized map routes with a ride summary card and mode shortcuts.",
    screen: "tax",
  },
  {
    category: "Food Delivery",
    name: "Fooza",
    stack: "Swift Xcode",
    summary: "Food delivery experience for discovery, ordering, and notifications.",
    overview: "Restaurant browsing and order progression with clear hierarchy.",
    ui: "Warm food interface with an illustrated plate hero and compact menu rows.",
    screen: "food",
  },
];
