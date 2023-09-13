import { createPortal } from "react-dom";

import { Spinner } from "@components/common";
import { useIsFetching, useIsMutating } from "react-query";

const LoadingContainer = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    (isMutating !== 0 || isFetching !== 0) &&
    createPortal(
      <div
        css={{
          zIndex: "1100",
          position: "absolute",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          height: "100%",
          padding: "24px 0",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Spinner></Spinner>
        <span>잠시만 기다려주세요..!</span>
      </div>,
      document.body,
      "loading"
    )
  );
};

export default LoadingContainer;
