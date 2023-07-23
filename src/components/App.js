import { useEffect, useState } from "react";
// import { FadingDots } from "react-cssfx-loading";
// import Init from "./hackerText.js";
import HeroDevices from "./hero-devices.svg";
import Loader from "./loader.js";
import HomePage from "./HomePage.js";
import Projects from "./Projects";
import Skills from "./Skills.js";
import Education from "./Education.js";
import ImpossibleList from "./ImpossibleList.js";

export default function App() {
  // prettier-ignore

  const navbarTabs = [`About`,`Projects`,`Skills`,`Education`,`Impossible List`];

  const [starterLoading, setStarterLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(function () {
    setTimeout(() => setStarterLoading(false), 3200);
  }, []);

  // useEffect(
  //   function () {
  //     if (!starterLoading) Init(`text`, 1, 10);
  //   },
  //   [starterLoading]
  // );

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
              tabs={navbarTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="blank"></div>
            <div className="blank"></div>
            <img className="logo" src={HeroDevices} alt="hero-devices" />
          </header>
          <MainContent />
        </div>
      )}
    </>
  );
}

function Navbar({ tabs, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      {tabs.map((el, i) => (
        <div
          className={`nav-link`}
          key={el}
          onClick={e => {
            let id;
            id = e.target.innerText.toLowerCase().split(` `);
            if (id.length >= 2) id = id.slice(0).join(`-`);

            document
              .querySelector(`#${id}`)
              .scrollIntoView({ behavior: `smooth` });
          }}
        >
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
