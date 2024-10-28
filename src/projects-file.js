import esnLogo from './photo/web-FI-HELS-KAN-colour-black-with-white-background.jpeg'

import esnScreen1 from './photo/esnScreen1.png'
import esnScreen2 from './photo/esnScreen2.png'
import esnScreen3 from './photo/esnScreen3.png'
import esnScreen4 from './photo/esnScreen4.png'

import dogStoreScreen1 from './photo/dogStoreScreen1.png'
import dogStoreScreen2 from './photo/dogStoreScreen2.png'
import dogStoreScreen3 from './photo/dogStoreScreen3.png'
import dogStoreScreen4 from './photo/dogStoreScreen4.png'

import cleaningScreen1 from './photo/CleaningScreen1.png'
import cleaningScreen2 from './photo/CleaningScreen2.png'
import cleaningScreen3 from './photo/CleaningScreen3.png'

import Djstore1 from './photo/Dj-store1.png'
import Djstore2 from './photo/Dj-store2.png'
import Djstore3 from './photo/Dj-store3.png'
import Djstore4 from './photo/Dj-store4.png'
import Djstore5 from './photo/Dj-store5.png'

import Djroman1 from './photo/DjRoman1.png'
import Djroman2 from './photo/DjRoman2.png'

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
        language: "JavaScript",
        technology: [
            "JavaScript",
            "React",
        ]
    },
    {
        id: "2",
        title: "Dog Store Website",
        description: "I developed a full-stack e-commerce website for a dog store as part of a university team project, using Java Spring Boot for the back-end and React for the front-end. The project included creating a back-end API to manage products, users, customers, and manufacturers. The Main API serves as a central hub, linking to resources like products, manufacturers, types, customers, and users. The User Management API handles user registration, authentication, and roles, including creating, updating, and deleting profiles. The Manufacturer API manages manufacturer details and associated products, while the Product Type API categorizes products for easy filtering. The Customer API manages customer profiles and supports searching. We developed a simple front-end with React to demonstrate product listings from the API and a registration system, effectively combining the back-end and front-end. At the end of the project, I wrote Docker rules to deploy the back-end system to Render.com.",
        imgUrl: "https://www.dogster.com/wp-content/uploads/2024/02/Santas-Little-Helper.jpg",
        images: [
            dogStoreScreen1,
            dogStoreScreen3,
            dogStoreScreen4,
            dogStoreScreen2,
        ],
        sourceCode: "https://github.com/orgs/Ohjelmistoprojekti-1-Ryhma-2/repositories",
        language: "Java",
        technology: [
            "Java",
            "React",
            "Docker"
        ]
    },
    {
        id: "3",
        title: "Django Web Store",
        description: "For Users: range of items, view prices, descriptions, and captivating photos. Add items to your cart, sign up, and enjoy a streamlined checkout process. With user authentication, user information is securely stored for future visits. Update user profile with ease and make confident payments through integrated Stripe API system.\n" + "For Store Staff: Manage inventory effortlessly with dedicated admin panel. Upload new products and modify existing listings seamlessly. Gain valuable insights into order management, track statuses (complete, shipped, or canceled), and ensure efficient coordination. The admin panel is accessible only to authorized staff, prioritizing security and protecting sensitive information.",
        imgUrl: "https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg",
        images: [
            Djstore1,
            Djstore2,
            Djstore3,
            Djstore4,
            Djstore5,
        ],
        language: "Python",
        sourceCode: "https://github.com/victorFish9/DjangoWebsite",
        technology: [
            "Django",
            "CSS",
            "HTML"
        ]
    },
    {
        id: "4",
        title: "Cleaning Company Website",
        description: "I worked on a contract project with a Finnish cleaning company to develop an informative website. The site was built using JavaScript, CSS, and HTML, and it included key features such as company information, pricing details, profiles of cleaning staff, and a contact form. Due to an agreement with the client, the company’s name and specific details have been replaced with placeholder text (Lorem Ipsum) in my portfolio. Despite these adjustments, the site effectively demonstrates the functionality and design approach I implemented to meet the client’s needs.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtaEyZY7y1YwjXdwp9qNASMN84dh2NEVQE0LFxbbizhyB5IueaCzqEYSYam49k6Z9-o&usqp=CAU",
        images: [
            cleaningScreen1,
            cleaningScreen2,
            cleaningScreen3,
        ],
        sourceCode: "https://github.com/victorFish9/CleaningServices_webpage/blob/main/index.html",
        siteLink: "https://victorfish9.github.io/CleaningServices_webpage/",
        language: "JavaScript",
        technology: [
            "JavaScript",
            "CSS",
            "HTML",

        ]
    },
    {
        id: "5",
        title: "Roman converter",
        description: "I worked on an algorithm challenge on LeetCode to convert Roman numerals to integers. After successfully resolving the algorithm, I decided to build a project using Django to create a user-friendly application for this purpose. To enhance my development skills, I researched Docker for containerization and learned how to create consistent development environments. I implemented a CI/CD pipeline to automate deployments, which streamlined updates and ensured that the latest version of the application is always live. This project not only deepened my understanding of algorithms but also allowed me to apply modern development practices, resulting in a practical tool for users.",
        imgUrl: "https://weatheredfinishes.com/cdn/shop/files/download-2023-01-25T160339.885.png?v=1727452370",
        images: [
            Djroman1,
            Djroman2,
        ],
        sourceCode: "https://github.com/victorFish9/roman_converter",
        siteLink: "https://roman-converter-r5mm.onrender.com/converter/convert/",
        language: "Python",
        technology: [
            "Django",
            "Docker",

        ]
    },

];

export default projects