import { StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import  styles  from '../../Styles.js';

const HomeScene = () => {

    return (
          <View style={styles.mainContainer}>
      <Text style={styles.mainText}>ghjhj</Text>
      <Text style={styles.mainText}>ghjhj</Text>
      <Text style={styles.mainText}>ghjhj</Text>
      <Text style={styles.mainText}>ghjg</Text>
      {/* <MapView style={styles.mapContainer} provider={PROVIDER_GOOGLE}/> */}
      <MapView
      style={ styles.mapContainer }
      provider={ PROVIDER_GOOGLE }
      ></MapView>
    </View>
    );
}

const xstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScene;