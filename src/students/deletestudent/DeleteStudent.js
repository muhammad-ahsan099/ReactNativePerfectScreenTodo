
import React, { useEffect } from 'react';
import { ScrollView, Button, Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { DataTable } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { UseDeleteStudent } from './UseDeleteStudent';

const DeleteStudent = ({ navigation }) => {


    const [students, page, numberOfItemsPerPage, load, items, numberOfItemsPerPageList, setPage, onItemsPerPageChange, setLoading, deleteHandler] = UseDeleteStudent()

    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

    useEffect(() => {
        setPage(0);
    }, [numberOfItemsPerPage]);


    return (
        <ScrollView style={styles.container}>

            <DataTable>
                <DataTable.Header style={{ backgroundColor: '#C0C0C0' }} >

                    <DataTable.Title
                        style={{ width: 50 }}
                        sortDirection='descending'
                    >
                        Name
                    </DataTable.Title>
                    <DataTable.Title style={{ width: 25 }}  >Roll No</DataTable.Title>
                    <DataTable.Title style={{ width: 40 }}  >Action</DataTable.Title>


                </DataTable.Header>


                {
                    students.map((item, index) => {
                        return (
                            <DataTable.Row style={{ borderBottomWidth: 0 }} >
                                <DataTable.Cell style={{ width: 50 }}   >{item.name}</DataTable.Cell>
                                <DataTable.Cell style={{ width: 25 }}   >{item.rollno}</DataTable.Cell>
                                <DataTable.Cell style={{ width: 40 }}   >

                                    <View style={styles.button}>
                                        <TouchableOpacity 
                                            onPress={deleteHandler}
                                        >
                                            <LinearGradient
                                                colors={['#08d4c4', '#01ab9d']}
                                                //    colors={['#e52d27, #b31217']}
                                                style={styles.signIn}
                                            >
                                                <Text style={styles.textSign}>Delete</Text>
                                                <MaterialIcons
                                                    name="delete"
                                                    color="#fff"
                                                    size={18}
                                                />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })

                }




                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={numberOfItemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    selectPageDropdownLabel={'Rows per page'}
                />

                {load &&

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
                }
            </DataTable>




        </ScrollView>

    )
};

export default DeleteStudent;


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});



