import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseService from "../services/CourseService";

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();

        this.state = {
            modules: this.props.modules,
            disableEditTitle: true
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    createModule = () => {

        this.setState(
            {
                modules: [
                    ...this.state.modules,
                    {
                        title: 'New Module',
                        id: (new Date()).getTime(),
                        lessons: [
                            {
                                "id": 1,
                                "title": "dummy",
                                "topics": [
                                    {
                                        "id": 1,
                                        "title": "topic1"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },() => {
                this.courseService.updateCourse(
                    {
                        id: this.props.course.id,
                        title: this.props.course.title,
                        modules: this.state.modules
                    });

                // var course = this.courseService.findCourseById(this.props.course.id)
                // console.log(course);
            }
        );
    };

    deleteModule = (e, moduleId) => {
        e.stopPropagation();

        if(this.state.modules.length == 1){
            alert("Can't delete for now as only one module left!")
        }else {
            this.setState({
                modules: this.state.modules.filter(
                    module => module.id !== moduleId
                )
            }, () => {
                this.courseService.updateCourse(
                    {
                        id: this.props.course.id,
                        title: this.props.course.title,
                        modules: this.state.modules
                    });

                this.props.resetAllOnDelete();

                // var course = this.courseService.findCourseById(this.props.course.id)
                // console.log(course);
            });
        }
    };



    titleChanged = (event) => {

        console.log("in title change !")


        var changedModuleIndex = this.state.modules.findIndex(x => x.id == this.props.selectedModuleId);
        var allModules = this.state.modules;
        allModules[changedModuleIndex].title = event.target.value ;

        this.setState(
            {
                modules: allModules
            });
    };

    editModule = () => {
        console.log("in edit module");
        this.state.disableEditTitle = false;
    };

    render() {
        return(
            <div style={{marginTop: '10px'}} className="modules">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className={"row"}>
                            <div className={"col-8"}>
                                <input
                                    onChange={this.titleChanged}
                                    className="form-control"
                                    disabled={this.state.disableEditTitle}/>
                            </div>
                            <div className={"col-4"}>
                                <button
                                    onClick={this.createModule}
                                    className="btn btn-primary btn-block"><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </li>
                    {
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        deleteModule={this.deleteModule}
                                        editModule={this.editModule}
                                        selectedModuleId={this.props.selectedModuleId}
                                        key={module.id}
                                        module={module}/>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default ModuleList;