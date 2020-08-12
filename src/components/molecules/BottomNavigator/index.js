import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {TabItem} from '../../atoms';
import {useSelector} from 'react-redux';

const BottomNavigator = ({state, descriptors, navigation}) => {
  const isSubscribe = useSelector((state2) => state2.subscription);
  return (
    <View style={styles.container(isSubscribe)}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: (isSubscribe) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: isSubscribe ? colors.black : colors.secondary,
  }),
});
