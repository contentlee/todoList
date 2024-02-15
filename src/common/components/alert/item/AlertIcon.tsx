import Icon from "../../Icon";

import SucessIcon from "@assets/success_icon.svg";
import ErrorIcon from "@assets/error_icon.svg";
import WarningIcon from "@assets/warning_icon.svg";

interface Props {
  type: "success" | "error" | "warning" | "alarm";
}

const AlertIcon = ({ type }: Props) => {
  if (type !== "alarm") return <Icon src={ICON_VARIANTS[type]} alt={type} />;
};

const ICON_VARIANTS = {
  success: SucessIcon,
  error: ErrorIcon,
  warning: WarningIcon,
};

export default AlertIcon;
