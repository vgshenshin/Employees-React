import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    //  деструктурируем пропсы из itemProps (employees-list.js)

    let classNames = "list-group-item d-flex justify-content-between"
    if (increase) {
        classNames += ' increase'
    }

    if (rise) {
        classNames += ' like'
    }

    let altName = document.documentElement.clientWidth < 576 && name.length > 9 ? name.slice(0, 9) + "..." : name

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} className="list-group-item-label flex-fill" data-prop="rise">{altName}</span>
            <input type="text" className="list-group-item-input" defaultValue={'$' + salary}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" 
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-prop="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;