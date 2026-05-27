import React from "react";
import { Highlight } from 'e-ui-react';

const RN_NOTIFICATION_CODE = `import React from 'react';
import { View, Button, Alert } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';

const NotificationButton = () => {
  const sendNotification = async () => {
    try {
      // Create channel (Android only)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      // Display notification
      await notifee.displayNotification({
        title: 'Hello 👋',
        body: 'This is a local push notification',
        android: {
          channelId,
          smallIcon: 'ic_launcher', // default app icon
          pressAction: {
            id: 'default',
          },
        },
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to send notification');
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Button title="Send Notification" onPress={sendNotification} />
    </View>
  );
};

export default NotificationButton;`;

const RN_APPCOMPONENT_CODE = `import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import notifee from '@notifee/react-native';
import NotificationButton from './src/components/NotificationButton';

const App = () => {
  useEffect(() => {
    notifee.requestPermission();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>React Native Notifications</Text>
      <NotificationButton />
    </SafeAreaView>
  );
};

export default App;`;

const NativeMode = () =>{
 return (<div>
    <div><h4><b>3. Create Notification Component</b></h4></div>
    <div className="mtop5p">
        <Highlight content={RN_NOTIFICATION_CODE} lang="javascript" />
    </div>
    <div className="mtop15p"><h4><b>4. Use the Component in Your App</b></h4></div>
    <div className="mtop5p">
        <Highlight content={RN_APPCOMPONENT_CODE} lang="javascript" />
    </div>
 </div>);
};

export default NativeMode;