import React from 'react';
import {Button, Text, TextInput, View } from 'react-native';
//import {RectButton} from 'react-native-gesture-handler'
import Input from '../../components/input';
import styles from './styles';

export default function App() {

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    function onChange(text: string) {
        console.log(text);
    }

    function singIn() {
        const user = { email, password };
        alert(JSON.stringify(user));
    }

    return (
        <View style={styles.container}>

            <Input
                label={'E-mail'}
                onChange={setEmail}
                inputProps={{keyboardType: 'email-address'}}
            />

            <Input
                label={'Password'}
                onChange={setPassword}
                inputProps={{secureTextEntry: true} }
            />

            <Button title='Login' onPress={(singIn)} />
        </View>
    );
}


