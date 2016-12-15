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
const core_2 = require("@angular/core");
const task_service_1 = require("../../services/task.service");
let TasksComponent = class TasksComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(tasks => {
            console.log("ik werk wel");
            this.tasks = tasks;
        });
    }
    addTask(event) {
        event.preventDefault();
        var newTask = {
            title: this.title,
            finished: false
        };
        //shows new task in list
        //this.tasks.push(newTask)
        //add task to db
        this.taskService.addTask(newTask)
            .subscribe(task => {
            this.tasks.push(task);
            this.title = '';
        }, err => { console.log("error", err); }, () => console.log("klaar"));
    }
    deleteTask(id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }
};
TasksComponent = __decorate([
    core_1.Component({
        selector: 'tasks',
        changeDetection: core_2.ChangeDetectionStrategy.Default,
        templateUrl: 'app/components/tasks/tasks.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map