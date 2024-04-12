
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser,updateUser } from '../redux/UserSlice';
import { useRoute } from '@react-navigation/native';

function AddUser({ navigation}) {
    const route= useRoute()
    console.log('>>>>>>>', route.params);
    const [name, setName] = useState(route.params.type=='edit'? route.params.data.name : '');
    const [email, setEmail] = useState(route.params.type == 'edit' ? route.params.data.email : '');
    const [phone, setPhone] = useState(route.params.type == 'edit' ? route.params.data.phone : '');
    const [address, setAddress] = useState(route.params.type == 'edit' ? route.params.data.address : '');

    const dispatch = useDispatch()
    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.textinput}
                    placeholder='Enter Username'
                />
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textinput}
                    keyboardType='email-address'
                    placeholder='Enter Email'
                />
                <TextInput
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                    style={styles.textinput}
                    keyboardType='number-pad'
                    placeholder='Enter Phone'
                    maxLength={10}
                />
                <TextInput
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                    style={styles.textinput}
                    placeholder='Enter Address'
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => navigation.goBack()}
                onPress={() => {
                    if (route.params.type == 'edit') {
                        dispatch(
                            updateUser({ 
                                name: name, 
                                email: email, 
                                phone: phone, 
                                address: address ,
                                index: route.params.index,
                            }),
                            );
                    } else {
                        dispatch(addUser({ name, email, phone, address }))
                    }
                    navigation.goBack()
                }}>

                <Text style={styles.text}>SAVE USER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textinput: {
        marginTop: 50,
        width: '90%',
        height: 50,
        padding: 10,
        borderColor: 'black',
        borderRadius: 8,
        paddingLeft: 10,
        borderWidth: 1,
        alignSelf: 'center',
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#D2464B',
        marginVertical: '175%',
        bottom: 50,
        padding: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    text: {
        color: 'white',
    },
});

export default AddUser;
