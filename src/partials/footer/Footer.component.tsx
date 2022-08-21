import styles from './Footer.module.scss';

import * as React from 'react';
import { FC } from 'react';
import {Container} from "../container/Container.component";
import url from "../../config/url";
import {MenuItemContent} from "../menu/Menu.component";
import {ButtonBlack} from "../button/ButtonBlack.component";

type Props = {};

export const Footer: FC<Props> = () => {
    return (
        <div className={ styles.footerWrapper }>
            <Container customClassName={ styles.footerContainerWrapper }>
                <div className={ styles.left }>
                    <p className={ styles.defaultTitleText }>ArmyGrid</p>

                    <div className={ styles.footerLinkList }>
                        <MenuItemContent {...url.AGT_TOKEN} />
                        <MenuItemContent {...url.TOKENOMICS} />
                        <MenuItemContent {...url.ASSETS} />
                        <MenuItemContent {...url.TEAM} />
                        <MenuItemContent {...url.ROADMAP} />
                    </div>
                </div>

                <div className={ styles.right }>
                    <p className={ styles.defaultTitleText }>START PLAYING</p>

                    <div className={ styles.blackButtonActive }>
                        <ButtonBlack url={ url.CTA_PLAY_BETA } active={ true } />
                    </div>
                </div>
            </Container>

            <Container customClassName={ styles.footerContainerCopyWrapper }>
                <div className={ styles.left }>
                    <div className={ styles.footerContainerCopy }>
                        <span className={ styles.defaultTitleText }>Armygrid © { new Date().getFullYear()}, All Rights Reserved</span>
                    </div>
                </div>

                <div className={ styles.right }>
                    <div className={ styles.footerSocial }>
                        <a href={ url.SOCIAL_V1.href } target="_blank">
                            <img
                                className="lazyload"
                                data-src={ process.env.PUBLIC_URL + `/images/social/twitter.png` }
                            />
                        </a>

                        <a href={ url.SOCIAL_V2.href } target="_blank">
                            <img
                                className="lazyload"
                                data-src={ process.env.PUBLIC_URL + `/images/social/v2.png` }
                            />
                        </a>

                        <a href={ url.SOCIAL_V3.href } target="_blank">
                            <img
                                className="lazyload"
                                data-src={ process.env.PUBLIC_URL + `/images/social/v3.png` }
                            />
                        </a>
                    </div>

                    <div className={ styles.footerTerms }>
                        <MenuItemContent {...url.PRIVACY} />
                        <MenuItemContent {...url.TERMS} />
                    </div>
                </div>
            </Container>

            <div className={ styles.footerMobileCopy }>
                <Container>
                    <span className={ styles.defaultTitleText }>Armygrid © { new Date().getFullYear()}, All Rights Reserved</span>
                </Container>
            </div>
        </div>
    );
};