import React,{useState} from 'react'
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'

const Register = ({navigation}) => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [contact, setcontact] = useState();
    const [passowrd, setpassowrd] = useState();
    
    const [Cpassword, setCpassword] = useState();
    return (
        <View style={styles.main}>
        <View style={styles.containerForm}>
            <Text style={styles.headForm}> Register</Text>
            <View style={styles.form}>
            <TextInput 
                style={styles.formField}
                    value={name}
                    onChangeText={(text)=>setname(text)}
                    placeholder="Full Name"
                />
            <TextInput 
                style={styles.formField}
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(text)=>setemail(text)}
                    placeholder="Email Address"
                />
            <TextInput 
                style={styles.formField}
                    value={contact}
                    keyboardType="number-pad"
                    onChangeText={(text)=>setcontact(text)}
                    placeholder="contact no."
                />

                <TextInput 
                style={styles.formField}
                    value={passowrd}
                   placeholder="password" 
                    
                   secureTextEntry={true}
                   onChangeText={(text)=>setpassowrd(text)}
                />
                <TextInput 
                style={styles.formField}
                    value={Cpassword}
                   placeholder="Confirm Password" 
                    
                   secureTextEntry={true}
                   onChangeText={(text)=>setCpassword(text)}
                />
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={{fontSize:24}}> Register </Text>
                </TouchableOpacity>
                
                <Text style={styles.registerLink} 
                  onPress={()=>{
                      navigation.navigate("Login");
                  }}
                >
                    Account Already Exists ? Login
                </Text> 
            </View>

            
        {/* <Text> Login</Text> */}

        </View>
    </View>
    )
}

export default Register;

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
        elevation:10,

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

 