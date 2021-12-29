import React from 'react';
import { useParams, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ReactMarkdown from 'react-markdown';
import PeopleCard from '../infocards/PeopleCard.jsx';
import useDataFetchAction from '../../stores/actions/dataFetchAction.jsx';
import { parseMarkdown } from '../../helpers/utils.jsx';
import { ROOT_URL } from '../../helpers/constants.jsx';


// 通过不同的data.card参数返回不同类型的卡片
function chooseCardModel(data) {
    switch (data.card) {
        case 'people':
            return <PeopleCard {...data} />
        default:
            return <Typography gutterBottom variant="body" component="div">非法参数，请修改data.card值或创建新的卡片模板。</Typography>
    }
}


export default function Entry() {
    const params = useParams();
    const { state: article } = useDataFetchAction(ROOT_URL + 'articles/' + params.id + '.md', null);
    const { state: figure } = useDataFetchAction(ROOT_URL + 'images/' + params.id + '.jpg', null);
    const { state: info } = useDataFetchAction(ROOT_URL + 'json/cards/' + params.id + '.json', null);

    return (
        <Grid container align='center'
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', padding: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
            <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
                <Card align='left' sx={{ maxWidth: '400px' }}>
                    {/* 图片栏，来自images.jpg */}
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
                        {/* 信息卡，来自cards.json */}
                        {info.isLoading && <Skeleton />}
                        {info.isError && <Typography gutterBottom variant="body" component="div">{params.id}信息卡为空，请干活！</Typography>}
                        {!info.isLoading && !info.isError && info.data && chooseCardModel(info.data)}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item align='left' xs={12} sm={6} md={7} lg={8} xl={9}>
                <Grid item xs={12}>
                    {
                        // 分类标签，来自cards.json
                        !info.isLoading && !info.isError && info.data && info.data.categories && info.data.categories.length !== 0 &&
                        <>
                            {
                                info.data.categories.map((e, i) =>
                                    <Link key={e + i} to={"/categories/" + e}>
                                        <Chip label={e} clickable={true} />{" "}
                                    </Link>
                                )
                            }
                            <Divider sx={{ marginTop: '1em' }} />
                        </>
                    }
                </Grid>
                <Grid item xs={12}>
                    {/* md格式的正文部分，来自articles.md */}
                    {article.isLoading && <Typography variant="body" component="p">正在加载……</Typography>}
                    {article.isError && <Typography variant="body" component="p">暂无内容，请努力耕耘。</Typography>}
                    {!article.isLoading && !article.isError && <ReactMarkdown children={parseMarkdown(article.data)} />}
                </Grid>
            </Grid>
        </Grid>

    );
}