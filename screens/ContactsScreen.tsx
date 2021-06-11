import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listUsers } from './../src/graphql/queries';

import ContactListItem from '../components/ContactListItem';
import ContactDefaultItem from '../components/ContactDefaultItem';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { User } from '../types';
import Loader from '../components/Loader';

export default function ContactsScreen() {

  const [users, setUsers] = useState<User[]>([]);
  const [isViewLoading, setIsViewLoading] = useState<boolean>(true);
  const [myId, setMyId] = useState<any>(null);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData: any = await API.graphql(graphqlOperation(listUsers));
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyId(userInfo.attributes.sub);
        const allUsers = userData.data.listUsers.items;
        const filterCurrentAuthUser = allUsers.filter((item: any) => item.id !== userInfo.attributes.sub);
        setUsers(filterCurrentAuthUser);
        setIsViewLoading(false);
      }
      catch (e) {
        console.log(e)
        setIsViewLoading(false);
      }
    }

    fetchUser();
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: Colors[colorScheme].AppBackground }}>
      {!isViewLoading ? (<ScrollView contentContainerStyle={styles.container}>
        <ContactDefaultItem filterProp="group" iconName="people" text="New group" background />
        <ContactDefaultItem filterProp="newContact" iconName="person-add" text="New contact" background rightIcon />
        {users.map((item, idx) => (
          <ContactListItem key={idx} user={item} />
        ))}
        <ContactDefaultItem filterProp="share" iconName="share-social" text="Invite friends" />
        <ContactDefaultItem filterProp="help" iconName="help-circle" text="Contacts help" />
      </ScrollView>) : (<Loader />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
  }
});

