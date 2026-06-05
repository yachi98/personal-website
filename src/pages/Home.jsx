const Home = () => {
  return (
    <div className="hero">
      <div className="hero-intro">
        <h1 className="hero-title">Daniel Yachnikov - Hughes </h1>
        <div className="hero-buttons">
          <button className="hero-button">
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
      <h3 className="hero-subtitle">Software Engineer</h3>
    </div>
  );
};

export default Home;
