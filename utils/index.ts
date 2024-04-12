const gov_components: { title: string; href: string }[] = [
  {
    title: "Police Department",
    href: "/gov/police",
  },
  {
    title: "Fire Department",
    href: "/gov/fire",
  },
  {
    title: "Transportation",
    href: "/gov/transport",
  },
  {
    title: "Infrastructure",
    href: "/gov/infrastructure",
  },
  {
    title: "Healthcare",
    href: "/gov/healthcare",
  },
  {
    title: "Education",
    href: "/gov/education",
  },
  {
    title: "Recreation and Parks",
    href: "/gov/recreation",
  },
  {
    title: "Social Services",
    href: "/gov/social",
  },
];

const dept_components: { title: string; href: string }[] = [
  {
    title: "Directory",
    href: "/dept/directory",
  },
  {
    title: "Departmental Information",
    href: "/dept/info",
  },
  {
    title: "Elected Officials",
    href: "/dept/officials",
  },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  // },
];

// const elected_components: {
//   title: string;
//   href: string;
//   description: string;
// }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

const engage_components: {
  title: string;
  href: string;
}[] = [
  {
    title: "Contact Elected Officials",
    href: "/engage/officials",
  },
  {
    title: "Report Issues or Concerns",
    href: "/engage/report",
  },
  {
    title: "Volunteer Opportunities",
    href: "/engage/volunteer",
  },
  {
    title: "Advisory Boards",
    href: "/engage/boards",
  },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  // },
];

const community_components: {
  title: string;
  href: string;
}[] = [
  {
    title: "Local Businesses and Commerce",
    href: "/community/local",
  },
  {
    title: "Transportation Options",
    href: "/community/transport",
  },
  {
    title: "Parks & Recreation",
    href: "/community/parks",
  },
  {
    title: "Libraries",
    href: "/community/libraries",
  },
  // {
  //   title: "Tabs",
  //   href: "/community/schools",
  // },
];

const news_components: {
  title: string;
  href: string;
}[] = [
  {
    title: "News Articles",
    href: "/updates/news",
  },
  {
    title: "Press Releases",
    href: "/updates/press",
  },
  {
    title: "Announcements",
    href: "/updates/announcement",
  },
  {
    title: "Events Calendar",
    href: "/updates/events",
  },
  {
    title: "Public Meetings Schedule",
    href: "/updates/schedules",
  },
  // {
  //   title: "Scroll-area",
  //   href: "/safety/emergency",
  // },
];

const business_components: {
  title: string;
  href: string;
}[] = [
  {
    title: "Permits and Licenses",
    href: "/business/permits",
  },
  {
    title: "Economic Development Incentives",
    href: "/business/incentives",
  },
  {
    title: "Business Assistance Programs",
    href: "/business/assistance",
  },
  {
    title: "Development Projects and Opportunities",
    href: "/business/development",
  },
];

const online_components: {
  title: string;
  href: string;
}[] = [
  {
    title: "Utility Payments",
    href: "/online/utility",
  },
  {
    title: "Permit Applications",
    href: "/online/permit",
  },
  {
    title: "Service Requests",
    href: "/online/requests",
  },
  {
    title: "School Fee Assistance",
    href: "/online/scholarship",
  },
  // {
  //   title: "Scroll-area",
  //   href: "/online/utility",
  // },
];

const contact_components: { title: string; href: string }[] = [
  {
    title: "Contact Information",
    href: "/contact/info",
  },
  {
    title: "Feedback",
    href: "/contact/feedback",
  },
  // {
  //   title: "Progress",
  //   href: "/contact/info",
  // },
];

const about_components: { title: string; href: string }[] = [
  // {
  //   title: "District Information",
  //   href: "/about/district",
  // },
  {
    title: "History",
    href: "/about/history",
  },
  {
    title: "Demographics and Statistics",
    href: "/about/demography",
  },
  {
    title: "Governance Structure",
    href: "/about/structure",
  },
  {
    title: "Elected Officials",
    href: "/about/officials",
  },
  {
    title: "Mission, Vision, and Values",
    href: "/about/values",
  },
  {
    title: "Organizational Chart",
    href: "/about/chart",
  },
  // {
  //   title: "Progress",
  //   href: "/contact/info",
  // },
];

const pictures = [
  {
    title: 'Infrastructural Initiatives',
    href: 'https://th.bing.com/th/id/R.88e4ba974e84afc94785b337f467afb1?rik=GlBLmkHW%2fEo7VQ&riu=http%3a%2f%2fwepiomedia.com%2fwp-content%2fuploads%2f2023%2f08%2f1691474917790-scaled.jpg&ehk=DxfmUKEZxX80Ly1iceieCwFPaLbFtQRSox46IE2n7mQ%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    title: 'Project Launch',
    href: 'https://www.postcourier.com.pg/wp-content/uploads/2023/12/PM-launches-North-Waghi-development-projections.jpg',
  },
  {
    title: 'Constructions',
    href: 'https://th.bing.com/th/id/OIP.6L6z6ER7IabPPYkPZT6rWwHaFj?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Disaster Relieve',
    href: 'https://emtv.com.pg/wp-content/uploads/2018/04/EDE.jpg',
  },
]

export {
    gov_components,
    dept_components,
    // elected_components,
    engage_components,
    community_components,
    news_components,
    business_components,
    online_components,
    contact_components,
    about_components,
    pictures,
}