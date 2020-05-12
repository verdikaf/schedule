// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// // const expect = chai.expect;
// const expect = require('chai').expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("rooms Endpoint", ()=> {
//  it("should be unauthorized to get all rooms without token", (done) => {
//    chai.request(server)
//    .get('/api/rooms')
//    .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be unauthorized to insert new rooms without token", (done) => {
//   chai.request(server)
//   .post('/api/rooms')
//   .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be not found update rooms without id", (done) => {
//   chai.request(server)
//   .put('/api/rooms')
//   .end((err, res) => {
//     res.should.have.status(404);
//     done();
//   });
// });
// it("should be unauthorized to delete rooms without token", (done) => {
//   chai.request(server)
//   .delete('/api/rooms')
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

//  let idRooms;
// describe("rooms", () => {
//     it("should get all rooms", (done) => {
//         chai.request(server)
//             .get('/api/rooms')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 // idRooms = res.body[2]._id;
//                 done();
//             });
//     })
//  it("should get all rooms", (done)=> {
//    chai.request(server)
//    .get('/api/rooms')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// it("should insert new rooms", (done)=> {
//    chai.request(server)
//    .post('/api/rooms')
//    .set('authorization',`Bearer ${token}`)
//    .send({ 
//        name:'room 303'
//     })
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      console.log(res.body.data)
//      done();
//    });
//  })
// it("should update rooms by id", (done) => {
//   chai.request(server)
//       .put('/api/rooms/' + '5ebb66727314463b7437d9a5')
//       .set('authorization', `Bearer ${token}`)
//       .send({
//           name: "room 301"
//       })
//       .end((err, res) => {
//           expect(err).to.be.null;
//           res.should.have.status(200);
//           console.log(res.body);
//           done();
//       });
// })
// it("should delete rooms by id", (done) => {
//   chai.request(server)
//       .delete('/api/rooms/' + '5ebb6723ddc35937c40c2ca2')
//       .set('authorization', `Bearer ${token}`)
//       .end((err, res) => {
//           expect(err).to.be.null;
//           res.should.have.status(200);
//           console.log(res.body);
//           done();
//       });
// });
// })
