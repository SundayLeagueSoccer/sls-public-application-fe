import sls_logo from "./sls_logo.svg";

const SlsLogo = () => {
  const imageStyles = {
    cursor: "pointer",
  };

  return (
    <>
      <img src={sls_logo} style={imageStyles} alt="sls logo" />
    </>
  );
};

export default SlsLogo;
