import styles from './InactiveInteractiveBox.module.scss';

import * as React from 'react';
import { FC } from 'react';

type Props = {
    data: any,
};

export const InactiveInteractiveBox: FC<Props> = ({ data }) => {
    return (
        <div className={ styles.inactiveInteractiveBox }>
            <span className={ styles.inactiveInteractiveBoxTitle }>{ data.title }</span>
        </div>
    );
};