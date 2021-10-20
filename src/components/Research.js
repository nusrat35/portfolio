import React from 'react'

const Research = () => {
    return (
        <>
            <section id="publication" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Publication</h2>
                    </div>
                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        {/* <div class="col-lg-6 col-md-6 portfolio-item filter-app"> */}
                            <div class="portfolio-info">
                                {/* <img src="assets/img/portfolio/title.png" class="img-fluid" alt="" /> */}
                                <h3>Edibility Detection of Mushroom Using Ensemble Methods:</h3>
                                <i>International Journal of Image, Graphics and Signal Processing (IJIGSP), MECS Press, Vol.11,
                                    No.4, PP.55-62, Apr. 2019.</i>
                                <ul>
                                    <li>Three popular ensemble methods of machine learning Bagging, Boosting and Random Forest have been
                                        used, where base classifiers are Dissimilarity Measure, Naïve Bayes Classifier, AdaBoost and Decision Tree.</li>
                                    <li><strong>Online</strong>: <a href="http://www.mecs-press.org/ijigsp/ijigsp-v11-n4/v11n4-5.html">Link here</a></li>
                                </ul>
                            </div>
                        {/* </div> */}
                    </div>

                </div>
            </section>
        </>
    )
}
export default Research;