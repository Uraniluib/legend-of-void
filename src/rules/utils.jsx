export function parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/\[\[(.*?]*)\]\]/gim, '[$1](/legend-of-void#/entry/$1)')
	return htmlText.trim()
}