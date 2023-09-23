import { View, Text } from 'react-native';
import styles from '../../Styles';


const SettingsScene = () => {

    return (
        <View style={styles.settingsContainer}>
            <View style={styles.settingsCircleContainer}>
                <View style={styles.settingsCircle}><Text style={styles.circleText}>Profile</Text></View>
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