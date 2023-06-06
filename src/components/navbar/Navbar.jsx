import React from "react";
import styles from "./navbar.module.css";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PollIcon from "@mui/icons-material/Poll";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const Navbar = () => {
  return (
    <div className={styles.main_container}>
      <button className={styles.task}>Home Task Management</button>
      <div className={styles.star}>
        {" "}
        <StarOutlineOutlinedIcon />{" "}
      </div>
      <button className={styles.Alticon}>
        <PeopleAltOutlinedIcon />
        <span className={styles.space}>Workspace visible</span>
      </button>

      <button className={styles.pollicon}>
        <PollIcon  /> <span className={styles.board}>Board</span>
      </button>
      <button className={styles.arrow}>
        <KeyboardArrowDownIcon />
      </button>
      <div className={styles.small_container}> 
        <button className={styles.smallbox}>
          <WbIncandescentOutlinedIcon /> Power-Ups
        </button>
        <button className={styles.smallbox}>
          <FlashOnOutlinedIcon /> <span className={styles.newdiv}>Automation</span>
        </button>
        <button className={styles.smallbox}>
          <FilterListOutlinedIcon />
          <span  className={styles.newdiv}>Filter</span>
        </button>
      </div>
      <button className={styles.person}>
        <PersonAddAltOutlinedIcon />
        <span  className={styles.newdiv}>share</span>
      </button>
      <button className={styles.threedots}>
        <MoreHorizOutlinedIcon />
      </button>
    </div>
  );
};

export default Navbar;
