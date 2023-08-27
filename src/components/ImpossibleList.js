import Init from "./hackerText Final";

const lifeImpossibleList = [
  {
    main: `Obtain Bachelors degree (NSM at`,
    targetDate: `August '27`,

    sub: [
      {
        main: `Cum Laude`,
        targetDate: `August '27`,
      },
      {
        main: `Honors`,
        targetDate: `August '27`,
      },
      {
        main: `Student of the Year (Dean's List)`,
        targetDate: `August '27`,
      },
    ],
    link: `https://www.uh.edu`,
    linkText: `University of Houston)`,
  },
  { main: `Obtain Masters degree` },
  {
    main: `Earn $100K/yr annually`,
    sub: [
      { main: `Earn $200K/yr annually` },
      { main: `Earn $300K/yr annually` },
      { main: `Earn $500K/yr annually` },
      { main: `Earn $750K/yr annually` },
      { main: `Earn $1M/yr annually` },
    ],
  },
  { main: `Own a Lamborghini Urus` },
  { main: `Save $10M for retirement` },
  { main: `Move to Seattle` },
  { main: `Overcome Acrophobia` },
];

const educationalImpossibleList = [
  { main: `Overall 3.8+ GPA in Bachelors` },
  {
    main: `Get admission in Masters into `,
    link: `https://www.topuniversities.com/university-rankings/world-university-rankings/2024`,
    linkText: `World's Top 50 School`,
  },

  { main: `Publish a Book Mathematics Pathfinder Solution` },
  { main: `Publish a Book Physics Pathfinder Solution` },
  { main: `Solve Irodov Book` },
];

const proffesionalImpossibleList = [
  {
    main: `Intership in all 4 Year in Bachelors`,
    sub: [
      { main: `Intership in Freshman year` },
      { main: `Intership in Sophomore year` },
      { main: `Intership in Junior year` },
      { main: `Intership in Senior year` },
    ],
  },
  { main: `Land to a "F(M)AANG" Company` },
];

const fitnessImpossibleList = [
  {
    main: `Weigh 165lbs of mostly muscle`,
    sub: [{ main: `Weigh 180lbs of mostly muscle` }],
  },
  { main: `Maintain Body Fat Percentage <13.5%` },
  {
    main: `Be able to become`,
    link: `https://en.wikipedia.org/wiki/Human_flag`,
    linkText: `Human Flag`,
  },
  {
    main: ``,
    link: `https://en.wikipedia.org/wiki/Planche_(exercise)`,
    linkText: `Planche`,
  },
  {
    main: `Handstand for 15 seconds`,
    sub: [
      { main: `Handstand for 30 seconds` },
      { main: `Handstand for 1 Minute` },
    ],
  },

  { main: `Learn to Front-flip`, isCompleted: true },
  { main: `Learn to Back-flip` },
];

const eventsImpossibleList = [
  {
    main: `Musical Concert`,
    sub: [
      { main: `Ed Sheeran` },
      { main: `Charlie Puth` },
      { main: `Justin Bieber` },
      { main: `Taylor Swift` },
      { main: `Selena Gomez` },
      { main: `Hailee Steinfeld` },
      { main: `BTS` },
    ],
  },
  {
    main: `Sports `,
    sub: [
      { main: `FIFA World Cup` },
      { main: `F1 Race` },
      { main: `ICC Men's Cricket World Cup` },
    ],
  },
];

const skillImpossibleList = [
  {
    main: `Solve Rubik Cube (3 x 3) within 1 minute`,
    sub: [
      { main: `Solve Rubik Cube (3 x 3) within 45 seconds` },
      { main: `Solve Rubik Cube (3 x 3) within 30 seconds 🔥` },
      { main: `Solve Rubik Cube (3 x 3) within 20 seconds 🔥🔥` },
    ],
  },
  {
    main: `Reach 500 ELO in chess`,
    sub: [
      { main: `Reach 1000 ELO in chess` },
      { main: `Reach 1500 ELO in chess` },
      { main: `Reach 2000 ELO in chess` },
      { main: `Reach 2500 ELO in chess` },
      { main: `Become a Chess Grandmaster` },
    ],
  },
  {
    main: `Sky - Diving `,
    link: `https://skydivehigh.com/skydive-pokhara/`,
    linkText: `(Pokhra)`,
  },
  { main: `Ski a double black diamond trail 🔥🔥` },
  {
    main: ``,
    link: `https://skydivehigh.com/halo-jumps/`,
    linkText: `HALO Jump 🔥🔥`,
  },
  {
    main: ``,
    link: `https://skydivehigh.com/haho-jumps/`,
    linkText: `HAHO Jump 🔥🔥🔥`,
  },
];

const travelImpossibleList = [
  {
    main: `Mumbai`,
    isCompleted: true,
    targetDate: `April 19, 2023`,
    sub: [{ main: `Re-visit` }],
  },
  {
    main: `Delhi`,
    isCompleted: true,
    targetDate: `May 6, 2023`,
    sub: [{ main: `Re-visit` }],
  },
  { main: `Austin` },
  { main: `Seattle` },
  { main: `Los Angles` },
  { main: `San Francisco` },
  { main: `Chicago` },
  { main: `Ski in Colorado` },
  { main: `Toronto` },
  { main: `Niagara Falls` },
  { main: `Vancouver` },
  { main: `Amsterdam` },
  { main: `Zurich` },
  { main: `Paris` },
  { main: `Venice` },
  { main: `Rome` },
  { main: `Tokyo` },
  { main: `Hong-Kong` },
  { main: `Singapore` },
  { main: `Malaysia` },
  { main: `Dubai` },
];

export default function ImpossibleList() {
  return (
    <>
      <header className="section-header project-header">
        <h1 id="impossible_list" onClick={e => Init(e.target.id, 2, 20)}>
          My Impossible List
        </h1>
        <p>
          <em>
            One man has only one chance to do the impossible{" - "}
            <span>Mission Impossible </span>{" "}
          </em>
        </p>
      </header>
      <section className="impossible-list">
        <time> Last Updated: August 1, 2023</time>
        <p>Ever hear of the impossible list?</p>

        <p>
          An <strong>Impossible list</strong> is a categorized list of all of
          the goals you'd like to achieve in life. It's similar to a bucket
          list, but there are some key differences.
        </p>

        <p>
          <strong>Bucket lists </strong>
          are more passive, we write out some long-term goals we'd like to
          achieve at some point in our lives, but a lot of the time, there's not
          much urgency and not much gets done until you're 10-20 years out from
          life's end (brutal)
        </p>

        <p>
          An impossible list differs in that its always growing. Rather than
          checking off each item in a bucket list until you reach completion, an
          impossible list requires that you continuously iterate and add new
          goals as you complete previous ones. It's called the{" "}
          <em>impossible list </em>
          because it'll always be impossible to complete everything on it.
        </p>

        <p>
          It may seem counter-intuitive, maybe even discouraging knowing you'll
          never fully complete the list, but the impossible list encourages
          <em> daily growth </em>
          and prompts you to take action on the things that matter the most to
          you, <em>right now</em>, not later.
        </p>

        <p>
          I heard of the impossible list from YouTuber and course creator,
          {` `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://thomasjfrank.com/"
          >
            Thomas Frank
          </a>{" "}
          who has a very{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://collegeinfogeek.com/about/meet-the-author/my-impossible-list/"
          >
            inspiring list of his own
          </a>{" "}
          that contains goals not too different from those of mine. He even has
          a great video that explains the impossible list in more detail for
          those who need it (like my dumb-self):
        </p>

        <iframe
          height="315"
          src="https://www.youtube.com/embed/6apcEae2U4w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        ></iframe>

        <p>
          I used his list as a baseline template to create an impossible list of
          my own so I too can begin marking off some of the life-long dreams
          I've had that mean so much to me.
        </p>

        <h2>What's I'm working on now</h2>

        <time>August 1, 2023</time>

        <p>
          Currently, I'm working on React Projects, getting an internship by the
          end of my freshman year, scoring 4.0 GPA in freshman year, reducing
          body fat percentage from 20.1% to 13.5%, to have a net-worth of $5000
          by August, 2024.
        </p>

        <h2>Life Goals</h2>

        <ul>
          {lifeImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>

        <h2>Educational Goals</h2>

        <ul>
          {educationalImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>

        <h2>Professional Goals</h2>

        <ul>
          {proffesionalImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>

        <h2>Fitness Goals</h2>

        <ul>
          {fitnessImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>

        <h2>Events to Attend</h2>

        <ul>
          {eventsImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>

        <h2>Skills Goals</h2>

        <ul>
          {skillImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>

        <h2>Travel Goals</h2>

        <ul>
          {travelImpossibleList.map((goal, i) => (
            <GoalsTab goalObj={goal} key={i} />
          ))}
        </ul>
      </section>
    </>
  );
}

function GoalsTab({ goalObj }) {
  return (
    <li>
      {goalObj.isCompleted ? <del>{goalObj.main}</del> : goalObj.main}
      {` `}
      {goalObj.link ? <a href={goalObj.link}>{goalObj.linkText}</a> : ``}
      {` `}
      {goalObj.targetDate ? `(${goalObj.targetDate})` : ``}
      {goalObj.sub ? (
        <ul>
          {goalObj.sub.map((t, i) => (
            <li key={i}>
              {t.isCompleted ? <del>{t.main}</del> : t.main}
              {` `}
              {t.link ? <a href={t.link}>{t.linkText}</a> : ``}
              {` `}
              {t.targetDate ? `(${t.targetDate})` : ``}
            </li>
          ))}
        </ul>
      ) : (
        ``
      )}
    </li>
  );
}
