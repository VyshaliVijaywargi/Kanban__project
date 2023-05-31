import { Fragment } from "react";
import styles from './home.module.css';
import Sidebar from "./Sidebar";
import WhatsHappening from "./WhatsHappening";
import RightSide from "./RightSide";


export default function Home(){
    return(
        <Fragment>
        <div className={styles.twitter}>
           <Sidebar />
           <WhatsHappening/>
           <RightSide/>
           </div>
        </Fragment>
    )
}