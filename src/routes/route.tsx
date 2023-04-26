import {FC} from 'react'
import Home from '../pages/Home/Home';
import Live from '../pages/Live/Live';
import News from '../pages/News/News';
import More from '../pages/More/More';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';


interface Route {
    key: string,
    title: string,
    path: string,
    enable: boolean,
    component: FC<{}>,
    btn?: JSX.Element,
}

export const routes : Array<Route> = [
    {
        key: "home-route",
        title: "Home", 
        path: "/estate_baptist_church",
        enable: true,
        component: Home,
    },
    
    {
        key: "live-route",
        title: "Live", 
        path: "/live",
        enable: true,
        component: Live,
    },
    {
        key: "news-route",
        title: "News", 
        path: "/news",
        enable: true,
        component: News,
    },
    {
        key: "more-route",
        title: "More", 
        path: "/more",
        enable: true,
        component: More,

    },
    {
        key: "contact-route",
        title: "Contact", 
        path: "/contact",
        enable: true,
        component: Contact,
    },
    {
        key: "about-route",
        title: "About", 
        path: "/about",
        enable: true,
        component: About,
    },
];
