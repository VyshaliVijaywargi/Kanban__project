import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SubjectIcon from "@mui/icons-material/Subject";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InfoIcon from "@mui/icons-material/Info";
import TocIcon from "@mui/icons-material/Toc";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./description.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Description = () => {
  return (
    <div className={styles.main}>
      <div className={styles.line1}>
    <ListAltIcon />{" "}
        <h3 className={styles.task2}>task2</h3>
        <CloseIcon className={styles.close} />{" "}
    
      </div>
      <p className={styles.para_eye}>
        in list List1
        <VisibilityOutlinedIcon />
      </p> <div>
      <h5 className={styles.notify}>Notifications <br/> <span className={styles.visible}><VisibilityOutlinedIcon /> Watching <CheckBoxIcon /></span></h5>
          
        </div>
      <h3 className={styles.decs}>
        <SubjectIcon />
        Description <InfoIcon />
      </h3>
      <textarea className={styles.inputbox} /> <br />
      <button className={styles.savebtn}>save</button>
      <h3 className={styles.activity}>
        <TocIcon /> Activity <button className={styles.details}>Hide details</button>
      </h3><span className={styles.person}>
      <PersonIcon />{" "}
      <input
        type="text"
        placeholder="Write a comment..."
        className={styles.cmntbox}
      />
      </span>
    </div>
  );
};

export default Description;
