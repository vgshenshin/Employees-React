import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    //  исп-ем данные с сервера в пропсах - деструктурируем массив data с объектами
    //  исп-я метод map рендерим на странице item'ы 
    const elements = data.map(item => {
//  достаем keys деструктурируя data, а остальные св-ва передаем в itemProps - спред оператором ...
        const {id, ...itemProps} = item;

        //  формируем массив с item'ами с уник.ключами (keys) и остальными пропсами в нем
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            // <EmployeesListItem {...item}/>
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
/*                 onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)} */
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))}/>
        )
    })

    //  возвращаем массив с item'ами в ul
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;