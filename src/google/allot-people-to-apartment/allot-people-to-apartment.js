/**
 * https://leetcode.com/discuss/interview-question/4994055/Google-or-Onsite-or-Allot-people-to-apartment
 * 
 * Your organization has hired interns who need to relocate for the summer. You are in charge of assigning apartments to them. Each intern will get their own room. They can choose whether they prefer to share a 2+ room apartment or get a one-bedroom to themselves.
Note that they may not get what they want because the apartments vary in the number of rooms that they have.
 */

function allotApartments(persons, apartments) {
  const assignments = [];
  const singleRoomApartments = apartments.filter((apt) => apt.numRooms === 1);
  const multiRoomApartments = apartments.filter((apt) => apt.numRooms > 1);

  const singlePrefrencePersons = persons.filter((p) => !p.wantsHousemates);
  const multiPrefrencePersons = persons.filter((p) => p.wantsHousemates);

  while (singlePrefrencePersons.length && singleRoomApartments.length) {
    const assignment = {
      person: singlePrefrencePersons.pop().name,
      apartment: singleRoomApartments.pop().aptNumber,
    };
    assignments.push(assignment);
  }

  while (multiPrefrencePersons.length && multiRoomApartments.length) {
    const multiRoomApartment = multiRoomApartments.pop();

    while (multiRoomApartment.numRooms && multiPrefrencePersons.length) {
      const assignment = {
        person: multiPrefrencePersons.pop().name,
        apartment: multiRoomApartment.aptNumber,
      };
      assignments.push(assignment);
      multiRoomApartment.numRooms--;
    }
    if (multiRoomApartment.numRooms) {
      multiRoomApartments.push(multiRoomApartment);
    }
  }

  while (multiPrefrencePersons.length && singleRoomApartments.length) {
    const assignment = {
      person: multiPrefrencePersons.pop().name,
      apartment: singleRoomApartments.pop().aptNumber,
    };
    assignments.push(assignment);
  }
  while (singlePrefrencePersons.length && multiRoomApartments.length) {
    const multiRoomApartment = multiRoomApartments.pop();

    while (multiRoomApartment.numRooms && singlePrefrencePersons.length) {
      const assignment = {
        person: singlePrefrencePersons.pop().name,
        apartment: multiRoomApartment.aptNumber,
      };
      assignments.push(assignment);
      multiRoomApartment.numRooms--;
    }
    if (multiRoomApartment.numRooms) {
      multiRoomApartments.push(multiRoomApartment);
    }
  }

  return assignments;
}

class Apartment {
  constructor(aptNumber, numRooms) {
    this.aptNumber = aptNumber;
    this.numRooms = numRooms;
  }
}

class Person {
  constructor(name, wantsHousemates) {
    this.name = name;
    this.wantsHousemates = wantsHousemates;
  }
}

const apt1 = new Apartment(101, 1);
const apt2 = new Apartment(102, 2);
const apt3 = new Apartment(103, 3);

const apts = [apt1, apt2, apt3];

const person1 = new Person('Jean', true);
const person2 = new Person('xyz', true);
const person3 = new Person('Jeann', false);
const person4 = new Person('abcd', false);
const person5 = new Person('abcs', true);
const person6 = new Person('abcds', true);

const persons = [person1, person2, person3, person4, person5, person6];

console.log(allotApartments(persons, apts));
