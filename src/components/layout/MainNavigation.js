import classes from './MainNavigation.module.css';
import {NavLink} from 'react-router-dom';

const MainNavigation = () => {
    return (
        <section>
            <header className={classes.header}>
                <h1 className={classes.logo}>Great Quotes</h1>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink to="/quotes" activeClassName={classes.active}>All Quotes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-quote" activeClassName={classes.active}>Add a Quote</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    )
};

export default MainNavigation;