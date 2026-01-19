'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'

interface Goal {
  main: string
  targetDate?: string
  link?: string
  linkText?: string
  isCompleted?: boolean
  sub?: Goal[]
}

const lifeImpossibleList: Goal[] = [
  {
    main: 'Obtain Bachelors degree (NSM at',
    targetDate: "August '27",
    sub: [
      { main: 'Cum Laude', targetDate: "August '27" },
      { main: 'Honors', targetDate: "August '27" },
      { main: "Student of the Year (Dean's List)", targetDate: "August '27" },
    ],
    link: 'https://www.uh.edu',
    linkText: 'University of Houston)',
  },
  { main: 'Obtain Masters degree' },
  {
    main: 'Earn $100K/yr annually',
    sub: [
      { main: 'Earn $200K/yr annually' },
      { main: 'Earn $300K/yr annually' },
      { main: 'Earn $500K/yr annually' },
      { main: 'Earn $750K/yr annually' },
      { main: 'Earn $1M/yr annually' },
    ],
  },
  { main: 'Own a Lamborghini Urus' },
  { main: 'Save $10M for retirement' },
  { main: 'Move to Seattle' },
  { main: 'Overcome Acrophobia' },
]

const educationalImpossibleList: Goal[] = [
  { main: 'Overall 3.8+ GPA in Bachelors' },
  {
    main: 'Get admission in Masters into ',
    link: 'https://www.topuniversities.com/university-rankings/world-university-rankings/2024',
    linkText: "World's Top 50 School",
  },
  { main: 'Publish a Book Mathematics Pathfinder Solution' },
  { main: 'Publish a Book Physics Pathfinder Solution' },
  { main: 'Solve Irodov Book' },
]

const professionalImpossibleList: Goal[] = [
  {
    main: 'Internship in all 4 Year in Bachelors',
    sub: [
      { main: 'Internship in Freshman year' },
      { main: 'Internship in Sophomore year' },
      { main: 'Internship in Junior year' },
      { main: 'Internship in Senior year' },
    ],
  },
  { main: 'Land to a "F(M)AANG" Company' },
]

const fitnessImpossibleList: Goal[] = [
  {
    main: 'Weigh 165lbs of mostly muscle',
    sub: [{ main: 'Weigh 180lbs of mostly muscle' }],
  },
  { main: 'Maintain Body Fat Percentage <13.5%' },
  {
    main: 'Be able to become',
    link: 'https://en.wikipedia.org/wiki/Human_flag',
    linkText: 'Human Flag',
  },
  {
    main: '',
    link: 'https://en.wikipedia.org/wiki/Planche_(exercise)',
    linkText: 'Planche',
  },
  {
    main: 'Handstand for 15 seconds',
    sub: [
      { main: 'Handstand for 30 seconds' },
      { main: 'Handstand for 1 Minute' },
    ],
  },
  { main: 'Learn to Front-flip', isCompleted: true },
  { main: 'Learn to Back-flip' },
]

const eventsImpossibleList: Goal[] = [
  {
    main: 'Musical Concert',
    sub: [
      { main: 'Ed Sheeran' },
      { main: 'Charlie Puth' },
      { main: 'Justin Bieber' },
      { main: 'Taylor Swift' },
      { main: 'Selena Gomez' },
      { main: 'Hailee Steinfeld' },
      { main: 'BTS' },
    ],
  },
  {
    main: 'Sports ',
    sub: [
      { main: 'FIFA World Cup' },
      { main: 'F1 Race' },
      { main: "ICC Men's Cricket World Cup" },
    ],
  },
]

const skillImpossibleList: Goal[] = [
  {
    main: "Solve Rubik's Cube (3 x 3) within 1 minute",
    sub: [
      { main: 'Solve Rubik Cube (3 x 3) within 45 seconds' },
      { main: 'Solve Rubik Cube (3 x 3) within 30 seconds 🔥' },
      { main: 'Solve Rubik Cube (3 x 3) within 20 seconds 🔥🔥' },
    ],
  },
  {
    main: 'Reach 500 ELO in chess',
    sub: [
      { main: 'Reach 1000 ELO in chess' },
      { main: 'Reach 1500 ELO in chess' },
      { main: 'Reach 2000 ELO in chess' },
      { main: 'Reach 2500 ELO in chess' },
      { main: 'Become a Chess Grandmaster' },
    ],
  },
  {
    main: 'Sky - Diving ',
    link: 'https://skydivehigh.com/skydive-pokhara/',
    linkText: '(Pokhra)',
  },
  { main: 'Ski a double black diamond trail 🔥🔥' },
  {
    main: '',
    link: 'https://skydivehigh.com/halo-jumps/',
    linkText: 'HALO Jump 🔥🔥',
  },
  {
    main: '',
    link: 'https://skydivehigh.com/haho-jumps/',
    linkText: 'HAHO Jump 🔥🔥🔥',
  },
  { main: 'Tactical Driving' },
]

const travelImpossibleList: Goal[] = [
  {
    main: 'Mumbai',
    isCompleted: true,
    targetDate: 'April 19, 2023',
    sub: [{ main: 'Re-visit' }],
  },
  {
    main: 'Delhi',
    isCompleted: true,
    targetDate: 'May 6, 2023',
    sub: [{ main: 'Re-visit' }],
  },
  { main: 'Austin' },
  { main: 'Seattle' },
  { main: 'Los Angeles' },
  { main: 'San Francisco' },
  { main: 'Chicago' },
  { main: 'Ski in Colorado' },
  { main: 'Toronto' },
  { main: 'Niagara Falls' },
  { main: 'Vancouver' },
  { main: 'Amsterdam' },
  { main: 'Zurich' },
  { main: 'Paris' },
  { main: 'Venice' },
  { main: 'Rome' },
  { main: 'Tokyo' },
  { main: 'Hong-Kong' },
  { main: 'Singapore' },
  { main: 'Malaysia' },
  { main: 'Dubai' },
]

function GoalsTab({ goalObj }: { goalObj: Goal }) {
  return (
    <li className="text-light-font py-2 pl-5 list-disc">
      {goalObj.isCompleted ? (
        <del>{goalObj.main}</del>
      ) : (
        goalObj.main
      )}{' '}
      {goalObj.link && (
        <a
          href={goalObj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-1 hover:underline"
        >
          {goalObj.linkText}
        </a>
      )}{' '}
      {goalObj.targetDate && `(${goalObj.targetDate})`}
      {goalObj.sub && (
        <ul className="pl-4 mt-2">
          {goalObj.sub.map((t, i) => (
            <li key={i} className="list-disc">
              {t.isCompleted ? <del>{t.main}</del> : t.main}{' '}
              {t.link && (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-1 hover:underline"
                >
                  {t.linkText}
                </a>
              )}{' '}
              {t.targetDate && `(${t.targetDate})`}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function ImpossibleList() {
  return (
    <section id="impossible-list" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-4">
              My Impossible List
            </h2>
            <p className="text-sm text-light-font text-right">
              <em>
                One man has only one chance to do the impossible -{' '}
                <span>Mission Impossible</span>
              </em>
            </p>
          </header>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal delay={0.2}>
            <time className="text-dark-2 block pl-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-dark-2">
              Last Updated: August 1, 2023
            </time>
            <p className="mt-8">Ever hear of the impossible list?</p>
            <p className="mt-6">
              An <strong>Impossible list</strong> is a categorized list of all
              of the goals you'd like to achieve in life. It's similar to a
              bucket list, but there are some key differences.
            </p>
            <p className="mt-6">
              <strong>Bucket lists </strong>
              are more passive, we write out some long-term goals we'd like to
              achieve at some point in our lives, but a lot of the time,
              there's not much urgency and not much gets done until you're
              10-20 years out from life's end (brutal)
            </p>
            <p className="mt-6">
              An impossible list differs in that its always growing. Rather than
              checking off each item in a bucket list until you reach
              completion, an impossible list requires that you continuously
              iterate and add new goals as you complete previous ones. It's
              called the <em>impossible list </em>
              because it'll always be impossible to complete everything on it.
            </p>
            <p className="mt-6">
              I heard of the impossible list from YouTuber and course creator,{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thomasjfrank.com/"
                className="text-primary-1 hover:underline"
              >
                Thomas Frank
              </a>{' '}
              who has a very{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://collegeinfogeek.com/about/meet-the-author/my-impossible-list/"
                className="text-primary-1 hover:underline"
              >
                inspiring list of his own
              </a>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h3 className="text-2xl font-light my-12">Life Goals</h3>
            <ul>
              {lifeImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <h3 className="text-2xl font-light my-12">Educational Goals</h3>
            <ul>
              {educationalImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <h3 className="text-2xl font-light my-12">Professional Goals</h3>
            <ul>
              {professionalImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={1.0}>
            <h3 className="text-2xl font-light my-12">Fitness Goals</h3>
            <ul>
              {fitnessImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={1.2}>
            <h3 className="text-2xl font-light my-12">Events to Attend</h3>
            <ul>
              {eventsImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={1.4}>
            <h3 className="text-2xl font-light my-12">Skills Goals</h3>
            <ul>
              {skillImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={1.6}>
            <h3 className="text-2xl font-light my-12">Travel Goals</h3>
            <ul>
              {travelImpossibleList.map((goal, i) => (
                <GoalsTab key={i} goalObj={goal} />
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
