import React, { useEffect } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { MyColors } from '../../assets/MyColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomErrorModal = ({ visible, setModalVisible, message, type }) => {
  //const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    //setModalVisible(visible);
    // Auto close after 2 seconds
    if (visible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
      }, 2000); // 2000 milliseconds = 2 seconds
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          { <MaterialIcons name = { type == 'error' ? "report-gmailerrorred" : "done" } size={24} color = { type == 'error' ? MyColors.red : MyColors.green } /> }
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 30,
  },
  modalContent: {
    flexDirection: 'row',
    backgroundColor: MyColors.cardBackground,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    marginStart: 10,
  },
});

export default CustomErrorModal;
