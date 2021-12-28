import AllOutOutlinedIcon from '@mui/icons-material/AllOutOutlined';
import AllOutTwoToneIcon from '@mui/icons-material/AllOutTwoTone';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import CenterFocusStrongTwoToneIcon from '@mui/icons-material/CenterFocusStrongTwoTone';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import SquareTwoToneIcon from '@mui/icons-material/SquareTwoTone';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import IndeterminateCheckBoxTwoToneIcon from '@mui/icons-material/IndeterminateCheckBoxTwoTone';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import HexagonTwoToneIcon from '@mui/icons-material/HexagonTwoTone';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import BlurOffIcon from '@mui/icons-material/BlurOff';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BabyChangingStationOutlinedIcon from '@mui/icons-material/BabyChangingStationOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';

export const mainBody = [
    {
        id: "actual-common-choose-common",
        key: "accc",
        icon1: AllOutTwoToneIcon,
        icon2: AllOutOutlinedIcon,
        p: "通性",
        s: "本性通/择性通",
        color: "success"
    }, {
        id: "actual-common-choose-male",
        key: "accm",
        icon1: CenterFocusStrongTwoToneIcon,
        icon2: CenterFocusStrongOutlinedIcon,
        p: "通择男性",
        s: "本性通/择性男",
        color: "info"
    }, {
        id: "actual-common-choose-female",
        key: "accf",
        icon1: AlbumTwoToneIcon,
        icon2: AlbumOutlinedIcon,
        p: "通择女性",
        s: "本性通/择性女",
        color: "error"
    }, {
        id: "actual-male-choose-male",
        key: "amcm",
        icon1: SquareTwoToneIcon,
        icon2: CheckBoxOutlineBlankSharpIcon,
        p: "男性",
        s: "本性男/择性男",
        color: "info"
    }, {
        id: "actual-female-choose-female",
        key: "afcf",
        icon1: CircleTwoToneIcon,
        icon2: CircleOutlinedIcon,
        p: "女性",
        s: "本性女/择性女",
        color: "error"
    }, {
        id: "actual-male-choose-female",
        key: "afcf",
        icon1: IndeterminateCheckBoxTwoToneIcon,
        icon2: IndeterminateCheckBoxOutlinedIcon,
        p: "男择女性",
        s: "本性男/择性女",
        color: "error"
    }, {
        id: "actual-female-choose-male",
        key: "afcm",
        icon1: AddCircleTwoToneIcon,
        icon2: AddCircleOutlineOutlinedIcon,
        p: "女择男性",
        s: "本性女/择性男",
        color: "info"
    }, {
        id: "actual-none-choose-none",
        key: "ancn",
        icon1: HexagonTwoToneIcon,
        icon2: HexagonOutlinedIcon,
        p: "无性",
        s: "本性无",
        color: "success"
    }, {
        id: "actual-ele-choose-ele",
        key: "aece",
        icon1: FilterVintageTwoToneIcon,
        icon2: FilterVintageOutlinedIcon,
        p: "元素合",
        s: "限元素合",
        color: "default"
    }
];

export const parents = [
    {
        g2: BalanceIcon,
        g4: "婚姻关系"
    }, {
        g2: WarningAmberIcon,
        g4: "偷情/出轨"
    }, {
        g2: BedroomParentOutlinedIcon,
        g4: "性关系/同居"
    }, {
        g2: SafetyDividerIcon,
        g4: "婚内分居"
    }, {
        g2: SafetyDividerIcon,
        g3: CloseOutlinedIcon,
        g4: "分居后复合"
    }, {
        g2: HeartBrokenOutlinedIcon,
        g4: "离婚"
    }, {
        g2: HeartBrokenOutlinedIcon,
        g3: CloseOutlinedIcon,
        g4: "离婚后复婚"
    }

];

export const parentChild = [
    {
        key: "亲生",
        icon: BabyChangingStationOutlinedIcon
    }, {
        key: "收养",
        icon: EscalatorWarningOutlinedIcon
    }, {
        key: "早夭",
        icon: BlurOffIcon
    }, {
        key: "孪生",
        icon: PeopleOutlineIcon
    }, {
        key: "怀孕",
        icon: PregnantWomanIcon
    }, {
        key: "未知",
        icon: HelpOutlineOutlinedIcon
    }
];