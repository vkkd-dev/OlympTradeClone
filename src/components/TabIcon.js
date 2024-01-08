import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const TabIcons = ({ focused, icon, label }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {icon}
          <Text
            style={{
                color: focused ? MyColors.white : MyColors.darkGray,
                marginTop: 5,
            }}
          >
            {label}
          </Text>
        </View>
      )
}

export default TabIcons