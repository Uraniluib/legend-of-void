import ReactMarkdown from 'react-markdown';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { parseMarkdown } from '../../helpers/utils.jsx';

// 适用于标题和本源
export function name(n, fn) {
    return (
        n &&
        <Typography gutterBottom align="center" variant="h6" component="div">
            <ReactMarkdown children={parseMarkdown(n + '（' + fn + '）')} />
        </Typography>
    )
}

// 适用于普通的array + [[]]
export function bodyList(n, d) {
    return (
        n && n.length !== 0 && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown(d + n.join('、'))} /></Typography>
    )
}

// 适用于普通的单值或map，描述多个，无需连接符
export function nParams(n, ...args) {
    return (
        n && <Typography gutterBottom variant="body2" component="div">
            <ReactMarkdown children={parseMarkdown(args.join(""))} />
        </Typography>
    )
}

// 适用于带颜色有常态和伪装的值
export function color(n, d) {
    return (
        n && n.normal && n.normal.name && n.normal.code && <Typography gutterBottom variant="body2" component="div">{d}
            {
                <span>
                    常态 <Chip label={n.normal.name}
                        style={{ backgroundColor: n.normal.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(n.normal.code)} />
                </span>
            }
            {
                n.disguise && n.disguise.name && n.disguise.code &&
                <span>
                    | 伪装 <Chip label={n.disguise.name}
                        style={{ backgroundColor: n.disguise.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(n.disguise.code)} />
                </span>
            }
        </Typography>
    )
}

// 适用于带颜色array
export function colorList(n, d) {
    return (
        n && n.length !== 0 && n[0].name && n[0].code &&  <Typography gutterBottom variant="body2" component="div">{d}
            {
                n.map((e, i) =>
                    <span key={e.code + i}>
                        <Chip label={e.name}
                            style={{ backgroundColor: e.code, height: '1.5em' }} onClick={() => navigator.clipboard.writeText(e.code)} />{" "}
                    </span>
                )
            }
        </Typography>
    )
}

// 适用于插图作者
export function imageAuthor(n, d, c) {
    return (
        n && <Typography align="right" variant="body2" component="div">
            <Chip label={d + n}
                style={{ backgroundColor: c, height: '1.5em' }} />
        </Typography>
    )
}
