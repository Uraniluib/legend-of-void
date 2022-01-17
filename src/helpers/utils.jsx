// 转译[[站内链接]]至合法的markdown超链接语言
export function parseMarkdown(markdownText) {
	return !markdownText ? null : markdownText
		.replace(/\[\[(.*?]*)\]\]/gim, '[$1](/legend-of-void#/entry/$1)').trim()
}

// decode base64
export function decodeBase64(content) {
	return Buffer.from(content, "base64").toString();
}

// encode base64
export function encodeBase64(content) {
	return Buffer.from(content).toString('base64')
}


export const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'token ' + decodeBase64('Z2hwX0dOdG1OMEloeGMwbmRvdXlFZFFaQ0NCVHdyMjhaNTIwczhkVw==')
};