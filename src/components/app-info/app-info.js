import './app-info.css'


const AppInfo = ({data}) => {
    const quantIncrease = data.filter(item => item.increase === true)


    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {quantIncrease.length}</h2>
        </div>
    )
}

export default AppInfo;