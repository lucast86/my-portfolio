import Header from './components/Header';
import About from './components/About';
import EducationAndCourses from './components/EducationAndCourses'
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div id="home">
                <Header />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="EducationAndCourses">
                <EducationAndCourses/>
            </div>
            <div id="technologies">
                <Technologies />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
