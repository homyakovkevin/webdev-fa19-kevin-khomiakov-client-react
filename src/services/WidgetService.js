// let url =  "https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/widgets";

let url = "http://localhost:8080/api/widgets";
let topicUrl = "http://localhost:8080/api/topics/";

export default class WidgetService {
    constructor() {

        if (!!WidgetService.instance) {
            return WidgetService.instance;
        }

        WidgetService.instance = this;
        return this;
    }

    findWidgets = () =>
        fetch(url).then(response => response.json());

    findWidgetsForTopic = (topicId) =>
        fetch(topicUrl + topicId + "/widgets").then(response => response.json());


    findWidget(widgetId) {
        return fetch(url + '/' + widgetId, {
            method: 'GET',
            // body: JSON.stringify(userId),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    };

    createWidget = (topicId, widget) =>
        fetch(topicUrl + topicId + "/widgets", {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {
            return response.json();
        });


    updateWidget(widgetId, widget) {
        return fetch(url + "/" + widgetId,
            {
                method: "PUT",
                body: JSON.stringify(widget),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    }

    updateOrder(widgets, topicId) {
        return fetch(topicUrl + topicId + "/widgets",
            {
                method: "PUT",
                body: JSON.stringify(widgets),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    }


    deleteWidget(widgetId) {
        return fetch(url + '/' + widgetId, {
            method: 'DELETE',
            body: JSON.stringify(widgetId),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}