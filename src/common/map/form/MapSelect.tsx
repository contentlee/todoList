import { Select } from "@components";
import { ResPlace } from "@utils/types/place";

interface Props {
  places: ResPlace[];
  selectPlace: (place: ResPlace) => void;
}
const MapSelect = ({ places, selectPlace }: Props) => {
  const handleClickOption = (name: string) => {
    const idx = places.findIndex((v) => v.name === name);
    selectPlace(places[idx]);
  };
  return <Select label="나의 장소" options={places.map((v) => v.name)} handleClickOption={handleClickOption}></Select>;
};

export default MapSelect;
