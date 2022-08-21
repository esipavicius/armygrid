import styles from './Home.module.scss';

import React from 'react';
import about from '../config/data/about';
import assets from '../config/data/assets';
import {Menu} from "../partials/menu/Menu.component";
import {Head} from "../partials/page/home/head/Head.component";
import {About} from "../partials/page/home/about/About.component";
import {Benefit} from "../partials/page/home/benefit/Benefit.component";
import {Asset} from "../partials/page/home/asset/Asset.component";
import {Intro} from "../partials/page/home/intro/Intro.component";
import {Footer} from "../partials/footer/Footer.component";
import {Partner} from "../partials/page/home/partners/Partner.component";
import {Subscribe} from "../partials/page/home/subscribe/Subscribe.component";

const HomePage = () => {
    return (
        <section id={ styles.homePage }>
            <Menu />
            <Head />
            <About data={about} />
            <Benefit />
            <Intro />
            <Asset data={assets} />
            <Subscribe />
            <Partner />
            <Footer />
        </section>
    );
};

export default HomePage;