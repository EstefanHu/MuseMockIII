const assert = require('assert');
const mongoose = require('mongoose');
const City = require('../models/city');
const Sector = require('../models/sector');
const Neighborhood = require('../models/neighborhood');
const Hub = require('../models/hub');
const User = require('../models/user');

describe('Setting up application documents', () => {

    before(done => {
        console.log('Hello');
    });

    it('City document established', done => {
        let newCity = new City({
            name: 'Seatle',
            sectors: [],
            posts: []
        });

        newCity.save().then(() => {
            assert(newCity.isNew === false);
            done();
        });
    });

    it('Sector document established', done => {
        let newSector = new Sector({
            name: 'Four',
            neighborhoods: [],
            hubs: [],
            posts: []
        });

        newSector.save().then(() => {
            assert(newSector.isNew === false);
            done();
        });
    });

    it('Neighborhood document established', done => {
        let newNeighborhood = new Neighborhood({
            name: 'University District',
            hubs: [],
            posts: []
        });

        newNeighborhood.save().then(() => {
            assert(newNeighborhood.isNew === false);
            done();
        });
    });

    it('Hub document established', done => {
        let newHub = new Hub({
            name: 'University of Washington',
            admins: [],
            members: [],
            posts: []
        });

        newHub.save().then(() => {
            assert(newHub.isNew === false);
            done();
        });
    });

    it('User document established', done => {
        let newUser = new User({
            firstName: 'Estefan',
            lastName: 'Hu',
            email: 'estefanhu@gmail.com',
            password: 'password',
            credibility: 0,
            posts: []
        });

        newUser.save().then(() => {
            assert(newUser.isNew === false);
            done();
        });
    });
});