import {ViewStyle} from "react-native";

type ActionButton = {
  id: number;
  icon: () => JSX.Element;
  style?: ViewStyle;
  onClick?: () => void;
};
type ActionsFloatingButtonProps = {
  actionButtons?: ActionButton[];
  mainButton: ActionButton;
  animateMainButton?: boolean;
  style?: ViewStyle;
};
export default ActionsFloatingButtonProps;
