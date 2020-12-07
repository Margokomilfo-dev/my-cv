import React from "react"
import s from './Portfolio.module.css'
import '../../common.css'


type PortfolioPropsType = {}

export const Portfolio: React.FC<PortfolioPropsType> = (props) => {
    return (
        <div className='blockName'>
            <div className='container'>
                <div className='blockTitle'>
                    <h2>Portfolio</h2>
                    <span className='border'> </span>
                </div>
                <div className={s.menu}>
                    <ul>
                        <li className={s.selected}>All works</li>
                        <li>JS</li>
                        <li>HTML/CSS</li>
                        <li>HTML/CSS/JS</li>
                        <li>React</li>
                        <li>React/Redux</li>
                        <li>Small tasks </li>
                    </ul>
                </div>

                <div className={s.portfolioContainer}>
                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>


                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>


                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                    <div className={s.work}>
                        <div className={s.details}>
                            <h2>portfolio title design</h2>
                            <p>developed for <span>somebody</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}