import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from './../src/graphql/queries';

import ContactListItem from '../components/ContactListItem';
import ContactDefaultItem from '../components/ContactDefaultItem';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { User } from '../types';

export default function ContactsScreen() {

  const [users, setUsers] = useState<User[]>([]);
  const colorScheme = useColorScheme();

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
    <View style={{ backgroundColor: Colors[colorScheme].AppBackground }}>
      <ScrollView contentContainerStyle={styles.container}>
        <ContactDefaultItem filterProp="group" iconName="people" text="New group" background />
        <ContactDefaultItem filterProp="newContact" iconName="person-add" text="New contact" background rightIcon />
        {users.map((item, idx) => (
          <ContactListItem key={idx} user={item} />
        ))}
        <ContactDefaultItem filterProp="share" iconName="share-social" text="Invite friends" />
        <ContactDefaultItem filterProp="help" iconName="help-circle" text="Contacts help" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
  }
});

