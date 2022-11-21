import './app-info.css';

const AppInfo = ({allEmployees, bonusEmployees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {allEmployees}</h2>
            <h2>Премию получат: {bonusEmployees}</h2>
        </div>
    );
}

export default AppInfo;