import React,{useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity , Button } from 'react-native'

const Login = ({navigation}) => {
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    // const showRegister=()=>{
    //     navigation.push("Register");
    // }

    const handleLogin =()=>{
            navigation.replace("Tab");
    }
    return (
        <View style={styles.main}>
            <View style={styles.containerForm}>
                <Text style={styles.headForm}> Login</Text>
                <View style={styles.form}>
                    <TextInput 
                    style={styles.formField}
                        value={email}
                        onChangeText={(text)=>setemail(text)}
                        placeholder="username"
                        keyboardType="email-address"
                    />

                    <TextInput 
                    style={styles.formField}
                        value={password}
                       placeholder="password" 
                       
                       onChangeText={(text)=>setpassword(text)}
                       secureTextEntry={true}    // type=password
                    />
                    <TouchableOpacity style={styles.submitBtn} 
                       onPress={()=>handleLogin()}
                    >
                        <Text style={{fontSize:24}}> Login </Text>
                    </TouchableOpacity>
                     

                    <Text style={styles.registerLink} 
                  onPress={()=>{
                      navigation.navigate("Register");
                  }}
                >
                     Create an Account
                </Text> 
                    
                     
                </View>
                
                 

            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    headForm:{
        fontSize:30,
        marginVertical:30,
        alignSelf:"center",

    },
    
    form:{
        width:"80%",
        alignSelf:"center",
        
    },
    formField:{
        width:"100%",
        backgroundColor:"white",
        padding:12,
        borderRadius:8,
        elevation:1,
        marginBottom:18,
    },
    submitBtn:{
        backgroundColor: "#20B2AA",
        alignSelf:"center",
        marginTop:20,
        color:"white",
        padding:10,
        borderRadius:8,
        paddingHorizontal:44,
        elevation:1,

    },
    registerLink:{
        // borderBottomWidth:1,
        color:"slateblue",
        textDecorationLine:"underline",
        fontSize:20, 
        marginTop:30,
        alignSelf:"center",
        letterSpacing:1,
    }
})
