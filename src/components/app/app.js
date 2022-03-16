import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      data : [
        {name : 'Denis B.' , salary : 2000, increase : false, rise : true, id:1},
        {name : 'Alex M.' , salary : 3000, increase : true, rise : false, id:2},
        {name : 'Nikita C' , salary : 1500, increase : false, rise : false, id:3}
      ],
      term : '',
      filter: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        //const index = data.findIndex(elem => elem.id === id)
        // const before = data.slice(0, index); //Копируем от начала до index
        // const after = data.slice(index+1)  //Копируем от index+1 до конца
        // const newArray = [...before, ...after];
        
        return {
          data : data.filter(item => item.id !== id)
        }
    })
  }



  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise : false,
        id: this.maxId++
    }
    if (name.length >= 2 && salary >= 100) {
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
      });
    } else {
        alert('Ошибка при вводе нового сотрудника');
    }
    
  }



  onToggleProp = (id, prop) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const old = data[index];
      const newItem = {...old, [prop] : !old[prop]}; //Развернул объект и перезаписал элемент prop на противоположный
      const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

      return {
        data : newArr
      }
    })
    // this.setState(({data}) => ({
    //   data : data.map(item => {
    //     if (item.id === id ) {
    //       return {...item, increase : !item.increase}
    //     }
    //     return item;
    //   })
    // }))

  }



  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => item.name.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => { //Пример как поднять перемунную в главный файл
    this.setState({term}); //return {term : term}
  }




  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default :
        return items;

    }
  }


  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
          <AppInfo data={data}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList data={visibleData} onDelete={this.deleteItem} 
          onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );

  }
}

export default App;