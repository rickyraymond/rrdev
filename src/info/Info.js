import self from "../img/self.svg"
import wf from "../img/wf.png"
import pz from "../img/pz.png"
import uf from "../img/uflu.png"
import aj from "../img/aj.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(144, 61, 144)", "rgb(44, 207, 148)"];

export const info = {
    firstName: "Ricky",
    lastName: "Raymond",
    initials: "RR", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '💻',
            text: 'skilled in php, javascript, and react'
        },
        {
            emoji: '🌎',
            text: 'based in Johnson City, TN'
        },
        {
            emoji: '🔥',
            text: "web app developer at Wildfire in Winston-Salem, NC",
        },
        {
            emoji: "📧",
            text: "rickyraymonddev@gmail.com",
            link: "mailto:rickyraymonddev@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://instagram.com/rickyraymond",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/rickyraymond",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ricky-raymond-85a023200/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com/tweetsbyraymond",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // },
        {
            link: "https://letterboxd.com/rickyraymond05/",
            icon: "fa fa-film",
            label: 'letterboxd'
        }

    ],
    bio: "Hello! I'm Ricky. I'm a web applications developer for Wildfire, LLC. I studied Computing at East Tennessee State University and Cinema Production at Virginia Tech. In my free time I enjoy experimenting with new web and cloud technologies and AI models. When AFK I am typically spending time with my family, watching a movie, or listening to/playing music.",
    skills:
        {
            proficientWith: ['php', 'node/express', 'javascript', 'react', 'mysql', 'postgres', 'git', 'github', 'c#', 'java', 'bootstrap', 'html5', 'css3', 'figma/xd'],
            exposedTo: ['python', 'mongodb', 'aws', 'gcp', 'azure', 'docker', 'flutter', 'drupal', 'joomla', ]
        }
    ,
    hobbies: [
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'games',
            emoji: '🎮'
        },
        {
            label: 'skateboarding',
            emoji: '🛹'
        },
        {
            label: 'guitar',
            emoji: '🎸'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ufluence",
            live: "https://ufluence.rickyraymond.dev",
            image: uf,
            type: 'project',
            description: "A generative AI powered web app for generating social media content. Build in progress. Currently supports instagram image captions and hashtags. Built using React, Express, OpenAI's GPT-3.5, AWS Rekognition, S3,  and Postgresql. Deployed on Netlify and Render."
        },
        {
            title: "AdaptAJob",
            live: "https://adaptajob-frontend.onrender.com/",
            image: aj,
            type: 'project',
            description: "To exhibit a full-stack React and Express architecture as well as experiment with fine-tuning appraches to OpenAI's GPT-4. Built using React, Express, OpenAI's GPT-4, and Postgresql. Deployed on Render and AWS."
        },
        {
            title: "Wildfire, LLC",
            year: "Current Position",
            description: "A full stack web application developer for a creative agency based in Winston-Salem, NC. Technologies and frameworks used include PHP, JavaScript, Bootstrap, WordPress, Shopify, and WooCommerce.",
            type: 'job',
            image: wf
        },
        {
            title: "PZ Marketing",
            year: "2019-2022",
            description: "A full stack developer for a small marketing agency based in Johnson City, TN. Technologies and frameworks used include PHP, JavaScript, WordPress, and WooCommerce.",
            type: 'job',
            image: pz
        }
    ]
}