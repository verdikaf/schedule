// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// // const expect = chai.expect;
// const expect = require('chai').expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("subjects Endpoint", ()=> {
//  it("should be unauthorized to get all subjects without token", (done) => {
//    chai.request(server)
//    .get('/api/subjects')
//    .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be unauthorized to insert new subjects without token", (done) => {
//   chai.request(server)
//   .post('/api/subjects')
//   .end((err, res) => {
//     res.should.have.status(401);
//     done();
//   });
// });
// it("should be not found update subjects without id", (done) => {
//   chai.request(server)
//   .put('/api/subjects')
//   .end((err, res) => {
//     res.should.have.status(404);
//     done();
//   });
// });
// it("should be unauthorized to delete subjects without token", (done) => {
//   chai.request(server)
//   .delete('/api/subjects')
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

//  let idSubjects;
// describe("subjects", () => {
//     it("should get all subjects", (done) => {
//         chai.request(server)
//             .get('/api/subjects')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 done();
//             });
//     })
//  it("should get all subjects", (done)=> {
//    chai.request(server)
//    .get('/api/subjects')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// // it("should insert new subjects", (done)=> {
// //    chai.request(server)
// //    .post('/api/subjects')
// //    .set('authorization',`Bearer ${token}`)
// //    .send({ 
// //         name: 'Javascript Language (Node.JS)'
// //     })
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      console.log(res.body.data)
// //      done();
// //    });
// //  })
// it("should update subjects by id", (done) => {
//   chai.request(server)
//       .put('/api/subjects/' + '5ebb6859d86efd7b9c4148bd') 
//     //   *ISI IDSUBJECTS YG DIINSERT
//       .set('authorization', `Bearer ${token}`)
//       .send({
//         name: 'Javascript Language (VUE.JS)'
//       })
//       .end((err, res) => {
//           expect(err).to.be.null;
//           res.should.have.status(200);
//           console.log(res.body);
//           done();
//       });
// })
// // it("should delete subjects by id", (done) => {
// //   chai.request(server)
// //     //   .delete('/api/subjects/' + '') *TAMBAHIN ID SUBJECTS
// //       .set('authorization', `Bearer ${token}`)
// //       .end((err, res) => {
// //           expect(err).to.be.null;
// //           res.should.have.status(200);
// //           console.log(res.body);
// //           done();
// //       });
// // });
// })