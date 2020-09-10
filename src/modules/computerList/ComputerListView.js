import React from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import Lightbox from 'react-native-lightbox';
import SearchableDropdown from 'react-native-searchable-dropdown';

export default function ComputerListScreen (props) {
  return (
    <View>
      <SearchableDropdown
        // onItemSelect={item => {
        //   const items = this.state.selectedItems;
        //   items.push(item);
        //   this.setState({ selectedItems: items });
        // }}
        containerStyle={{ padding: 5 }}
        // onRemoveItem={(item, index) => {
        //   const items = this.state.selectedItems.filter(
        //     sitem => sitem.id !== item.id,
        //   );
        //   this.setState({ selectedItems: items });
        // }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#ddd',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{ color: '#222' }}
        itemsContainerStyle={{ maxHeight: 140 }}
        items={props.CPUList}
        defaultIndex={2}
        resetValue={false}
        textInputProps={{
          placeholder: 'placeholder',
          underlineColorAndroid: 'transparent',
          style: {
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
          },
          // onTextChange: text => alert(text),
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    </View>
  );
}
