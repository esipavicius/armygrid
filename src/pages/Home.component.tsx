import styles from './Home.module.scss';

import React from 'react';
import about from '../config/data/about';
import assets from '../config/data/assets';
import {Menu} from "../partials/menu/Menu.component";
import {Head} from "../partials/page/home/head/Head.component";
import {About} from "../partials/page/home/about/About.component";
import {Benefit} from "../partials/page/home/benefit/Benefit.component";
import {Asset} from "../partials/page/home/asset/Asset.component";

const HomePage = () => {
    return (
        <section id={ styles.homePage }>
            <Menu />
            <Head />
            <About data={about} />
            <Benefit />
            <Asset data={assets} />
        </section>
    );
};

export default HomePage;