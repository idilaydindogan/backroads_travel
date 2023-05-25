import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#about", text: "about" },
	{ id: 3, href: "#services", text: "services" },
	{ id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
	{ id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
	{ id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
	{ id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
	{
		id: 1,
		icon: "fas fa-wallet fa-fw",
		title: "saving money",
		text: "Cost-effective travel offers budget-friendly adventures without compromising quality or experiences. ",
	},
	{
		id: 2,
		icon: "fas fa-tree fa-fw",
		title: "endless hiking",
		text: "Hiking invigorates the soul, as each step unveils nature's hidden treasures.",
	},
	{
		id: 3,
		icon: "fas fa-socks fa-fw",
		title: "amazing comfort",
		text: "Amazing comfort envelops you in a tranquil embrace, offering solace and rejuvenation.",
	},
];

export const tours = [
	{
		id: 1,
		image: tour1,
		date: "august 26th, 2020",
		title: "Tibet Adventure",
		info: ` Tibet adventures offer a mystical quest through ancient monasteries, towering mountains, and vibrant cultural traditions, unraveling the enigmatic beauty of the Roof of the World.`,
		location: "china",
		duration: 6,
		cost: 2100,
	},
	{
		id: 2,
		image: tour2,
		date: "october 1th, 2020",
		title: "best of java",
		info: ` Java, Indonesia, captivates with its stunning landscapes, from majestic volcanoes to lush rice terraces, ancient temples, and vibrant cultural heritage.`,
		location: "indonesia",
		duration: 11,
		cost: 1400,
	},
	{
		id: 3,
		image: tour3,
		date: "september 15th, 2020",
		title: "explore hong kong",
		info: ` Exploring Hong Kong unveils a vibrant cityscape, bustling markets, iconic skyscrapers, rich cultural heritage, and delectable cuisine. It's an exhilarating fusion of tradition and modernity.`,
		location: "hong kong",
		duration: 8,
		cost: 5000,
	},
	{
		id: 4,
		image: tour4,
		date: "december 5th, 2019",
		title: "kenya highlights",
		info: ` Kenya, a jewel of East Africa, boasts diverse landscapes, including the iconic Maasai Mara and Mount Kilimanjaro, abundant wildlife, and vibrant cultures.`,
		location: "kenya",
		duration: 20,
		cost: 3300,
	},
];
