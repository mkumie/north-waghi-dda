interface Submenu {
  title: string;
  href: string;
}

interface Label {
  title: string;
  href: string;
}

const nav_menus: { label: Label; submenu?: Submenu[] }[] = [
  // {
  //   label: {
  //     title: "Home",
  //     href: "/",
  //   },
  //   // submenu: [
  //   //   {
  //   //     title: "Police Department",
  //   //     href: "/gov/police",
  //   //   },
  //   //   {
  //   //     title: "Fire Department",
  //   //     href: "/gov/fire",
  //   //   },
  //   //   {
  //   //     title: "Transportation",
  //   //     href: "/gov/transport",
  //   //   },
  //   //   {
  //   //     title: "Infrastructure",
  //   //     href: "/gov/infrastructure",
  //   //   },
  //   //   {
  //   //     title: "Healthcare",
  //   //     href: "/gov/healthcare",
  //   //   },
  //   //   {
  //   //     title: "Education",
  //   //     href: "/gov/education",
  //   //   },
  //   //   {
  //   //     title: "Recreation and Parks",
  //   //     href: "/gov/recreation",
  //   //   },
  //   //   {
  //   //     title: "Social Services",
  //   //     href: "/gov/social",
  //   //   },
  //   // ],
  // },
  {
    label: {
      title: "Services",
      href: "/gov",
    },
    submenu: [
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
    ],
  },
  {
    label: {
      title: "Community",
      href: "/community",
    },
    submenu: [
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
    ],
  },
  {
    label: {
      title: "News",
      href: "/updates",
    },
    submenu: [
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
    ],
  },
  {
    label: {
      title: "Engage",
      href: "/engage",
    },
    submenu: [
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
    ],
  },
  {
    label: {
      title: "Business",
      href: "/business",
    },
    submenu: [
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
    ],
  },
  {
    label: {
      title: "Online",
      href: "/online",
    },
    submenu: [
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
    ],
  },
  {
    label: {
      title: "About Us",
      href: "/about",
    },
    submenu: [
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
    ],
  },
];

const pictures = [
  {
    title: "Infrastructural Initiatives",
    href: "https://th.bing.com/th/id/R.88e4ba974e84afc94785b337f467afb1?rik=GlBLmkHW%2fEo7VQ&riu=http%3a%2f%2fwepiomedia.com%2fwp-content%2fuploads%2f2023%2f08%2f1691474917790-scaled.jpg&ehk=DxfmUKEZxX80Ly1iceieCwFPaLbFtQRSox46IE2n7mQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Project Launch",
    href: "https://www.postcourier.com.pg/wp-content/uploads/2023/12/PM-launches-North-Waghi-development-projections.jpg",
  },
  {
    title: "Constructions",
    href: "https://th.bing.com/th/id/OIP.6L6z6ER7IabPPYkPZT6rWwHaFj?rs=1&pid=ImgDetMain",
  },
  {
    title: "Disaster Relieve",
    href: "https://emtv.com.pg/wp-content/uploads/2018/04/EDE.jpg",
  },
];

export { nav_menus, pictures };
