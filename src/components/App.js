import { useEffect, useState } from "react";
import HeroDevices from "./hero-devices.svg";
import Loader from "./loader.js";
import HomePage from "./HomePage.js";
import Projects from "./Projects";
import Skills from "./Skills.js";
import Education from "./Education.js";
import ImpossibleList from "./ImpossibleList.js";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";

// prettier-ignore
export const navbarTabs = [`About`,`Projects`,`Skills`,`Education`,`Impossible List`,];

export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  // const [starterLoading, setStarterLoading] = useState(false);

  const [starterLoading, setStarterLoading] = useState(true);
  useEffect(function () {
    setTimeout(() => setStarterLoading(false), 3200);
  }, []);

  // useEffect(
  //   function () {
  //     if (!starterLoading) Init(`text`, 1, 10);
  //   },
  //   [starterLoading]
  // );

  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <>
      {starterLoading ? (
        <div className="loader">
          <Loader />
          {/* <RiseLoader color="aquamarine" /> */}
          {/* <FadingDots className="loader-gradient" /> */}
        </div>
      ) : (
        <div className="container">
          <header className="header">
            <Navbar
              sticky={inView}
              tabs={navbarTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="blank" ref={ref}></div>
            <div className="blank"></div>
            <img className="logo" src={HeroDevices} alt="hero-devices" />
          </header>
          <MainContent />
          <Footer />
        </div>
      )}
    </>
  );
}

export function handleNavLinkClick(e) {
  let id = e.target.innerText.toLowerCase().split(` `);
  if (id.length >= 2) id = id.slice(0).join(`-`);

  document.querySelector(`#${id}`).scrollIntoView({ behavior: `smooth` });
}

function Navbar({ tabs, sticky, activeTab, setActiveTab }) {
  return (
    <nav className={sticky ? `navbar` : `navbar sticky`}>
      {tabs.map((el, i) => (
        <div className={`nav-link`} key={i} onClick={handleNavLinkClick}>
          {el}
        </div>
      ))}
    </nav>
  );
}

function ContentSection({ id, children }) {
  return (
    <section id={id} className={`section section--${id}`}>
      {children}
    </section>
  );
}

function MainContent() {
  return (
    <main>
      <ContentSection id={`home`}>
        <HomePage />
      </ContentSection>
      <ContentSection id={`about`}></ContentSection>
      <ContentSection id={`projects`}>
        <Projects />
      </ContentSection>
      <ContentSection id={`skills`}>
        <Skills />
      </ContentSection>
      <ContentSection id={`education`}>
        <Education />
      </ContentSection>
      <ContentSection id={`impossible-list`}>
        <ImpossibleList></ImpossibleList>
      </ContentSection>
    </main>
  );
}
