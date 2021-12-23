export function parseMarkdown(markdownText) {
	return !markdownText ? null : markdownText
	.replace(/\[\[(.*?]*)\]\]/gim, '[$1](/legend-of-void#/entry/$1)').trim()
}