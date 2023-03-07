import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, Button, CardActionArea, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { red, green, grey, indigo, brown, purple, blue, yellow, pink, orange } from '@mui/material/colors';
import { useState } from 'react';

const DECEPTICONS = 'Decepticons';
const CONSTRUCTICONS = 'Constructicons';
const COMBATICONS = 'Combaticons';
const STUNTICONS = 'Stunticons';
const TERRORCONS = 'Terrorcons';

const AUTOBOTS = 'Autobots';
const AERIALBOTS = 'Aerialbots';
const PROTECTOBOTS = 'Protectobots';
const TECHNOBOTS = 'Technobots';
const TORCHBEARERS = 'Torchbearers';

const Sequence = (props) => {
    const lattices = [
        { name: '', id: '00', initials: '⨁', color: grey[200], label: 'random', team: '', factions: '' },
        { name: '铲土机', id: '01', initials: 'SC', color: green[200], label: 'Scrapper', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '吵闹', id: '02', initials: 'BR', color: indigo[200], label: 'Brawl', team: COMBATICONS, factions: DECEPTICONS },
        { name: '烙铁', id: '03', initials: 'AB', color: orange[200], label: 'Afterburner', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '空袭', id: '04', initials: 'AR', color: yellow[200], label: 'Air Raid', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '疾袭', id: '05', initials: 'SC', color: brown[200], label: 'Stormclash', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '刀刃', id: '06', initials: 'BL', color: blue[200], label: 'Blades', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '双头龙', id: '07', initials: 'ST', color: pink[200], label: 'Sinnertwin', team: TERRORCONS, factions: DECEPTICONS },
        { name: '打击', id: '08', initials: 'BD', color: grey[500], label: 'Breakdown', team: STUNTICONS, factions: DECEPTICONS },
        { name: '', id: '09', initials: '⨁', color: grey[200], label: 'random', team: '', factions: '' },
        { name: '吊钩', id: '10', initials: 'HK', color: green[200], label: 'Hook', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '拖斗', id: '11', initials: 'LH', color: green[200], label: 'Long Haul', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '诈骗', id: '12', initials: 'SW', color: indigo[200], label: 'Swindle', team: COMBATICONS, factions: DECEPTICONS },
        { name: '钢鞭', id: '13', initials: 'SF', color: orange[200], label: 'Strafe', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '飞火', id: '14', initials: 'FF', color: yellow[200], label: 'Fireflight', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '喧闹', id: '15', initials: 'SC', color: brown[200], label: 'Dust Up', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '急救员', id: '16', initials: 'FA', color: blue[200], label: 'First Aid', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '割喉', id: '17', initials: 'CT', color: pink[200], label: 'Cutthroat', team: TERRORCONS, factions: DECEPTICONS },
        { name: '越野', id: '18', initials: 'OR', color: grey[500], label: 'Offroad', team: STUNTICONS, factions: DECEPTICONS },
        { name: '汽大', id: '19', initials: 'MM', color: grey[500], label: 'Motormaster', team: STUNTICONS, factions: DECEPTICONS },
        { name: '碾压机', id: '20', initials: 'BC', color: green[200], label: 'Bonecrusher', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '袭击', id: '21', initials: 'OS', color: indigo[200], label: 'Onslaught', team: COMBATICONS, factions: DECEPTICONS },
        { name: '', id: '22', initials: '狂', color: purple[300], label: 'symbol', team: '', factions: DECEPTICONS },
        { name: '机关炮', id: '23', initials: 'SS', color: orange[200], label: 'Scattershot', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '弹弓', id: '24', initials: 'SS', color: yellow[200], label: 'Slingshot', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '跳跃流', id: '25', initials: 'JS', color: brown[200], label: 'Jumpstream', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '热点', id: '26', initials: 'HS', color: blue[200], label: 'Hot Spot', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '', id: '27', initials: '狂', color: purple[300], label: 'symbol', team: '', factions: DECEPTICONS },
        { name: '饿龙', id: '28', initials: 'HG', color: pink[200], label: 'Hun-Grrr', team: TERRORCONS, factions: DECEPTICONS },
        { name: '封锁', id: '29', initials: 'DE', color: grey[500], label: 'Dead End', team: STUNTICONS, factions: DECEPTICONS },
        { name: '清扫机', id: '30', initials: 'SV', color: green[200], label: 'Scavenger', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '旋风', id: '31', initials: 'VT', color: indigo[200], label: 'Vortex', team: COMBATICONS, factions: DECEPTICONS },
        { name: '光速', id: '32', initials: 'SL', color: orange[200], label: 'Speedlight', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '凌云', id: '33', initials: 'AB', color: yellow[200], label: 'Alpha Bravo', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '银剑', id: '34', initials: 'SB', color: yellow[200], label: 'Silverbolt', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '巨焰', id: '35', initials: 'PM', color: brown[200], label: 'Pyra Magna', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '锈尘', id: '36', initials: 'RD', color: brown[200], label: 'Rust Dust', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '车辙', id: '37', initials: 'GR', color: blue[200], label: 'Groove', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '裂齿', id: '38', initials: 'RS', color: pink[200], label: 'Rippersnapper', team: TERRORCONS, factions: DECEPTICONS },
        { name: '抢劫', id: '39', initials: 'DS', color: grey[500], label: 'Drag Strip', team: STUNTICONS, factions: DECEPTICONS },
        { name: '搅拌机', id: '40', initials: 'MM', color: green[200], label: 'Mixmaster', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '爆炸', id: '41', initials: 'BO', color: indigo[200], label: 'Blast Off', team: COMBATICONS, factions: DECEPTICONS },
        { name: '钻探机', id: '42', initials: 'NC', color: orange[200], label: 'Nosecone', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '俯冲', id: '43', initials: 'SD', color: yellow[200], label: 'Skydive', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '', id: '44', initials: '博', color: red[300], label: 'symbol', team: '', factions: AUTOBOTS },
        { name: '', id: '45', initials: '博', color: red[300], label: 'symbol', team: '', factions: AUTOBOTS },
        { name: '空爆', id: '46', initials: 'SB', color: brown[200], label: 'Skyburst', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '大街', id: '47', initials: 'SW', color: blue[200], label: 'Streetwise', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '污点', id: '48', initials: 'BT', color: pink[200], label: 'Blot', team: TERRORCONS, factions: DECEPTICONS },
        { name: '莽撞', id: '49', initials: 'WR', color: grey[500], label: 'Wildrider', team: STUNTICONS, factions: DECEPTICONS },
        { name: '莽撞', id: '50', initials: 'WR', color: grey[500], label: 'Wildrider', team: STUNTICONS, factions: DECEPTICONS },
        { name: '污点', id: '51', initials: 'BT', color: pink[200], label: 'Blot', team: TERRORCONS, factions: DECEPTICONS },
        { name: '大街', id: '52', initials: 'SW', color: blue[200], label: 'Streetwise', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '空爆', id: '53', initials: 'SB', color: brown[200], label: 'Skyburst', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '', id: '54', initials: '博', color: red[300], label: 'symbol', team: '', factions: AUTOBOTS },
        { name: '', id: '55', initials: '博', color: red[300], label: 'symbol', team: '', factions: AUTOBOTS },
        { name: '俯冲', id: '56', initials: 'SD', color: yellow[200], label: 'Skydive', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '钻探机', id: '57', initials: 'NC', color: orange[200], label: 'Nosecone', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '爆炸', id: '58', initials: 'BO', color: indigo[200], label: 'Blast Off', team: COMBATICONS, factions: DECEPTICONS },
        { name: '搅拌机', id: '59', initials: 'MM', color: green[200], label: 'Mixmaster', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '抢劫', id: '60', initials: 'DS', color: grey[500], label: 'Drag Strip', team: STUNTICONS, factions: DECEPTICONS },
        { name: '裂齿', id: '61', initials: 'RS', color: pink[200], label: 'Rippersnapper', team: TERRORCONS, factions: DECEPTICONS },
        { name: '车辙', id: '62', initials: 'GR', color: blue[200], label: 'Groove', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '锈尘', id: '63', initials: 'RD', color: brown[200], label: 'Rust Dust', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '巨焰', id: '64', initials: 'PM', color: brown[200], label: 'Pyra Magna', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '银剑', id: '65', initials: 'SB', color: yellow[200], label: 'Silverbolt', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '凌云', id: '66', initials: 'AB', color: yellow[200], label: 'Alpha Bravo', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '光速', id: '67', initials: 'SL', color: orange[200], label: 'Speedlight', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '旋风', id: '68', initials: 'VT', color: indigo[200], label: 'Vortex', team: COMBATICONS, factions: DECEPTICONS },
        { name: '清扫机', id: '69', initials: 'SV', color: green[200], label: 'Scavenger', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '封锁', id: '70', initials: 'DE', color: grey[500], label: 'Dead End', team: STUNTICONS, factions: DECEPTICONS },
        { name: '饿龙', id: '71', initials: 'HG', color: pink[200], label: 'Hun-Grrr', team: TERRORCONS, factions: DECEPTICONS },
        { name: '', id: '72', initials: '狂', color: purple[300], label: 'symbol', team: '', factions: DECEPTICONS },
        { name: '热点', id: '73', initials: 'HS', color: blue[200], label: 'Hot Spot', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '跳跃流', id: '74', initials: 'JS', color: brown[200], label: 'Jumpstream', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '弹弓', id: '75', initials: 'SS', color: yellow[200], label: 'Slingshot', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '机关炮', id: '76', initials: 'SS', color: orange[200], label: 'Scattershot', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '', id: '77', initials: '狂', color: purple[300], label: 'symbol', team: '', factions: DECEPTICONS },
        { name: '袭击', id: '78', initials: 'OS', color: indigo[200], label: 'Onslaught', team: COMBATICONS, factions: DECEPTICONS },
        { name: '碾压机', id: '79', initials: 'BC', color: green[200], label: 'Bonecrusher', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '汽大', id: '80', initials: 'MM', color: grey[500], label: 'Motormaster', team: STUNTICONS, factions: DECEPTICONS },
        { name: '越野', id: '81', initials: 'OR', color: grey[500], label: 'Offroad', team: STUNTICONS, factions: DECEPTICONS },
        { name: '割喉', id: '82', initials: 'CT', color: pink[200], label: 'Cutthroat', team: TERRORCONS, factions: DECEPTICONS },
        { name: '急救员', id: '83', initials: 'FA', color: blue[200], label: 'First Aid', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '喧闹', id: '84', initials: 'SC', color: brown[200], label: 'Dust Up', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '飞火', id: '85', initials: 'FF', color: yellow[200], label: 'Fireflight', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '钢鞭', id: '86', initials: 'SF', color: orange[200], label: 'Strafe', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '诈骗', id: '87', initials: 'SW', color: indigo[200], label: 'Swindle', team: COMBATICONS, factions: DECEPTICONS },
        { name: '拖斗', id: '88', initials: 'LH', color: green[200], label: 'Long Haul', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '吊钩', id: '89', initials: 'HK', color: green[200], label: 'Hook', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '', id: '90', initials: '⨁', color: grey[200], label: 'random', team: '', factions: '' },
        { name: '打击', id: '91', initials: 'BD', color: grey[500], label: 'Breakdown', team: STUNTICONS, factions: DECEPTICONS },
        { name: '双头龙', id: '92', initials: 'ST', color: pink[200], label: 'Sinnertwin', team: TERRORCONS, factions: DECEPTICONS },
        { name: '刀刃', id: '93', initials: 'BL', color: blue[200], label: 'Blades', team: PROTECTOBOTS, factions: AUTOBOTS },
        { name: '疾袭', id: '94', initials: 'SC', color: brown[200], label: 'Stormclash', team: TORCHBEARERS, factions: AUTOBOTS },
        { name: '空袭', id: '95', initials: 'AR', color: yellow[200], label: 'Air Raid', team: AERIALBOTS, factions: AUTOBOTS },
        { name: '烙铁', id: '96', initials: 'AB', color: orange[200], label: 'Afterburner', team: TECHNOBOTS, factions: AUTOBOTS },
        { name: '吵闹', id: '97', initials: 'BR', color: indigo[200], label: 'Brawl', team: COMBATICONS, factions: DECEPTICONS },
        { name: '铲土机', id: '98', initials: 'SC', color: green[200], label: 'Scrapper', team: CONSTRUCTICONS, factions: DECEPTICONS },
        { name: '', id: '99', initials: '⨁', color: grey[200], label: 'random', team: '', factions: '' },
    ];
    return (
        <Grid container
            component={Paper}
            sx={{ m: '1em 1em 1em 1em', p: '0 1em 1em 0', width: 'auto' }}
            spacing={1}>
            {lattices && lattices.map((lattice, count) =>
                <Grid item xs={1.2}>
                    <Card key={count} style={{backgroundColor: lattice.color}}>
                        <CardActionArea>
                            <CardHeader
                                disableTypography='true'
                                avatar={
                                    <Avatar sx={{ bgcolor: grey[400] }} aria-label={lattice.label}>
                                        {lattice.initials}
                                    </Avatar>
                                }
                                title={lattice.name}
                                subheader={lattice.id}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}
export default Sequence;