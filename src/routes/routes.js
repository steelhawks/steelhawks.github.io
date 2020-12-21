import AwardsPage from "../pages/awards.component";
import ExecutiveBoardPage from "../pages/executive-board.component";
import HomePage from "../pages/home.component";
import MentorPage from "../pages/mentors.component";
import OutreachPage from "../pages/outreach.component";
import RobotsPage from "../pages/robots.component";
import SponsorPage from "../pages/sponsors.component";
import TeamPage from "../pages/team.component";

export const ROUTES = [
    {
        path: '/',
        component_name: HomePage,
        name: 'Home',
        id: 1
    },
    {
        path: '/executiveboard',
        component_name: ExecutiveBoardPage,
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
        name: 'Team',
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
    }
]