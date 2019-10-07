import coursesJson from './courses.json';

export default class CourseService {
    static myInstance = null;

    courses = coursesJson;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance = new CourseService()
        }
        return this.myInstance
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

    updateCourse(courseId, courseToUpdate) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id == courseId) {
                this.courses[i] = courseToUpdate
            }
        }
    }

}