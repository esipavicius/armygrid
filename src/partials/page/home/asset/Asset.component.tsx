import styles from './Asset.module.scss';

import * as React from 'react';
import {FC, useState} from 'react';
import {Container} from "../../../container/Container.component";
import {InactiveInteractiveBox} from "../../../interactive-box/InactiveInteractiveBox.component";
import {ActiveInteractiveBox} from "../../../interactive-box/ActiveInteractiveBox.component";
import {reloadDocumentLazyImages} from "../../../../config/image";
import url from "../../../../config/url";

type Props = {
    data: any,
};

export const Asset: FC<Props> = ({ data }) => {
    const [assetActive, setAssetActive] = useState(data[0]);

    function onClickInactiveInteractBox(selectedAssetData: any): void {
        setAssetActive(selectedAssetData);
        reloadDocumentLazyImages();
    }

    return (
        <Container customClassName={ styles.homeAssetWrapper }>
            <div className={ styles.assetLeft } id={ url.ASSETS.hash.substring(1) }>
                <div className={ styles.assetDescriptionWrapper }>
                    <span className={ styles.defaultText }>
                        All in-game NFTs have function and power to boost the performance of your troops or cities. Additionaly, you can increase the power of your NFT items by purchasing upgrades.
                    </span>

                    <p className={ styles.defaultText }>
                        ArmyGrid is a game that can accomodate a wide variety of gamers. Offering different strategies and things to enjoy, explore, challenge or earn.
                    </p>

                    <div className={ styles.assetImageWrapper }>
                        <img data-src={ assetActive.image } className="lazyload"/>
                    </div>

                    <span className={ styles.defaultText }>
                        The 2-month server allows users to explore various strategies while maintaining previously minted NFTs.
                    </span>
                </div>
            </div>

            <div className={ styles.assetRight }>
                <div className={ styles.assetTitleWrapper }>
                    <span className={ styles.headTextTitle }>gameplay and</span>
                    <br/>
                    <span className={ styles.headTextTitle }>assets</span>
                </div>

                {
                    data.map((assetData: any) => {
                        if (assetActive.key === assetData.key) {
                            return (
                                <div key={ assetData.key }>
                                    <ActiveInteractiveBox data={ assetData } />
                                </div>
                            );
                        }

                        return (
                            <div key={ assetData.key } onClick={ () => onClickInactiveInteractBox(assetData) }>
                                <InactiveInteractiveBox data={ assetData } />
                            </div>
                        );
                    })
                }
            </div>
        </Container>
    );
};