import styles from './Menu.module.scss';

import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { Container } from '../container/Container.component';
import MenuItem from '../../types/menuItem';
import url from '../../config/url';
import classNames from 'classnames';
import { useLocation, Link } from 'react-router-dom';

const menuItems: MenuItem[] = [
    url.HOME,
    url.AGT_TOKEN,
    url.TOKENOMICS,
    url.ASSETS,
    url.TEAM,
    url.ROADMAP,
    url.WHITEPAPER,
]

const MenuItemContent: FC<MenuItem> = (menuItem: MenuItem) => {
    const location = useLocation();

    if (menuItem.local) {
         return (
            <Link
                to={ menuItem.href }
                className={classNames({
                    [styles.menuItem]: true,
                    [styles.menuItemActive]: location.pathname === menuItem.href,
                })}
                target={ menuItem.targetBlank ? '_blank' : '' }
                rel="noreferrer"
            >
                { menuItem.name }
            </Link>
        );
    } else {
        return (
            <a
                href={ menuItem.href }
                className={classNames({
                    [styles.menuItem]: true,
                    [styles.menuItemActive]: location.pathname === menuItem.href,
                })}
                target={ menuItem.targetBlank ? '_blank' : '' }
                rel="noreferrer"
            >
                { menuItem.name }
            </a>
        );
    }
};

export const Menu: FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showMobileNavigation, mobileNavigationOpen] = useState(false);

    const toggleMobileNavigation = () => {
        // @ts-ignore
        document.querySelector('html').classList.toggle('overflow-hidden');

        mobileNavigationOpen(!showMobileNavigation);
        if (window.scrollY <= 50) {
            setIsSticky(!showMobileNavigation);
        }
    };

    const handleScroll = () => {
        setIsSticky(window.scrollY > 1);
    }

    const handleResize = () => {
        if (showMobileNavigation && window.innerWidth > 767) {
            toggleMobileNavigation();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <div
            className={classNames({
                [styles.navigation]: true,
                [styles.navigationSticky]: isSticky,
            })}
        >
            <div className={ `container` }>
                <div className={ styles.navBarWrapper }>
                    <div className={ styles.logoWrapper }>
                        <Link to={ url.HOME.href }>
                            <span>ARMYGRID</span>
                        </Link>
                    </div>

                    <div className={ styles.itemsWrapper }>
                        {
                            menuItems.map((values, index) => (
                                <MenuItemContent key={index} {...values} />
                            ))
                        }

                        <div className={ styles.signUp }>
                            <Link to={ url.SIGN_UP.href }>
                                <span>{ url.SIGN_UP.name }</span>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.buttonsWrapper}>
                        <div
                            className={ styles.mobileMenuActivator }
                            onClick={ toggleMobileNavigation }
                        >
                            <div className={ styles.signUp }>
                                <Link to={ url.SIGN_UP.href }>
                                    <span>{ url.SIGN_UP.name }</span>
                                </Link>
                            </div>

                            <img
                                src={
                                    !showMobileNavigation
                                    ? process.env.PUBLIC_URL + `/images/menu-burger-black.svg`
                                    : process.env.PUBLIC_URL + `/images/menu-close-black.svg`
                                }
                                alt='Menu'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={classNames({
                    [styles.mobileMenuWrapper]: true,
                    [styles.mobileMenuActive]: showMobileNavigation,
                })}
            >
                <Container>
                    <div className={styles.mobileItemsWrapper}>
                        {
                        menuItems.map((values, index) => (
                            <MenuItemContent key={index} {...values} />
                        ))
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};
