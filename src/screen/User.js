
import React,{useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,deleteUser } from '../redux/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function User({ navigation, route }) {
    const users = useSelector(state => state.user) // this line is used for read data from store
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        // Load users from AsyncStorage when component mounts
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const storedUsers = await AsyncStorage.getItem('users');
            if (storedUsers !== null) {
                // If users are found in AsyncStorage, set them in Redux store
                dispatch(addUser(JSON.parse(storedUsers)));
            }
        } catch (error) {
            console.error('Error loading users from AsyncStorage:', error);
        }
    };
    const saveUsers = async (updatedUsers) => {
        try {
            await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
            console.log('AAAAAAAAAAA',updatedUsers);
        } catch (error) {
            console.error('Error saving users to AsyncStorage:', error);
        }
    };

    const handleDeleteUser = async (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        dispatch(deleteUser(index));
        await saveUsers(updatedUsers);
    };
    return (
        <SafeAreaView>
            <StatusBar />
            {/* <ScrollView> */}
            <View style={styles.sectionContainer}>
            <FlatList data={users.data} renderItem={({ item, index }) => {
                    return (
                        <View style={styles.card}>
                            <View>
                                <Text>{'NAME : ' + item.name}</Text>
                                <Text>{'EMAIL : ' + item.email}</Text>
                                <Text>{'PHONE : ' + item.phone}</Text>
                                <Text>{'ADDRESS : ' + item.address}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('AddUser',
                                    { type: 'edit', data: item, index: index })}>
                                    <Text style={styles.edit}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => dispatch(deleteUser(index))}>
                                    <Text style={styles.delete}>Delete</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )
                }} />
              

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddUser', {
                    type: 'add',
                    data: { name: 'John', email: 'john@example.com', phone: '1234567890', address: '123 Main St' },
                    index: 0 // Assuming you need to pass an index as well
                })}>
                    <Text style={styles.text}>ADD USER</Text>
                </TouchableOpacity>

            </View>
              {/* </ScrollView> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    // button: {
    //     width: '100%',
    //     height: 50,
    //     backgroundColor: '#D2464B',
    //      marginVertical: '100%',
    //     bottom: 0,
    //      padding: 10,
    //     position: 'absolute',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }, 
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#D2464B',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        top:'100%'
    },
    text: {
        color: 'white',
    },
    card: {
        width: '100%',
        // height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    edit: {
        borderWidth: 1,
        borderColor: 'blue',
        color: 'blue',
        borderRadius: 4,
        padding: 5,
        marginBottom: 10
    },
    delete: {
        borderWidth: 1,
        borderColor: 'green',
        color: 'green',
        borderRadius: 4,
        padding: 5
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        paddingBottom: 60
    },
});

export default User;
