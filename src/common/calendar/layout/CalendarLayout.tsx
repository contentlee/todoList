import { palette } from "@utils/palette";
import { useEffect, useRef } from "react";

interface Props {
  toggleOpened: () => void;
  children?: React.ReactNode;
}

const CalendarLayout = ({ toggleOpened, children }: Props) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!calendarRef.current?.contains(e.target as Node)) {
        toggleOpened();
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  return (
    <div
      ref={calendarRef}
      css={{
        zIndex: "1000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        minWidth: "280px",
        maxWidth: "320px",

        border: "1px solid " + palette.gray100,
        backgroundColor: palette.white,
        gap: "20px",
        userSelect: "none",

        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default CalendarLayout;
