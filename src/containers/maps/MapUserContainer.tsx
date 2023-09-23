import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useMutation, useQuery } from "react-query";

import { Place, Position } from "@atoms/mapAtom";
import { alertAtom } from "@atoms/stateAtom";

import { ResPlace, useDeletePlace, useGetPlaces, useRegisterPlace } from "@api/place";

import { Button, Form, Icon, Input } from "@components/common";
import { Map } from "@components/maps";
import { ListContent, ListItem, ListLayout } from "@components/list";

import { palette } from "@utils/palette";

import DeleteIcon from "@assets/delete_icon.svg";

interface Props {
  id: string;
  value?: Place;
  handleSubmitPlace?: () => {};
}

const MapUserContainer = ({ value }: Props) => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data } = useGetPlaces();
  const { mutate: resisterMutate } = useRegisterPlace();
  const { mutate: deleteMutate } = useDeletePlace();

  const [name, setName] = useState<string>();
  const [selected, setSelected] = useState<Position>();
  const [curCenter, setCurCenter] = useState<Position>();
  const [places, setPlaces] = useState<ResPlace[]>([]);

  const handleClickPoint = (e: google.maps.MapMouseEvent) => {
    const position = e.latLng;
    if (position) {
      setSelected({ lat: position.lat(), lng: position.lng() });
    }
  };

  const handleClickMarker = (e: google.maps.MapMouseEvent) => {
    const place = e.latLng;
    if (place) {
      const value = places.find((v) => v.lat === place.lat() && v.lng === place.lng());
      setName(value!.name);
      setSelected({ lat: value!.lat, lng: value!.lng });
      setCurCenter({ lat: value!.lat, lng: value!.lng });
    }
  };

  const handleClickOption = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    const place = places.find((v) => v.name === item);

    if (place) {
      setName(item);
      setSelected({ lat: place.lat, lng: place.lng });
      setCurCenter({ lat: place.lat, lng: place.lng });
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return setAlert({ isOpened: true, type: "warning", children: "위치가 선택되지 않았습니다." });
    if (!name) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });

    if (places.findIndex((v) => v.name === name) >= 0)
      return setAlert({ isOpened: true, type: "warning", children: "중복된 이름이 존재합니다." });

    if (places.findIndex((v) => v.lat === selected.lat && v.lng === selected.lng) >= 0)
      return setAlert({ isOpened: true, type: "warning", children: "중복된 장소가 존재합니다." });

    if (selected && name) {
      resisterMutate({ place: { name, marker: "A", ...selected } });
    }
  };

  const handleClickDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    deleteMutate(id);
  };

  useEffect(() => {
    if (value && value.name !== "") {
      setCurCenter({ lat: value.lat, lng: value.lng });
      setName(value.name);
    } else {
      window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCurCenter({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      setPlaces(data.places);
    }
  }, [data]);

  return (
    <ListLayout>
      <Form
        css={{
          margin: "8px 0",
        }}
        onSubmit={handleSubmit}
      >
        <div
          css={{
            paddingLeft: "4px",

            fontSize: "12px",
            color: palette.gray200,
          }}
        >
          나의 장소 등록
        </div>
        {curCenter && (
          <div
            css={{
              width: "100%",
              height: "320px",
            }}
          >
            <Map
              places={places}
              center={curCenter}
              selected={selected && { lat: selected.lat, lng: selected.lng }}
              handleClickMap={handleClickPoint}
              handleClickMarker={handleClickMarker}
            ></Map>
          </div>
        )}
        <Input label="이름" defaultValue={name} onChange={handleChangeName}></Input>

        <Button type="submit" variant="secondary" css={{ width: "100%" }}>
          장소 등록
        </Button>
        <Button type="reset" variant="reset" css={{ width: "100%" }}>
          RESET
        </Button>
      </Form>

      <hr
        css={{
          width: "100%",
          boxSizing: "border-box",
        }}
      ></hr>

      <ListContent>
        <div
          css={{
            width: "100%",
            paddingLeft: "4px",

            fontSize: "12px",
            color: palette.gray200,
            boxSizing: "border-box",
          }}
        >
          나의 장소
        </div>

        {places.length === 0 && (
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              fontSize: "12px",
              color: palette.gray200,
            }}
          >
            등록된 장소가 존재하지 않습니다.
          </div>
        )}

        {places.map((item) => {
          return (
            <ListItem key={item.id} type={item.lat === selected?.lat && item.lng === selected.lng ? "on" : "off"}>
              <div
                css={{
                  flex: "1",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
                onClick={(e) => handleClickOption(e, item.name)}
              >
                {item.name}
              </div>
              <div css={{ display: "flex", gap: "8px" }}>
                <Icon src={DeleteIcon} alt="delete" onClick={(e) => handleClickDelete(e, item.id)}></Icon>
              </div>
            </ListItem>
          );
        })}
      </ListContent>
    </ListLayout>
  );
};

export default MapUserContainer;
