import {View, TouchableOpacity, Animated, Image} from "react-native";
import React, {useRef} from "react";
import createStyles from "./actions-floating-button.styles";
import Close from "@equalbill/assets/images/closeIconWhite.svg";
import ActionsFloatingButtonProps from "./interfaces";
const ActionsFloatingButton = ({
  actionButtons,
  closeButton,
  style,
}: ActionsFloatingButtonProps) => {
  const styles = createStyles({size: 60});
  const animation = new Animated.Value(0);
  const open = useRef(false);
  const toggleMenu = () => {
    const toValue = open.current ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
    }).start();
    open.current = !open.current;
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const animatedStyle = (index: number) => {
    return {
      transform: [
        {scale: animation},
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60 * index],
          }),
        },
      ],
    };
  };

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  return (
    <View style={{...styles.container, ...style}}>
      {actionButtons?.map((button, index) => (
        <TouchableOpacity
          onPress={() => {
            button.onClick && button.onClick();
          }}
          key={button.id}
        >
          <Animated.View
            style={[
              styles.button,
              styles.secondary,
              animatedStyle(index + 1),
              opacity,
              button.style,
            ]}
          >
            {button.icon()}
          </Animated.View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={() => {
          toggleMenu();
          closeButton?.onClick && closeButton.onClick();
        }}
      >
        <Animated.View style={[styles.button, rotation]}>
          {closeButton && closeButton?.icon() ? (
            closeButton.icon()
          ) : (
            <Close fill="#FFFF" width={24} height={24} />
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ActionsFloatingButton;
