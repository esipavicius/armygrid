import styles from './Home.module.scss';

import React from 'react';
import about from '../config/data/about';
import assets from '../config/data/assets';
import partners from "../config/data/partners";
import tokenomics from "../config/data/tokenomics";
import roadmap from "../config/data/roadmap";
import {Menu} from "../partials/menu/Menu.component";
import {Head} from "../partials/page/home/head/Head.component";
import {About} from "../partials/page/home/about/About.component";
import {Benefit} from "../partials/page/home/benefit/Benefit.component";
import {Asset} from "../partials/page/home/asset/Asset.component";
import {Intro} from "../partials/page/home/intro/Intro.component";
import {Footer} from "../partials/footer/Footer.component";
import {Partner} from "../partials/page/home/partners/Partner.component";
import {Subscribe} from "../partials/page/home/subscribe/Subscribe.component";
import {Tokenomics} from "../partials/page/home/tokenomics/Tokenomics.component";
import {Roadmap} from "../partials/page/home/roadmap/Roadmap.component";

const HomePage = () => {
    return (
        <section id={ styles.homePage }>
            <Menu />
            <Head />
            <About data={about} />
            <Benefit />
            <Intro />
            <Asset data={assets} />
            <Roadmap percentage={ 10 } roadmap={roadmap} />
            <Tokenomics data={tokenomics} />
            <Subscribe />
            <Partner data={partners}/>
            <Footer />
        </section>
    );
};

export default HomePage;