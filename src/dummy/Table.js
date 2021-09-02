import * as React from 'react';
import { ScrollView, Button, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const numberOfItemsPerPageList = [2, 3, 4];

const items = [
    {
        key: 1,
        name: 'Page 1',
    },
    {
        key: 2,
        name: 'Page 2',
    },
    {
        key: 3,
        name: 'Page 3',
    },
];

const Table = ({navigation}) => {
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [numberOfItemsPerPage]);


    return (
        <ScrollView>
        <ScrollView horizontal={true}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title
                        sortDirection='descending'
                    >
                        Name
                    </DataTable.Title>
                    <DataTable.Title numeric>Roll No</DataTable.Title>
                    <DataTable.Title numeric>Semester</DataTable.Title>
                    <DataTable.Title numeric>Cgpa</DataTable.Title>
                    <DataTable.Title numeric>Class</DataTable.Title>

                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                    <DataTable.Cell numeric>159</DataTable.Cell>
                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                    <DataTable.Cell numeric>159</DataTable.Cell>
                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>                
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>                
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>                
                <DataTable.Row>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>

                </DataTable.Row>


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

export default Table;