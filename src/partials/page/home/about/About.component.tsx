import styles from './About.module.scss';

import * as React from 'react';
import {FC, useState} from 'react';
import {Container} from "../../../container/Container.component";
import {InactiveInteractiveBox} from "../../../interactive-box/InactiveInteractiveBox.component";
import {ActiveInteractiveBox} from "../../../interactive-box/ActiveInteractiveBox.component";
import {reloadDocumentLazyImages} from "../../../../config/image";

type Props = {
    data: any,
};

export const About: FC<Props> = ({ data }) => {
    const [aboutActive, setAboutActive] = useState(data[0]);

    function onClickInactiveInteractBox(selectedAboutData: any): void {
        setAboutActive(selectedAboutData);
        reloadDocumentLazyImages();
    }

    return (
        <Container customClassName={ styles.homeAboutWrapper }>
            <div className={ styles.aboutLeft }>
                <div className={ styles.aboutTitleWrapper }>
                    <span className={ styles.headTextTitle }>ABOUT</span>
                    <br/>
                    <span className={ styles.headTextTitle }>ARMYGRID</span>
                </div>

                {
                    data.map((aboutData: any) => {
                        if (aboutActive.key === aboutData.key) {
                            return (
                                <div key={ aboutData.key }>
                                    <ActiveInteractiveBox data={ aboutData } />
                                </div>
                            );
                        }

                        return (
                            <div key={ aboutData.key } onClick={ () => onClickInactiveInteractBox(aboutData) }>
                                <InactiveInteractiveBox data={ aboutData } />
                            </div>
                        );
                    })
                }
            </div>

            <div className={ styles.aboutRight }>
                <div className={ styles.aboutDescriptionWrapper }>
                    <span className={ styles.defaultText }>
                        Lead your chessman-like warriors with different upgradable skillsets and powers against other players to get through 21 levels with 16 maps to end up in the inevitable devastation of the Dark Queen’s <a className={ styles.defaultLink } href="/">apocalypse</a>.
                    </span>

                    <div className={ styles.aboutImageWrapper }>
                        <img data-src={ aboutActive.image } className="lazyload"/>
                    </div>

                    <span className={ styles.defaultText }>
                        The game is set at 2-month servers ending in a devastating apocalypse.
                    </span>
                </div>
            </div>
        </Container>
    );
};