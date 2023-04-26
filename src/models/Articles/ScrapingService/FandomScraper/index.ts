import cheerio from "cheerio";
import axios from "axios";
import { ArticleScraper, ScrapeData } from "../interface";
import ArticleScraperBase from "../ArticleScraperBase";
import { urlencoded } from "body-parser";

export default class FandomScraper
	extends ArticleScraperBase
	implements ArticleScraper
{
	public async scrapeArticle(): Promise<ScrapeData> {
		const { data, headers } = await axios.get<string>(this.sourceArticleKey);

		if (!headers["content-type"] || !headers["content-type"].includes("html")) {
			return {
				extract: ArticleScraperBase.REMOVE_TOKEN,
				title: ArticleScraperBase.REMOVE_TOKEN,
				sourceArticleKey: ArticleScraperBase.REMOVE_TOKEN,
				paragraphs: [ArticleScraperBase.REMOVE_TOKEN],
			};
		}

		const $ = cheerio.load(data);

		const articleText = $("div#answers div.js-post-body").text()

		this.paragraphs = articleText
			.replace(/[\n\r\t]{1,}/g, "\n")
			.replace(/\u00AD/g, "")
			.split(/[\t\r\n]/g)
			.filter((para) => !!para.trim() && para !== "Hlusta");

		this.title = $("h1")
			?.text()
			?.replace(/[\n\r\t]{1,}/g, "\n")
			?.replace(/\u00AD/g, "")
			?.split(/[\t\r\n]/g)
			.filter((a) => !!a)[0];

		return {
			extract: this.paragraphs[0],
			title: this.title?.trim() ?? "Title missing",
			sourceArticleKey: this.sourceArticleKey,
			paragraphs: this.paragraphs.map((para) => para.trim()),
		};
	}
}
