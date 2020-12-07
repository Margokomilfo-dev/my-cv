import React from "react";
import s from "./Header.module.css";

export const Avatar: React.FC = () => {
    return (
        <div className={s.avatarSection}>
            <div className={s.avatar}> </div>
        </div>
    )
}