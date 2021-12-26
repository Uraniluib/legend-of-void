import Typography from '@mui/material/Typography';
import PeopleCard from './../components/infocards/PeopleCard.jsx';

// 转译[[站内链接]]至合法的markdown超链接语言
export function parseMarkdown(markdownText) {
	return !markdownText ? null : markdownText
		.replace(/\[\[(.*?]*)\]\]/gim, '[$1](/legend-of-void#/entry/$1)').trim()
}

// 通过不同的data.card参数返回不同类型的卡片
export function chooseCardModel(data) {
	switch (data.card) {
		case 'people':
			return <PeopleCard {...data} />
		default:
			return <Typography gutterBottom variant="body" component="div">非法参数，请修改data.card值或创建新的卡片模板。</Typography>
	}
}
