import styles from './ActiveInteractiveBox.module.scss';

import * as React from 'react';
import { FC } from 'react';

type Props = {
    data: any,
};

export const ActiveInteractiveBox: FC<Props> = ({ data }) => {
    return (
        <>
            <div className={ styles.activeInteractiveBox }>
                <span className={ styles.activeInteractiveBoxTitle }>{ data.title }</span>

                <p>{ data.description }</p>

                <div className={ styles.activeInteractiveBoxMetaWrapper }>
                    {
                        data.meta.map((metaData: any) => {
                            return (
                                <div key={ metaData.key } className={ styles.activeInteractiveBoxMetaBox }>
                                    <span className={ styles.activeInteractiveBoxValue }>{ metaData.value }</span>
                                    <span className={ styles.activeInteractiveBoxKey }>{ metaData.key }</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className={ styles.underBoxLine } />
        </>
    );
};