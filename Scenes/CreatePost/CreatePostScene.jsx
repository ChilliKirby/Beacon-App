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

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)

    //const {user} = useContext(UserContext);
    const nickName = useSelector((state) => state.user.nickName);
    const id = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.user.token);
    const pictureFile = useSelector((state) => state.user.pictureFile);

    const taskSchema = object().shape({
        tUserId: string().required(),
        tUserNickName: string().required(),
        tUserPictureFile: string().required(),
        tLocation: string().required(),
        tStreetAddress: string().required(),
        tCity: string().required(),
        tState: string().required(),
        tZip: string().required(),
        tTitle: string().required(),
        tDetails: string().required(),
        // tTime: date().required(),
        tDate: string().required(),
        // tTaskPictureFile: string(),

    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const postTask = async (values, onSubmitProps) => {

        values.tUserNickName = nickName;
        values.tUserPictureFile = pictureFile;
        values.tUserId = id;
        console.log(values);

        // try{
        //     taskSchema.validateSync(values, { abortEarly: false })
        //     console.log("yes");
        // } catch(error){
        //     console.log(error);
        //     return;
        // }

        // const response = await fetch(`http://192.168.86.123:3001`,
        // {
        //     method: 'POST',
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "application/json"
        //     },

        // });


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
                    tTaskTime: '',
                    tTaskDate: '',
                    //tTaskPictureFile: '',
                }}
                validationSchema={taskSchema}
                onSubmit={postTask}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.mainContainer}>
                        <ScrollView style={{ flex: 1 }}>

                            {/* Email input field */}
                            <Text style={styles.mainText}>Task Title</Text>
                            <View style={styles.editTextContainer}>

                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tTitle')}
                                    onBlur={handleBlur('tTitle')}
                                    value={values.tTitle}

                                />
                            </View>

                            <Text style={styles.mainText}>Task Details</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tDetails')}
                                    onBlur={handleBlur('tDetails')}
                                    value={values.tDetails}

                                />
                            </View>

                            <Text style={styles.mainText}>Address</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tStreetAddress')}
                                    onBlur={handleBlur('tStreetAddress')}
                                    value={values.tStreetAddress}

                                />
                            </View>

                            <Text style={styles.mainText}>City</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tCity')}
                                    onBlur={handleBlur('tCity')}
                                    value={values.tCity}

                                />
                            </View>

                            <Text style={styles.mainText}>State</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tState')}
                                    onBlur={handleBlur('tState')}
                                    value={values.tState}

                                />
                            </View>

                            <Text style={styles.mainText}>Zip</Text>
                            <View style={styles.editTextContainer}>
                                <TextInput
                                    style={styles.editTextInput}
                                    onChangeText={handleChange('tZip')}
                                    onBlur={handleBlur('tZip')}
                                    value={values.tZip}

                                />
                            </View>

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
                                        { date.toLocaleDateString() }
                                    </Text>
                                </Pressable>
                                {/* /> */}
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={onChange}
                                />
                            )}

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
                                        { date.toLocaleTimeString() }
                                    </Text>
                                </Pressable>
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={onChange}
                                />
                            )}
                           
                            {/* Display validation error if present */}

                            <Pressable
                                onPress={() => postTask(values)
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
            <Button title="Open" onPress={() => setOpen(true)} />
        </View>
    )
}

export default CreatePost;