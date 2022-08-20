import styles from './Benefit.module.scss';

import * as React from 'react';
import {FC} from 'react';
import {Container} from "../../../container/Container.component";
import {ListArticleBox} from "../../../list/ListArticleBox.component";
import article from "../../../../config/data/article";

type Props = {};

export const Benefit: FC<Props> = () => {
    return (
        <>
            <Container customClassName={ styles.benefitWrapperText }>
                <div className={ styles.benefitHalfPage }>
                    <span className={ styles.headTextTitle }>benefits of armygrid</span>
                    <p className={ styles.defaultText }>$10,000 in AGT tokens are used as a prize pool for each server. Players also can mint, find & use or sell (royalties incl) in-game NFTs. The Play-to-earn fund is set up to last for ever.</p>
                </div>

                <div className={ styles.benefitHalfPage + ' ' + styles.benefitTextInfoWrapping }>
                    <div className={ styles.benefitTextInfoBox }>
                        <span className={ styles.benefitTextInfoBoxValue }>46</span>
                        <span className={ styles.defaultText }>Troop Types</span>
                    </div>

                    <div className={ styles.benefitTextInfoBox }>
                        <span className={ styles.benefitTextInfoBoxValue }>33+</span>
                        <span className={ styles.defaultText }>Heroes</span>
                    </div>

                    <div className={ styles.benefitTextInfoBox }>
                        <span className={ styles.benefitTextInfoBoxValue }>21</span>
                        <span className={ styles.defaultText }>Levels</span>
                    </div>

                    <div className={ styles.benefitTextInfoBox }>
                        <span className={ styles.benefitTextInfoBoxValue }>16</span>
                        <span className={ styles.defaultText }>Maps</span>
                    </div>
                </div>
            </Container>

            <Container>
                <ListArticleBox data={ article } />
            </Container>
        </>
    );
};