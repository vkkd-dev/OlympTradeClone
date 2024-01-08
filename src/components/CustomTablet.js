import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const CustomTablet = ({ data, width, height }) => {
  return (
    <View style={styles.tableContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          {/* Header Row */}
          <View style={styles.row}>
            {data && data.length > 0 && data[0].map((fieldName, index) => (
              <View key={index} style={index === 0 && { backgroundColor: MyColors.cardBackground }}>
                <Text key={index} style={[styles.headerCell, index === 0 ? { width: 50, height: height } : { width: width, height: height }]}>{fieldName}</Text>
              </View>
            ))}
          </View>
          {/* Data Rows */}
          {data && data.length > 1 && data.slice(1).map((rowData, index) => (
            <View key={index} style={styles.row}>
              {rowData.map((cellData, index) => (
                <View key={index} style={index === 0 ? { width: 50, backgroundColor: MyColors.cardBackground } : { width: width }}>
                  <View style={cellData === "Active" ? styles.status : cellData === "Pending" ? styles.pending : cellData === "Blocked" ? styles.blokced : null}>
                    <Text key={index} style={cellData === "Active" ? styles.statusText : cellData === "Pending" ? styles.statusText : cellData === "Blocked" ? styles.statusText : styles.cellText}>{cellData}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: MyColors.gray,
    borderRadius: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallHeaderCell: {
    width: 50,
    color: MyColors.textSecondary,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.gray,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  headerCell: {
    color: MyColors.textSecondary,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.gray,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  smallcellText: {
    width: 50,
    textAlign: 'center',
    color: MyColors.white,
    padding: 10,
    fontSize: 15,
  },
  cellText: {
    textAlign: 'center',
    color: MyColors.white,
    padding: 10,
    fontSize: 15,
  },
  status: {
    backgroundColor: MyColors.green,
    alignSelf: 'center',
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  pending: {
    backgroundColor: MyColors.yellow,
    alignSelf: 'center',
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  blokced: {
    backgroundColor: MyColors.red,
    alignSelf: 'center',
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  statusText: {
    textAlign: 'center',
    color: MyColors.white,
    fontSize: 15,
  }
})

export default CustomTablet
