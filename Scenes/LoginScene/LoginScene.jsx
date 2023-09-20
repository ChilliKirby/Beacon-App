import { View, Button } from 'react-native';

import styles from "../../Styles";

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';


//Attempt to sign in with Google
const signInGoogle = async () => {
    console.log("in sign in google");
    try {
        await GoogleSignin.hasPlayServices();
        console.log("after play serveicees");
        const userInfo = await GoogleSignin.signIn();
        console.log("ass");
        //setState({ userInfo });
        console.log(userInfo);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
          console.log();
        }
      }    
}

const signOut = async () => {
    try {
        await GoogleSignin.signOut();
        console.log("signed out");

        //setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
        console.error(error);
    }
};

const LoginScene = () => {
    
    GoogleSignin.configure({
        webClientId: "816978156146-1otrk1lmr0fhmp7de1oevblo6hinrhdr.apps.googleusercontent.com",
        offlineAccess: true,
    });

    return (
        <View styles={styles.mainContainer}>
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
               onPress={signInGoogle}

            />

<Button title={"out"} onPress={signOut} >out</Button>
        </View>
    )
};

export default LoginScene;