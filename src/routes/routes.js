import HomePage from '../pages/Home/HomePage.component';
import SponsorPage from '../pages/Sponsors/SponsorsPage.component';
import LeadershipPage from '../pages/Leadership/leadershipPage';
import MentorPage from '../pages/Mentors/mentorPage';
import SubteamPage from '../pages/Subteams/subteamPage';
import AwardPage from '../pages/Awards/awardPage';
import RobotPage from '../pages/Robots/robotPage';
import OutreachPage from '../pages/Outreach/outreachPage';
import SteelbucksPage from '../pages/Steelbucks/steelbucksPage';
import ContactPage from '../pages/Contact/contactPage';

export const pages = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />,
  },
  {
    path: '/mentors',
    name: 'Mentors',
    element: <MentorPage />,
  },
  {
    path: '/leadership',
    name: 'Leadership',
    element: <LeadershipPage />,
  },
  {
    path: '/subteams',
    name: 'Subteams',
    element: <SubteamPage />,
  },
  {
    path: '/awards',
    name: 'Awards',
    element: <AwardPage />,
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    element: <SponsorPage />,
  },
  {
    path: '/robots',
    name: 'Robots',
    element: <RobotPage />,
  },
  {
    path: '/outreach',
    name: 'Outreach',
    element: <OutreachPage />,
  },
  {
    path: '/contact',
    name: 'Contact Us',
    element: <ContactPage />,
  },
  {
    path: '/steelbucks',
    name: 'Steelbucks',
    element: <SteelbucksPage />,
  },
];
