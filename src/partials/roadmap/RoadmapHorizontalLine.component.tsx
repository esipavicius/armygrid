import styles from './RoadmapHorizontalLine.module.scss';

import * as React from 'react';
import { FC } from 'react';

type Props = {
    percentage: number,
    roadmap: any,
};

export const RoadmapHorizontalLine: FC<Props> = ({ percentage, roadmap }) => {
    let lineBoxValue = 1164,
        barPercentage = lineBoxValue * (percentage / 100);

    if (percentage === 100) {
        barPercentage = barPercentage - 5;
    }

    const renderFirstActiveSquare = function () {
        return (<path d="M14.1422 0L28.2843 14.1421L14.1422 28.2843L1.54972e-05 14.1421L14.1422 0Z" fill="url(#activeRectangle)"/>);
    };

    const renderCurrentLine = function () {
        return (<path d={`M24 12L${barPercentage} 12V17L24 17V12Z`} fill="#F39200"/>);
    };

    const renderSquare2 = function () {
        let fillColor = percentage >= 20 ? 'url(#activeRectangle)' : '#E0E0E0';

        return (<path d="M241 0L255.142 14.1421L241 28.2843L226.858 14.1421L241 0Z" fill={fillColor}/>);
    };

    const renderSquare3 = function () {
        let fillColor = percentage >= 40 ? 'url(#activeRectangle)' : '#E0E0E0';

        return (<path d="M468 0L482.142 14.1421L468 28.2843L453.858 14.1421L468 0Z" fill={fillColor}/>);
    };

    const renderSquare4 = function () {
        let fillColor = percentage >= 60 ? 'url(#activeRectangle)' : '#E0E0E0';

        return (<path d="M695 0L709.142 14.1421L695 28.2843L680.858 14.1421L695 0Z" fill={fillColor}/>);
    };

    const renderSquare5 = function () {
        let fillColor = percentage >= 80 ? 'url(#activeRectangle)' : '#E0E0E0';

        return (<path d="M922 0L936.142 14.1421L922 28.2843L907.858 14.1421L922 0Z" fill={fillColor}/>);
    };

    const renderSquare6 = function () {
        let fillColor = percentage >= 100 ? 'url(#activeRectangle)' : '#E0E0E0';

        return (<path d="M1149 0L1163.14 14.1421L1149 28.2843L1134.86 14.1421L1149 0Z" fill={fillColor}/>);
    };

    return (
        <div className={ styles.roadmapHorizontalLineWrapper }>
            <div className={ styles.roadmapHorizontalLineTitlesWrapper }>
                <div className={ styles.roadmapHorizontalLineTitlesBoxQ1 }>
                    <span className={ styles.headTextTitle }>{ roadmap[0].title }</span>
                    <span className={ styles.defaultText }>{ roadmap[0].subtitle }</span>
                </div>

                <div className={ styles.roadmapHorizontalLineTitlesBoxQ2 }>
                    <span className={ styles.headTextTitle }>{ roadmap[1].title }</span>
                    <span className={ styles.defaultText }>{ roadmap[1].subtitle }</span>
                </div>

                <div className={ styles.roadmapHorizontalLineTitlesBoxQ3 }>
                    <span className={ styles.headTextTitle }>{ roadmap[2].title }</span>
                    <span className={ styles.defaultText }>{ roadmap[2].subtitle }</span>
                </div>

                <div className={ styles.roadmapHorizontalLineTitlesBoxQ4 }>
                    <span className={ styles.headTextTitle }>{ roadmap[3].title }</span>
                    <span className={ styles.defaultText }>{ roadmap[3].subtitle }</span>
                </div>

                <div className={ styles.roadmapHorizontalLineTitlesBoxQ5 }>
                    <span className={ styles.headTextTitle }>{ roadmap[4].title }</span>
                    <span className={ styles.defaultText }>{ roadmap[4].subtitle }</span>
                </div>

                <div className={ styles.roadmapHorizontalLineTitlesBoxQ6 }>
                    <span className={ styles.headTextTitle }>{ roadmap[5].title }</span>
                    <span className={ styles.defaultText }>{ roadmap[5].subtitle }</span>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="29" viewBox={`0 0 ${lineBoxValue} 29`} fill="none">
                <rect x="14" y="12" width={ lineBoxValue - 29 } height="5" fill="#D9D9D9"/>

                { renderCurrentLine() }
                { renderFirstActiveSquare() }
                { renderSquare2() }
                { renderSquare3() }
                { renderSquare4() }
                { renderSquare5() }
                { renderSquare6() }

                <defs>
                    <pattern id="activeRectangle" viewBox="0,0,30,30" width="100%" height="100%">
                        <image href={ process.env.PUBLIC_URL + `/images/rectangle.png` } width="30" height="30" />
                    </pattern>
                </defs>
            </svg>

            <div className={ styles.roadmapHorizontalLineMetaWrapper }>
                <div className={ styles.roadmapHorizontalLineMetaBoxQ1 }>
                    <div className={ styles.roadmapHorizontalLineImage }>
                        {
                            roadmap[0].image && (
                                <img
                                    className="lazyload"
                                    data-src={ roadmap[0].image }
                                />
                            )
                        }
                    </div>

                    <div className={ styles.roadmapHorizontalLineMeta }>
                        {
                            roadmap[0].meta.map((metaData: any) => {
                                return (
                                    <div key={ metaData.title }>
                                        <img
                                            className="lazyload"
                                            data-src={ process.env.PUBLIC_URL + `/images/rectangle.png` }
                                        />

                                        <span className={ styles.defaultText }>{ metaData.title }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={ styles.roadmapHorizontalLineMetaBoxQ2 }>
                    <div className={ styles.roadmapHorizontalLineImage }>
                        {
                            roadmap[1].image && (
                                <img
                                    className="lazyload"
                                    data-src={ roadmap[1].image }
                                />
                            )
                        }
                    </div>

                    <div className={ styles.roadmapHorizontalLineMeta }>
                        {
                            roadmap[1].meta.map((metaData: any) => {
                                return (
                                    <div key={ metaData.title }>
                                        <img
                                            className="lazyload"
                                            data-src={ process.env.PUBLIC_URL + `/images/rectangle.png` }
                                        />

                                        <span className={ styles.defaultText }>{ metaData.title }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={ styles.roadmapHorizontalLineMetaBoxQ3 }>
                    <div className={ styles.roadmapHorizontalLineImage }>
                        {
                            roadmap[2].image && (
                                <img
                                    className="lazyload"
                                    data-src={ roadmap[2].image }
                                />
                            )
                        }
                    </div>

                    <div className={ styles.roadmapHorizontalLineMeta }>
                        {
                            roadmap[2].meta.map((metaData: any) => {
                                return (
                                    <div key={ metaData.title }>
                                        <img
                                            className="lazyload"
                                            data-src={ process.env.PUBLIC_URL + `/images/rectangle.png` }
                                        />

                                        <span className={ styles.defaultText }>{ metaData.title }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={ styles.roadmapHorizontalLineMetaBoxQ4 }>
                    <div className={ styles.roadmapHorizontalLineImage }>
                        {
                            roadmap[3].image && (
                                <img
                                    className="lazyload"
                                    data-src={ roadmap[3].image }
                                />
                            )
                        }
                    </div>

                    <div className={ styles.roadmapHorizontalLineMeta }>
                        {
                            roadmap[3].meta.map((metaData: any) => {
                                return (
                                    <div key={ metaData.title }>
                                        <img
                                            className="lazyload"
                                            data-src={ process.env.PUBLIC_URL + `/images/rectangle.png` }
                                        />

                                        <span className={ styles.defaultText }>{ metaData.title }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={ styles.roadmapHorizontalLineMetaBoxQ5 }>
                    <div className={ styles.roadmapHorizontalLineImage }>
                        {
                            roadmap[4].image && (
                                <img
                                    className="lazyload"
                                    data-src={ roadmap[4].image }
                                />
                            )
                        }
                    </div>

                    <div className={ styles.roadmapHorizontalLineMeta }>
                        {
                            roadmap[4].meta.map((metaData: any) => {
                                return (
                                    <div key={ metaData.title }>
                                        <img
                                            className="lazyload"
                                            data-src={ process.env.PUBLIC_URL + `/images/rectangle.png` }
                                        />

                                        <span className={ styles.defaultText }>{ metaData.title }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};