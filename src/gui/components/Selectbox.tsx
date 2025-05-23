import { ShopsDetailsModel } from '@/src/business/interfaces/common.interface';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = { 
    options: ShopsDetailsModel[],
    selectedOption: ShopsDetailsModel;
    onChange: (value: ShopsDetailsModel) => void;
}

export default function SelectBox({options, selectedOption, onChange}: Props) {
  const [selected, setSelected] = useState(selectedOption);
  const [visible, setVisible] = useState(false);



  const handleSelect = (option: ShopsDetailsModel) => {
    setSelected(option);
    setVisible(false);
    onChange(option)
  };
  
  
  return (
    <View style={styles.root}>
      {visible && (
        <Pressable style={styles.fullScreenOverlay} onPress={() => setVisible(false)} />
      )}

      <View style={styles.container}>
         {/* Select Box - On Top */}
         <TouchableOpacity activeOpacity={1} style={styles.selectBoxContainer} onPress={() => setVisible(!visible)}>
          <View style={styles.selectBox}>
            
            <MaterialIcons name={selected.icon} size={20} />
            <Text style={styles.selectedText}>{selected.label}</Text>
          </View>
            <Ionicons name={visible ? "chevron-up" : "chevron-down"} size={20} />
        </TouchableOpacity>
        {/* Dropdown - Behind */}
        {visible && (
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                  {item.icon && <MaterialIcons name={item.icon} size={20} />}
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

       
      </View>
    </View>
  );
}

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screen.width,
    height: screen.height,
    backgroundColor: 'transparent',
    zIndex: 0,
  },
  container: {
    position: 'relative',
    width: '100%',
    height:50,
    justifyContent: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    paddingTop: 40,
    elevation: 2,
    zIndex: 1,
  },
  selectBoxContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFF',
    zIndex: 2,
    elevation: 4,
  },
  selectBox:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    marginLeft: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    marginLeft: 10,
  },
});
