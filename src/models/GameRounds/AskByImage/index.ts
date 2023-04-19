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
    }
];

/**
 * Function that returns an ImageInfo obejct
 *
 * by randomly selecting an item from the images array
 * @returns {ImageInfo}
 */
export const getImage = () => images[Math.floor(Math.random() * images.length)];
