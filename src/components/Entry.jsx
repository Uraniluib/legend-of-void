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
        <Grid container
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', padding: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
            <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
                <Card sx={{ maxWidth: '400px' }}>
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
                                info.data.nature && <Typography gutterBottom variant="body" component="p">本源：{info.data.nature}（{info.data.foreignNature}）</Typography>
                            }
                            {
                                info.data.alias && <Typography gutterBottom variant="body" component="p">别名：{info.data.alias.join('、')}</Typography>
                            }
                            {
                                info.data.born && <Typography gutterBottom variant="body" component="p"><ReactMarkdown children={parseMarkdown('出生：' + info.data.born.time + '，' + info.data.born.location)} /></Typography>
                            }
                            </>
                        }
                    </CardContent>
                    


                        <Typography gutterBottom variant="h5" component="div">
                            {params.id}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            隶属：上古神祗
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            性别：女
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            出生时间：【上古纪】
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            死亡时间：-
                        </Typography>
                        <Typography variant="body2">
                            职务：神祗、开天辟地之人、初始之初
                        </Typography>

                    <CardActions>
                        <Button size="small">分享</Button>
                        <Button size="small">查看更多</Button>
                    </CardActions>

                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
                {article.isLoading && <Typography variant="body" component="div">正在加载……</Typography>}
                {article.isError && <Typography variant="body" component="div">暂无内容，请努力耕耘。</Typography>}
                {!article.isLoading && !article.isError && <ReactMarkdown children={parseMarkdown(article.data)} />}
            </Grid>
        </Grid>

    );
}