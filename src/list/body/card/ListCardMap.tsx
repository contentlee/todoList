import Map from "@/common/map";

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
      <Map.View center={{ lat, lng }} selected={{ lat, lng }} />
    </div>
  );
};

export default ListCardMap;
