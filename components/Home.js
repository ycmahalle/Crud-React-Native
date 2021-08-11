import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Entypo ,MaterialIcons} from '@expo/vector-icons';
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
<Text style={{fontSize:30,alignSelf:"center"}}>
            Welcome TO HOme </Text>

            
         </View>
         
 
    )
}

export default Home

const styles = StyleSheet.create({
    menu:{
        position:"absolute",
        top:775,
        width:"100%",
        backgroundColor:"#87CEFA",
        display:"flex",
        justifyContent:"center", 
        flexDirection:"row",
    },
    container:{
        paddingHorizontal:24,
        paddingVertical:12,
        flex:1,  
        justifyContent:"center",
        elevation:1,
        // borderRadius:8,
        
    },
    navText:{
        color:"white",fontSize:22 , 
        textAlign:"center",
    },
})
