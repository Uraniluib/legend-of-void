import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export const Copyright = (props) => {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © ' + new Date().getFullYear()}
            <Link color="inherit" href="/lengend-of-void">
                《空泛传说》设定集 - 离人笑 著
            </Link>
        </Typography>
    );
}