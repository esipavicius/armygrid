import styles from './Roadmap.module.scss';

import * as React from 'react';
import { FC } from 'react';
import {Container} from "../../../container/Container.component";
import {RoadmapHorizontalLine} from "../../../roadmap/RoadmapHorizontalLine.component";
import url from "../../../../config/url";

type Props = {
    percentage: number,
    roadmap: any,
};

export const Roadmap: FC<Props> = ({ percentage, roadmap }) => {
    return (
        <Container customClassName={ styles.homeRoadmapWrapper }>
            <p className={ styles.headTextTitle } id={ url.ROADMAP.hash.substring(1) }>ROADMAP</p>

            <RoadmapHorizontalLine percentage={ percentage } roadmap={ roadmap } />
        </Container>
    );
};