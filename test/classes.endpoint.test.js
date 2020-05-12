// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// // const expect = chai.expect;
// const expect = require('chai').expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("class Endpoint", ()=> {
//  it("should be unauthorized to get all class without token", (done) => {
//    chai.request(server)
//    .get('/api/classes')
//    .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be unauthorized to insert new classes without token", (done) => {
//   chai.request(server)
//   .post('/api/classes')
//   .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be not found update classes without id", (done) => {
//   chai.request(server)
//   .put('/api/classes')
//   .end((err, res) => {
//     res.should.have.status(404);
//     done();
//   });
// });
// it("should be unauthorized to delete classes without token", (done) => {
//   chai.request(server)
//   .delete('/api/classes')
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

//  let idClasses;
// describe("classes", () => {
//     it("should get all classes", (done) => {
//         chai.request(server)
//             .get('/api/classes')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 // idC;a = res.body[2]._id;
//                 done();
//             });
//     })
//  it("should get all classes", (done)=> {
//    chai.request(server)
//    .get('/api/classes')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// it("should insert new classes", (done)=> {
//    chai.request(server)
//    .post('/api/classes')
//    .set('authorization',`Bearer ${token}`)
//    .send({ 
//     name: 'adrian paleka',
//     grade: '1',
//     major: 'Computer Science'
//     })
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      console.log(res.body.data)
//      done();
//    });
//  })
// // it("should update classes by id", (done) => {
// //   chai.request(server)
// //       .put('/api/classes/' + '5ebb66727314463b7437d9a5')
// //       .set('authorization', `Bearer ${token}`)
// //       .send({
// //                 name: 'adrian',
// //                 grade: '1',
// //                 major: 'Computer Science'
// //       })
// //       .end((err, res) => {
// //           expect(err).to.be.null;
// //           res.should.have.status(200);
// //           console.log(res.body);
// //           done();
// //       });
// // })
// // it("should delete classes by id", (done) => {
// //   chai.request(server)
// //       .delete('/api/classes/' + '5ebb6723ddc35937c40c2ca2')
// //       .set('authorization', `Bearer ${token}`)
// //       .end((err, res) => {
// //           expect(err).to.be.null;
// //           res.should.have.status(200);
// //           console.log(res.body);
// //           done();
// //       });
// // });
// })