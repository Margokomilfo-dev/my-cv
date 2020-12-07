import React from "react"
import s from './MyResume.module.css'
import '../../common.css'

type MyResumePropsType = {}

export const MyResume: React.FC<MyResumePropsType> = (props) => {
    return (
        <div className='blockName'>
            <div className='container'>
                <div className='blockTitle'>
                    <h2>My Resume</h2>
                    <span className='border'> </span>
                </div>
                <div className={s.resume}>
                    <div className={s.timeLine}>



                        <div className={s.category}>
                            <span>Experiences</span>
                            <div className={s.categoryIcon}> </div>
                        </div>

                        <div className={s.contentBlocks}>
                            <div className={s.left}>
                                <div className={s.blocks}>
                                    <div className={`${s.block} ${s.blockLeft}`}>
                                        <div className={`${s.blockIcon} ${s.iconLeft}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, corporis explicabo maiores minima numquam
                                            possimus, praesentium
                                            tempora veniam voluptas? Ab quos rem sunt. consectetur adipisicing elit.
                                            Debitis, facilis?
                                        </p>
                                    </div>
                                    <div className={`${s.block} ${s.blockLeft}`}>
                                        <div className={`${s.blockIcon} ${s.iconLeft}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facilis?
                                            corporis explicabo maiores minima numquam possimus, praesentium
                                            tempora veniam voluptas? Ab quos rem sunt.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={s.right}>
                                <div className={s.blocks}>
                                    <div className={`${s.block} ${s.blockRight}`}>
                                        <div className={`${s.blockIcon} ${s.iconRight}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facilis?
                                            Ab quos rem sunt. consectetur adipisicing elit. Debitis, facilis</p>
                                    </div>
                                    <div className={`${s.block} ${s.blockRight}`}>
                                        <div className={`${s.blockIcon} ${s.iconRight}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                                            facilis?</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={s.category}>
                            <span>Education</span>
                            <div className={s.categoryIcon}> </div>
                        </div>

                        <div className={s.contentBlocks}>
                            <div className={s.left}>
                                <div className={s.blocks}>
                                    <div className={`${s.block} ${s.blockLeft}`}>
                                        <div className={`${s.blockIcon} ${s.iconLeft}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                                            facilis?</p>
                                    </div>
                                    <div className={`${s.block} ${s.blockLeft}`}>
                                        <div className={`${s.blockIcon} ${s.iconLeft}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, corporis explicabo maiores minima numquam
                                            possimus, praesentium
                                            tempora veniam voluptas? Ab quos rem sunt. consectetur adipisicing elit.
                                            Debitis, facilis?</p>
                                    </div>
                                </div>

                            </div>
                            <div className={s.right}>
                                <div className={s.blocks}>
                                    <div className={`${s.block} ${s.blockRight}`}>
                                        <div className={`${s.blockIcon} ${s.iconRight}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                                            facilis?</p>
                                    </div>
                                    <div className={`${s.block} ${s.blockRight}`}>
                                        <div className={`${s.blockIcon} ${s.iconRight}`}> </div>
                                        <h4>position</h4>
                                        <p>Place - date</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facilis?
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Aliquid ea esse officia quasi
                                            velit? Aut commodi corporis explicabo maiores minima numquam possimus,
                                            praesentium
                                            tempora veniam voluptas? Ab quos rem sunt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.categoryEndIcon}> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}