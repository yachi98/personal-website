const experience = [
  {
    company: "Darktrace",
    role: "UI Software Engineer",
    location: "Cambridge",
    period: "March 2025 – April 2026",
    summary:
      "Sole frontend engineer on a large-scale customer portal, owning front-end development end-to-end with React and Next.js while collaborating closely with backend and design.",
  },
  {
    company: "Squared",
    role: "Frontend Developer",
    location: "London",
    period: "June 2024 – Feb 2025",
    summary:
      "Led the development of modern, responsive interfaces with TypeScript, Next.js and Tailwind CSS, architecting Redux-based state management within a cross-functional Agile team.",
  },
  {
    company: "Developer Pro",
    role: "Frontend Developer",
    location: "London",
    period: "June 2023 – June 2024",
    summary:
      "Built and deployed responsive, scalable web applications with React, TypeScript and Tailwind CSS, turning Figma designs into production-ready code and integrating RESTful APIs.",
  },
  {
    company: "University of Leeds",
    role: "Web Developer",
    location: "Leeds",
    period: "June 2022 – June 2023",
    summary:
      "Part of a team of 8 that designed and built the immersive “DegreeShow2023” site, translating designs into responsive production-ready code with HTML, CSS and JavaScript.",
  },
];

const Experience = () => {
  return (
    <div style={{ padding: "25px" }}>
      <div className="page page--top">
        <h1 className="page-title">Experience</h1>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={job.company}>
              <span className="timeline-marker" />
              <div className="timeline-content">
                <h2 className="timeline-role">{job.role}</h2>
                <p className="timeline-meta">
                  {job.company} · {job.location} · {job.period}
                </p>
                <p className="page-body">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
