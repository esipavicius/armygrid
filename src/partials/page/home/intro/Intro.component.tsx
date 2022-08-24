import styles from './Intro.module.scss';

import * as React from 'react';
import {FC} from 'react';
import {Container} from "../../../container/Container.component";
import {ButtonBlack} from "../../../button/ButtonBlack.component";
import url from "../../../../config/url";
import team from "../../../../config/data/team";
import {Team} from "../../../team/Team.component";

type Props = {};

export const Intro: FC<Props> = () => {
    return (
        <Container>
            <div className={ styles.homeIntroWrapper } id={ url.AGT_TOKEN.hash.substring(1) }>
                <div className={ styles.left }>
                    <img
                        className="lazyload"
                        data-src={ process.env.PUBLIC_URL + `/images/home/intro/armour.png` }
                        alt="Armygrid armour"
                    />
                </div>

                <div className={ styles.right }>
                    <div className={ styles.rightWrapper }>
                        <div className={ styles.homeIntroTitleWrapper }>
                            <span className={ styles.headTextTitle }>Introducing the</span>
                            <br/>
                            <span className={ styles.headTextTitle }>AGT token</span>
                        </div>

                        <p className={ styles.defaultText }>
                            AGT token is not mandatory but still must-have for any serious ArmyGrid warrior. Owning some AGT will allow you to stake it into in-game pools to enable stake sized-based in game drops that will help you perform better. And better performance means more unlocked cross-server items (NFTs) that upgrade your game-play even more.
                        </p>

                        <div className={ styles.homeIntroButtonWrapper }>
                            <ButtonBlack url={ url.CTA_READ_ONE_PAGER } />
                        </div>
                    </div>
                </div>
            </div>

            <div className={ styles.homeIntroBottomHeader }>
                <span className={ styles.headTextTitle }>The team behind army grid</span>
            </div>

            <Team data={ team } />
        </Container>
    );
};