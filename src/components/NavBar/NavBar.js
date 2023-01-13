import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={ styles["nav"] } role="navigation" aria-label="Main">
            <div className={ styles["nav__container"] }>
                <div className={ styles["nav__primary"] }>
                    <ul className={ styles["nav__list"] }>
                        <li className={ styles["nav__item"] }>
                            <NavLink
                                end
                                to="/"
                                className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["nav__link"] }>
                                Home
                            </NavLink>
                        </li>
                        <li className={ styles["nav__item"] }>
                            <NavLink
                                to="/state"
                                className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["nav__link"] }>
                                State
                            </NavLink>
                        </li>
                        <li className={ styles["nav__item"] }>
                            <NavLink
                                to="/form"
                                className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["nav__link"] }>
                                Form
                            </NavLink>
                        </li>
                        <li className={ styles["nav__item"] }>
                            <NavLink
                                to="/ref"
                                className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["nav__link"] }>
                                Ref
                            </NavLink>
                        </li>
                        <li className={ styles["nav__item"] }>
                            <NavLink
                                to="/reduce"
                                className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["nav__link"] }>
                                Reduce
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav  className={styles['navbar']}>
        //     <div className={styles['navbar__container']}>
        //         <div className={styles['navbar__primary']}>
        //             <ul className={styles['navbar__list']}>
        //                 <li>
        //                     <NavLink
        //                         to='/'
        //                         className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["navbar__link"] }
        //                     >
        //                         Home
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink
        //                         to='/state'
        //                         className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["navbar__link"] }
        //                     >
        //                         State
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink
        //                         to='/form'
        //                         className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["navbar__link"] }
        //                     >
        //                         Form
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to='/reduce'
        //                              className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["navbar__link"] }
        //                     >
        //                         Reduce
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to='/ref'
        //                              className={ ( { isActive } ) => isActive ? styles["nav__link--active"] : styles["navbar__link"] }
        //                     >
        //                         Ref
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default NavBar;