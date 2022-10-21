import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav  className={styles['navbar']}>
            <div className={styles['navbar__container']}>
                <div className={styles['navbar__primary']}>
                    <ul className={styles['navbar__list']}>
                        <li>
                            <NavLink
                                to='/'
                                className={styles['navbar__link']}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/state'
                                className={styles['navbar__link']}
                            >
                                State
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/form'
                                className={styles['navbar__link']}
                            >
                                Form
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/reduce'
                                     className={styles['navbar__link']}
                            >
                                Reduce
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ref'
                                     className={styles['navbar__link']}
                            >
                                Ref
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;