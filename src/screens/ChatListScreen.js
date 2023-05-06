import { View, Text, FlatList } from 'react-native'
import chats from './../../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem/index'

const ChatListScreen = () => {
    return (
        <FlatList 
            data={chats}
            renderItem={({item}) => <ChatListItem chat={item} />}
        />  
    )
}

export default ChatListScreen