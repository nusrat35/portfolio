import React from 'react'

const Portfolio = () => {
    return (
        <>
            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                    </div>
                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-info">
                                <img src="assets/img/portfolio/title.png" class="img-fluid" alt="" />
                                <h3 style={{marginTop:'10px'}}>Memories</h3>
                                It's a full stack MERN project where user can create, edit, update and delete their memories.
                                <ul>                               
                                    <li><strong>Technologies</strong>: JavaScript, React.js, Redux, Material-UI, Node.js, Express.js, MongoDB</li>
                                    <li><strong>Live URL</strong>: <a href="https://mern-memories-bynusrat.netlify.app/">Link</a></li>
                                    <li><strong>Source Code</strong>: <a href="https://github.com/nusrat35/MERN_memories">Link</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-info">
                                <img src="assets/img/portfolio/covid19Title.png" class="img-fluid" alt="" />
                                <h3 style={{marginTop:'10px'}}>CoronaTracker </h3>
                                Coronavirus-19 API based application for knowing the current status of covid19 situations in different countries. 
                                <ul>                               
                                    <li><strong>Technologies</strong>: JavaScript, React.js, Material-UI</li>
                                    <li><strong>Live URL</strong>: <a href="https://nusrat35.github.io/react-covid19tracker/">Link</a></li>
                                    <li><strong>Source Code</strong>: <a href="https://github.com/nusrat35/react-covid19tracker">Link</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-info">
                                <img src="assets/img/portfolio/weatherTitle.png" class="img-fluid" alt="" />
                                <h3 style={{marginTop:'10px'}}>WeatherPoint</h3>
                                It’s an API based weather describing application where user can know the weather condition of any city in the world by searching with city name in this app
                                <ul>                               
                                    <li><strong>Technologies</strong>: JavaScript, React.js, JSX, CSS</li>
                                    <li><strong>Live URL</strong>: <a href="https://nusrat35.github.io/react-weather-app/">Link</a></li>
                                    <li><strong>Source Code</strong>: <a href="https://github.com/nusrat35/react-weather-app">Link</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-info">
                                <img src="assets/img/portfolio/ticTacToe.png" class="img-fluid" alt="" />
                                <h3 style={{marginTop:'10px'}}>Tic-Tac-Toe Game</h3>
                                Tic-Tac-Toe is a tiny game. It is a minimalist take on the classic paper-and-pencil game for two players. 
                                Users can take turns marking the Xs and Os in the 3x3 grid. The first mark must be X and the second is O. 
                                Players win by placing three of their marks in either a horizontal, vertical or diagonal row. 
                                If neither player can place three in a row, the program declares a draw game.
                                <ul>                               
                                    <li><strong>Technologies</strong>: JavaScript, React.js, JSX, CSS</li>
                                    <li><strong>Live URL</strong>: <a href="https://nusrat35.github.io/react-tic-tac-toe/">Link</a></li>
                                    <li><strong>Source Code</strong>: <a href="https://github.com/nusrat35/react-tic-tac-toe">Link</a></li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Portfolio;
