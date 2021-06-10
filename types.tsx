/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  Camera: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri?: String;
  status?: String;
}

export type Status = {
  id: String;
  name: String;
  imageUri: String;
  createdAt?: String;
  description?: String;
}

export type Calls = {
  id: String;
  name: String;
  imageUri: String;
  createdAt: String;
  missed: boolean;
  incomming?: boolean;
  outgoing?: boolean;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user?: User;
}

export type ChatRoom = {
  id: String;
  users: Array<User>;
  lastMessage: Message;
}