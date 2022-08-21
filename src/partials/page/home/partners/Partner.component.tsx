import styles from './Partner.module.scss';

import * as React from 'react';
import { FC } from 'react';
import {Container} from "../../../container/Container.component";
import partners from "../../../../config/data/partners";

type Props = {};

export const Partner: FC<Props> = () => {
    return (
        <Container customClassName={ styles.homePartnerWrapper }>
            <p className={ styles.headTextTitle }>PARTNERS</p>

            <div className={ styles.homePartnerBoxWrapper }>
                {
                    partners.map((partnerData: any) => {
                        return (
                            <a
                                href={ partnerData.url.href }
                                target="_blank"
                                key={ partnerData.key }
                                className={ styles.homePartnerBox }
                            >
                                <div className={ styles.homePartnerBoxImageWrapper } style={{ height: partnerData.height }}>
                                    {
                                        partnerData.image && (<img
                                            className="lazyload"
                                            data-src={ partnerData.image }
                                            alt={ partnerData.title }
                                        />)
                                    }
                                </div>

                                <span className={ styles.defaultTitleText }>{ partnerData.title }</span>
                                <span className={ styles.defaultText }>{ partnerData.value }</span>
                            </a>
                        );
                    })
                }
            </div>
        </Container>
    );
};