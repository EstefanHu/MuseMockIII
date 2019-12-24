const assert = require('assert');
const mongoose = require('mongoose');
const City = mongoose.model('City', '../models/city');
// const District = mongoose.model('../models/district');
// const Neighborhood = mongoose.model('../models/neighborhood');
// const Hub = mongoose.model('../models/hub');
// const User = mongoose.model('../models/user');

describe('Setting up application documents', () => {

    it('City document established', done => {
        let newCity = new City({
            name: 'Seatle',
            districts: [],
            posts: []
        });

        newCity.save().then(() => {
            assert(newCity.isNew === false);
            done();
        });
    });

    it('District document established', done => {
        let newDistrict = new District({
            name: 'Four',
            neighborhoods: [],
            hubs: [],
            posts: []
        });

        newDistrict.save().then(() => {
            assert(newDistrict.isNew === false);
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