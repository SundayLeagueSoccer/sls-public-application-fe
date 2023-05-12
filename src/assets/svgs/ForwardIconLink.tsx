type ForwardIconProp = {
  fillColor: string | undefined;
};

const ForwardIconLink = ({ fillColor }: ForwardIconProp) => {
  return (
    <>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.64062 6.84961H12.1406M12.1406 6.84961L6.89062 1.59961M12.1406 6.84961L6.89062 12.0996"
          stroke={fillColor}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default ForwardIconLink;
