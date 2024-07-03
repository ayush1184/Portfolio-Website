import { TypeAnimation } from "react-type-animation";
import {
  LiaDiscord,
  LiaFacebook,
  LiaGithub,
  LiaInstagram,
  LiaLinkedin,
  LiaTwitter,
} from "react-icons/lia";
import { IoMailOutline, IoDocumentAttachOutline } from "react-icons/io5";
import { SiBento } from "react-icons/si";
import { PiTargetBold } from "react-icons/pi";

const contacts = [
  {
    name: `Instagram`,
    icon: LiaInstagram,
    url: `https://www.instagram.com/ayushkrsingh1184/`,
  },
  {
    name: `LinkedIn`,
    icon: LiaLinkedin,
    url: `https://www.linkedin.com/in/ad1184/`,
  },
  {
    name: `Twitter`,
    icon: LiaTwitter,
    url: `https://twitter.com/ayushsingh1184`,
  },
  {
    name: `Facebook`,
    icon: LiaFacebook,
    url: `https://www.facebook.com/profile.php?id=100022524036128`,
  },
  {
    name: `Mail`,
    icon: IoMailOutline,
    url: `mailto:ayushkrsingh1184@gmail.com`,
  },
  { name: `Github`, icon: LiaGithub, url: `https://github.com/ayush1184` },
  { name: `Bento`, icon: SiBento, url: `https://bento.me/ayush1184` },
  { name: `Discord`, icon: LiaDiscord, url: `#` },
  { name: `Resume`, icon: IoDocumentAttachOutline, url: `https://github.com/user-attachments/files/16080322/F23_Resume.pdf` },
];

const recentAchieved = [
  // Clearing JEE
  // {
  //   title: `The Ultimate REACT Course`,
  //   source: `Udemy`,
  //   date: `June 17, 2023`,
  //   description: `REACTJS is extremely declarative,
  //   component-based, state-driven
  //   library for building user interfaces, created by Facebook (Meta).`,
  // },
  // {
  //   title: `The Complete JavaScript Course`,
  //   source: `Udemy`,
  //   date: `Feb, 2023`,
  //   description: `JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.`,
  //   certificateURL: `https://www.udemy.com/certificate/UC-366c0eff-3264-466f-82ad-bdcf9c410f5a/`,
  // },
  {
    title: `Problem Solving (Intermediate) Certificate`,
    source: `HackerRank`,
    date: `May, 2023`,
    description: `It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).`,
    certificateURL: `https://www.hackerrank.com/certificates/60b8fa43a928`,
  },
  // {
  //   title: `JavaScript (Basic) Certificate`,
  //   source: `HackerRank`,
  //   date: `May, 2023`,
  //   description: `It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.`,
  //   certificateURL: `https://www.hackerrank.com/certificates/18f2dd339fe1`,
  // },
  {
    title: `The Ultimate REACT Course`,
    source: `Udemy`,
    date: `June, 2023`,
    description: `REACTJS is extremely declarative,component-based, state-driven library for building user interfaces, created by Facebook (Meta).`,
    certificateURL: `https://www.udemy.com/certificate/UC-71e5783f-556b-4d2c-b6e9-d74bedf0774d/`,
  },
  {
    title: `Google AI Essentials`,
    source: `Coursera`,
    date: `July, 2024`,
    description: `Master productivity tools, learn prompt engineering for creative output, understand responsible AI deployment, and stay updated on cutting-edge advancements to excel in the evolving AI landscape.`,
    certificateURL: `https://www.credly.com/badges/063f67a5-ea21-4d41-9c9c-c1118e72e748/public_url`,
  },
];

const goals = [
  {
    target: `Intenship in Sophomore Year`,
    dueDate: `May 10, 2025`,
    status: `In Progress`,
    image: `https://cdn.iconscout.com/icon/premium/png-256-thumb/internship-2032188-1712126.png`,
  },
  // {
  //   target: `Intenship in Freshman Year`,
  //   dueDate: `May 10, 2024`,
  //   status: `Failed`,
  //   image: `https://cdn.iconscout.com/icon/premium/png-256-thumb/internship-2032188-1712126.png`,
  // },
  // {
  //   target: `Net Worth $5000 Freshman Year`,
  //   dueDate: `May 10, 2024`,
  //   status: `In Progress`,
  // },
  {
    target: `Clearing JEE`,
    dueDate: `September 11, 2022`,
    status: `Completed`,
    image: `https://hindi.news24online.com/wp-content/uploads/2022/08/IIT-JEE-Advanced-2022-1.jpg?w=696&h=0&crop=1`,
  },
];

export default function HomePage() {
  return (
    <>
      <div>
        <div className="home-heading">
          <h1>
            I'm {` `}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                // wait 1s before replacing "Mice" with "Hamsters"
                "a Student,",
                1000,
                "a Developer,",
                1000,
                "a Tech-Enthusiast,",
                1000,
              ]}
              wrapper="span"
              speed={10}
              className="typing-svg"
              repeat={Infinity}
            />
          </h1>
        </div>
        <p>
          <br />
          👋👋 Hey there,
          <br />
          {/* ignore-prettier */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm
          Ayush, I'm a sophomore student majoring in Computer Science
          {` `}
          <a
            href="https://www.eecs.mit.edu/research/computer-science/#:~:text=Computer%20science%20deals%20with%20the,of%20user%20requests%20per%20day."
            target="blank"
          >
            (CS)
          </a>
          {/* &nbsp; and Finance  */}
          &nbsp;at the University of Houston{" "}
          <a href="https://www.uh.edu/" target="blank">
            {" "}
            (UH)
          </a>
          . As a CS student, I strive to bridge the gap between creativity and
          technology by constantly seeking new challenges to turn lines of code
          into elegant solutions.
        </p>
        <div className="contacts-list">
          {contacts.map(obj => {
            const ComponentToRender = obj[`icon`];

            return (
              <ContactTab url={obj.url} key={obj.name}>
                <ComponentToRender />
              </ContactTab>
            );
          })}
        </div>
      </div>
      <div className="recent-achieved-container">
        {recentAchieved.map((el, i) => (
          <RecentAchievedTab
            title={el.title}
            source={el.source}
            description={el.description}
            date={el.date}
            certificateURL={el.certificateURL}
            key={i}
          />
        ))}
      </div>
      <div className="recent-goals-container">
        <div className="recent-goals">
          <span>
            <PiTargetBold />
            Goals
          </span>
          {goals.map(t => (
            <GoalsTab
              key={t.target}
              target={t.target}
              dueDate={t.dueDate}
              status={t.status}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function GoalsTab({ target, status, dueDate, image }) {
  return (
    <div
      className={
        status.toLowerCase().includes(`progress`)
          ? `goals-tab pulse`
          : `goals-tab`
      }
    >
      <img src={image} className="goals-logo" alt={target + "'s logo"} />
      <div>
        <h3>{target}</h3>
        <div>
          <span className="">{status}</span>
          <span>{dueDate}</span>
        </div>
      </div>
    </div>
  );
}

function RecentAchievedTab({
  title,
  source,
  date,
  description,
  certificateURL,
}) {
  return (
    <div>
      <div className="date">
        <span></span>
        <time>{date}</time>
      </div>
      <h3 className="title">
        {title}
        <span>{source}</span>
      </h3>
      <p className="description">{description}</p>
      {certificateURL ? (
        <a href={certificateURL} target="blank" className="certificateURL">
          Certificate
        </a>
      ) : (
        ``
      )}
    </div>
  );
}

function ContactTab({ url, children }) {
  return (
    <a href={url} target={`blank`}>
      {children}
    </a>
  );
}
