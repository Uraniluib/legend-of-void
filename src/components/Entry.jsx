import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ReactMarkdown from 'react-markdown';
import { parseMarkdown } from './../utils/utils.jsx';


export default function Entry() {
    let params = useParams();
    const [article, setArticle] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Uraniluib/legend-of-void/main/src/articles/' + params.id + ".md")
            .then(res => {
                if (res.ok) {
                    return res.text()
                } else if (res.status === 404) {
                    return Promise.reject('error 404')
                } else {
                    return Promise.reject('some other error: ' + res.status)
                }
            })
            .then(data => setArticle(parseMarkdown(data)))
            .catch(() => setArticle(parseMarkdown(params.id + "暂无内容，请努力耕耘。")));
    });

    return (
        <Grid container
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', padding: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
            <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
                <Card sx={{ maxWidth: '400px'}}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={"https://raw.githubusercontent.com/Uraniluib/legend-of-void/main/src/images/" + params.id + ".jpg"}
                        alt={params.id}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {params.id}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            隶属：上古神祗
                        </Typography>
                        <Typography variant="body2" color="text.primary">
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
                    </CardContent>
                    <CardActions>
                        <Button size="small">分享</Button>
                        <Button size="small">查看更多</Button>
                    </CardActions>

                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
                <ReactMarkdown children={article} />
            </Grid>
        </Grid>

    );
}