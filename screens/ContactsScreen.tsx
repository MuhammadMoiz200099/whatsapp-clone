import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import users from '../data/Users';

import ContactListItem from '../components/ContactListItem';
import ContactDefaultItem from '../components/ContactDefaultItem';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function ContactsScreen() {

  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    main:{
      backgroundColor: Colors[colorScheme].AppBackground
    },
    container: {
      marginTop: 5,
      marginBottom: 10,
    }
  });
  

  return (
    <View style={styles.main}>
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
