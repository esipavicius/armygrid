import styles from './Subscribe.module.scss';

import * as React from 'react';
import {FC, useState} from 'react';
import {Container} from "../../../container/Container.component";
import {toast} from "react-toastify";

type Props = {};

export const Subscribe: FC<Props> = () => {
    const [emailAddress, setEmailAddress] = useState('');

    function onChangeEmail(event: any): void {
        setEmailAddress(event.target.value);
    }

    function onSubmitEmail(): void {
        toast.success('Email: ' + emailAddress);
    }

    return (
        <Container>
            <div className={ styles.homeSubscribeWrapper }>
                <div className={ styles.left }>
                    <div className={ styles.leftWrapper }>
                        <div className={ styles.homeSubscribeTitleWrapper }>
                            <span className={ styles.headTextTitle }>Join the Armygrid</span>
                            <br/>
                            <span className={ styles.headTextTitle }>community</span>
                        </div>

                        <p className={ styles.defaultText }>
                            Take your spot amongst the champions of ArmyGrid. Get a competitive edge by receiving crucial ArmyGrid news first to scale your tactics!
                        </p>

                        <div className={ styles.subscribeInputWrapper }>
                            <input value={ emailAddress } placeholder="Email Address" onChange={ onChangeEmail } />

                            <button onClick={ onSubmitEmail }>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className={ styles.right }>
                    <div className={ styles.homePartnerImageWrapper }>
                        <img
                            className="lazyload"
                            data-src={ process.env.PUBLIC_URL + `/images/knights.png` }
                            alt="Subscribe"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};