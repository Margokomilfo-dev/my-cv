import React from "react";
import s from "./AboutMe.module.css";

type PersonalDataLeftPartPropsType = {}
export const PersonalDataLeftPart: React.FC<PersonalDataLeftPartPropsType> = (props) => {
    return (
        <div className={s.left}>
            <div className={s.data}>
                <div className={s.dataInfo}><span>Phone:</span> +48 796-027-535</div>
                <div className={s.dataInfo}><span>Email:</span> margokomilfo-dev@gmail.com</div>
                <div className={s.dataInfo}><span>website:</span> myCV.com</div>
                <div className={s.dataInfo}><span>Address:</span> Wroclaw, Poland</div>
            </div>
            <div className={s.signature}>Marharyta Pryshchapionak</div>
            <button>Download resume</button>
        </div>
    )
}