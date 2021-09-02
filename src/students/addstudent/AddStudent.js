import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { UseAddStudent } from './UseAddStudent';


const AddStudent = ({navigation}) => {
    const [ data  , errMessage, flag, name, rollno, semes, cgpa, myClass, load, ctaLoading,setData , setName, setRollno, setSemes, setCgpa, setmyClass , ctaHandler] = UseAddStudent();
   
    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Add New Student!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user"
                    color="#555657"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            <Text>Name: {name}</Text>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Roll No</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="bookmark"
                    color="#555657"
                    size={20}
                />
                <TextInput 
                    onChangeText = {text =>setRollno(text)}
                    value={rollno}
                    placeholder="Your Roll no"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                

            </View>
            <Text>Roll No: {rollno} </Text>
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Semester</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="book"
                    color="#555657"
                    size={20}
                />
                <TextInput 
                    onChangeText= {text => setSemes(text)}
                    value={semes}
                    placeholder="Your Semester"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
              
            </View>
            <Text>Semester: {semes}</Text>
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Cgpa</Text>
            <View style={styles.action}>
                <AntDesign
                    name="table"
                    color="#555657"
                    size={20}
                />
                <TextInput 
                    onChangeText ={ text => setCgpa(text)}
                    value={cgpa}
                    placeholder="Your Cgpa"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
              
            </View>
            <Text>Cgpa: {cgpa}</Text>
            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Department</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="group"
                    color="#555657"
                    size={20}
                />
                <TextInput 
                    onChangeText={text => setmyClass(text)}
                    value={myClass}
                    placeholder="Your Semester"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
              
            </View>
            <Text>Department: {myClass}</Text>
            <Text>{errMessage}</Text>
            {/* <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View> */}
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={ctaHandler}
                    style={styles.signIn}


                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>
                        {/* Submit */}
                     {ctaLoading ? <ActivityIndicator size='large' /> : "Submit"}
                     </Text>
                </LinearGradient>
                </TouchableOpacity>

                
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default AddStudent;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 40,

    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
