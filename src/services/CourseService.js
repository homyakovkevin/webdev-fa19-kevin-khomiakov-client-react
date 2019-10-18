import coursesJson from "./courses.json"


export default class CourseService {

    constructor() {
        if (!!CourseService.instance) {
            return CourseService.instance;
        }
        CourseService.instance = this;
        this.courses = coursesJson;
        return this;
    }

    findAllCourses() {
        return this.courses
    }

    createCourse(course) {
        this.courses.push(course)
    }

    findCourseById(courseId) {
        return this.courses.find(course => course.id === courseId)
    }

    deleteCourse(courseId) {
        this.courses = this.courses.filter(course => course.id !== courseId)
    }

    updateCourse(courseId, course) {
        let this_course = this.findCourseById(courseId);
        this_course.title = course.title;
        this_course.modules = course.modules;
    }

}
