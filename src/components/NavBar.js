import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Home';

const NavBar = () => {
    return (
        <>
            {/* <!-- ======= Mobile nav toggle button ======= --> */}
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

            {/* <!-- ======= Header ======= --> */}
            <header id="header" style={{overflow: "scroll"}}>
                <div class="d-flex flex-column">

                    <div class="profile">
                        <img src="me.png" alt="" class="img-fluid rounded-circle" />
                        <h1 class ="text-light"><a href="index.html">Nusrat Jahan Pinky</a></h1>
                        <div class ="social-links mt-3 text-center">
                            <a href="https://www.linkedin.com/in/nusratjahan35/"><i class ="bx bxl-linkedin"></i></a>
                            <a href="https://github.com/nusrat35"><i class ="bx bxl-github"></i></a>
                            <a href="https://www.facebook.com/nusratjahan1535"><i class ="bx bxl-facebook"></i></a>
                            <a href="https://join.skype.com/invite/ffHbh5X9KQ4w"><i class ="bx bxl-skype"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Skills</span></a></li>                            
                            <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                            <li><a href="#publication" class="nav-link scrollto"><i class="bx bx-book"></i> <span>Research &amp; Publication</span></a></li>
                            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default NavBar;
