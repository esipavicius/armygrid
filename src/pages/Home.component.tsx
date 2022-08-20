import styles from './Home.module.scss';

import React from 'react';
import {Menu} from "../partials/menu/Menu.component";
import {Head} from "../partials/page/home/head/Head.component";

const HomePage = () => {
    return (
        <section id={ styles.homePage }>
            <Menu />
            <Head />

            {/*<nav id="menu">*/}
            {/*    <TopSidebar />*/}
            {/*</nav>*/}

            {/*<header id="home-header">*/}
            {/*    <Header />*/}
            {/*</header>*/}

            {/*<div id="home-stake">*/}
            {/*    <Stake />*/}
            {/*</div>*/}

            {/*<div id="home-info">*/}
            {/*    <Info />*/}
            {/*</div>*/}

            {/*<div id="home-explain">*/}
            {/*    <Explain />*/}
            {/*</div>*/}

            {/*<div id="home-how-works">*/}
            {/*    <HowWorks />*/}
            {/*</div>*/}

            {/*<div id="home-faq">*/}
            {/*    <FAQ />*/}
            {/*</div>*/}

            {/*<footer id="footer">*/}
            {/*    <Footer />*/}
            {/*</footer>*/}
        </section>
    );
};

export default HomePage;