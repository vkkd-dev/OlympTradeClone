import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const Parent = ({ name, photo }) => (
    <View style={styles.node}>
      <Image style={styles.image} source={require('../../assets/images/user.png')} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
  
  const Child = ({ name, photo }) => (
    <View style={styles.node}>
      <Image style={styles.image} source={require('../../assets/images/user.png')} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );

const GenealogyTree = () => {

    const parent = {
        name: "John Doe",
        photo: require('../../assets/images/user.png'),
      };
    
      const child1 = {
        name: "Member 1",
        photo: require('../../assets/images/user.png'),
      };
    
      const child2 = {
        name: "Member 2",
        photo: require('../../assets/images/user.png'),
      };

    return (
        <View style={styles.container}>
            <Parent name={parent.name} photo={parent.photo} />
            <View style={styles.line} />
            <View style={styles.children}>
                <Child name={child1.name} photo={child1.photo} />
                <View style={styles.childLine} />
                <Child name={child2.name} photo={child2.photo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      node: {
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: MyColors.white,
      },
      line: {
        width: 2,
        height: 80,
        backgroundColor: MyColors.white,
      },
      children: {
        flexDirection: 'row',
      },
      childLine: {
        width: 80,
        height: 2,
        backgroundColor: MyColors.white,
      },
})

export default GenealogyTree
