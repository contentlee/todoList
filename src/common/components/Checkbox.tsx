import { HTMLAttributes } from "react";
import styled from "@emotion/styled";

import CheckIcon from "@assets/check_icon.svg";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLInputElement> {
  id: string;
  type?: "primary";
  size?: "medium" | "large";
}

const CheckboxWrap = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid;
    border-radius: 0.25rem;

    cursor: pointer;
  }

  label > img {
    display: none;
  }

  input[type="checkbox"]:checked + label > img {
    display: flex;
  }
`;

const Checkbox = ({ id, type = "primary", size = "medium", ...props }: Props) => {
  return (
    <CheckboxWrap>
      <input type="checkbox" id={id} {...props} />
      <label
        htmlFor={id}
        css={{
          ...TYPE_VARIANTS[type],
          ...SIZE_VARIANTS[size],
        }}
      >
        <img src={CheckIcon} />
      </label>
    </CheckboxWrap>
  );
};

const TYPE_VARIANTS = {
  primary: {
    borderColor: palette.gray600,
  },
};

const SIZE_VARIANTS = {
  medium: {
    width: "18px",
    height: "18px",
  },
  large: {},
};

export default Checkbox;
