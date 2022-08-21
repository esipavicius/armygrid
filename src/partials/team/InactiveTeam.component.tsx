import styles from './InactiveTeam.module.scss';

import * as React from 'react';
import { FC } from 'react';
import {ButtonBlack} from "../button/ButtonBlack.component";

type Props = {
    data: any,
    active: boolean,
};

export const InactiveTeam: FC<Props> = ({ data, active }) => {
    const activeClassName = active ? styles.activeTeam : '';

    return (
        <div className={ styles.inactiveTeamWrapper + ' ' + activeClassName }>
            <div className={ styles.inactiveTeamImageWrapper }>
                <img src={ data.image } alt={ data.name }/>
            </div>

            <span className={ styles.defaultTitleText }>{ data.name }</span>

            <span className={ styles.defaultText }>{ data.title }</span>

            <div className={ styles.inactiveTeamButton }>
                <ButtonBlack url={ data.url } active={ active } />
            </div>
        </div>
    );
};