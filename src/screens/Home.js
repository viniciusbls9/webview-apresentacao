import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, Button, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default () => {


  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Button
        title="Apresentação"
      />
    </SafeAreaView>
  );
}