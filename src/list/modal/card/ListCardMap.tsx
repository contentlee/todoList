import { Map } from "@components";

interface Props {
  lat: number;
  lng: number;
}

const ListCardMap = ({ lat, lng }: Props) => {
  return (
    <div
      css={{
        width: "100%",
        height: "120px",
      }}
    >
      <Map center={{ lat, lng }} selected={{ lat, lng }} />
    </div>
  );
};

export default ListCardMap;
