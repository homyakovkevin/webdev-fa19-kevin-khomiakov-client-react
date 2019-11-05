import WidgetService from "../services/WidgetService";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../services/widgetsAsConst";

let widgetService = new WidgetService();

const widgetReducer = (state = {widgets: []}, action) => {
    let newState = Object.assign({}, state);


    switch (action.type) {
        case "DELETE_WIDGET":
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "UPDATE_WIDGET":
        case "FIND_WIDGET":
        case "MOVE_UP":
        case "MOVE_DOWN":
            newState.widgets = action.widgets;
            return newState;
        default:
            return state;
    }



    // function moveWidgets(ws, ii, jj) {
    //
    //     let output = ws.slice();
    //
    //     output[ii] = ws[jj];
    //     output[jj] = ws[ii];
    //
    //     return output;
    //
    // }
    //
    // switch (action.type) {
    //
    //     default:
    //         return state;
    //
    //     case "FIND_ALL_WIDGETS":
    //         return {
    //             widgets: action.widgets
    //         };
    //
    //     case "FIND_WIDGET":
    //         return {
    //             widgets: action.widgets
    //         };
    //
    //     case "DELETE_WIDGET":
    //         widgetService.deleteWidget(action.widgetId);
    //         newState.widgets = widgetService.findWidgets(state.topicId);
    //         return newState;
    //
    //     case 'PREVIEW':
    //         newState.Previewed = !newState.Previewed;
    //         return newState;
    //
    //     case "MOVE_WIDGET_UP":
    //         let index = state.widgets.indexOf(state.widgets.find(widget => widget.id === action.widgetId));
    //         newState.widgets = moveWidgets(state.widgets, index, index - 1);
    //         return newState;
    //
    //     case "MOVE_WIDGET_DOWN":
    //         let index2 = state.widgets.indexOf(state.widgets.find(widget => widget.id === action.widgetId));
    //         newState.widgets = moveWidgets(state.widgets, index2, index2 + 1)
    //         return newState;
    //
    //     case "CREATE_WIDGET":
    //         let w = {
    //             "id": Date.now(),
    //             "type": "HEADING",
    //             "size": "h1",
    //             "text": "The Document Object Model",
    //             "name": "Test"
    //         };
    //         widgetService.createWidget(state.topicId, w);
    //         newState.widgets = widgetService.findWidgets(state.topicId);
    //         return newState;
    //
    //     case "UPDATE_WIDGET":
    //         let widget = action.widget;
    //         if (action.text !== undefined) {
    //             widget.text = action.text;
    //         }
    //         if (action.name !== undefined) {
    //             widget.name = action.name;
    //         }
    //         if (action.size !== undefined) {
    //             widget.size = action.size;
    //         }
    //
    //         if (action.items !== undefined) {
    //             widget.items = action.items.split("\n").join(",");
    //         }
    //         if (action.listType !== undefined) {
    //             widget.listType = action.listType;
    //         }
    //         if (action.src !== undefined) {
    //             widget.src = action.src;
    //         }
    //         if (action.href !== undefined) {
    //             widget.href = action.href;
    //         }
    //         if (action.title !== undefined) {
    //             widget.title = action.title;
    //         }
    //         if (action.widgetType) {
    //             let newWidget = {
    //                 id: widget.id,
    //                 type: action.widgetType,
    //                 name: ""
    //             };
    //             switch (action.widgetType) {
    //                 default:
    //                     newWidget = {...newWidget, title: "", href: ""};
    //                 case HEADING:
    //                     newWidget = {...newWidget, size: "h1", text: "",};
    //                     break;
    //                 case PARAGRAPH:
    //                     newWidget = {...newWidget, text: ""};
    //                     break;
    //                 case LIST:
    //                     newWidget = {...newWidget, items: "", listType: "unordered"};
    //                     break;
    //                 case IMAGE:
    //                     newWidget = {...newWidget, src: ""};
    //                     break;
    //             }
    //             widget = newWidget;
    //         }
    //         widgetService.updateWidget(widget.id, widget);
    //         newState.widgets = widgetService.findWidgets(state.topicId);
    //         return newState;
    // }
}

export default widgetReducer;