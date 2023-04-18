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
        url: "https://live.staticflickr.com/5603/15800330356_0982d5f889_b.jpg",
        "subject_tf": "Carnegie Mellon"
    }
];

/**
 * Function that returns an ImageInfo obejct
 *
 * by randomly selecting an item from the images array
 * @returns {ImageInfo}
 */
export const getImage = () => images[Math.floor(Math.random() * images.length)];
