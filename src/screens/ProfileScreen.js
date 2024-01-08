import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Logout from '../components/Logout'
import ProfileInfo from '../components/ProfileInfo'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MyColors } from '../../assets/MyColors';
import { profiledata } from '../../assets/data/profile'
import { supportdata } from '../../assets/data/support';
import { lotterydata } from '../../assets/data/lottery';
import { gamedata } from '../../assets/data/game';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation()

  const handleNavigate = ({ item }) => {
    switch (item) {
      case 'Member Registration':
        navigation.navigate("MembersRegistration")
        break
      case 'Sponsor Members':
        navigation.navigate("SponserMembers")
        break
      case 'Level Member List':
        navigation.navigate("LevelMemberList")
        break
      case 'Pending Members':
        navigation.navigate("PendingMembers")
        break
      case 'Active Members':
        navigation.navigate("ActiveMembers")
        break
      case 'Blocked Members':
        navigation.navigate("BlockedMembers")
        break
      case 'My Trading Packages':
        navigation.navigate("MyTradingPackages")
        break
      case 'Genealogy Report':
        navigation.navigate("GenealogyReport")
        break
      case 'Genealogy Tree':
        navigation.navigate("GenealogyTree")
        break
      case 'Investment/Deposit':
        navigation.navigate("InvestmentDeposit")
        break
      case 'Deposit Statements':
        navigation.navigate("DepositStatements")
        break
      case 'Wallet Transfer Report':
        navigation.navigate("WalletTransferReport")
        break
      default:
        console.warn('Coming soon...')
    }
  }

  const renderList = (list) => {
    return (
      <Collapse key={list.title}>
        <CollapseHeader style={styles.collapseHeader}>
          <Text style={styles.headerText}>{list.title}</Text>
          <Entypo name="chevron-small-down" size={20} color={MyColors.lightGray} style={{ marginLeft: 'auto' }} />
        </CollapseHeader>
        <CollapseBody style={styles.collapseBody}>
          {list.items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.collapseTextContainer} onPress={() => handleNavigate({ item })}>
              <Text style={styles.bodyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </CollapseBody>
      </Collapse>
    );
  };

  const renderSupportList = (list) => {
    return (
      <Collapse key={list.title}>
        <CollapseHeader style={styles.collapseHeader}>
          <Text style={styles.headerText}>{list.title}</Text>
          <Entypo name="chevron-small-right" size={20} color={MyColors.lightGray} style={{ marginLeft: 'auto' }} />
        </CollapseHeader>
      </Collapse>
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ProfileInfo uname="Trader" uid=" 666" />
      <View style={styles.listContainer}>
        <Text style={styles.labelText}>PAGES</Text>
        {profiledata.map((list) => renderList(list))}
        <Text style={styles.labelText}>SUPPORT</Text>
        {supportdata.map((list) => renderSupportList(list))}
        <Text style={styles.labelText}>LOTTERY</Text>
        {lotterydata.map((list) => renderSupportList(list))}
        <Text style={styles.labelText}>GAME</Text>
        {gamedata.map((list) => renderSupportList(list))}
      </View>
      <View style={styles.logoutContainer}>
        <Logout icon={<AntDesign name="profile" size={24} color={MyColors.textSecondary} />} title="Profile" theme={MyColors.textSecondary}/>
        <Logout icon={<MaterialIcons name="password" size={24} color={MyColors.textSecondary} />} title="Change Password" theme={MyColors.textSecondary} nav="ChnagePassword"/>
        <Logout icon={<MaterialIcons name="currency-exchange" size={24} color={MyColors.textSecondary} />} title="Transaction Password" theme={MyColors.textSecondary} nav="TransactionPassword"/>
        <Logout icon={<MaterialIcons name="logout" size={30} color="#900" />} title="Log out" theme={MyColors.red} nav="Root" confirmation={true}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 45,
  },
  logoutContainer: {
    marginTop: '10%'
  },
  listContainer: {
    marginTop: 15,
  },
  collapseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: MyColors.cardBackground,
    borderRadius: 10,
    marginTop: 15,
  },
  collapseBody: {
    paddingLeft: 15,
    backgroundColor: MyColors.background,
  },
  collapseTextContainer: {
    padding: 20,
  },
  headerText: {
    color: MyColors.lightGray2,
    fontWeight: '500',
    fontSize: 18,
    marginStart: 10,
    letterSpacing: .5,
  },
  bodyText: {
    color: MyColors.textSecondary,
    fontSize: 16,
  },
  labelText: {
    fontSize: 14,
    color: MyColors.darkGray,
    marginTop: 10,
    borderBottomWidth: 0.65,
    borderBottomColor: MyColors.darkGray,
    alignSelf: 'flex-start',
    paddingRight: Dimensions.get('screen').width * .08,
    marginLeft: 7,
  },
})

export default ProfileScreen
