import { FormEvent, ReactNode } from "react";
import { useRecoilState } from "recoil";

import { useRegisterPlace } from "@api/place";
import { alertAtom } from "@atoms/alertAtom";

import { palette } from "@utils/palette";
import { ResPlace } from "@utils/types/place";

import MapFormTitle from "./MapFormTitle";
import MapFormView from "./MapFormView";
import MapNameInput from "./MapNameInput";
import MapSelect from "./MapSelect";
import { RegisterButton, ResetButton } from "./button";

interface Props {
  refetch: () => void;
  selectPlace: (place?: ResPlace) => void;
  children: ReactNode;
}

const MapForm = ({ refetch, selectPlace, children }: Props) => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { mutate } = useRegisterPlace();

    console.log(e);
    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement | HTMLSelectElement;
    const name = target(2).value;
    const selected = { lat: Number(target(0).value), lng: Number(target(1).value) };

    if (!selected) return setAlert({ isOpened: true, type: "warning", children: "위치가 선택되지 않았습니다." });
    if (!name) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });

    mutate({ place: { name, marker: "A", ...selected } });
    refetch();
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    selectPlace({ id: "", marker: "", name: "", lat: 0, lng: 0 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      css={{
        zIndex: "1000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        minWidth: "280px",
        maxWidth: "320px",
        width: "100%",

        backgroundColor: palette.white,
        gap: "8px",
        userSelect: "none",

        overflow: "auto",
      }}
    >
      {children}
    </form>
  );
};

MapForm.Title = MapFormTitle;
MapForm.View = MapFormView;
MapForm.Name = MapNameInput;
MapForm.Select = MapSelect;
MapForm.Register = RegisterButton;
MapForm.Reset = ResetButton;

export default MapForm;
