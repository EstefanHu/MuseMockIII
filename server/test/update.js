const assert = require('assert');
const User = require('../models/user');

describe('Update record', () => {
  let newUser;

  beforeEach(done => {
    newUser = new User({
      firstName: 'Justin',
      lastName: 'Hu',
      credibility: 0
    });

    newUser.save().then(() => {
      done();
    });
  });

  it('Updates one record from the database', done => {
    User.findOneAndUpdate({firstName: 'Justin'}, {firstName: 'Benti'}).then(() => {
      User.findOne({_id: newUser._id}).then(result => {
        assert(result.firstName === 'Benti');
        done();
      });
    });
  });

  it('Increment user credibility by one', done => {
    User.updateMany({}, {$inc: {credibility: 1}}).then(() => {
      User.findOne({firstName: 'Justin'}).then(record => {
        assert(record.credibility === 1);
        done();
      });
    });
  });
});