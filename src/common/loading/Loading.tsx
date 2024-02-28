import { Spinner } from "@/common/components";
import { createPortal } from "react-dom";
import { useIsFetching, useIsMutating } from "react-query";
import LoadingContent from "./LoadingContent";
import LoadingLayout from "./LoadingLayout";

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    (isMutating !== 0 || isFetching !== 0) &&
    createPortal(
      <LoadingLayout>
        <Spinner />
        <LoadingContent />
      </LoadingLayout>,
      document.body,
      "loading"
    )
  );
};

export default Loading;
