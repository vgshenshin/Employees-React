import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmpoyeesAddForm from '../employees-add-form/empoyees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
	// имитируем получение данных с сервера
			data: [
				{name: "John A.", salary: 300, increase: false, id: 1},
				{name: "Alex M.", salary: 400, increase: true, id: 2},
				{name: "Carl C.", salary: 500, increase: false, id: 3},
				{name: "Mary Sh.", salary: 5000, increase: false, id: 4}
			]
		}
		this.idMax = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const obj = {
			name,
			salary,
			increase: false,
			id: ++this.idMax
		}
		this.setState(({data}) => {
			const newArr = data.slice();
			newArr.push(obj)
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div className="app">
				<AppInfo/>
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				{/* передача данных с сервера в виде пропсов */}
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}/>  
				<EmpoyeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}

}

export default App;