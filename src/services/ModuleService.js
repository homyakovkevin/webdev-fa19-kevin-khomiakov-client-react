let url = "http://localhost:8080/api/modules";
let courseUrl="http://localhost:8080/api/courses/";

export default class ModuleService {
    constructor() {
        if (!!ModuleService.instance) {
            return ModuleService.instance;
        }
        ModuleService.instance = this;
        return this;
    }

    createModule = (cId, module) =>
        fetch(courseUrl+cId+"/modules", {
            method: "POST",
            body: JSON.stringify(module),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {
            return response.json();
        });


    findModules = () =>
        fetch(url).then(response => response.json());

    findModulesforCourse=(cid)=>
        fetch(courseUrl+cid+"/modules").then(response => response.json());

    findModule(moduleId) {
        return fetch(url + '/' + moduleId, {
            method: 'GET',
            // body: JSON.stringify(userId),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    };


    updateModule(moduleId, module) {
        return fetch(url + "/" + moduleId,
            {
                method: "PUT",
                body: JSON.stringify(module),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    }



    deleteModule(moduleId) {
        return fetch(url + '/' + moduleId, {
            method: 'DELETE',
            body: JSON.stringify(moduleId),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

}