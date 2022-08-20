import styles from './ListArticleBox.module.scss';

import * as React from 'react';
import {FC} from 'react';

type Props = {
    data: any,
};

export const ListArticleBox: FC<Props> = ({ data }) => {
    return (
        <div className={ styles.listArticleBox }>
            <div className={ styles.listArticleBoxWrapper }>
                {
                    data.map((articleData: any) => {
                        return (
                            <div key={ articleData.key } className={ styles.listArticleHalfPage }>
                                <div className={ styles.listArticleBoxImageWrapper }>
                                    <img
                                        className="lazyload"
                                        data-src={ articleData.image }
                                    />
                                </div>

                                <p className={ styles.defaultTitleText }>{ articleData.title }</p>
                                <p className={ styles.defaultText }>{ articleData.description }</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};