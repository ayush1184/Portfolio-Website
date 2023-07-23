import Init from "./hackerText Final.js";

export default function Education() {
  return (
    <>
      <header className="section-header skills-header">
        <h1 id="eduaction" onClick={e => Init(e.target.id, 2, 50)}>
          Education
        </h1>
      </header>
      <div className="education-container"></div>
    </>
  );
}
