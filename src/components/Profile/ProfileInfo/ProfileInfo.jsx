import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
      <div>
        <div>
          <img className={s.mainBanner}
               src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
               alt="banner"/>
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div className={s.descriptionBlock}>
          <div>{props.profile.aboutMe}</div>
          <img src={props.profile.photos.large}/>
          <div>{props.profile.lookingForAJob}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
          <div>{props.profile.fullName}</div>
        </div>
      </div>
  )
}


export default ProfileInfo;