import { View, Text, Pressable } from 'react-native';
import styles from '../../Styles';

// import ProfileScene from './ProfileScene';



const SettingsScene = ({ navigation }) => {

    return (
        <View style={styles.settingsContainer}>
            <View style={styles.settingsCircleContainer}>
                {/* <View style={styles.settingsCircle}><Text style={styles.circleText}>Profile</Text></View> */}
                <Pressable
                    onPress={navigation.navigate({ProfileScene})}
                    style={styles.settingsCircle}
                >
                    <Text>Profile</Text>
                </Pressable>
                <View style={styles.settingsCircle}><Text style={styles.circleText}>Display</Text></View>
            </View>
            <View style={styles.settingsCircleContainer}>
                {/* <View style={styles.settingsCircle}></View>
                <View style={styles.settingsCircle}></View> */}
            </View>
            <View style={styles.settingsCircleContainer}>
                {/* <View style={styles.settingsCircle}></View>
                <View style={styles.settingsCircle}></View> */}
            </View>
        </View>
    )
};

export default SettingsScene;