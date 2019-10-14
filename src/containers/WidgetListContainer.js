import WidgetList from "../components/WidgetList";
import {connect} from 'react-redux'

const stateToPropMapper = state => ({
    widgets: state.widgets
})

const propsToDispatcher = dispatch => ({
    updateWidget: widget => {
        dispatch({type: 'UPDATE_WIDGET', widget: widget})
    },
    deleteWidget: (wid) => {dispatch({type: 'DELETE_WIDGET', widgetId: wid})},
    createWidget: () => {
        dispatch({
            type: 'CREATE_WIDGET'
        })
    }
})

const WidgetListContainer = connect(
    stateToPropMapper, propsToDispatcher
)
(WidgetList)

export default WidgetListContainer