import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-intro">
        <h1 className="hero-title">Daniel Yachnikov - Hughes </h1>
        <div className="hero-buttons">
          <button className="hero-button" onClick={() => navigate("/contact")}>
            Get in touch
            <svg
              className="hero-button-chevron"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hero-details">
        <h3 className="hero-subtitle">Software Engineer</h3>
        <p className="hero-paragraph">
          I’m an experienced frontend engineer with around three and a half
          years of experience, mainly working with React, TypeScript and
          Next.js. I was the sole frontend engineer on a large customer portal
          at Darktrace, so I owned features end‑to‑end — from shaping the UX to
          building, testing and shipping them.
        </p>
      </div>
    </div>
  );
};

export default Home;
