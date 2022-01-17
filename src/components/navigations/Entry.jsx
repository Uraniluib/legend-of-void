import React, { useState, setState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ReactMarkdown from 'react-markdown';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import TextField from '@mui/material/TextField';
import PeopleCard from '../infocards/PeopleCard.jsx';
import useDataFetchAction from '../../redux/actions/dataFetchAction.jsx';
import dataUpdateAction from '../../redux/actions/dataUpdateAction.jsx';
import { parseMarkdown, decodeBase64, encodeBase64, headers } from '../../helpers/utils.jsx';
import { ROOT_URL, GIT_API } from '../../helpers/constants.jsx';
import {useDispatch, useSelector} from "react-redux";
import { deleteUsers, loadUsers } from '../../redux/actions/actions.jsx';


// 通过不同的data.card参数返回不同类型的卡片
function chooseCardModel(data) {
    switch (data.card) {
        case 'people':
            return <PeopleCard {...data} />
        default:
            return <Typography gutterBottom variant="body" component="div">非法参数，请修改data.card值或创建新的卡片模板。</Typography>
    }
}

const Entry = () =>  {
    const params = useParams();
    const { state: article } = useDataFetchAction(GIT_API + 'articles/' + params.id + '.md', null);
    const { state: figure } = useDataFetchAction(ROOT_URL + 'images/' + params.id + '.jpg', null);
    const { state: info } = useDataFetchAction(ROOT_URL + 'json/cards/' + params.id + '.json', null);
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState();

    const { users } = useSelector(state => state.users)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers());

    },[]);

    const handleEditClick = () => {
        setEditMode(true);
        setText(article.data.content ? decodeBase64(article.data.content) : '');
    };
    const handleSaveClick = () => {
        const updateData = { message: "我在测试", content: encodeBase64(text), sha: article.data.sha };
        dataUpdateAction(GIT_API + 'articles/' + params.id + '.md', updateData, headers);
        setEditMode(false);
    };
    const handleCloseClick = () => {
        setEditMode(false);
    }
    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    const handleDelete = (id) => {
        if(window.confirm("Are you sure?")) {
            dispatch(deleteUsers);
        }
    }

    return (
        <Grid container align='center'
            component={Paper}
            sx={{ m: '1em 1em 1em 1em', p: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
                <Button
                onClick={() => handleDelete(users.id)}
                >
                    Delete
                </Button>
                <Button>
                    Edit
                </Button>
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
                <Grid container >
                    <Grid item xs={9} md={10} sx={{ lineHeight: '2.5em' }}>
                        {
                            // 分类标签，来自cards.json
                            !info.isLoading && !info.isError && info.data && info.data.categories
                            && info.data.categories.length !== 0 && info.data.categories.map((e, i) =>
                                <Link key={e + i} to={"/categories/" + e}>
                                    <Chip label={e} clickable={true} />{" "}
                                </Link>
                            )
                        }
                    </Grid>
                    <Grid item align="right" xs={3} md={2}>
                        {
                            !editMode && <IconButton onClick={handleEditClick}>
                                <EditIcon />
                            </IconButton>
                        }
                        {
                            editMode && <>
                                <IconButton onClick={handleSaveClick}>
                                    <SaveIcon />
                                </IconButton>
                                <IconButton onClick={handleEditClick}>
                                    <RefreshIcon />
                                </IconButton>
                                <IconButton onClick={handleCloseClick}>
                                    <ClearIcon />
                                </IconButton>
                            </>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ mt: '1em' }} />
                    </Grid>
                    <Grid item xs={12}>
                        {/* md格式的正文部分，来自articles.md */}
                        {article.isLoading && <Typography variant="body" component="p">正在加载……</Typography>}
                        {article.isError && !editMode && <Typography variant="body" component="p">暂无内容，请努力耕耘。</Typography>}
                        {!article.isLoading && !article.isError && !editMode && article.data && <ReactMarkdown children={parseMarkdown(decodeBase64(article.data.content))} />}
                        {!article.isLoading && editMode
                            && <TextField
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={35}
                                value={text}
                                onChange={handleTextChange}
                                variant="filled"
                                sx={{ width: '100%' }}
                            />}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}
export default Entry;