import styles from './ButtonBlack.module.scss';

import * as React from 'react';
import { FC } from 'react';
import MenuItem from "../../types/menuItem";
import {Link} from "react-router-dom";

type Props = {
    url: MenuItem,
};

export const ButtonBlack: FC<Props> = ({ url }) => {
    if (url.local) {
        return (
            <Link className={ styles.blackButton } to={ url.href } target={ url.targetBlank ? '_blank' : '_self' }>
                { url.name }
            </Link>
        );
    }

    return (
        <a className={ styles.blackButton } href={ url.href } target={ url.targetBlank ? '_blank' : '_self' }>
            { url.name }
        </a>
    );
};