import widgets from '../services/widgets.json';

const WidgetReducer = (state = {widgets: widgets}, action) => {
    // switch (action.type) {
    //     case 'CREATE_WIDGET':
    //         return {
    //             widgets: [
    //                 ...state.widgets,
    //                 {
    //                     id: (new Date()).getTime(),
    //                     name: 'New Widget',
    //                     type: 'HEADING'
    //                 }
    //             ]
    //         }
    //     case 'DELETE_WIDGET':
    //         return {
    //             widgets: state.widgets.filter(widget => widget.id != action.widgetId)
    //         }
    //     case 'UPDATE_WIDGET':
    //         return {
    //             widgets: state.widgets.map(widget => widget.id == action.widget.id ? action.widget : widget)
    //         }
    //     case 'FIND_WIDGET':
    //         return 1;
    //     case 'FIND_ALL_WIDGETS_FOR_TOPIC':
    //         return 1;
    //     case 'FIND_ALL_WIDGETS':
    //         return 1;
    //     default:
    //         return state
    // }
    if(action.type === 'DELETE_WIDGET') {
        return {
            widgets: state.widgets.filter(widget => widget.id != action.widgetId)
        }
    } else if(action.type === 'CREATE_WIDGET') {
        return {
            widgets: [
                ...state.widgets,
                {
                    id: (new Date()).getTime(),
                    name: 'New Widget',
                    type: 'HEADING'
                }
            ]
        }
    } else if(action.type === 'UPDATE_WIDGET') {
        return {
            widgets: state.widgets.map(widget => widget.id == action.widget.id ? action.widget : widget)
        }
    }
    return state;
}

export default WidgetReducer