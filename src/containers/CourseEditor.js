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

        }

        this.widgetService = new WidgetService();

        this.store = createStore(widgetReducer);
    }

    createTopic = () => {
        let topics = this.state.lessonSelected.topics;
        if (!topics) {
            topics = []
        }
        topics.push({
            title: this.state.topic.title ? this.state.topic.title : "New Topic",
            id: Date.now(),
            widgets: []
        });
        document.getElementById("add-topic-input").value = "";
        let lesson = this.state.lessonSelected;
        lesson.topics = topics;

        let lessons = this.state.selectedModule.lessons;
        lessons = lessons.map(x => x.id === lesson.id ? lesson : x);

        let module = this.state.selectedModule;
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m)
        });
    };

    createLesson = () => {
        let lesson = {
            title: this.state.lesson.title ? this.state.lesson.title : "New Lesson",
            id: Date.now(),
            topics: []
        };

        let lessons = this.state.selectedModule.lessons ? [...this.state.selectedModule.lessons] : [];
        lessons.push(lesson);
        document.getElementById("add-lesson-input").value = "";
        let module = this.state.selectedModule;
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m),
        });
    };

    createModule = () => {
        let modules = this.state.modules ? this.state.modules : [];
        modules.push({
            id: Date.now(),
            title: this.state.module.title ? this.state.module.title : "New Module",
            lessons: []
        });
        document.getElementById("add-module-input").value = "";
        this.setState({
            modules: modules,
        });
    };


    selectModule = module => {
        this.setState(
            {
                selectedModule: module,
            })
    }


    selectLesson = lesson => {
        this.setState({
            lessonSelected: lesson,
        })
    }

    selectTopic = topic => {
        this.setState({
            selectedTopic: topic,
        })
    }

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
        })
    }

    updateLesson = (lesson, title) => {
        let newLesson = this.state.lessonSelected;
        newLesson.title = title;
        let module = this.state.selectedModule;
        let lessons = this.state.selectedModule.lessons;
        lessons = lessons.map(l => l.id === lesson.id ? newLesson : l);
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m)
        });
    };

    updateTopic = (topic, title) => {
        let newTopic = this.state.selectedTopic;
        newTopic.title = title;
        let topics = this.state.lessonSelected.topics;
        topics = topics.map(t => t.id === topic.id ? newTopic : t);
        let lesson = this.state.lessonSelected;
        lesson.topics = topics;
        let lessons = this.state.selectedModule.lessons;
        lessons = lessons.map(l => l.id === lesson.id ? lesson : l);
        let module = this.state.selectedModule;
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m)
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
        let i = this.state.modules.findIndex(m => m.id !== id);
        this.setState(
            {
                selectedModule: i === -1 ? "" : this.state.modules[i],
                lessonSelected: i !== -1 && this.state.modules[i].lessons ? this.state.modules[i].lessons[0] : "",
                modules: this.state.modules.filter(m => m.id !== id)
            }
        );
    };

    deleteLesson = lesson => {
        if (this.state.selectedModule.lessons !== undefined) {
            let lessons = this.state.selectedModule.lessons;
            lessons = lessons.filter(l => l !== lesson);
            let module = this.state.selectedModule;
            module.lessons = lessons;
            this.setState({
                modules: this.state.modules.map(m => m.id === module.id ? module : m),
                lessonSelected: lessons.length === 0 ? "" : lessons[0]
            });
        }
    };

    deleteTopic = (topic) => {
        if (this.state.lessonSelected.topics !== undefined) {
            let topics = this.state.lessonSelected.topics;
            topics = topics.filter(t => t !== topic);
            let lesson = this.state.lessonSelected;
            lesson.topics = topics;
            let lessons = this.state.selectedModule.lessons;
            lessons = lessons.map(l => l.id === lesson.id ? lesson : l);
            let module = this.state.selectedModule;
            module.lessons = lessons;
            this.setState({
                modules: this.state.modules.map(m => m.id === module.id ? module : m)
            });
        }
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
                                    modules={this.state.course.modules}
                                    createModule={this.createModule}
                                    moduleTitleChanged={this.moduleTitleChanged}
                                    deleteModule={this.deleteModule}
                        /></div>

                    <div className="col-8 bg-dark">
                        <LessonTabs selectLesson={this.selectLesson}
                                    lessonSelected={this.state.lessonSelected}
                                    lessons={this.state.selectedModule.lessons}
                                    updateLesson={this.updateLesson}
                                    createLesson={this.createLesson}
                                    lessonTitleChanged={this.LessonTitleChanged}
                                    deleteLesson={this.deleteLesson}
                        />
                        <TopicPills topics={this.state.lessonSelected.topics}
                                    selectedTopic={this.state.selectedTopic}
                                    updateTopic={this.updateTopic}
                                    selectTopic={this.selectTopic}
                                    createTopic={this.createTopic}
                                    topicTitleChanged={this.topicTitleChanged}
                                    deleteTopic={this.deleteTopic}/>
                        <br/>
                        {this.state.selectedTopic && this.store &&
                        <Provider store={this.store}>
                            <WidgetListContainer/>
                        </Provider>}
                    </div>
                </div>
            </div>
        )
    }
}
