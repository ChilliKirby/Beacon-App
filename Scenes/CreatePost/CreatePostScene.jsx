import { View, Text, TextInput, ScrollView } from 'react-native';
import { string, date, object } from 'yup';
import { Formik, Form, Field } from 'formik';

import styles from '../../Styles.js';



const CreatePost = () => {

    const taskSchema = object().shape({
        tUserId: string().required(),
        tUserNickName: string().min(2, 'Too Short!').required(),
        tUserPictureFile: string().required(),
        //tLocation: string().required(),
        tStreetAddress: string().required(),
        tCity: string().required(),
        tState: string().required(),
        tZip: string().required(),
        tTitle: string().required(),
        tDetails: string().required(),
        tTime: date().required(),
        tTaskPictureFile: string(),

    });



    return (
        <View style={styles.mainContainer}>
            <Formik
                initialValues={{
                    tUserId: '',
                    tUserNickName: '',
                    tUserPictureFile: '',
                    tStreetAddress: '',
                    tCity: '',
                    tState: '',
                    tZip: '',
                    tTitle: '',
                    tDescription: '',
                    tTaskTime: '',
                    tTaskPictureFile: '',
                }}
                validationSchema={taskSchema}
            // onSubmit={values => {
            //     () => { }
            // }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.mainContainer}>
                        <ScrollView style={{ flex: 1}}>
                       
                            {/* Email input field */}
                            <Text style={styles.mainText}>Task Title</Text>
                            <View style={styles.editTextContainer}>
                                
                                <TextInput
                                    onChangeText={handleChange('tTitle')}
                                    onBlur={handleBlur('tTitle')}
                                    value={values.tTitle}
                                   
                                />
                           </View>

                           <Text style={styles.mainText}>Address</Text>
                           <View style={styles.editTextContainer}>
                                <TextInput
                                    onChangeText={handleChange('tStreetAddress')}
                                    onBlur={handleBlur('tStreetAddress')}
                                    value={values.tStreetAddress}
                                    
                                />
                          </View>

                          <Text style={styles.mainText}>City</Text>
                          <View style={styles.editTextContainer}>
                                <TextInput
                                    onChangeText={handleChange('tCity')}
                                    onBlur={handleBlur('tCity')}
                                    value={values.tCity}
                                    
                                />
                            </View>

                            <Text style={styles.mainText}>State</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    onChangeText={handleChange('tState')}
                                    onBlur={handleBlur('tState')}
                                    value={values.tState}
                                    
                                />
                            </View>

                            <Text style={styles.mainText}>Zip</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    onChangeText={handleChange('tZip')}
                                    onBlur={handleBlur('tZip')}
                                    value={values.tZip}
                                    
                                />
                            </View>

                            <Text style={styles.mainText}>Task Details</Text>
                          <View style={styles.editTextContainer}>
                                <TextInput
                                    onChangeText={handleChange('tDetails')}
                                    onBlur={handleBlur('tDetails')}
                                    value={values.tDetails}
                                    
                                />
                            </View>

                            <Text style={styles.mainText}>Task Time</Text>
                          <View style={styles.editTextContainer}>
                                <TextInput
                                    onChangeText={handleChange('tTime')}
                                    onBlur={handleBlur('tTime')}
                                    value={values.tTime}
                                    
                                />
                            </View>

                            
                            {/* Display validation error if present */}
                           
                            <Text>{errors.tUserNickName}</Text>

                            {/* Add more TextInput components for other fields */}

                            {/* Submit button */}
                            {/* <Button title="Submit" onPress={handleSubmit} /> */}
                        
                        </ScrollView>
                    </View>
                )}
            </Formik>

        </View>
    )
}

export default CreatePost;