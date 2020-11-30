import React from "react";
import s from "./Header.module.css";

export const SocialNetworks: React.FC = () => {
    return (
        <div className={s.social}>
            <ul className={s.socialList}>
                <li><a className={s.twitter} href='#'>tw</a></li>
                <li><a className={s.facebook} href='#'>fb </a></li>
                <li><a className={s.linkedin} href='#'>lk </a></li>
                <li><a className={s.github} href='#'>gh</a></li>
            </ul>
        </div>
    )
}