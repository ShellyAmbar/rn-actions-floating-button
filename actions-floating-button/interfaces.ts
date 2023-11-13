import {ViewStyle} from "react-native";

type ActionButton = {
  id: number;
  icon: () => JSX.Element;
  style?: ViewStyle;
  onClick?: () => void;
};
type ActionsFloatingButtonProps = {
  actionButtons: ActionButton[];
  closeButton?: ActionButton;
};
export default ActionsFloatingButtonProps;
