let teachers = [
  {
    _id: 1,
    fullName: 'nasr mahros',
    email: 'nasr@nasr.com',
    password: 'nasr123',
    image: 'nasrimage'
  },
  {
    _id: 2,
    fullName: 'abdalla mohamed',
    email: 'abdalla@abdalla.com',
    password: 'abd123',
    image: 'abdallaimage'
  }
];

let childs = [
  {
    id: 1,
    fullName: 'ali mohamed',
    age: 7,
    level: 'kg1',
    address: {
      city: 'cairo',
      street: 'salah salem',
      building: '5'
    }
  }
];

let classes = { 
  _id: 1,
  name: "Class A",
  supervisor: 123,
  children: [1, 2, 3]
};

module.exports = { teachers, childs, classes }; 
