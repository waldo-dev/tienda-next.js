import {useContext} from "react"
import Link from "next/link";
import styles from "../styles/Menu.module.css"
import { Context } from '../store/appContext';


export default function Menu () {
    const {store} = useContext(Context)
    return (
        <nav className={styles.menu}>
            <div>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/store">
                    <a className={styles.link}>Store</a>
                </Link>
                <Link href="/faq">
                    <a className={styles.link}>FAQ</a>
                </Link>
            </div>
            <div>
                <a href="#" className={styles.link}>Cart {store.counter}</a>
            </div>
        </nav>
    )
} 