import React from 'react';
import { StackNavigator } from 'react-navigation';

import SignupForm from '../component/SignupForm';

export const navigator = StackNavigator({
    SignUp:{
        screen:SignupForm
    }
});