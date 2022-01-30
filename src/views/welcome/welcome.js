import "./welcome.scss"
import img from "../../components/navigation/img/mig selv.jpg"
import Navigation from "../../components/navigation/navigstion"
export default function Welcome() {
    return (
        <section className="welcomeSection">
            <article className="welcomeSection__skills">
            <a className="welcomeSection__skillsLinks" href="">html</a>
            <a className="welcomeSection__skillsLinks" href="">css/scss</a>
            <a className="welcomeSection__skillsLinks" href="">bem</a>
            <a className="welcomeSection__skillsLinks" href="">javascript</a>
            <a className="welcomeSection__skillsLinks" href="">api</a>
            <a className="welcomeSection__skillsLinks" href="">visual studio code</a>
            </article>
            <article className="welcomeSection__bio">
                <h1 className="welcomeSection__bioName">mikkel hershøj olsen</h1>
                <img className="welcomeSection__bioNameimg" src={img} alt="billed af mig" />
                
            </article>
            <article className="welcomeSection__skills2">
                <a className="welcomeSection__skills2Links" href="">javascript</a>
                <a className="welcomeSection__skills2Links" href="">jsx</a>
                <a className="welcomeSection__skills2Links" href="">react</a>
                <a className="welcomeSection__skills2Links" href="">react-hook-forms</a>
                <a className="welcomeSection__skills2Links" href="">ajax</a>



            </article>
            <Navigation/>
        </section>
    
    )
}