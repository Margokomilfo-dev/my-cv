import React from "react";
import s from "./Block.module.sass";

type BlockPropsType = {
    position:string
    companyName: string
    from: number
    to: string
    description: string
}
export const Block: React.FC<BlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={s.content}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.position}</h4>
                </div>
                <div className={s.postSubtitle}>
                    <span>{props.companyName}</span>
                    <span className={s.dot}>{props.from} - {props.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}