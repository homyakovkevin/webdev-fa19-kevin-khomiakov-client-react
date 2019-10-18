import coursesJson from './courses.json';
import React from 'react';

export default class WidgetService {
    constructor() {

        if (!!WidgetService.instance) {
            return WidgetService.instance;
        }

        WidgetService.instance = this;
        this.courses = coursesJson;
        return this;
    }

    createWidget(topicId, widget) {
        this.courses.forEach(newCourse => {
            newCourse && newCourse.modules.forEach(newModule => {
                newModule && newModule.lessons.forEach(newLesson => {
                    newLesson && newLesson.topics.forEach(newTopic => {
                        if (newTopic.id === topicId) {
                            newTopic.widgets = [...newTopic.widgets, widget]
                        }
                    })
                })
            })
        });
    }

    deleteWidget(widgetId) {
        for (let ii = 0; ii < this.courses.length; ii++) {
            for (let jj = 0; jj < this.courses[ii].modules.length; jj++) {
                for (let kk = 0; kk < this.courses[ii].modules[jj].lessons.length; kk++) {
                    let lesson = this.courses[ii].modules[jj].lessons[kk];
                    for (let nn = 0; nn < lesson.topics.length; nn++) {
                        lesson.topics[nn].widgets = lesson.topics[nn].widgets.filter(widg => widg.id !== widgetId);
                    }
                }
            }
        }
    }

    findWidgets(topicId) {
        for (let ii = 0; ii < this.courses.length; ii++) {
            for (let jj = 0; jj < this.courses[ii].modules.length; jj++) {
                let lessons = this.courses[ii].modules[jj].lessons;
                for (let kk = 0; kk < lessons.length; kk++) {
                    let topic = lessons[kk].topics.find(top => top.id === topicId);
                    return topic === undefined ? [] : topic.widgets;
                }
            }
        }
        return null;
    }

    updateWidget(widgetId, widget) {
        for (let ii = 0; ii < this.courses.length; ii++) {
            for (let jj = 0; jj < this.courses[ii].modules.length; jj++) {
                for (let kk = 0; kk < this.courses[ii].modules[jj].lessons.length; kk++) {
                    for (let nn = 0; nn < this.courses[ii].modules[jj].lessons[kk].topics.length; nn++) {
                        let topic = this.courses[ii].modules[jj].lessons[kk].topics[nn];
                        topic.widgets = topic.widgets.map(widg => widg.id === widgetId ? widget : widg);
                    }
                }
            }
        }
    }

}