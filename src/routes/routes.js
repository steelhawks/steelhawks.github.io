import AwardsPage from "../pagesx/AwardPage.component";
import ContactPage from "../pagesx/ContactPage.component";
import LeadershipPage from "../pagesx/Leadership.componentPage";
import HomePage from "../pages/Home/HomePage.component";
import MentorPage from "../pagesx/MentorsPage.component";
import OutreachPage from "../pagesx/OutreachPage.component";
import RobotsPage from "../pagesx/RobotPage.component";
import SponsorPage from "../pagesx/SponsorsPage.component";
import SubteamsPage from "../pagesx/SubteamsPage.component";
import BobaPage from "../pagesx/BobaPage.component";


export const pages = [
    {
        path: '/',
        name: 'Home',
        element: <HomePage/>
    },
    {
        path: '/Leadership',
        component_name: LeadershipPage,
        name: 'Leadership',
        id: 2
    },
    {
        path: '/mentors',
        component_name: MentorPage,
        name: 'Mentors',
        id: 3
    },
    {
        path: '/subteams',
        component_name: SubteamsPage,
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