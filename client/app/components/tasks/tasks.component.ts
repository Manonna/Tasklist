import { Component } from '@angular/core'
import { TaskService } from '../../services/task.service'

@Component({
	selector: 'tasks',
	templateUrl: 'app/components/tasks/tasks.component.html'
})

export class TasksComponent { 
	constructor(private taskService:TaskService){
		this.taskService.getTasks()
			.subscribe(tasks => {
				console.log(tasks)
			})
	}
}