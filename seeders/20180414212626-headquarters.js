'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Headquarters', [
        {
            organizationId: 1,
            name: 'Cáritas Diocesana Dos Açores',
            lat: 38.6680878,
            lng: -27.2484066,
            address: 'Canada dos Folhadais, 54 – São Pedro',
            zipCode: '9700-202 Andra do Heroísmo',
            phoneNumber1: '295212795',
            phoneNumber2:'',
            email:'geral@caritasterceira.org',
            location:'Açores',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            name: 'Cáritas Diocesana De Aveiro',
            lat: 40.6450446,
            lng: -8.6487256,
            address: 'Rua do Carmo, nº 42',
            zipCode: '3800-127 Aveiro',
            phoneNumber1: '234 377 260',
            phoneNumber2:'',
            email:'aveiro@caritas.pt',
            location:'Aveiro',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 3,
            name: 'Cáritas Diocesana De Aveiro',
            lat: 40.6450446,
            lng: -8.6487256,
            address: 'Rua do Carmo, nº 42',
            zipCode: '3800-127 Aveiro',
            phoneNumber1: '234 377 260',
            phoneNumber2:'',
            email:'aveiro@caritas.pt',
            location:'Aveiro',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 4,
            name: 'Cáritas Diocesana De Aveiro',
            lat: 40.6450446,
            lng: -8.6487256,
            address: 'Rua do Carmo, nº 42',
            zipCode: '3800-127 Aveiro',
            phoneNumber1: '234 377 260',
            phoneNumber2:'',
            email:'aveiro@caritas.pt',
            location:'Aveiro',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 4,
            name: 'Cáritas Diocesana Dos Açores',
            lat: 38.6680878,
            lng: -27.2484066,
            address: 'Canada dos Folhadais, 54 – São Pedro',
            zipCode: '9700-202 Andra do Heroísmo',
            phoneNumber1: '295212795',
            phoneNumber2:'',
            email:'geral@caritasterceira.org',
            location:'Açores',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 5,
            name: 'Banco Alimentar Lisboa',
            lat: 38.750551,
            lng: -9.1355784,
            address: 'Avenida de Ceuta, Estação de Alcântara-Terra, Armazém 1',
            zipCode: '1300-125 Lisboa',
            phoneNumber1: '213649655',
            phoneNumber2:'',
            email:'balisboa@bancoalimentar.pt',
            location:'Lisboa',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 6,
            name: 'Comunidade Vida e Paz Lisboa',
            lat: 38.7106534,
            lng: -9.1766717,
            address: 'Rua Domingos Bomtempo, nº 7',
            zipCode: '1700-142 Lisboa',
            phoneNumber1: '218460165',
            phoneNumber2:'',
            email:'geral@alvalade.cvidaepaz.pt',
            location:'Lisboa',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            name: 'Cáritas Diocesana Dos Açores',
            lat: 38.6680878,
            lng: -27.2484066,
            address: 'Canada dos Folhadais, 54 – São Pedro',
            zipCode: '9700-202 Andra do Heroísmo',
            phoneNumber1: '295212795',
            phoneNumber2:'',
            email:'geral@caritasterceira.org',
            location:'Açores',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            name: 'Cáritas Diocesana De Aveiro',
            lat: 40.6450446,
            lng: -8.6487256,
            address: 'Rua do Carmo, nº 42',
            zipCode: '3800-127 Aveiro',
            phoneNumber1: '234 377 260',
            phoneNumber2:'',
            email:'aveiro@caritas.pt',
            location:'Aveiro',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            name: 'Cáritas Diocesana De Aveiro',
            lat: 40.6450446,
            lng: -8.6487256,
            address: 'Rua do Carmo, nº 42',
            zipCode: '3800-127 Aveiro',
            phoneNumber1: '234 377 260',
            phoneNumber2:'',
            email:'aveiro@caritas.pt',
            location:'Aveiro',
            createdAt : new Date(),
            updatedAt : new Date()
        }
    ], {});
},

down: (queryInterface, Sequelize) => {
}
};