import { Button } from "@components";

interface Props {
  closeModal: () => void;
}
const CancelButton = ({ closeModal }: Props) => {
  const handleClickCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Button variant="secondary" onClick={handleClickCancel}>
      취소
    </Button>
  );
};

export default CancelButton;
