import HomePage from "../pages/Home/HomePage.component";
import SponsorPage from "../pages/Sponsors/SponsorsPage.component";
import LeadershipPage from "../pages/Leadership/leadershipPage";
import MentorPage from "../pages/Mentors/mentorPage";
import SubteamPage from "../pages/Subteams/subteamPage";
import AwardPage from "../pages/Awards/awardPage";
import RobotPage from "../pages/Robots/robotPage";
import OutreachPage from "../pages/Outreach/outreachPage";
import SteelbucksPage from "../pages/Steelbucks/steelbucksPage";
import ContactPage from "../pages/Contact/contactPage";

export const pages = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
    id: 1,
  },
  {
    path: "/mentors",
    name: "Mentors",
    element: <MentorPage />,
    id: 2,
  },
  {
    path: "/leadership",
    name: "Leadership",
    element: <LeadershipPage />,
    id: 3,
  },
  {
    path: "/subteams",
    name: "Subteams",
    element: <SubteamPage />,
    id: 4,
  },
  {
    path: "/awards",
    name: "Awards",
    element: <AwardPage />,
    id: 5,
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    element: <SponsorPage />,
    id: 6,
  },
  {
    path: "/robots",
    name: "Robots",
    element: <RobotPage />,
    id: 7,
  },
  {
    path: "/outreach",
    name: "Outreach",
    element: <OutreachPage />,
    id: 8,
  },
  {
    path: "/contact",
    name: "Contact Us",
    element: <ContactPage />,
    id: 9,
  },
  {
    path: "/steelbucks",
    name: "Steelbucks",
    element: <SteelbucksPage />,
    id: 10,
  },
];
