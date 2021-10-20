import React from 'react'

const Resume = () => {
    return (
        <>
            {/* <!-- ======= Resume Section ======= --> */}
            <section id="resume" class="resume">
                <div class="container">

                    <div class="section-title">
                        <h2>Resume</h2>
                        <p>Full Stack web developer with solid understanding of front - end technologies, Restful web services and Data Base designing. Hands-on experience in MERN Stack, used React.js for client side, Node.js/Express for server side and MongoDB, SQL Server for database. </p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <h3 class="resume-title">Sumary</h3>
                            <div class="resume-item pb-0">
                                <h4>Nusrat Jahan Pinky</h4>
                                <p><em>Innovative and dedicated web developer with solid understanding of front - end technologies, Restful web services and Data Base designing. Hands-on experience in MERN Stack, used React.js for client side, Node.js/Express for server side and MongoDB, SQL Server for database. </em></p>
                                <ul>
                                    <li>Modhubagh, Moghbazar, Dhaka</li>
                                    <li>(+880) 1766516039</li>
                                    <li>nusratjahan1535@gmail.com</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>BSc in Computer Science and Engineering</h4>
                                <h5>2015 - 2019</h5>
                                <p><em>Khulna University, Khulna, Bangladesh</em></p>
                                {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Intern Software Engineer</h4>
                                <h5>Aug, 2020 - May, 2021</h5>
                                <p><em>FLUX IT, Dhaka, Bangladesh </em></p>
                                <ul>
                                    <li><a href="https://worklocker.net/">WorkLocker</a> is one of the major projects I worked in.</li>
                                    <li><b>Technologies</b> – JavaScript, React.js, Antd, Node.js, Express.js, MongoDB, Rest API.</li>
                                </ul>
                            </div>
                            <h3 class="resume-title">Certification</h3>
                            <div class="resume-item">
                                <h4>SQL (Basic) Certificate</h4>
                                <h5>Issued date Sep 2021 | No Expiration Date</h5>
                                <p><em>HackerRank</em></p>
                                <ul>
                                    <li>Credential ID : <b>FEAF08114300</b></li>
                                    <li><a href="https://www.hackerrank.com/certificates/feaf08114300">See Credential</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Resume;
