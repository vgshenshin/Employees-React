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
				{name: "John A.", salary: 300, increase: false, rise: false, id: 1},
				{name: "Alex M.", salary: 400, increase: true, rise: false, id: 2},
				{name: "Carl C.", salary: 500, increase: false, rise: true, id: 3},
			],
			term: '',
			filter: 'all'
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
			rise: false,
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
/*
	onToggleIncrease = (id) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id == id) {
					return {...item, increase: !item.increase}
				}
				return item
			})
		}))
	}

	onToggleRise = (id) => {
		this.setState(({data}) => {
			return {
				data: data.map(item => {
					if (item.id == id) {
						return {...item, rise: !item.rise}
					}
					return item
				})
			}
		})
	}
*/

	onToggleProp = (id, prop) => {
		this.setState(({data}) => {
			return {
				data: data.map(item => {
					if (item.id == id) {
						return {...item, [prop]: !item[prop]}
					}
					return item
				})
			}
		})
	}

	searchEmployees = (items, term) => {
		if (term.length === 0) {
			return items;
		} else {
			return items.filter(item => {
				return item.name.indexOf(term) > -1
			})
		}


	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'salaryMore1000':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter})
	}

	render() {
		const {data, term, filter} = this.state;
		const allEmployees = this.state.data.length;
		const bonusEmployees = this.state.data.filter(item => item.increase).length;
		const employeesVisible = this.filterPost(this.searchEmployees(data, term), filter);
		// конечные данные для списка проходят двойную фильтрацию, 1. по поиску в строке, 2. по фильтрам-кнопкам

		return (
			<div className="app">
				<AppInfo
					allEmployees={allEmployees}
					bonusEmployees={bonusEmployees}/>
	
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>
				{/* передача данных с сервера в виде пропсов */}
				<EmployeesList 
					data={employeesVisible}
					onDelete={this.deleteItem}
/* 					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise} */
					onToggleProp={this.onToggleProp}
					/>  
				<EmpoyeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}

}

export default App;