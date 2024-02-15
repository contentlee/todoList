import { Select } from "@components";
import { Place } from "@utils/types/place";

interface Props {
  places: Place[];
  selectPlace: (place: Place) => void;
}
const MapSelect = ({ places, selectPlace }: Props) => {
  const handleClickOption = (name: string) => {
    const idx = places.findIndex((v) => v.name === name);
    selectPlace(places[idx]);
  };
  return <Select label="나의 장소" options={places.map((v) => v.name)} handleClickOption={handleClickOption}></Select>;
};

export default MapSelect;
