import React from 'react'

const About = () => {
    return (
        <>
            {/* // <!-- ======= About Section ======= --> */}
            <section id="about" class="about">
                <div class="container">
                    <div class="section-title">
                        <h2>About</h2>
                        <p>Passionate and self-motivated software developer. Strong in design and integration with intuitive problemsolving
                            skills. I'm proactive in my tasks and I can read a lot. That's why I'm always ready for learning new
                            technologies and trends. I'm a team player, communicative and a collaborative person.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src="me.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Web Developer</h3>
                            {/* <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p> */}
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 July 1997</span></li>
                                        {/* <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+880 1766516039</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dhaka, Bangladesh</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc in CSE</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>nusratjahan1535@gmail.com</span></li>
                                        {/* <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <p>
                                Full Stack web developer with solid understanding of front - end technologies, MVC frameworks, Restful web services and Data Base designing. Hands-on experience in MERN Stack, used React.js for client side, Node.js/Express for server side and MongoDB, SQL Server for database. Strong knowledge of Object-Oriented Programming, functional programing. Love to solve problems/bugs and architect solutions. Knowledge in Machine learning.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About;
