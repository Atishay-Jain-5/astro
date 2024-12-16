import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatBubble = ({text}) => {
  // const actualDate= new Date(date)
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      {/* <Text>{actualDate}</Text> */}
    </View>
  )
}

export default ChatBubble

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#feeaca',
        maxWidth:'30%',
        borderRadius:10,
        marginVertical:10
    }
})