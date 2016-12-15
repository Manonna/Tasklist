"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
// import 'rxjs/add/observable/from'
require("rxjs/add/operator/map");
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        console.log('Task Service Initialized');
    }
    getTasks() {
        return this.http.get('http://localhost:3000/api/tasks')
            .map((res) => res.json());
        ;
    }
    addTask(newTask) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), { headers: headers })
            .map(res => res.json());
        // .subscribe(task => {
        // 	console.log("yay")
        // this.tasks.push(task);
        // this.title = '';
        //}, err => { console.log("error", err);}, () => console.log("klaar"))
    }
    deleteTask(id) {
        return this.http.delete('/api/task/' + id)
            .map(res => res.json());
    }
};
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map