import AwardsPage from "../pages/AwardPage.component";
import ContactPage from "../pages/ContactPage.component";
import LeadershipPage from "../pages/Leadership.componentPage";
import HomePage from "../pages/HomePage.component";
import MentorPage from "../pages/MentorsPage.component";
import OutreachPage from "../pages/OutreachPage.component";
import RobotsPage from "../pages/RobotPage.component";
import SponsorPage from "../pages/SponsorsPage.component";
import TeamPage from "../pages/TeamPage.component";
import BobaPage from "../pages/BobaPage.component";


export const ROUTES = [

    {
        path: '/',
        component_name: HomePage,
        name: 'Home',
        id: 1
    },
    {
        path: '/Leadership',
        component_name: LeadershipPage,
        name: 'Executive Board',
        id: 2
    },
    {
        path: '/mentors',
        component_name: MentorPage,
        name: 'Mentors',
        id: 3
    },
    {
        path: '/team',
        component_name: TeamPage,
        name: 'Subteams',
        id: 4
    },
    {
        path: '/awards',
        component_name: AwardsPage,
        name: 'Awards',
        id: 5
    },
    {
        path: '/sponsors',
        component_name: SponsorPage,
        name: 'Sponsors',
        id: 6
    },
    {
        path: '/robots',
        component_name: RobotsPage,
        name: 'Robots',
        id: 7
    },
    {
        path: '/outreach',
        component_name: OutreachPage,
        name: 'Outreach',
        id: 8
    },
    {
        path: '/contact',
        component_name: ContactPage,
        name: 'Contact',
        id: 9
    },
    {
        path: '/boba',
        component_name: BobaPage,
        name: 'Boba',
        id: 10
    }
]