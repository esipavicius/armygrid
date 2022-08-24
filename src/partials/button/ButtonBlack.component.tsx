import styles from './ButtonBlack.module.scss';

import * as React from 'react';
import { FC } from 'react';
import MenuItem from "../../types/menuItem";
import {Link} from "react-router-dom";

type Props = {
    url: MenuItem,
    visible?: boolean,
    active?: boolean,
};

export const ButtonBlack: FC<Props> = ({ url, visible = true, active = false }) => {
    const activeClassName = active ? styles.blackButtonActive : '';

    if (url.local) {
        return (
            <Link
                className={ styles.blackButton + ' ' + activeClassName }
                to={ url.href }
                target={ url.targetBlank ? '_blank' : '_self' }
                style={{ visibility: visible ? 'visible' : 'hidden'}}
            >
                { url.name }
            </Link>
        );
    }

    return (
        <a
            className={ styles.blackButton + ' ' + activeClassName }
            href={ url.href }
            target={ url.targetBlank ? '_blank' : '_self' }
            style={{ visibility: visible ? 'visible' : 'hidden'}}
        >
            { url.name }
        </a>
    );
};