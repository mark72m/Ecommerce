import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = {};

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <TextInput 
    style={styles.inputField}
    {...props}/>
  );
};

export default InputField;

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: Colors.white,
        paddingVertical: 13,
        paddingHorizontal: 15,
        alignSelf: 'stretch',
        borderRadius: 13,
        fontSize: 16,
        borderWidth: 0.8,
        color: Colors.black,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5    
  }
})