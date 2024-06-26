import pp from "/images/aboutMe/profilepicture.webp";

const About = () => {
    return (
        <div className="about-me">
            <div className="about-me-text">
                <h1>Allow me to introduce myself</h1>

                <p>
                    I am a dedicated Computer Science student at the University of Texas at Tyler, 
                    on track to graduate in May 2024. My proficiency extends to programming languages 
                    such as Java, C++, Python, HTML, CSS, JavaScript, and Dart.
                    Over the course of my five-year academic journey, I have had 
                    the honor of working with accomplished peers and participating in 
                    collaborative projects. These experiences have given me the ability to work collaboratively
                    in team environments and the ability to communicate effectively.
                </p>

                <p>
                    I enjoy crafting elegant solutions to complex problems. I am eager to contribute to innovative projects
                    also, I am constantly expanding my skills to stay at the forefront of the ever-evolving tech landscape.
                </p> 
            </div>

            <div className="about-me-image">
                <img src={ pp } alt="profilepicture-img" />
            </div>
        </div>     
    );
}
 
export default About;