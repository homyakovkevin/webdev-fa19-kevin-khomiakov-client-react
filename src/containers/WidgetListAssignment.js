import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetReducer from '../reducers/WidgetReducer'
import WidgetListContainer from "../containers/WidgetListContainer";

// reducer => state => store => provider => container => map to props => components

const store = createStore(WidgetReducer)

export default class WidgetListAssignment extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <WidgetListContainer/>
            </Provider>
        )
    }
}