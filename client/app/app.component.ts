import { Component } from '@angular/core'
import { TaskService } from './services/task.service'

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	providers: [ TaskService ]
})

export class AppComponent { }