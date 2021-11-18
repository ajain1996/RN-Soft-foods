import React, { useContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import RootNavigation from './navigation';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './redux/store';
// import {AuthContext} from './AuthProvider';

// import AuthStack from './AuthStack';
// import AppStack from './AppStack';

const store = configureStore();

const Routes = () => {
    //   const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        // setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        // {user ? <AppStack /> : <AuthStack />}
        <ReduxProvider store={store}>
            <RootNavigation />
        </ReduxProvider>
    );
};

export default Routes;