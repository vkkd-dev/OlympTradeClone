import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
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

        const backgroundColor = isFocused ? '#2196F3' : 'black';
        const borderColor = isFocused ? '#2196F3' : 'transparent';

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, { backgroundColor, borderColor }]}
          >
            <Text style={[styles.tabText, { color: 'white' }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2196F3',
    marginHorizontal: 75,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomTabBar;
