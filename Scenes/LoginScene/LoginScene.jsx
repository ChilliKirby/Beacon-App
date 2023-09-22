import { View, Button } from 'react-native';
import { useState, useEffect } from 'react';

import styles from "../../Styles";

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useRef } from 'react/cjs/react.production.min';

const LoginScene = () => {

    const [user, setUser] = useState(null);

    //Attempt to sign in with Google
    const signInGoogle = async () => {
        console.log("in sign in google");
        try {
            await GoogleSignin.hasPlayServices();
            
            const userInfo = await GoogleSignin.signIn();
            //const userInfo = await getCurrentUser();
            
            console.log("after userinfo");
            console.log(userInfo);
            setUser( userInfo );
           
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

    //Get user details for Beacon and then navigate to home page
    const getUser = async () => {
        console.log("in get user");
         console.log(user.idToken);
         console.log(user.user.email);
        try {
            const response = await fetch("http://192.168.86.123:3001/auth/login", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${user.idToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nickName: user.user.name,
                    email: user.user.email,
                })
            })

            const loggedIn = await response.json();
            console.log("befer nick name");
            console.log(loggedIn);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
      
        if (user != null) {
            console.log("mmmmm");
       console.log(user.user.name);
       console.log(user.user.email);
            getUser(user);
        }
    }, [user]);



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