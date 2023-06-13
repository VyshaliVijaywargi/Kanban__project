// import React from "react";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import SubjectIcon from "@mui/icons-material/Subject";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import InfoIcon from "@mui/icons-material/Info";
// import TocIcon from "@mui/icons-material/Toc";
// import PersonIcon from "@mui/icons-material/Person";
// import styles from "./description.module.css";
// import CloseIcon from "@mui/icons-material/Close";

// const Description = () => {
//   return (
//     <div className={styles.main}>
//       <div className={styles.line1}>
//     <ListAltIcon />{" "}
//         <h3 className={styles.task2}>task2</h3>
//         <CloseIcon className={styles.close} />{" "}
    
//       </div>
//       <p className={styles.para_eye}>
//         in list List1
//         <VisibilityOutlinedIcon />
//       </p> <div>
//       <h5 className={styles.notify}>Notifications <br/> <span className={styles.visible}><VisibilityOutlinedIcon /> Watching <CheckBoxIcon /></span></h5>
          
//         </div>
//       <h3 className={styles.decs}>
//         <SubjectIcon />
//         Description <InfoIcon />
//       </h3>
//       <textarea className={styles.inputbox} /> <br />
//       <button className={styles.savebtn}>save</button>
//       <h3 className={styles.activity}>
//         <TocIcon /> Activity <button className={styles.details}>Hide details</button>
//       </h3><span className={styles.person}>
//       <PersonIcon />{" "}
//       <input
//         type="text"
//         placeholder="Write a comment..."
//         className={styles.cmntbox}
//       />
//       </span>
//     </div>
//   );
// };

// export default Description;
import React from "react";
import styles from "./description.module.css";
import DvrIcon from "@mui/icons-material/Dvr";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function Description({data}) {
  return (
    <div className={styles.main}>
      <CloseIcon className={styles.clsIcon1} />
      <div className={styles.main1}>
        <div className={styles.firstIcon}>
          <DvrIcon />
          <span className={styles.task}>Task1</span>
        </div>
        <p className={styles.paragraph1}>
          in list {data.header}<VisibilityOutlinedIcon className={styles.eyeIcons} />
        </p>
        <h5 className={styles.notification}>Notifications</h5>
        <h5 className={styles.watching}>
          <VisibilityOutlinedIcon />
          Watching
          <CheckBoxOutlinedIcon className={styles.checkbox} />
        </h5>
        <h3 className={styles.description}>
          <SubjectIcon />
          Description
          <InfoIcon />
        </h3>
        <textarea
          className={styles.textArea}
          placeholder="Add more detailed description..."
        />
        <br />
        <button className={styles.btn}>Save</button>
        <h3 className={styles.activity}>
          <FormatListNumberedRtlIcon />
          Activity <button className={styles.activityBtn}>Show Details</button>
        </h3>

        <div className={styles.input}>
          <PersonIcon />
          <input
            type="text"
            placeholder="Write a comment..."
            className={styles.sub_input}
          />
        </div>
      </div>
      <div className={styles.main2}>
        <div>
          <a className={styles.addToCard}>Add to Card</a>
          <a className={styles.main2btns}>
            <PersonOutlineOutlinedIcon /> Members
          </a>
          <a className={styles.main2btns}>
            <SellOutlinedIcon /> Labels
          </a>
          <a className={styles.main2btns}>
            <CheckBoxOutlinedIcon /> Checklist
          </a>
          <a className={styles.main2btns}>
            <AccessTimeOutlinedIcon /> Dates{" "}
          </a>
          <a className={styles.main2btns}>
            <AttachFileIcon /> Attachment
          </a>
          <a className={styles.main2btns}>
            <CreditCardOutlinedIcon /> Cover{" "}
          </a>
          <a className={styles.main2btns}>
            <ViewDayOutlinedIcon /> Custom Fields
          </a>
        </div>
        <div className={styles.powerUps}>
          <a className={styles.mainHeading}> Power-ups </a>
          <br />
          <a className={styles.add}>+ Add power-ups</a>
        </div>
        <div className={styles.automation}>
          <a className={styles.mainHeading}> Automation </a>
          <br />
          <a className={styles.add}>+ Add button</a>
        </div>
        <div>
          <a className={styles.mainAction}>Actions</a>
          <a className={styles.main2btns}>
            <ArrowForwardOutlinedIcon />
            Move
          </a>
          <a className={styles.main2btns}>
            <ContentCopyOutlinedIcon />
            Copy
          </a>
          <a className={styles.main2btns}>
            <BackupTableOutlinedIcon />
            Make template
          </a>
          <hr />
          <a className={styles.main2btns}>
            <ArchiveOutlinedIcon />
            Archieve
          </a>
          <a className={styles.main2btns}>
            <ShareOutlinedIcon />
            Share
          </a>
        </div>
      </div>
    </div>
  );
}

export default Description;