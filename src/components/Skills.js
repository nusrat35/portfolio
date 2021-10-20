import React from 'react'

const Skills = () => {
    return (
        <>
            {/* <!-- ======= Skills Section ======= --> */}
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="progress">
                                <span className="skill">JavaScript<i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">React.js <i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Node.js/Express.js<i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{ width: '55%' }}></div>
                                </div>
                            </div>
                        
                            <div className="progress">
                                <span className="skill">MySQL/MongoDB <i className="val">40%</i></span>
                                <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="progress">
                                <span className="skill">Vaersion Control/GIT<i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Learning and Communication<i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Machine Learning<i className="val">30%</i></span>
                                <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Python<i className="val">20%</i></span>
                                <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Skills;
