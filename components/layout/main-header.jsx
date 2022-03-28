import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">
                    <a>NextEvents</a>
                </Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events">
                            <a>Brows All Events</a>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
