import { Injectable} from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
// import 'rxjs/add/observable/from'
import 'rxjs/add/operator/map'

@Injectable()
export class TaskService{
	constructor(private http:Http){
		console.log('Task Service Initialized')
	}

	getTasks(){
		return this.http.get('http://localhost:3000/api/tasks')
		.map((res: Response) => res.json());
	}

	addTask(newTask){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), {headers: headers})
			.map(res => res.json());
			// .subscribe(task => {
			// 	console.log("yay")
				// this.tasks.push(task);
				// this.title = '';
			//}, err => { console.log("error", err);}, () => console.log("klaar"))
	}

	deleteTask(id) {
		return this.http.delete('/api/task/' + id)
			.map(res => res.json())
	}

	updateStatus(task){
		console.log(task)
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put('http://localhost:3000/api/task/'+ task._id, JSON.stringify(task), {headers: headers})
			.map(res => res.json());
	}
}