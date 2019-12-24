const assert = require('assert');
const User = require('../models/user');

describe('Base User tests', () => {

  let newUser;

  it('Saving User to the database', done => {
    newUser = new User({
      firstName: 'Estefan',
      lastName: 'Hu',
      email: 'estefanhu@gmail.com',
      credibility: '0',
      posts: [],
      archive: []
    });

    newUser.save().then(() => {
      assert(user.isNew  === false);
      done();
    });
  });

  // it('Updating one User', done => {
  //   User.findOneAndUpdate({firstName: 'Estefan'}, {firstName: 'Justin'}).then(() => {
  //     user.findOne({_id: newUser._id}).then(result => {
  //       assert(result.firstName === 'Justin');
  //       done();
  //     });
  //   });
  // });

  // it('Increment User credibility by one', done => {
  //   User.updateMany({}, {$inc: {credibility: 1}}).then(() => {
  //     User.findOne({firstName: 'Justin'}).then(record => {
  //       assert(record.credibility === 1);
  //       done();
  //     });
  //   });
  // });

  // it('Adding post to User', done => {
  //   User.findOne({fistName: 'Justin'}).then(record => {
  //     record.posts.push({title: 'Title', description: 'description', content: 'this is some content'});
  //     record.save().then(() => {
  //       User.findOne({firstName: 'Justin'}).then(record => {
  //         assert(record.posts.length === 1);
  //         done();
  //       });
  //     });
  //   });
  // });

  // it('Deleting User from Database', done => {
  //   User.findOneAndRemove({firstName: 'Justin'}).then(() => {
  //     User.findOne({firstName: 'Justin'}).then(result => {
  //       assert(result === null);
  //       done();
  //     });
  //   });
  // });
});