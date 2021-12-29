import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { name, bodyList, nParams, color, colorList, imageAuthor } from './cardStructures.jsx';

const MARGIN_BOTTOM = "0.25em";

const PeopleCard = (p) => {

    const theme = useTheme();

    // TODO 需要做重构
    return (
        <>
            {name(p.name, p.foreignName)}
            {nParams(p.nature, "本源：", p.nature, "（", p.foreignNature, "）")}
            {bodyList(p.alias, "别名：")}
            {bodyList(p.ethnicity, "种族：")}
            {bodyList(p.nationality, "民族：")}
            {nParams(p.gender, "性别：本性", p.gender.actual, "择性", p.gender.choose)}
            <Divider sx={{ mb: MARGIN_BOTTOM }} />
            {nParams(p.born, "出生：", p.born.time, "，", p.born.location)}
            {nParams(p.died, "死亡：", p.died.time, "，", p.died.location)}
            {bodyList(p.titles, "头衔：")}
            {bodyList(p.occupations, "职业：")}
            {bodyList(p.tools, "器具：")}
            <Divider sx={{ mb: MARGIN_BOTTOM }} />
            {nParams(p.height, "身高：", p.height)}
            {nParams(p.weight, "体重：", p.weight)}
            {color(p.eyeColor, "瞳色：")}
            {color(p.hairColor, "发色：")}
            {color(p.skinColor, "肤色：")}
            {bodyList(p.feature, "特征：")}
            <Divider sx={{ mb: MARGIN_BOTTOM }} />
            {colorList(p.preferredColor, "着色：")}
            {bodyList(p.preferences, "偏好：")}
            {bodyList(p.events, "事件：")}
            {bodyList(p.notableWorks, "著作：")}
            <Divider sx={{ mb: MARGIN_BOTTOM }} />
            {bodyList(p.parents, "本生：")}
            {bodyList(p.adoptiveParents, "收养：")}
            {bodyList(p.siblings, "手足：")}
            {bodyList(p.spouses, "配偶：")}
            {bodyList(p.children, "孩子：")}
            {imageAuthor(p.imageAuthor, "插图作者：", theme.palette.primary.light)}
        </>
    )
}
export default PeopleCard;
