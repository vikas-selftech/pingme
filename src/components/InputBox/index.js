import { View, Text, StyleSheet, TextInput } from 'react-native'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
 
const InputBox = () => {
    const [newMessage, setNewMessage] = useState('ghf');

    const onSend = () => {
        console.log('Send', newMessage)

        setNewMessage('');
    }

    
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
        <AntDesign name='plus' size={20} color="royalblue" />

        <TextInput value={newMessage} onChange={setNewMessage} placeholder='type your message' style={styles.input} />

        <MaterialIcons onPress={onSend} name='send' size={16} color="white" style={styles.send} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       backgroundColor: 'whitesmoke',
       padding: 5,
       paddingHorizontal: 10,
       alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 15,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'
    }
})

export default InputBox