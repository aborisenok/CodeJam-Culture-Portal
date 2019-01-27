import React from 'react';
import './style.css';
import Utils from './../../utils/utils';
import people from './../../data/people';
import SearchList from './../searchList/searchList';

function Search() {
  return (

    <form className="search-form" name="search-form">
        <label>
            Имя:
            <input type="text" id="person-name" />
        </label>
        <label>
            Город:
            <select name="cities" id="person-city">
                <option value="all">Все города</option>
                {Utils.getAllCities(people).map(elem =>
                    <option value={elem}>{elem}</option>
                )}
            </select>
        </label>
        <input type="submit" value="Поиск" onClick={handleSubmit}/>
    </form>
  )
}

function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("person-name").value.trim();
    let city = document.getElementById("person-city").value;

    if(city === 'all'){
        city = undefined;
    }
    let peopleList = Utils.selectPeople(people, name, city);
    SearchList(peopleList);
}

export default Search;