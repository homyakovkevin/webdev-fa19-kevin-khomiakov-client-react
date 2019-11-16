let url = "https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/topics";
let lessonUrl = "https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/lessons/";

export default class TopicService {
    constructor() {
        if (!!TopicService.instance) {
            return TopicService.instance;
        }
        TopicService.instance = this;
        return this;
    }

    createTopic = (lessonId, topic) =>
        fetch(lessonUrl+lessonId+"/topics", {
            method: "POST",
            body: JSON.stringify(topic),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {
            return response.json();
        });

    findAllTopicsforLesson= (lid) => fetch(lessonUrl + lid + "/topics").then(response => response.json());



    findTopics = () =>
        fetch(url).then(response => response.json());

    findTopic(topicId) {
        return fetch(url + '/' + topicId, {
            method: 'GET',
            // body: JSON.stringify(userId),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    };


    updateTopic(topicId, topic) {
        return fetch(url + "/" + topicId,
            {
                method: "PUT",
                body: JSON.stringify(topic),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    }

    deleteTopic(topicId) {
        return fetch(url + '/' + topicId, {
            method: 'DELETE',
            body: JSON.stringify(topicId),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

}