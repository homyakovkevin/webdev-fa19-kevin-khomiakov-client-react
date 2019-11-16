import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const widgetService = new WidgetService();

function SwapItems(items, firstIndex, secondIndex) {
    let results = items.slice();
    let firstItem = items[firstIndex];
    results[firstIndex] = items[secondIndex];
    results[secondIndex] = firstItem;
    return results;
}


const stateToPropertyMapper = (state) => {
    console.log(state.widgets);
    return {
        widgets: state.widgets,
        topicId: state.topicId,
    }
};


const propertyToDispatchMapper = dispatch => ({

    updateWidget: (wid, newWidget) => {
        return widgetService
            .updateWidget(wid, newWidget)
            .then(response =>
                widgetService.findWidgets())
            .then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgets: widgets
                }))
    },
    deleteWidget: widgetId =>
        widgetService.deleteWidget(widgetId)
            .then(response => widgetService.findWidgets())
            .then(widgets =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgets: widgets
                })),

    findWidgets: (topicId) =>
        widgetService
            .findWidgetsForTopic(topicId)
            .then(widgets =>
                dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                })),


    findWidget: widgetId =>
        widgetService
            .findWidgets({widgetId})
            .then(widget =>
                dispatch({
                    type: 'FIND_WIDGET',
                    widget: widget
                })),

    createWidget: (topicId, widget) =>
        widgetService
            .createWidget(topicId, widget)
            .then(widgets =>
                dispatch({
                    type: 'CREATE_WIDGET',
                    widgets: widgets
                })),

    moveWidgetUp: (widgets, widgetId,topicId) => {
        let index = widgets.indexOf(widgets.find(x => x.id === widgetId));
        let new_widgets = SwapItems(widgets, index, index - 1);
        widgetService.updateOrder(new_widgets,topicId)
            .then(widgets => dispatch({type: 'MOVE_UP', widgets: widgets}))

    },

    moveWidgetDown: (widgets, widgetId,topicId) => {
        let index2 = widgets.indexOf(widgets.find(x => x.id === widgetId));
        let new_widgets = SwapItems(widgets, index2, index2 + 1);
        widgetService.updateOrder(new_widgets,topicId).then(widgets =>
            dispatch({type: 'MOVE_DOWN', widgets: widgets}))
    },

});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper,
)(WidgetListComponent);

export default WidgetListContainer