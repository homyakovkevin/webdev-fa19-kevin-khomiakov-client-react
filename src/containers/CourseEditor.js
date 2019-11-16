import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import {Link} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import widgetReducer from '../reducers/WidgetReducer'
import WidgetListContainer from "./WidgetListContainer";
import WidgetService from "../services/WidgetService";
import {FaTimes} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import '../styles/CourseEditor.css'
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import ModuleService from "../services/ModuleService";
import TopicService from "../services/TopicService";

export default class CourseEditor
    extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const paths = window.location.pathname.split('/')
        const courseId = paths[paths.length - 1]
        if (this.state.course && this.state.course.id != courseId)
            this.service.findCourseById(courseId)
                .then(course => this.setState({
                    course: course
                }))
    }

    constructor(props) {
        super(props)

        this.service = new CourseService();

        this.state = {
            course: {title: "", id: -1, modules: []},
            modules: [],
            selectedModule: "",
            lessonSelected: "",
            selectedTopic: "",
            module: "",
            lesson: "",
            topic: "",
            store: null,

        }

        this.widgetService = new WidgetService();
        this.lessonService = new LessonService();
        this.moduleService = new ModuleService();
        this.topicService = new TopicService();
    }

    componentWillMount() {
        this.moduleService.findModulesforCourse(this.props.course.id)
            .then(modules => this.setState({
                modules: modules,
            }));
    }

    createTopic = (lessonId, topic) => {
        this.topicService.createTopic(lessonId, topic)
            .then(topics => this.setState({
                topics: topics
            }));
        document.getElementById("add-topic-input").value = "";
    };

    createLesson = (moduleId, lesson) => {
        this.lessonService.createLesson(moduleId, lesson)
            .then(lessons =>
                this.setState({
                    lessons: lessons
                }));
        document.getElementById("add-lesson-input").value = "";
    };

    createModule = (cId, module) => {
        this.moduleService.createModule(cId, module)
            .then(modules => this.setState({
                modules: modules
            }));
        document.getElementById("add-module-input").value = "";
    };


    selectModule = module => {
        this.lessonService.findAllLessonsforModule(module.id)
            .then(l => this.setState({
                lessons: l,
                selectedModule: module
            }));
    };


    selectLesson = lesson => {
        this.topicService.findAllTopicsforLesson(lesson.id).then(
            topics =>
                this.setState({
                    topics: topics,
                    selectedLesson: lesson,
                }))
    };

    selectTopic = topic => {
        this.widgetService.findWidgetsForTopic(topic.id).then(response => this.setState({
            selectedTopic: topic,
            store: createStore(widgetReducer, {widgets: response, topicId: topic.id}),
        }))

    };

    componentDidMount() {
        this.widgetService.findWidgets()
            .then((widgets) => this.setState(
                {
                    widgets: widgets
                }
            ))
    }

    updateModule = (module, title) => {
        let m = module;
        m.title = title;
        this.setState({
            modules: this.state.modules.map(i => i.id === m.id ? m : i)
        });
        this.moduleService.updateModule(m.id, m)
    };

    updateLesson = (lesson, title) => {
        let l=lesson;
        l.title=title;
        this.setState({
            lessons:this.state.lessons.map(i=>i.id===l.id?l:i)
        });
        this.lessonService.updateLesson(l.id,l)

    };

    updateTopic = (topic, title) => {
        let t=topic;
        t.title=title;
        this.setState({
            topics: this.state.topics.map(m => m.id === t.id ? t : m)
        });
    };

    topicTitleChanged = (event) => {
        this.setState({
                topic: {
                    title: event.target.value
                }
            }
        )
    };

    moduleTitleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    };

    LessonTitleChanged = (event) => {
        this.setState({
            lesson: {
                title: event.target.value
            }
        })
    };

    deleteModule = id => {
        this.moduleService.deleteModule(id)
            .then(() => this.moduleService.findModulesforCourse(this.props.course.id))
            .then(response => this.setState({
                modules: response
            }));
    };

    deleteLesson = lesson => {
        this.lessonService.deleteLesson(lesson.id)
            .then(() => this.lessonService.findAllLessonsforModule(this.state.selectedModule.id))
            .then(response => this.setState({
                lessons: response
            }))
    }

    deleteTopic = (topic) => {
        this.topicService.deleteTopic(topic.id)
            .then(() => this.topicService.findAllTopicsforLesson(this.state.selectedLesson.id))
            .then(response => this.setState({
                topics: response
            }))

    };


    render() {
        return (
            <div className="container-fluid bg-dark wbdv-container">
                <div className="row bg-dark">
                    <nav className="navbar navbar-expand-lg">
                        <button className="wbdv-course-editor wbdv-close" id="btn-icon">
                            <FaTimes/>
                        </button>
                        <b id="title-nav" className="wbdv-course-title wbdv-new">
                            {this.state.course.title}
                        </b>
                        <div className="collapse navbar-collapse">
                            <a className="nav-link wbdv-page-tab" href="#">Build</a>
                            <a className="nav-link wbdv-page-tab" href="#">Pages</a>
                            <a className="nav-link wbdv-page-tab" href="#">Theme</a>
                            <a className="nav-link wbdv-page-tab" href="#">Store</a>
                            <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                            <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                            <a className="nav-link wbdv-page-tab" href="#"> Settings</a>
                            <button id="btn-icon" className="wbdv-new-page-btn">
                                <FaPlus/>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}
                                    updateModule={this.updateModule}
                                    modules={this.state.modules}
                                    createModule={this.createModule}
                                    moduleTitleChanged={this.moduleTitleChanged}
                                    deleteModule={this.deleteModule}
                        /></div>

                    <div className="col-8 bg-dark">
                        <LessonTabs selectLesson={this.selectLesson}
                                    lessonSelected={this.state.lessonSelected}
                                    lessons={this.state.lessons}
                                    updateLesson={this.updateLesson}
                                    createLesson={this.createLesson}
                                    lessonTitleChanged={this.LessonTitleChanged}
                                    deleteLesson={this.deleteLesson}
                        />
                        <TopicPills topics={this.state.topics}
                                    selectedTopic={this.state.selectedTopic}
                                    lesson={this.state.selectedLesson}
                                    topic={this.state.topic}
                                    updateTopic={this.updateTopic}
                                    selectTopic={this.selectTopic}
                                    createTopic={this.createTopic}
                                    topicTitleChanged={this.topicTitleChanged}
                                    deleteTopic={this.deleteTopic}/>
                        <br/>
                        {this.state.selectedTopic && this.state.store &&
                        <Provider store={this.state.store}>
                            <WidgetListContainer/>
                        </Provider>}
                    </div>
                </div>
            </div>
        )
    }
}
