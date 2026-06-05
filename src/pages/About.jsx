const About = () => {
  return (
    <div style={{ padding: "25px" }}>
      <div className="page page--top">
        <h1 className="page-title">About</h1>
        <p className="page-body">
          I’m a frontend engineer with around three and a half years of
          experience, mainly working with React, TypeScript and modern tooling.
          I was the sole frontend engineer on a large customer portal at
          Darktrace, so I owned features end‑to‑end — from shaping the UX to
          building, testing and shipping them.
        </p>
        <p className="page-body">
          That experience made me very strong at working independently, making
          practical engineering decisions, and collaborating with backend and
          design. I enjoy roles where I have real ownership and can contribute
          to both the product and the engineering culture.
        </p>
      </div>
      <div className="page page--top">
        <h1 className="page-title">Tech stack</h1>
        <dl className="skills">
          <div className="skills-group">
            <dt className="skills-label">Programming languages</dt>
            <dd className="skills-list">JavaScript, TypeScript</dd>
          </div>
          <div className="skills-group">
            <dt className="skills-label">Frameworks and libraries</dt>
            <dd className="skills-list">
              React.js, Next.js, Redux, React Query, Zustand, Tailwind CSS,
              Sass, Styled Components
            </dd>
          </div>
          <div className="skills-group">
            <dt className="skills-label">Skills</dt>
            <dd className="skills-list">HTML, CSS, Git, Gitlab, Github, npm</dd>
          </div>
          <div className="skills-group">
            <dt className="skills-label">Design</dt>
            <dd className="skills-list">
              Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Figma
            </dd>
          </div>
        </dl>
      </div>
      <div className="page page--top">
        <h1 className="page-title">Interests</h1>
        <p className="page-body">
          Outside of work I’m pretty active and creative. I play tennis
          regularly, and I also play guitar and piano — music has always been a
          big part of my life. I love anything outdoors too: snowboarding in
          winter and scuba diving when I get the chance. Having a mix of
          physical, creative, and adventurous hobbies keeps me balanced and
          gives me energy, and I find it actually helps me show up sharper at
          work.
        </p>
      </div>
    </div>
  );
};

export default About;
