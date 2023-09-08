import { createPortal } from "react-dom";

import { Spinner } from "@components/common";

const LoadingContainer = () => {
  return (
    <>
      {createPortal(
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            height: "100%",
            padding: "24px 0",
          }}
        >
          <Spinner></Spinner>
          <span>잠시만 기다려주세요..!</span>
        </div>,
        document.body,
        "loading"
      )}
    </>
  );
};

export default LoadingContainer;
