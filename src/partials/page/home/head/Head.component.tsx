import styles from './Head.module.scss';

import * as React from 'react';
import { FC } from 'react';
import {Container} from "../../../container/Container.component";
import url from "../../../../config/url";

type Props = {};

export const Head: FC<Props> = () => {
    return (
        <div className={ styles.homeHeadWrapper }>
            <div className={ styles.homeHeadBackground }>
                <Container customClassName={ styles.headTextWrapper }>
                    <div className={ styles.headTextCenter }>
                        <span className={ styles.headTextTitle }>DEPLOY YOUR</span>
                        <span className={ styles.headTextTitle }>DIGITAL ARMY</span>

                        <span className={ styles.headText }>
                            Armygrid is a unique chess-inspired adventurous MMO strategy game bringing exclusive play-to-earn opportunities and a gamer-first experience.
                        </span>

                        <a className={ styles.headCta } href={ url.CTA_PLAY_BETA.href } target='_blank'>
                            { url.CTA_PLAY_BETA.name }
                        </a>

                        <a className={ styles.headCtaInfo } href={ url.CTA_PRIVATE_SALE_INFO.href } target='_blank'>
                            { url.CTA_PRIVATE_SALE_INFO.name }
                        </a>
                    </div>
                </Container>

                <div className={ styles.headBottomSquare }>
                    <img
                        className="lazyload"
                        data-src={ process.env.PUBLIC_URL + `/images/home/head/bottom-square.png` }
                        alt='Bottom square'
                    />
                </div>
            </div>
        </div>
    );
};