import { modalAtom } from "@atoms/modalAtom";
import { Button } from "@components";
import { useResetRecoilState } from "recoil";

const CancelButton = () => {
  const resetModal = useResetRecoilState(modalAtom);

  const handleClickCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    resetModal();
  };

  return (
    <Button variant="secondary" onClick={handleClickCancel}>
      취소
    </Button>
  );
};

export default CancelButton;
