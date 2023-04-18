import bookImg01 from "../images/tour-img01.jpg";
import bookImg02 from "../images/tour-img02.jpg";
import bookImg03 from "../images/tour-img03.jpg";
import bookImg04 from "../images/tour-img04.jpg";
import bookImg05 from "../images/tour-img05.jpg";
import bookImg06 from "../images/tour-img06.jpg";
import bookImg07 from "../images/tour-img07.jpg";
import bookImg08 from "../images/tour-img08.jpg";
import bookImg09 from "../images/tour-img09.jpg";

const books = [
  {
    id: "01",
    title: "Psychology of Money",
    author: "Morgan Housel ",
    publish_date: "1-09-2020",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: " In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5.0,
      },
    ],
    avgRating: 4.5,
    photo: bookImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Commit To Yourself",
    author: "Nancy Katyal",
    publish_date: "30-11-2022",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: " The various self-reflective exercises in the book help you to accept yourself, love yourself and improve yourself, not just your self-image.",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: bookImg02,
    featured: true,
  },
  {
    id: "03",
    title: "The Happiness Hypothesis",
    author: "Jonathan Haidt",
    publish_date: "1-09-2020",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "The Happiness Hypothesis as an accessible vessel for his research into moral foundations theory.",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: bookImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Influence : The Psychology of Persuasion",
    author: "PhD Robert B. Cialdini",
    publish_date: "1-09-2020",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Each of the seven principles has a dedicated chapter to describe how it functions, where it’s most applicable, and — most importantly — how you apply it in your own life. ",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: bookImg04,
    featured: true,
  },
  {
    id: "05",
    title: " Mistakes Were Made (but Not by Me)",
    author: "Carol Tavri",
    publish_date: "1-09-2020",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "The next entry on this list might clarify some of these seemingly illogical decisions:  in Mistakes Were Made, Carol Tavris and Elliot Aronsondiscuss the systematic mental patterns which feed into development and radicalization of human beliefs.",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: bookImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Broken Bonds",
    author: "J Bree",
    publish_date: "28-6-2021",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: " After the death of my mother and her Bonded, I was relieved to find my own Bonds. I was sure everything would be okay if I had them. It wasn’t. The fate of our people is in my hands and I know we’re better off if I’m alone. After five years on the run, I’m caught and dragged back to face the men I ran away from. I thought I was doing the right thing. Now, I’m not so sure. North, Nox, Gryphon, Atlas, and Gabe may never forgive me but one thing is for sure. I won’t ever forgive myself.    ",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: bookImg06,
    featured: false,
  },
  {
    id: "07",
    title: " Deceived by the Gargoyles",
    author: "Lillian Lark",
    publish_date: "31-01-2022",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: " My family has always found me lacking. From the way I dress, how I look, to the type of magic I have. My family name is full of pomp and prestige, and I want nothing to do with it I am a witch that knows how to set a goal and I have one in mind.",

    reviews: [],
    avgRating: 4.5,
    photo: bookImg07,
    featured: false,
  },
  {
    id: "08",
    title: "The Never King ",
    author: "Nikki St. Crowe",
    publish_date: "24-2-2022",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: " The Never King is a reimagining of Peter and Wendy. Characters have been aged up for this darker, grittier version. If you like your enemies to lovers romance with hot, ruthless, morally gray love interests, you’ll enjoy The Never King and the Lost Boys. You can expect hate kissing, fighting, bickering, and ‘touch her and I’ll unalive you’ vibes. Book one ends on a cliff. ",

    reviews: [],
    avgRating: 4.5,
    photo: bookImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Stalked by the Kraken",
    author: "Lillian Lark",
    publish_date: "1-09-2020",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: " Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.[1] The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy on a quest of winning over the girl he loves. ",

    reviews: [],
    avgRating: 4.5,
    photo: bookImg09,
    featured: false,
  },
];

export default books;
