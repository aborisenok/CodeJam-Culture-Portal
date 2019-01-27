
class Utils {
    static getAllCities(people) {
        const list = new Set();
        people.forEach( (item) => {
            list.add(item.birthPlace);
        }); 
        return Array.from(list);
    }

    static selectPeople(people, name, city) {
       let result = Utils.selectPeopleByName(people, name);
       return Utils.selectPeopleByCity(result, city);
    }

    static selectPeopleByName(people, name) {
        if(!name) {
            return people;
        } 

        return people.filter( (person) => {
            const nameParts = person.name.split(" ");
            return nameParts.some( (nameElem) => {
                return nameElem.toLowerCase() === name.toLowerCase();
            });
        });
    }

    static selectPeopleByCity(people, city) {
        if(!city) {
            return people;
        } 

        return people.filter( (person) => {
            const personCity = person.birthPlace.toLowerCase();
            return personCity.includes(city.toLowerCase());
        });
    }
}

export default Utils;