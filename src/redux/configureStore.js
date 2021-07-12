import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms, modelReducer, formReducer } from 'react-redux-form';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'


import { authenticationReducer } from './reducers/AuthenticationReducer';
import { persistedLocalizationReducer, localizationReducer } from './reducers/LocalizationReducer';
import { headerSearchbar } from './forms/HeaderSearchBar';
import { searchReducer } from './reducers/SearchReducer';
import { headerStateReducer } from './reducers/HeaderStateReducer';

// TODO: Add states to the store when needed
export const store = createStore(
    combineReducers({
        authentication: authenticationReducer,
        localization: persistedLocalizationReducer,
        search: searchReducer,
        headerState: headerStateReducer,
        ...createForms({
            headerSearchBar: headerSearchbar
        })
    }),
    applyMiddleware(thunk, logger)
);

export const persistor = persistStore(store)
