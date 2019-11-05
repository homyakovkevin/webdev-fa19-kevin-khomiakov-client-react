// import coursesJson from "./courses.json";

let url = "https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/courses";

export default class CourseService {

    constructor() {
        if (!!CourseService.instance) {
            return CourseService.instance;
        }
        CourseService.instance = this;
        return this;
    }

    findAllCourses = () =>
        fetch(url).then(response => response.json());

    createCourse = course =>
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {'content-type': 'application/json'}
        });

    findCourseById = (id) =>
        fetch(url + '/' + id).then(response => response.json());

    deleteCourse = (courseId) =>
        fetch(url + '/' + courseId, {
            method: 'DELETE',
            body: JSON.stringify(courseId),
            headers: {
                'content-type': 'application/json',
            }
        });

    updateCourse(courseId, course) {
        return fetch(url + "/" + courseId,
            {
                method: "PUT",
                body: JSON.stringify(course),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    };

}
