import esnLogo from './photo/web-FI-HELS-KAN-colour-black-with-white-background.jpeg'

import esnScreen1 from './photo/esnScreen1.png'
import esnScreen2 from './photo/esnScreen2.png'
import esnScreen3 from './photo/esnScreen3.png'
import esnScreen4 from './photo/esnScreen4.png'

import dogStoreScreen1 from './photo/dogStoreScreen1.png'
import dogStoreScreen2 from './photo/dogStoreScreen2.png'
import dogStoreScreen3 from './photo/dogStoreScreen3.png'
import dogStoreScreen4 from './photo/dogStoreScreen4.png'


const projects = [
    {
        id: "1",
        title: "Exchange Student Info Website",
        description: "I developed a responsive website to provide essential information for exchange students in Finland. The website is accessible on smartphones and is designed for easy updates by users with no coding experience. Leveraging GitHub workflows, I implemented a system that automatically deploys the site after each commit, simplifying future updates by board members. The site features dynamic information pages and event cards, reducing the need for hardcoding and ensuring that all content is easily updatable. This project was built using the React library.",
        imgUrl: esnLogo,
        images: [
            esnScreen1,
            esnScreen3,
            esnScreen2,
            esnScreen4
        ],
        sourceCode: "https://github.com/victorFish9/esnhaagahelia",
        siteLink: "https://esnhaagahelia.eu/",
        language: "JavaScript"
    },
    {
        id: "2",
        title: "Dog Store Website",
        description: "I developed a full-stack e-commerce website for a dog store as part of a university team project, using Java Spring Boot for the back-end API and React for the front-end. The API manages products, users, customers, and manufacturers. The Main API serves as a central hub, linking to resources like products, manufacturers, types, customers, and users. The User Management API handles user registration, authentication, and roles, including creating, updating, and deleting profiles. The Manufacturer API manages manufacturer details and associated products. The Product Type API categorizes products for easy filtering. The Customer API manages customer profiles and supports searching. We also created a simple front-end to display products from the API and support user registration, effectively combining the back-end and front-end for a seamless demonstration.",
        imgUrl: dogStoreScreen1,
        images: [
            dogStoreScreen1,
            dogStoreScreen3,
            dogStoreScreen4,
            dogStoreScreen2,
        ],
        sourceCode: "https://github.com/orgs/Ohjelmistoprojekti-1-Ryhma-2/repositories",
        language: "Java"
    },
    {
        id: "3",
        title: "Pyhton Project",
        description: "Design & Development",
        imgUrl: "https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
        images: [
            "https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
        ],
        language: "Python"
    },

];

export default projects