import styles from './Team.module.scss';

import * as React from 'react';
import {FC, useState} from 'react';
import {reloadDocumentLazyImages} from "../../config/image";
import {InactiveTeam} from "./InactiveTeam.component";

type Props = {
    data: any,
};

export const Team: FC<Props> = ({ data }) => {
    const [teamActive, setTeamActive] = useState({key: null});

    function onMouseEnterTeam(selectedTeamData: any): void {
        setTeamActive(selectedTeamData);
        reloadDocumentLazyImages();
    }

    function onMouseLeaveTeam(): void {
        setTeamActive({key: null});
        reloadDocumentLazyImages();
    }

    return (
        <div className={ styles.teamWrapper }>
            {
                data.map((teamData: any) => {
                    const teamActiveClassName = teamActive.key === teamData.key ? styles.teamBoxActive : '';

                    return (
                        <div
                            key={ teamData.key }
                            className={ styles.teamBoxWrapper + ' ' + teamActiveClassName }
                            onMouseEnter={ () => onMouseEnterTeam(teamData) }
                            onMouseLeave={ () => onMouseLeaveTeam() }
                            onClick={ () => onMouseEnterTeam(teamData) }
                        >
                            <InactiveTeam data={ teamData } active={ teamActive.key === teamData.key } />

                            {
                                teamActive.key === teamData.key && (<div className={ styles.underBoxLine } />)
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};