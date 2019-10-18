import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    topicId: state.topicId,
    Previewed: state.Previewed
})

const propertyToDispatchMapper = dispatch => ({

    updateWidget: newWidget =>
        widgetService
            .updateWidget(newWidget)
            .then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgets: widgets
                })),
    deleteWidget: widgetId =>
        dispatch({
            type: 'DELETE_WIDGET',
            widgets: widgetService.deleteWidget(widgetId)
        }),

    findWidgets: topicId =>
        widgetService
            .findWidgets({topicId})
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

    createWidget: () => dispatch({
        type: 'CREATE_WIDGET'
    }),


    moveWidgetUp: (widgetId) => {
        dispatch({type: 'MOVE_WIDGET_UP', widgetId: widgetId})
    },

    moveWidgetDown: (widgetId) => {
        dispatch({type: 'MOVE_WIDGET_DOWN', widgetId: widgetId})
    },

    changeWidgetType: (widget, type) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        widgetType: type
    }),
    changeWidgetText: (widget, text) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        text: text
    }),
    changeWidgetName: (widget, name) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        name: name
    }),
    changeHeadSize: (widget, size) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        size: size
    }),
    togglePreview: () => dispatch({
        type: 'PREVIEW'
    }),
    changeListContents: (widget, items) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        items: items
    }),
    changeListType: (widget, type) => dispatch({
        widget: widget,
        type: 'UPDATE_WIDGET',
        listType: type
    }),
    changeImageSource: (widget, src) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        src: src
    }),
    changeWidgetLink: (widget, href) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        href: href
    }),
    changeWidgetTitle:
        (widget, title) => dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            title: title
        }),
})


const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper,
)(WidgetListComponent)

export default WidgetListContainer