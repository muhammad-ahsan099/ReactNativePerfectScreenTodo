
import  React , {useEffect} from 'react';
import { ScrollView, Button, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { UseFetchStudents } from './UseFetchStudents';

const FetchStudents = ({ navigation }) => {


    const [students, page, numberOfItemsPerPage, load, items, numberOfItemsPerPageList , setPage, onItemsPerPageChange, setLoading] = UseFetchStudents()

    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

    useEffect(() => {
        setPage(0);
    }, [numberOfItemsPerPage]);


    return (
        <ScrollView>
            <ScrollView horizontal={true}>
                <DataTable>
                    <DataTable.Header style={{backgroundColor: '#C0C0C0'}} >

                        <DataTable.Title
                        style={{width: 50}}
                            sortDirection='descending'
                        >
                            Name
                        </DataTable.Title>
                        <DataTable.Title style={{width: 25}}  >Roll No</DataTable.Title>
                        <DataTable.Title style={{width: 25}}  >Semester</DataTable.Title>
                        <DataTable.Title style={{width: 25}}  >Cgpa</DataTable.Title>
                        <DataTable.Title style={{width: 30}}  >Dept</DataTable.Title>

                    </DataTable.Header>


                    {
                        students.map((item, index) => {
                            console.log("All Fetch Students in Map: " , item)
                            return(
                            <DataTable.Row style={{ borderBottomWidth: 0 }} >
                                <DataTable.Cell style={{width: 50}}   >{item.name}</DataTable.Cell>
                                <DataTable.Cell style={{width: 25}}   >{item.rollno}</DataTable.Cell>
                                <DataTable.Cell style={{width: 25}}   >{item.semes}</DataTable.Cell>
                                <DataTable.Cell style={{width: 25}}   > {item.cgpa}  </DataTable.Cell>
                                <DataTable.Cell style={{width: 30}}   >  {item.myClass} </DataTable.Cell>

                            </DataTable.Row>
                            )
                            })

                    }
                
                     { load && <Text>Loading...</Text>}


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
                </DataTable>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('Details')}
                    />
                </View>


            </ScrollView>
        </ScrollView>

    )
};

export default FetchStudents;



