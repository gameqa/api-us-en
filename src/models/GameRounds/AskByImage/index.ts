import { ImageInfo } from "../interface";

/**
 * Typescript file imitating a database of possible 'idea images' for
 * ideas that are given to the user
 *
 * Each instance must have an url for the image and a 'subject_tf' which
 * is a noun in 'þágufall'. We write the subject in such a form in order
 * to be able to phrase the prompt as 'ask about ____' in Icelandic.
 */
const images: ImageInfo[] = [
	{
        url: "https://i.imgur.com/jSMQciH.png",
        subject_tf: "Art and Literature"
    },
    {
        url: "https://i.imgur.com/w3wa0nU.png",
        subject_tf: "Science and Technology"
    },
	{
        url: "https://i.imgur.com/cfZ82o5.png",
        subject_tf: "History and Geography"
    },
    {
        url: "https://i.imgur.com/5dqPRSB.png",
        subject_tf: "Sports and Recreation"
    },
	{
        url: "https://i.imgur.com/2HeK9PM.png",
        subject_tf: "Health and Wellness"
    },
    {
        url: "https://i.imgur.com/mQFoGhy.png",
        subject_tf: "Travel and Tourism"
    },
	{
        url: "https://i.imgur.com/xlJzfz3.png",
        subject_tf: "Food and Cooking"
    },
    {
        url: "https://i.imgur.com/SOIMBny.png",
        subject_tf: "Music and Entertainment"
    },
    {
        url: "https://i.imgur.com/XDjhWxJ.png",
        subject_tf: "Animals and Wildlife"
    },
    {
        url: "https://i.imgur.com/n0Lxlv2.png",
        subject_tf: "Environment and Climate",
    },
    {
        url: "https://i.imgur.com/Ox0RCDr.png",
        subject_tf: "Movies and Television",
    },
    {
        url: "https://i.imgur.com/FR1naDZ.png",
        subject_tf: "Business and Economics"
    },
    {
        url: "https://i.imgur.com/uPS5Xf9.png",
        subject_tf: "Education and Careers"
    },
    {
        url: "https://i.imgur.com/EUYG1OD.png",
        subject_tf: "Fashion and Beauty"
    },
    {
        url: "https://i.imgur.com/l3kucxJ.png",
        subject_tf: "Gaming and eSports"
    },
    {
        url: "https://i.imgur.com/dOpe2M7.png",
        subject_tf: "Language and Communication"
    },
    {
        url: "https://i.imgur.com/kwuQvqb.png",
        subject_tf: "Politics and Government"
    },
    {
        url: "https://i.imgur.com/5Gl872Y.png",
        subject_tf: "Religion and Philosophy"
    },
    {
        url: "https://i.imgur.com/EHadtg9.png",
        subject_tf: "Relationships and Family"
    },
    {
        url: "https://i.imgur.com/TZcIi9k.png",
        subject_tf: "Space and Astronomy"
    },
    {
        url: "https://i.imgur.com/j92ep2J.png",
        subject_tf: "Hobbies and Interests"
    },
    {
        url: "https://i.imgur.com/ggrCH1D.png",
        subject_tf: "Personal Finance and Investing"
    },
    {
        url: "https://i.imgur.com/upwWK1w.png",
        subject_tf: "Social Media and Internet Culture"
    },
    {
        url: "https://i.imgur.com/dgMfqP5.png",
        subject_tf: "Law and Legal Issues"
    },
    {
        url: "https://i.imgur.com/wzcxPco.png",
        subject_tf: "Psychology and Mental Health"
    },
    {
        url: "https://i.imgur.com/raQNS3F.png",
        subject_tf: "Festivals and Holidays"
    },
    {
        url: "https://i.imgur.com/iBBLbu6.png",
        subject_tf: "Cars and Transportation"
    },
    {
        url: "https://i.imgur.com/obpwvgF.png",
        subject_tf: "Home and Garden"
    },
    {
        url: "https://i.imgur.com/cZx1JZu.png",
        subject_tf: "Life Hacks and DIY"
    },
    {
        url: "https://i.imgur.com/Y3pncX8.png",
        subject_tf: "Personal Development"
    }
];

/**
 * Function that returns an ImageInfo obejct
 *
 * by randomly selecting an item from the images array
 * @returns {ImageInfo}
 */
export const getImage = () => images[Math.floor(Math.random() * images.length)];
