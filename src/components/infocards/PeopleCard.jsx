import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ReactMarkdown from 'react-markdown';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { parseMarkdown } from '../../helpers/utils.jsx';

const PeopleCard = (p) => {

    const theme = useTheme();

    // TODO 需要做重构
    return (
        <>
            {
                p.name && <Typography gutterBottom align="center" variant="h6" component="div">{p.name}（{p.foreignName}）</Typography>
            }
            {
                p.nature && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('本源：' + p.nature + '（' + p.foreignNature + '）')} /></Typography>
            }
            {
                p.alias && p.alias.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('别名：' + p.alias.join('、'))} /></Typography>
            }
            {
                p.ethnicity && p.ethnicity.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('种族：' + p.ethnicity.join('、'))} /></Typography>
            }
            {
                p.nationality && p.nationality.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('民族：' + p.nationality.join('、'))} /></Typography>
            }
            {
                p.gender && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('本性：' + p.gender.actual + '| 择性：' + p.gender.choose)} /></Typography>
            }
            <Divider sx={{ marginBottom: '0.25em' }} />
            {
                p.born && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('出生：' + p.born.time + '，' + p.born.location)} /></Typography>
            }
            {
                p.died && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('死亡：' + p.died.time + '，' + p.died.location)} /></Typography>
            }
            {
                p.occupations && p.occupations.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('职业：' + p.occupations.join('、'))} /></Typography>
            }
            {
                p.tools && p.tools.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('器具：' + p.tools.join('、'))} /></Typography>
            }
            <Divider sx={{ marginBottom: '0.25em' }} />
            {
                p.height && <Typography gutterBottom variant="body2" component="div">身高：{p.height}</Typography>
            }
            {
                p.weight && <Typography gutterBottom variant="body2" component="div">体重：{p.weight}</Typography>
            }
            {
                p.eyeColor && <Typography gutterBottom variant="body2" component="div">瞳色：
                    {
                        p.eyeColor.normal &&
                        <span>
                            常态 <Chip label={p.eyeColor.normal.name}
                                style={{ backgroundColor: p.eyeColor.normal.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(p.eyeColor.normal.code)} />
                        </span>
                    }
                    {
                        p.eyeColor.disguise &&
                        <span>
                            | 伪装 <Chip label={p.eyeColor.disguise.name}
                                style={{ backgroundColor: p.eyeColor.disguise.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(p.eyeColor.disguise.code)} />
                        </span>
                    }
                </Typography>
            }
            {
                p.hairColor && <Typography gutterBottom variant="body2" component="div">发色：
                    {
                        p.hairColor.normal &&
                        <span>
                            常态 <Chip label={p.hairColor.normal.name}
                                style={{ backgroundColor: p.hairColor.normal.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(p.hairColor.normal.code)} />
                        </span>
                    }
                    {
                        p.hairColor.disguise &&
                        <span>
                            | 伪装 <Chip label={p.hairColor.disguise.name}
                                style={{ backgroundColor: p.hairColor.disguise.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(p.hairColor.disguise.code)} />
                        </span>
                    }
                </Typography>
            }
            {
                p.skinColor && <Typography gutterBottom variant="body2" component="div">肤色：
                    {
                        p.hairColor.normal &&
                        <span>
                            常态 <Chip label={p.skinColor.normal.name}
                                style={{ backgroundColor: p.skinColor.normal.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(p.skinColor.normal.code)} />
                        </span>
                    }
                    {
                        p.skinColor.disguise &&
                        <span>
                            | 伪装 <Chip label={p.skinColor.disguise.name}
                                style={{ backgroundColor: p.skinColor.disguise.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(p.skinColor.disguise.code)} />
                        </span>
                    }
                </Typography>
            }
            {
                p.feature && p.feature.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('特征：' + p.feature.join('、'))} /></Typography>
            }
            <Divider sx={{ marginBottom: '0.25em' }} />
            {
                p.preferredColor && <Typography gutterBottom variant="body2" component="div">着色：
                    {
                        p.preferredColor.map((e, i) =>
                            <span key={e.code + i}>
                                <Chip label={e.name}
                                    style={{ backgroundColor: e.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(e.code)} />{" "}
                            </span>
                        )
                    }
                </Typography>
            }
            {
                p.preferences && p.preferences.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('偏好：' + p.preferences.join('、'))} /></Typography>
            }
            {
                p.contributions && p.contributions.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('功绩：' + p.contributions.join('、'))} /></Typography>
            }
            {
                p.notableWorks && p.notableWorks.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('著作：' + p.notableWorks.join('、'))} /></Typography>
            }
            <Divider sx={{ marginBottom: '0.25em' }} />
            {
                p.siblings && p.siblings.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('手足：' + p.siblings.join('、'))} /></Typography>
            }
            {
                p.spouses && p.spouses.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('配偶：' + p.spouses.join('、'))} /></Typography>
            }
            {
                p.children && p.children.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('孩子：' + p.children.join('、'))} /></Typography>
            }
            {
                p.imageAuthor && <Typography align="right" variant="body2" component="div">
                    <Chip label={'插图作者：' + p.imageAuthor}
                        style={{ backgroundColor: theme.palette.primary.light, height: '1.5em' }} />
                </Typography>

            }
        </>
    )
}
export default PeopleCard;
