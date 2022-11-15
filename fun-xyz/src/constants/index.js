import {
  logo,
  send,
  shield,
  star,
  menu,
  close,
  arrowUp,
  instagram,
  linkedin,
  twitter,
  email,
  alex,
  mario,
  blockchain
} from "../assets";

export const team = [
  {
    id: 'member1',
    name: 'Alex Fine',
    title: 'Co-Founder & CEO',
    tagline: 'I care about spending time with people I respect and building dope products. I get to do both at fun.xyz.',
    about: 'Alex is a serial builder. Before fun.xyz Alex ran a crypto-currency fund built on AI-driven quantitative models. Before crypto, Alex founded a studying app, Quill, when he was 16. Quill was acquired in February 2018. Alex studied Math & Computer Science at Stanford University.',
    image: alex,
    linkedin_url: 'https://www.linkedin.com/in/alexkalilfine/',
    twitter_url: 'https://twitter.com/alexkfine'
  },
  {
    id: 'member2',
    name: 'Mario Baxter',
    title: 'Co-Founder & CTO',
    tagline: 'I am passionate about leveraging breakthrough technologies to advance economic freedom across the globe. This is exactly what we are doing at fun.xyz.',
    about: 'Originally from Totana, a small agricultural town in Spain, Mario grew up doing triathlon and tinkering with electronics. He became the only kid in his high school to go to college in the United States, where he attended Stanford University. Mario graduated early from Stanford with a concentration in Artificial Intelligence and began working as an AI engineer & researcher at Meta. When not working, Mario enjoys endurance training as well as reading & writing about philosophy of mind.',
    image: mario,
    linkedin_url: 'https://www.linkedin.com/in/mariobaxter/',
    twitter_url: 'https://twitter.com/0xMari0'
  },
];

export const features = [
  {
    id: "feature1",
    icon: send,
    title: "Cross-chain Wallets",
    content:
      "We leverage new blockchain technology to build cross-chain wallet infrastructure.",
  },
  {
    id: "feature2",
    icon: star,
    title: "In Partnership with Odsy Network",
    content:
      "We provide foundational components for new wallet APIs & protocols on top of the Odsy Network.",
  },
  {
    id: "feature3",
    icon: shield,
    title: "Increased Trust & Usability",
    content:
      "Our infrastructure eliminates the risks associated with central custodians when accessing cross-chain assets & core web2 functionality in web3.",
  },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "careers",
    title: "Careers",
    link: "https://jobs.lever.co/fun.xyz",
  },
];

export const socials = [
  {
    id: "twitter",
    icon: twitter,
    link: "https://twitter.com/fun",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/company/funxyz",
  },
  {
    id: "email",
    icon: email,
    link: "mailto:hi@fun.xyz",
  },
];

export const author = {
  name: 'Pranav Sakthivel',
  link: 'https://github.com/PranavSakthivel'
};


export const footer = "© 2022 The Fun Group, Inc.";
export const whitepaper_link = 'https://fun.xyz/assets/images/about_fun.pdf';
export const odsy_link = 'https://odsy.xyz/';
export const careers_link = 'https://jobs.lever.co/fun.xyz'; 
