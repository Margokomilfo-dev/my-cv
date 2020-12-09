import React from "react";
import s from "./MyResume.module.css";

type BlockPropsType = {}
export const Block: React.FC<BlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`}>
            <div className={s.content}>
                <div className={`${s.blockIcon}`}> </div>
                <h4>position</h4>
                <p>Place - date</p>
                <p>Lorem ipsum dolor sit amet, corporis explicabo maiores minima numquam
                    possimus
                </p>
            </div>
        </div>
    )
}