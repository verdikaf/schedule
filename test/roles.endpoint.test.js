// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();

// describe("Roles Endpoint", ()=> {
//  it("should be unauthorized to get all roles without token", (done) => {
//    chai.request(server)
//    .get('/api/roles')
//    .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be unauthorized to insert new roles without token", (done) => {
//   chai.request(server)
//   .post('/api/roles')
//   .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be not found update roles without id", (done) => {
//   chai.request(server)
//   .put('/api/roles')
//   .end((err, res) => {
//     res.should.have.status(404);
//     done();
//   });
// });
// it("should be unauthorized to delete roles without token", (done) => {
//   chai.request(server)
//   .delete('/api/roles')
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
//  let idRoles;
//  describe("Roles", () => {
//      it("should get all roles", (done) => {
//          chai.request(server)
//              .get('/api/roles')
//              .set('authorization', `Bearer ${token}`)
//              .end((err, res) => {
//                  expect(err).to.be.null;
//                  res.should.have.status(200);
//                  console.log(res.body)
//                 //  idRoles = res.body[0]._id;
//                  done();
//              });
//      })

//  it("should get all roles", (done)=> {
//    chai.request(server)
//    .get('/api/roles')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// it("should insert new roles", (done)=> {
//    chai.request(server)
//    .post('/api/roles')
//    .set('authorization',`Bearer ${token}`)
//    .send({ 
//      name: 'student', 
//      name_long:'Student 2', 
//      priority: 1, 
//      description: 'Student 2' 
//     })
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      console.log(res.body.data)
//      done();
//    });
//  })
//  it("should update roles by id", (done) => {
//   chai.request(server)
//       .put('/api/roles/' + '5ebaad4da2264c82989a8598')
//       .set('authorization', `Bearer ${token}`)
//       .send({
//           name_long: 'Teacher',
//       })
//       .end((err, res) => {
//           expect(err).to.be.null;
//           res.should.have.status(200);
//           console.log(res.body);
//           done();
//       });
// })
// it("should delete roles by id", (done) => {
//   chai.request(server)
//       .delete('/api/roles/' + '5ebac6a191a30d7fec5f94c1')
//       .set('authorization', `Bearer ${token}`)
//       .end((err, res) => {
//           expect(err).to.be.null;
//           res.should.have.status(200);
//           console.log(res.body);
//           done();
//       });
// })
// });

