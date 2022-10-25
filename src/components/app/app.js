import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmpoyeesAddForm from '../employees-add-form/empoyees-add-form';

import './app.css';

function App() {

    // имитируем получение данных с сервера
    const data = [
        {name: "John A.", salary: 900, increase: false, id: 1},
        {name: "Alex M.", salary: 400, increase: true, id: 2},
        {name: "Carl C.", salary: 500, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            {/* передача данных с сервера в виде пропсов */}
            <EmployeesList data={data}/>  
            <EmpoyeesAddForm/>
        </div>
    );
}

export default App;