const assert = require('assert');
const User = require('../models/user');

describe('Base User tests', () => {

  let newUser = new User({
    firstName: 'Estefan',
    lastName: 'Hu',
    email: 'estefanhu@gmail.com',
    credibility: 0,
    posts: [],
    archive: []
  });

  newUser.save().then(() => {
    done();
  });
  
  it('Saving User to the database', done => {
    assert(newUser.isNew  === false);
    done();
  });

  it('Updating User from the database', done => {
    User.findOneAndUpdate({firstName: 'Estefan'}, {lastName: 'Justin'}).then(() => {
      User.findOne({_id: newUser._id}).then(result => {
        assert(result.lastName === 'Justin');
        done();
      });
    });
  });

  it('Increment User credibility by one', done => {
    User.updateMany({}, {$inc: {credibility: 1}}).then(() => {
      User.findOne({firstName: 'Estefan'}).then(record => {
        assert(record.credibility === 1);
        done();
      });
    });
  });

  it('Adding post to User', done => {
    User.findOne({firstName: 'Estefan'}).then(record => {
      record.posts.push({title: 'Title', description: 'description', content: 'this is some content'});
      record.save().then(() => {
        User.findOne({firstName: 'Estefan'}).then(record => {
          assert(record.posts.length === 1);
          done();
        });
      });
    });
  });

  it('Deleting User from Database', done => {
    User.findOneAndRemove({firstName: 'Estefan'}).then(() => {
      User.findOne({firstName: 'Estefan'}).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});