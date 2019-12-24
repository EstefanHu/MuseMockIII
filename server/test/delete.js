const assert = require('assert');
const User = require('../models/user');

describe('Deleting record', () => {

  let newUser;

  beforeEach(done => {
    newUser = new User({
      firstName: 'Justin',
      lastName: 'Hu'
    });

    newUser.save().then(() => {
      done();
    });
  });

  it('Deleting a record from the database', done => {
    User.findOneAndRemove({firstName: 'Estefan'}).then(() => {
      User.findOne({firstName: 'Estefan'}).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});