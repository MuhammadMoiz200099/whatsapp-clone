import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import { listUsers } from './../src/graphql/queries';
import ContactListItem from '../components/ContactListItem';
import { User } from '../types';

export default function ContactsScreen() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData: any = await API.graphql(graphqlOperation(listUsers));
        setUsers(userData.data.listUsers.items);
      }
      catch (e) {
        console.log(e)
      }
    }

    fetchUser();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
