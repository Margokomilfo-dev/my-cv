import React from "react"
import s from './AboutMe.module.css'

type AboutMePropsType = {}
export const AboutMe: React.FC<AboutMePropsType> = (props) => {
    return (
        <div className={s.aboutMe}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>About Me</h2>
                    <span className={s.border}> </span>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam corporis deleniti ducimus enim eos, facere harum id
                        incidunt nesciunt obcaecati reiciendis, reprehenderit temporibus? Est quibusdam recusandae sit.</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam
                        corporis deleniti ducimus enim eos, facere harum id incidunt nesciunt obcaecati reiciendis,
                        reprehenderit temporibus? Est quibusdam recusandae sit.</p>
                </div>
                <div className={s.commonInf}>
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
                </div>

            </div>
        </div>
    )
}