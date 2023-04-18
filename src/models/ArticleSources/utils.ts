import { ArticleSourceIdentifier, ArticleHostnames } from "./interface";

/**
 * Maps known hostnames of article sources to
 * their relevant identifiers (used in Google Search)
 */
export const mapHostToArticleSourceIdentifier: {
	[key in ArticleHostnames]: ArticleSourceIdentifier;
} = {
	"en.wikipedia.org": "__wiki__"
};

/**
 * Maps identifiers to regular expressions
 * that help us extract keys that identify a specific
 * article for that host
 */
export const mapArticleSourceIdentifierToArticleKeyRegex: {
	[key in ArticleSourceIdentifier]: RegExp;
} = {
	__wiki__: /(?<=org\/wiki\/)[^#?]*/g,
};
