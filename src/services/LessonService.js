let url = "http://localhost:8080/api/lessons";
let moduleUrl = "http://localhost:8080/api/modules/";

export default class LessonService {
    constructor() {
        if (!!LessonService.instance) {
            return LessonService.instance;
        }
        LessonService.instance = this;
        return this;
    }

    createLesson = (mid, Lesson) =>
        fetch(moduleUrl + mid + "/lessons", {
            method: 'POST',
            body: JSON.stringify(Lesson),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json());


    findAllLessonsforModule = (mid) => fetch(moduleUrl + mid + "/lessons").then(response => response.json());


    findAllLessons = () =>
        fetch(url).then(response => response.json());


    findLessonById = (id) =>
        fetch(url + '/' + id).then(response => response.json());


    updateLesson(id, Lesson) {
        return fetch(url + "/" + id,
            {
                method: "PUT",
                body: JSON.stringify(Lesson),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    };

    deleteLesson = (id) => fetch(url + '/' + id, {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
            'content-type': 'application/json',
        }
    });
}