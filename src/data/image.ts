//import image
import price from '../assets/workimage/pricegrid.jpg'
import price1 from '../assets/workimage/pricegrid1.jpg'
import calculator from '../assets/workimage/calculator.jpg'
import earth from '../assets/workimage/earth.jpg'
import blank from '../assets/backgroundImage/back4.jpg'
import lemon1 from '../assets/workimage/lemon1.jpg'
import lemon2 from '../assets/workimage/lemon2.jpg'
import clock from '../assets/workimage/clock.jpg'
import clock1 from '../assets/workimage/clock1.jpg'

const WORKIMAGES: WorkImage[] = [
    {
        key: 0,
        image: calculator,
        image1: "",
        title: "Calculator",
        text: "Basic calculator operation with theme changer.",
        framework: "React 18.2.0 CRA",
        link: "https://jocunda.github.io/calculator/",
    },
    {
        key: 1,
        image: lemon1,
        image1: lemon2,
        title: "Little Lemon",
        text: "Project from course Front-End Developer by Meta, which requirement is to build website of homepage and reservation form for Little Lemon Restaurant.",
        framework: "React 18.0.2 CRA",
        link: "https://github.com/jocunda/littlelemonrestaurant",
    },
    {
        key: 2,
        image: clock,
        image1: clock1,
        title: "Clock",
        text: "Challenge from Frontend Mentor, that using external APIs to set data based on visitor's location and generate random programming quotes.",
        framework: "React 18.0.2 CRA",
        link: "https://jocunda.github.io/clock/",
    },
    {
        key: 3,
        image: price,
        image1: price1,
        title: "Price Grid Component",
        text: "Newbie challenge from frontend mentor, to build out the pricing component to the design provided. This smaller challenge is a start for beginner or newbie, which can practice using CSS feature such as flexbox and grid. Component also must have optimal layout for device's screen size.",
        framework: "React 18.2.0 CRA",
        link: "https://github.com/jocunda/FM-price_grid",
    },
    {
        key: 4,
        image: earth,
        image1: "",
        title: "3D Earth",
        text: "Web 3D project that using library such as react-three/drei, react-three/fiber. Simulate earth's orbiting the sun in star galaxy, which surface will have dark and bright side. This earth 3D can controlled by zoom and rotate option. Surface material use some properties with metalness and roughness to make it realistic. Cloudy map also set as upper layer to wrap earth surface with cloud.",
        framework: "React 17.0.2 CRA",
        link: "https://jocunda.github.io/React-Globe/",
    },
    {
        key: 5,
        image: blank,
        image1: "",
        title: "My Portfolio2",
        text: "Bla bla bla bla bla",
        framework: "React 17.0.2 CRA",
        link: "",
    },
    {
        key: 6,
        image: blank,
        image1: "",
        title: "My Portfolio2",
        text: "Bla bla bla bla bla",
        framework: "React 17.0.2 CRA",
        link: "",
    },
    {
        key: 7,
        image: blank,
        image1: "",
        title: "My Portfolio3",
        text: "Bla bla bla bla bla",
        framework: "React 17.0.2 CRA",
        link: "",
    },
    {
        key: 8,
        image: blank,
        image1: "",
        title: "My Portfolio",
        text: "Bla bla bla bla bla",
        framework: "React 17.0.2 CRA",
        link: "",
    },
    {
        key: 9,
        image: blank,
        image1: "",
        title: "My Portfolio",
        text: "Bla bla bla bla bla",
        framework: "React 17.0.2 CRA",
        link: "",
    },

]

export default WORKIMAGES