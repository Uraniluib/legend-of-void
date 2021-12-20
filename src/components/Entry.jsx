import * as React from 'react';
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Entry() {
    let params = useParams();
    return (
        <Grid container
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', width: 'auto' }}
            spacing={2}>
            <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 345 }}>
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
            <Grid item xs={12} md={9}>
                <h2>概括</h2>
                <p>金发金眼，术式高强，喜好白衣，常用防护网探查周围情况，善用空气刀。是推动历史发展的重要角色，详见时间注释和墨绿色封皮的古书《锌雨颂》和历任锌雨专栏。
                </p>
                <h2>人物生平</h2>
                <p>
                    性格内敛，不善表达。虽然尊敬父亲，但依然经常和他吵架，把次当作妹妹看待。明可以不受控制地预见人之将死，虽然不能准确估计死期。喜欢喝茶，喜欢阿蒂亚次，喜欢林海。对里斯克一直抱有敌意，猜到他的作为，但是认为这不是自己可以处理的事，因而起初没有管，后来想挽救时，也已经晚了。被指定为银韵84世继承人，住在银韵的堡垒之中。刚上学不久，功课基本都是倒数第一。有无数次被暗杀的经历，但因为喝了迷药昏睡而一无所知。最后死于丝氏的一次刺杀行动。事实上她的处境基本上都是兰诺大殿下安排的。被誉为“神童”，出色的史书编撰人。与丈夫华约一起完成了近现代史书的编写，正准备着手研究古代史。
                </p>
                <h2>人物评价</h2>
                <p>
                    住在蚀湖中，吃路过的行人，毁坏初始人民的都城，诱惑紫媚使其堕落。败于华水与锌雨的联合攻击，被封印在蚀湖中，将湖水污染，使其有毒（实际上是强腐蚀性）。后世沦为儿童床头故事和专吓小孩的冤大头，传说会把不听话的小孩拖到蚀湖里淹死，然后啃到尸骨都不剩。少言寡语型，在碰到问题时，不懂得从别的渠道获得解决方法，就一直闷在心里。当他没有办法保护阿蒂亚次时，其实完全可以去拜托自己的同行来协助自己，但他没有这么做。有点因循守旧类型的，他对于亭兰和殿阁职位的判断就是，是否获得资格证书，没拿到证书，就是不合格，超级本本主义。非常疼爱阿蒂亚次，当然也很疼爱明。极度自恋，认为自己是塔克转世。贪钱。对生命淡漠，对医学疯狂追寻，以至随意牺牲别人的性命，对自己的生命很珍惜。被家族驱逐后，躲藏在昇圃园，成了拿钱办事的杀手分为。
                </p>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper>

                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper>

                </Paper>
            </Grid>
        </Grid>



    );
}