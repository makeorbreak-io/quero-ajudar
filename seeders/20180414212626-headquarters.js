'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Headquarters', [
    {
        organizationId: '4'
        name: 'Cáritas Diocesana Dos Açores',
        lat: '38.6680878',
        lng: '-27.2484066',
        adress: 'Canada dos Folhadais, 54 – São Pedro',
        zipCode: '9700-202 Andra do Heroísmo',
        phoneNumber1: '295212795',
        phoneNumber2:'',
        email:'geral@caritasterceira.org',
        location:'Ilha Terceira'
    },
    {
        organizationId: '4'
        name: 'Cáritas Diocesana De Aveiro',
        lat: '40.6450446',
        lng: '-8.6487256',
        adress: 'Rua do Carmo, nº 42',
        zipCode: '3800-127 Aveiro',
        phoneNumber1: '234 377 260',
        phoneNumber2:'',
        email:'aveiro@caritas.pt',
        location:'Aveiro'
    }
], {});
},

down: (queryInterface, Sequelize) => {
}
};