import SquareTwoToneIcon from '@mui/icons-material/SquareTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BalanceIcon from '@mui/icons-material/Balance';
import BabyChangingStationOutlinedIcon from '@mui/icons-material/BabyChangingStationOutlined';

export const ethnicities = [{ key: 'pupae', name: '茧生' }, { key: 'viviparous', name: '胎生' }, { key: 'oviparous', name: '卵生' }];
export const families = { 'pupae': [{ key: 'lan-nuo', name: '兰诺家族' }, { key: 'mao-lan-qing-yuan', name: '铆澜清愿家族' }], 'viviparous': [{ key: 'nan-chu', name: '赧滁家族' }], 'oviparous': [{ key: 'dou-li-cun', name: '豆粒村家族' }] };

export const nc = [
    {
        "li": { "mt": 0 },
        "grid": [
            {
                "xs": 1,
                "icon": CircleTwoToneIcon,
                "color": "error",
                "typo": "瞿琪"
            }, {
                "xs": 6,
                "dIcon": BalanceIcon,
                "typo": "\u00A0"
            }, { "xs": 5 }
        ]
    }, {
        "li": { "mt": -48 },
        "grid": [
            {
                "xs": 3,
                "ori": "vertical",
                "height": 64,
                "dIcon": BabyChangingStationOutlinedIcon
            }, { "xs": 4 }, {
                "xs": 1,
                "icon": SquareTwoToneIcon,
                "color": "info",
                "typo": "赧滁"
            }, {
                "xs": 3,
                "dIcon": BalanceIcon,
                "typo": "\u00A0"
            }, {
                "xs": 1,
                "icon": CircleTwoToneIcon,
                "color": "error",
                "typo": "莨烨"
            }
        ]
    }, {
        "li": { "mt": -48 },
        "grid": [
            { "xs": 3 }, {
                "xs": 1,
                "icon": CircleTwoToneIcon,
                "color": "error",
                "typo": "姯夙"
            }, {
                "xs": 3,
                "dIcon": WarningAmberIcon,
                "typo": "\u00A0"
            }, {
                "xs": 5,
                "ori": "vertical",
                "height": 64,
                "dIcon": BabyChangingStationOutlinedIcon
            }
        ]
    }, {
        "li": { "mt": -56 },
        "grid": [
            { "xs": 1 }, {
                "xs": 1,
                "icon": SquareTwoToneIcon,
                "color": "info",
                "typo": "叶"
            }, {
                "xs": 5,
                "ori": "vertical",
                "height": 64,
                "dIcon": BabyChangingStationOutlinedIcon
            }
        ]
    }, {
        "li": { "mt": -40 },
        "grid": [
            { "xs": 8 }, {
                "xs": 1,
                "icon": SquareTwoToneIcon,
                "color": "info",
                "typo": "蔚"
            }, {
                "xs": 1,
                "dIcon": PeopleOutlineIcon,
                "typo": "\u00A0"
            }, {
                "xs": 1,
                "icon": SquareTwoToneIcon,
                "color": "info",
                "typo": "岐"
            }, { "xs": 1 }
        ]
    }, {
        "li": { "mt": -38 },
        "grid": [
            { "xs": 4 }, {
                "xs": 1,
                "icon": SquareTwoToneIcon,
                "color": "info",
                "typo": "琴"
            }, { "xs": 7 }
        ]
    }
];

export const fm = {};