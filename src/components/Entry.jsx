import React from 'react';
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ReactMarkdown from 'react-markdown';
import { parseMarkdown } from './../utils/utils.jsx';
import useDataFetchAction from './../stores/actions/dataFetchAction.jsx';

const ROOT_URL = 'https://raw.githubusercontent.com/Uraniluib/legend-of-void/main/src/';

export default function Entry() {
    const params = useParams();
    const { state: article } = useDataFetchAction(ROOT_URL + 'articles/' + params.id + '.md', null);
    const { state: figure } = useDataFetchAction(ROOT_URL + 'images/' + params.id + '.jpg', null);
    const { state: info } = useDataFetchAction(ROOT_URL + 'cards/' + params.id + '.json', null);

    return (
        <Grid container align='center'
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', padding: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
            <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
                <Card align='left' sx={{ maxWidth: '400px' }}>
                    {figure.isLoading && <Skeleton variant="rectangular" width="auto" height={240} />}
                    {figure.isError && <CardMedia
                        component="img"
                        height="240"
                        image={ROOT_URL + 'images/default.jpg'}
                        alt={params.id}
                    />
                    }
                    {!figure.isLoading && !figure.isError &&
                        <CardMedia
                            component="img"
                            height="240"
                            image={ROOT_URL + 'images/' + params.id + '.jpg'}
                            alt={params.id}
                        />
                    }
                    <CardContent>
                        {info.isLoading && <Skeleton />}
                        {info.isError && <Typography gutterBottom variant="body" component="div">{params.id}信息卡为空，请干活！</Typography>}
                        {!info.isLoading && !info.isError && info.data &&
                            <>
                                {
                                    info.data.name && <Typography gutterBottom align="center" variant="h6" component="div">{info.data.name}（{info.data.foreignName}）</Typography>
                                }
                                {
                                    info.data.nature && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('本源：' + info.data.nature + '（' + info.data.foreignNature + '）')} /></Typography>
                                }
                                {
                                    info.data.alias && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('别名：' + info.data.alias.join('、'))} /></Typography>
                                }
                                {
                                    info.data.ethnicity && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('种族：' + info.data.ethnicity.join('、'))} /></Typography>
                                }
                                {
                                    info.data.nationality && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('民族：' + info.data.nationality.join('、'))} /></Typography>
                                }
                                <Divider sx={{ marginBottom: '0.25em' }} />
                                {
                                    info.data.born && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('出生：' + info.data.born.time + '，' + info.data.born.location)} /></Typography>
                                }
                                {
                                    info.data.died && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('死亡：' + info.data.died.time + '，' + info.data.died.location)} /></Typography>
                                }
                                {
                                    info.data.occupation && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('职业：' + info.data.occupation.join('、'))} /></Typography>
                                }
                                {
                                    info.data.tools && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('器具：' + info.data.tools.join('、'))} /></Typography>
                                }
                                <Divider sx={{ marginBottom: '0.25em' }} />
                                {
                                    info.data.height && <Typography gutterBottom variant="body2" component="div">身高：{info.data.height}</Typography>
                                }
                                {
                                    info.data.weight && <Typography gutterBottom variant="body2" component="div">体重：{info.data.weight}</Typography>
                                }
                                {
                                    info.data.eyeColor && <Typography gutterBottom variant="body2" component="div">瞳色：
                                        {
                                            info.data.eyeColor.normal &&
                                            <span>
                                                 常态 <Chip label={info.data.eyeColor.normal.name} 
                                                 style={{backgroundColor: info.data.eyeColor.normal.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.eyeColor.normal.code)} />
                                            </span>
                                        }
                                        {
                                            info.data.eyeColor.disguise &&
                                            <span>
                                                 | 伪装 <Chip label={info.data.eyeColor.disguise.name} 
                                                 style={{backgroundColor: info.data.eyeColor.disguise.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.eyeColor.disguise.code)} />
                                            </span>
                                        }
                                    </Typography>
                                }
                                {
                                    info.data.hairColor && <Typography gutterBottom variant="body2" component="div">发色：
                                        {
                                            info.data.hairColor.normal &&
                                            <span>
                                                 常态 <Chip label={info.data.hairColor.normal.name} 
                                                 style={{backgroundColor: info.data.hairColor.normal.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.hairColor.normal.code)} />
                                            </span>
                                        }
                                        {
                                            info.data.hairColor.disguise &&
                                            <span>
                                                 | 伪装 <Chip label={info.data.hairColor.disguise.name} 
                                                 style={{backgroundColor: info.data.hairColor.disguise.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.hairColor.disguise.code)} />
                                            </span>
                                        }
                                    </Typography>
                                }
                                {
                                    info.data.skinColor && <Typography gutterBottom variant="body2" component="div">肤色：
                                        {
                                            info.data.hairColor.normal &&
                                            <span>
                                                 常态 <Chip label={info.data.skinColor.normal.name} 
                                                 style={{backgroundColor: info.data.skinColor.normal.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.skinColor.normal.code)} />
                                            </span>
                                        }
                                        {
                                            info.data.skinColor.disguise &&
                                            <span>
                                                 | 伪装 <Chip label={info.data.skinColor.disguise.name} 
                                                 style={{backgroundColor: info.data.skinColor.disguise.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.skinColor.disguise.code)} />
                                            </span>
                                        }
                                    </Typography>
                                }
                                {
                                    info.data.feature && <Typography gutterBottom variant="body2" component="div"><ReactMarkdown children={parseMarkdown('特征：' + info.data.feature.join('、'))} /></Typography>
                                }
                                <Divider sx={{ marginBottom: '0.25em' }} />
                                {
                                    info.data.preferedColor && <Typography gutterBottom variant="body2" component="div">着色：
                                        {
                                            info.data.preferedColor.map((e) => {
                                                <span>
                                                 <Chip label={info.data.preferedColor.name} 
                                                 style={{backgroundColor: info.data.preferedColor.code, height: '1.5em'}} onClick={() => navigator.clipboard.writeText(info.data.preferedColor.code)} />
                                            </span>
                                            })
                                        }
                                    </Typography>
                                }
                            </>
                        }
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">分享</Button>
                        <Button size="small">查看更多</Button>
                    </CardActions> */}
                </Card>
            </Grid>
            <Grid item align='left' xs={12} sm={6} md={7} lg={8} xl={9}>
                {article.isLoading && <Typography variant="body" component="div">正在加载……</Typography>}
                {article.isError && <Typography variant="body" component="div">暂无内容，请努力耕耘。</Typography>}
                {!article.isLoading && !article.isError && <ReactMarkdown children={parseMarkdown(article.data)} />}
            </Grid>
        </Grid>

    );
}