import React from "react";
import s from "./Block.module.css";

type BlockPropsType = {}
export const Block: React.FC<BlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`}>
            <div className={s.content}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>SENIOR DEVELOPER 1</h4>
                </div>
                <div className={s.postSubtitle}>
                    <span>Company Name</span>
                    <span className={s.dot}>2012 - Current</span>
                </div>
                <div className={s.postContent}>
                    <p>Lorem ipsum dolor sit amet, corporis explicabo maiores minima numquam
                        possimus
                    </p>
                </div>
            </div>
        </div>
    )
}