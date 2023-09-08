import { keyframes } from "@emotion/react";

const animate = keyframes`
0% {
 border-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.35) rgba(0, 0, 0, 0.75);
}
25% {
 border-color: rgba(0, 0, 0, 0.75) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.35);
}
50% {
 border-color: rgba(0, 0, 0, 0.35) rgba(0, 0, 0, 0.75) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25);
}
75% {
 border-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.35) rgba(0, 0, 0, 0.75) rgba(0, 0, 0, 0.15);
}
`;

const Spinner = () => {
  return (
    <span
      css={{
        border: "24px solid",
        borderColor: "rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.35) rgba(0, 0, 0, 0.75)",
        borderRadius: "50%",
        display: "inline-block",
        boxSizing: "border-box",
        animation: `${animate} 1s linear infinite`,
      }}
    ></span>
  );
};
export default Spinner;
