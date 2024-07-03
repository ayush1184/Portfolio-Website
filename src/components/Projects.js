import { useInView } from "react-intersection-observer";
import Init from "./hackerText Final.js";

function gibrishingText(e) {
  Init(e.target.id, 5, 50);
}

const projects = [
  {
    projectTitle: `Pig Game`,
    description: `Pig Game is a two-player game. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.`,
    codeURL: `https://github.com/ayush1184/Pig_Game`,
    demoURL: `https://ayush1184.github.io/Pig_Game/`,
  },
  {
    projectTitle: `Bankist`,
    projectSubTitle: `Accounts Page`,
    image: ``,
    description: `A Virtual banking experience. As a web developer, I have created a fictional online bank that provides a realistic user experience. It showcases my proficiency in DOM manipulation and user interaction. Log in to your account, transfer funds, take a loan, and manage your account, just like in an actual bank`,
    codeURL: `https://github.com/ayush1184/`,
    demoURL: ``,
  },
  {
    projectTitle: `Bankist`,
    projectSubTitle: `Home Page`,
    description: `Bankist landing page made with some advanced DOM manipulation.`,
    codeURL: `https://github.com/ayush1184/`,
    demoURL: ``,
  },
  {
    projectTitle: `Mapty`,
    projectSubTitle: `Workout Tracker`,
    description: `This is a web application which will keep track of your workout. The goal is to log the workouts for the user in its desired location and set some specifications for his workout accordingly.`,
    codeURL: `https://github.com/ayush1184/Mapty-App`,
    demoURL: `https://mapty-app-ayush1184.vercel.app/`,
  },
  {
    projectTitle: `Weatherly`,
    projectSubTitle: `Weather App`,
    description: `The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to seven days in future and hourly weather forecast.`,
    codeURL: `https://github.com/ayush1184/Weatherly`,
    demoURL: `https://weatherly-aks1184.vercel.app/`,
  },
  {
    projectTitle: `usePopcorn`,
    projectSubTitle: `Movie App`,
    description: `usePopcorn is a React-based movie website that allows users to search for movies by title, rate them according to their choice, and add to list their favorite movies. The website is designed to be user-friendly and visually appealing.`,
    codeURL: `https://github.com/ayush1184/UsePopcorn`,
    demoURL: `https://usepopcorn-v2-ayush1184.vercel.app/`,
  },
  {
    projectTitle: `Wordle Game`,
    projectSubTitle: `Game`,
    description: `Wordle is a daily word game that involves figuring out a secret five-letter word. You play by guessing different five-letter words to see how close they are to the secret word.`,
    codeURL: `https://github.com/ayush1184/Wordle_Game.git`,
    // demoURL: ``,
  },
  {
    projectTitle: `Image Outliner`,
    projectSubTitle: `Image Convertor`,
    description: `Convert your favorite images into captivating outline sketches effortlessly with this Python-based image processing project. `,
    codeURL: `https://github.com/ayush1184/Image-Outliner.git`,
    // demoURL: ``,
  },
  },
  {
    projectTitle: `Suduko Solver`,
    projectSubTitle: `Puzzle-Solver`,
    description: `Sudoku Solver is a simple and intuitive desktop application built with Python and Tkinter that allows users to solve Sudoku puzzles with ease.`,
    codeURL: `https://github.com/ayush1184/Suduko_Solver.git`,
    // demoURL: ``,
  },
];

export default function Projects() {
  // useEffect(function () {}, []);

  return (
    <>
      <header className="section-header project-header">
        <h1 id="project" onClick={gibrishingText}>
          Projects
        </h1>
      </header>
      <div className="projects-container">
        {projects.map((p, i) => (
          <ProjectsTab
            key={i + 1}
            reverse={!(i % 2 === 0)}
            image={`./images/project${i + 1}.png`}
            demoURL={p.demoURL}
            codeURL={p.codeURL}
            description={p.description}
            projectTitle={p.projectTitle}
            projectSubTitle={p.projectSubTitle}
          />
        ))}
      </div>
    </>
  );
}

function ProjectsTab({
  reverse,
  projectTitle,
  projectSubTitle,
  image,
  description,
  codeURL,
  demoURL,
}) {
  return (
    <div className="project-tab">
      <ProjectImage
        image={image}
        projectTitle={projectTitle}
        reverse={reverse}
      />
      <div className="border" style={reverse ? { order: 2 } : {}}>
        <div className="bubble"></div>
      </div>
      <div className="project-data" style={reverse ? { order: 1 } : {}}>
        <h1>
          {projectTitle}
          <span>{projectSubTitle}</span>
        </h1>
        <p>{description}</p>
        <div>
          <a href={codeURL} target="blank">
            Source Code <span>&#x2197;</span>
          </a>
          <a href={demoURL} target="blank">
            Demo<span>&#x2197;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectImage({ image, projectTitle, reverse }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    // onChange: (inView, entry) => {
    //   if (inView) {
    //     entry.target.classList.add(`scale-in-center`);
    //     entry.target.classList.remove(`scale-out-center`);
    //   } else {
    //     entry.target.classList.add(`scale-out-center`);
    //     entry.target.classList.remove(`scale-in-center`);
    //   }
    // },
  });

  return (
    <img
      className={inView ? `project-image scale-in-center` : `project-image`}
      src={image}
      alt={projectTitle + "'s image"}
      style={reverse ? { order: 3 } : {}}
      ref={ref}
    />
  );
}
