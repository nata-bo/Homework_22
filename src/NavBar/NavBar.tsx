import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

export default function NavBar():JSX.Element{
    return(
        <nav className={styles.container}>
          <NavLink className={styles.link} to={"pets"}>Pets</NavLink>
          <NavLink className={styles.link} to={"dogCard"}>DogCard</NavLink>
          <NavLink className={styles.link} to={"activity"}>Activity</NavLink>
          <NavLink className={styles.link} to={"activity2"}>Activity2</NavLink>
        </nav>
    )
}