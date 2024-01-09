import { View, Text, TextInput, ScrollView, Pressable, Button } from 'react-native';
import { string, date, object } from 'yup';
import { Formik, Form, Field } from 'formik';
//import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

import styles from '../../Styles.js';
import { useSelector } from 'react-redux';
// import { UserContext } from '../../UserContext.js';
// import { useContext } from 'react';



const CreatePost = (navigation) => {

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [show, setShow] = useState(false);
    //const [open, setOpen] = useState(false)

    //const {user} = useContext(UserContext);
    const nickName = useSelector((state) => state.user.nickName);
    const id = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.user.token);
    const pictureFile = useSelector((state) => state.user.pictureFile);

    // const taskSchema = object().shape({
    //     tUserId: string().required(),
    //     tUserNickName: string().required(),
    //     tUserPictureFile: string().required(),
    //     tLocation: string().required(),
    //     tStreetAddress: string().required(),
    //     tCity: string().required(),
    //     tState: string().required(),
    //     tZip: string().required(),
    //     tTitle: string().required(),
    //     tDetails: string().required(),
    //     // tTime: date().required(),
    //     tDate: string().required(),
    //     // tTaskPictureFile: string(),

    // });

    const showDatepicker = () => {
        setShowDatePicker(true);
        setShowTimePicker(false);
    };

    const showTimepicker = () => {
        setShowTimePicker(true);
        setShowDatePicker(false);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setShowTimePicker(false);
        setDate(currentDate);
    };

    const postTask = async (values, onSubmitProps) => {

        values.tUserNickName = nickName;
        values.tUserPictureFile = pictureFile;
        values.tUserId = id;
        console.log("ass");
        console.log(values);

        // try{
        //     taskSchema.validateSync(values, { abortEarly: false })
        //     console.log("yes");
        // } catch(error){
        //     console.log(error);
        //     return;
        // }

        const response = await fetch(`http://192.168.86.123:3001/posts/postTask`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },

        });

        try{

            const formData = new FormData();
            formData.append('nickName', nickName);
            formData.append('id', id);
            formData.append('token', token);
            formData.append('pictureFile', pictureFile);
            formData.append('tStreetAddress', values.tStreetAddress);
            formData.append('tCity', values.tCity);
            formData.append('tState', values.tState);
            formData.append('tZip', values.tZip);
            formData.append('tTitle', values.tTitle);
            formData.append('tDescription', values.tDescription);
            formData.append('tTaskTime', values.tTaskTime);
            formData.append('tTaskDate', values.tTaskDate);

            // const response = await fetch(`http://192.168.86.123:3001/${tUserId}/postTask`,
            // {
            //     method: 'POST',
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //         "Content-Type": "application/json"
            //     },
            //     body: formData
            // });
        } catch(error){
            console.log(error);
        }


    }

    return (
        <View style={styles.mainContainer}>
            <Formik
                initialValues={{

                    tStreetAddress: '',
                    tCity: '',
                    tState: '',
                    tZip: '',
                    tTitle: '',
                    tDescription: '',
                    tTaskTime: date,
                    tTaskDate: '',
                    //tTaskPictureFile: '',
                }}
                //validationSchema={taskSchema}
                
                onSubmit={(values) => {
                    postTask(values);
                    
                }}

                validate={(values) => {
                    const errors = {};
                    
                    if(!values.tTitle){
                        errors.tTitle = 'Required';
                    }
                    if(!values.tDetails){
                        errors.tDetails = 'Required';
                    }
                    if(!values.tStreetAddress){
                        errors.tStreetAddress = 'Required';
                    }
                    if(!values.tCity){
                        errors.tCity = 'Required';
                    }
                    if(!values.tState){
                        errors.tState = 'Required';
                    }
                    if(!values.tZip){
                        errors.tZip = 'Required';
                    }
                    // if(!values.tTaskDate){
                    //     errors.tTaskDate = 'Required';
                    // }
                    // if(!values.tTaskTime){
                    //     errors.tTaskTime = 'Required';
                    // }
                    return errors;
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.mainContainer}>
                        <ScrollView style={{ flex: 1 }}>

                            {/* Title input field */}
                            <Text style={styles.mainText}>Task Title</Text>
                            <View style={styles.editTextContainer}>

                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tTitle')}
                                    onBlur={handleBlur('tTitle')}
                                    value={values.tTitle}

                                />
                            </View>
                            {errors.tTitle && <Text style={styles.mainText}>{errors.tTitle}</Text>}

                            <Text style={styles.mainText}>Task Details</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tDetails')}
                                    onBlur={handleBlur('tDetails')}
                                    value={values.tDetails}

                                />
                            </View>
                            {errors.tDetails && <Text style={styles.mainText}>{errors.tDetails}</Text>}

                            <Text style={styles.mainText}>Address</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tStreetAddress')}
                                    onBlur={handleBlur('tStreetAddress')}
                                    value={values.tStreetAddress}

                                />
                            </View>
                            {errors.tStreetAddress && <Text style={styles.mainText}>{errors.tStreetAddress}</Text>}

                            <Text style={styles.mainText}>City</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tCity')}
                                    onBlur={handleBlur('tCity')}
                                    value={values.tCity}

                                />
                            </View>
                            {errors.tCity && <Text style={styles.mainText}>{errors.tCity}</Text>}

                            <Text style={styles.mainText}>State</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tState')}
                                    onBlur={handleBlur('tState')}
                                    value={values.tState}

                                />
                            </View>
                            {errors.tState && <Text style={styles.mainText}>{errors.tState}</Text>}

                            <Text style={styles.mainText}>Zip</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tZip')}
                                    onBlur={handleBlur('tZip')}
                                    value={values.tZip}

                                />
                            </View>
                            {errors.tZip && <Text style={styles.mainText}>{errors.tZip}</Text>}

                            <Text style={styles.mainText}>Task Date</Text>
                            <View style={styles.editTextContainer}>
                                {/* <TextInput
                                    style={styles.editTextInput} */}
                                <Pressable
                                    onPress={showDatepicker}
                                    width='100%'
                                >
                                    <Text style={styles.editTextInput}
                                    // onChangeText={handleChange(date.toLocaleDateString())}
                                    // onBlur={handleBlur('tDate')}
                                    // value={date.toLocaleDateString()}
                                    >
                                        {date.toLocaleDateString()}
                                    </Text>
                                </Pressable>
                                {/* /> */}
                            </View>
                            {showDatePicker && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode="date"
                                    is24Hour={true}
                                    onChange={onChange}
                                    display='default'
                                />
                            )}
                            {errors.tTaskDate && <Text style={styles.mainText}>{errors.tTaskDate}</Text>}

                            <Text style={styles.mainText}>Task Time</Text>
                            <View style={styles.editTextContainer}>
                                {/* <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tTime')}
                                    onBlur={handleBlur('tTime')}
                                    value={values.tTime}

                                /> */}
                                <Pressable
                                    onPress={showTimepicker}
                                    width='100%'
                                >
                                    <Text style={styles.editTextInput}
                                    // onChangeText={handleChange(date.toLocaleDateString())}
                                    // onBlur={handleBlur('tDate')}
                                    // value={date.toLocaleDateString()}
                                    >
                                        {date.toLocaleTimeString()}
                                    </Text>
                                </Pressable>
                            </View>
                            {showTimePicker && (
                                <DateTimePicker
                                    testID="timePicker"
                                    value={date}
                                    mode="time"
                                    is24Hour={true}
                                    onChange={onChange}
                                    
                                />
                            )}
                            {errors.tTaskTime && <Text style={styles.mainText}>{errors.tTaskTime}</Text>}

                            {/* Display validation error if present */}

                            <Pressable
                                onPress={
                                    handleSubmit
                                }
                            >
                                <Text>Submit</Text>
                            </Pressable>


                            {/* Add more TextInput components for other fields */}

                            {/* Submit button */}
                            {/* <Button title="Submit" onPress={handleSubmit} /> */}


                        </ScrollView>
                    </View>
                )}
            </Formik>

            {/* <DatePicker date={date} onDateChange={setDate} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            /> */}
            
        </View>
    )
}

export default CreatePost;