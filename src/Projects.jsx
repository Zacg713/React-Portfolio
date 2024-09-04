import jobharvester from "/images/projects/jobharvester.png";
import matchmaking from "/images/projects/matchmaking.webp";
import profile from "/images/projects/profile.webp";
import timeline from "/images/projects/timeline.webp";
import jumpy_game from "/images/projects/jumpy_game.png";
import jumpy_character_select from "/images/projects/jumpy_character_select.png";
import { Link } from "react-router-dom";

const Projects = () => {
    return ( 
        <div className="projects-section">
            <div className="projects">

                <h1 id="projects-title">Projects</h1>
    
                <div className="project-card-section">
                    <div className="project-card">
                        <div className="project-card-text">
                            <h1 className="project-card-title">Fit Buddy</h1>
                        
                            <p>
                                The fitness social media app provides a easy and immersive user experience.
                                By utilizing flutter it allows our users to connect with like-minded individuals, 
                                share their workout triumphs, and compete with friends to unlock the most achievements.
                            </p>

                            <div className="button-row">
                                <a href="https://github.com/robinmonsere/FitBuddy_App" className="github">
                                    <button className="github-button">Github</button>
                                </a>

                                {/* <Link className="project-link" to="/React-Portfolio/projects/detailed-view">
                                    <button className="detail-button">Detailed View</button>
                                </Link> */}
                            </div>   
                        </div>
                        
                        <div className="project-images">
                            <img src={ profile } alt=""/>
                            <img src={ timeline } alt=""/>
                            <img src={ matchmaking } alt=""/>    
                        </div>
                    </div>
        
                    <div className="project-card">
                        <div className="project-card-text">
                            <h1 className="project-card-title">Job Harvester</h1>
                        
                            <p>
                                Job Harvester is a webpage/extension that helps the user organize their job search process by giving them access to
                                a dashboard that will automatically update their status with the companies they have applied to by classifying their job emails using Naive Bayes Classifier.
                            </p>

                            <div className="button-row">
                                <a href="https://github.com/TheEMG/Job-Harvester" className="github">
                                    <button className="github-button">Github</button>
                                </a>

                                {/* <Link className="project-link" to="/React-Portfolio/projects/detailed-view">
                                    <button className="detail-button">Detailed View</button>
                                </Link> */}
                            </div>
                        </div>
                        
                        <div className="project-single-image">
                            <img src={ jobharvester } alt=""/>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-card-text">
                            <h1 className="project-card-title">Duddle Jump Clone</h1>
                        
                            <p>
                                This is a vertical platformer simular to duddle jumb make with pygame.
                            </p>

                            <div className="button-row">
                                {/* <a href="https://github.com/robinmonsere/FitBuddy_App" className="github">
                                    <button className="github-button">Github</button>
                                </a> */}

                                {/* <Link className="project-link" to="/React-Portfolio/projects/detailed-view">
                                    <button className="detail-button">Detailed View</button>
                                </Link> */}
                            </div>   
                        </div>
                        
                        <div className="project-images">
                            <img src={ jumpy_character_select } alt=""/>
                            <img src={ jumpy_game } alt=""/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;