// import LogoDYH from "../../../public/model-cube-space.png";

const Logo = () => {
  return (
    <>
      <button
        style={{
          zIndex: 999,
          fontFamily: "Noirden",
          cursor: "pointer",
          background: "none",
          border: "none",
          color: "white",
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "20px",
        }}
      >
        DYH
      </button>
      <img src="/model-cube-space.png" alt="logo" />
    </>
  );
};

export default Logo;
