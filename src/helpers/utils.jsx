// 转译[[站内链接]]至合法的markdown超链接语言
export function parseMarkdown(markdownText) {
	return !markdownText ? null : markdownText
		.replace(/\[\[(.*?]*)\]\]/gim, '[$1](/legend-of-void#/entry/$1)').trim()
}
