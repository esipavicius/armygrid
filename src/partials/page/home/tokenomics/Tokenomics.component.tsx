import styles from './Tokenomics.module.scss';

import * as React from 'react';
import { FC } from 'react';
import {Container} from "../../../container/Container.component";

type Props = {
    data: any,
};

export const Tokenomics: FC<Props> = ({ data }) => {
    return (
        <Container customClassName={ styles.homeTokenomicsWrapper }>
            <p className={ styles.headTextTitle }>Tokenomics</p>

            <div className={ styles.homeTokenomicsBoxWrapper }>
                {
                    data.map((tokenomicsData: any) => {
                        return (
                            <div
                                key={ tokenomicsData.key }
                                className={ styles.homeTokenomicsBox }
                                style={{ width: tokenomicsData.width }}
                            >
                                <div className={ styles.homeTokenomicsImageWrapper }>
                                    <img
                                        className="lazyload"
                                        data-src={ tokenomicsData.image }
                                        alt={ tokenomicsData.title }
                                    />
                                </div>

                                <div className={ styles.homeTokenomicsBoxOver } style={{ fontSize: tokenomicsData.fontSize }}>
                                    <span className={ styles.homeTokenomicsPercent }>{ tokenomicsData.percent }</span>
                                    <span className={ styles.homeTokenomicsMoney }>{ tokenomicsData.money }</span>
                                    <span className={ styles.homeTokenomicsTitle }>{ tokenomicsData.title }</span>

                                    {
                                        tokenomicsData.title2 && (<span className={ styles.homeTokenomicsTitle2 }>{ tokenomicsData.title2 }</span>)
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className={ styles.tokenomicsFooterWrapper}>
                <div className={ styles.tokenomicsFooterBox }>
                    <span className={ styles.headTextTitle }>$AGT</span>
                    <span className={ styles.defaultText }>Token name</span>
                </div>

                <div className={ styles.tokenomicsFooterBox }>
                    <span className={ styles.headTextTitle }>100M</span>
                    <span className={ styles.defaultText }>Total supply</span>
                </div>

                <div className={ styles.tokenomicsFooterBox }>
                    <span className={ styles.headTextTitle }>Polygon</span>
                    <span className={ styles.defaultText }>Native chain</span>
                </div>
            </div>
        </Container>
    );
};