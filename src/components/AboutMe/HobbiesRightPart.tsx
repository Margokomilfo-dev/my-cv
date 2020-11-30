import React from "react";
import s from "./AboutMe.module.css";

type HobbiesRightPartPropsType = {}
export const HobbiesRightPart: React.FC<HobbiesRightPartPropsType> = (props) => {
    return (
        <div className={s.right}>
            <div className={s.interests}>
                <h4>hobbies & interests</h4>
                <div className={s.titles}>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                    <div className={s.interest}>name</div>
                </div>
            </div>
        </div>
    )
}