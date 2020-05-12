// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = chai.expect;
// // const expect = require('chai').expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("Users Endpoint", ()=> {
//  it("should be unauthorized to get all users without token", (done) => {
//    chai.request(server)
//    .get('/api/users')
//    .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be unauthorized to insert new users without token", (done) => {
//   chai.request(server)
//   .post('/api/users')
//   .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be not found update users without id", (done) => {
//   chai.request(server)
//   .put('/api/users')
//   .end((err, res) => {
//     res.should.have.status(404);
//     done();
//   });
// });
// it("should be unauthorized to delete users without token", (done) => {
//   chai.request(server)
//   .delete('/api/users')
//   .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// })

// let token;
// describe("Login", ()=> {
//  it("should return token", (done) => {
//    chai.request(server)
//    .get('/auth/login')
//    .auth('maria', '123456')
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      token = res.body.token;
//      done();
//    });
//  });
// })

//  let idUsers;
// describe("Users", () => {
//     it("should get all users", (done) => {
//         chai.request(server)
//             .get('/api/users')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 // idUsers = res.body[2]._id;
//                 done();
//             });
//     })
//  it("should get all users", (done)=> {
//    chai.request(server)
//    .get('/api/users')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// it("should insert new users", (done)=> {
//    chai.request(server)
//    .post('/api/users')
//    .set('authorization',`Bearer ${token}`)
//    .send({ 
//        noId:'202007',
//        username: 'amel',
//        email:'amel@gmail.com',
//        displayName:'amel',
//        password: '123456',
//        status:'active',
//        role:'5ebaad4da2264c82989a8598'
//     })
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      console.log(res.body.data)
//      done();
//    });
//  })
// })
// // it("should update users by id", (done) => {
// //   chai.request(server)
// //       .put('/api/users/' + '5ebad58d1876772c34c92a3b')
// //       .set('authorization', `Bearer ${token}`)
// //       .send({
// //           noId: "202003",
// //           username: 'updateadminmega',
// //           role: '5e5aa6d4cf6ef11a90b266e3',
// //           password: '12345',
// //           displayName: 'Update Admin',
// //           email: 'admin@gmail.com'
// //       })
// //       .end((err, res) => {
// //           expect(err).to.be.null;
// //           res.should.have.status(200);
// //           console.log(res.body);
// //           done();
// //       });
// // })
// // it("should delete users by id", (done) => {
// //   chai.request(server)
// //       .delete('/api/users/' + '5ebad49a4a49660d2c694852')
// //       .set('authorization', `Bearer ${token}`)
// //       .end((err, res) => {
// //           expect(err).to.be.null;
// //           res.should.have.status(200);
// //           console.log(res.body);
// //           done();
// //       });
// // });
// // })
