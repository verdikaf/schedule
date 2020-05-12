// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();

// describe("Schedules Endpoint", () => {
//     it("should be unauthorized to get all schedules without token", (done) => {
//         chai.request(server)
//             .get('/api/schedules')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new schedules without token", (done) => {
//         chai.request(server)
//             .post('/api/schedules')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update schedules without id", (done) => {
//         chai.request(server)
//             .put('/api/schedules')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete schedules without token", (done) => {
//         chai.request(server)
//             .delete('/api/schedules')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
// })

// let token;

// describe("Login", () => {
//     it("should return token", (done) => {
//         chai.request(server)
//             .get('/auth/login')
//             .auth('maria', '123456')
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 token = res.body.token;
//                 done();
//             });
//     });
// });

// let idSchedules;
// describe("Schedules", () => {
//     it("should get schedules", (done) => {
//         chai.request(server)
//             .get('/api/schedules')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 idSchedules = res.body[0]._id;
//                 done();
//             });
//     })
//     it("should get schedules by id", (done) => {
//         chai.request(server)
//             .get('/api/schedules/' + idSchedules)
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 done();
//             });
//     })
    
//     it("should update schedules by id", (done) => {
//         chai.request(server)
//             .put('/api/schedules/' + idSchedules)
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 day: 'Senin',
//                 timeStart: '08.40',
//                 timeEnd: '09.20',
//                 class:'5ebb7735d86efd7b9c4148bf',
//                 subject:'5ebb6859d86efd7b9c4148bd',
//                 room:'5ebb66727314463b7437d9a5',
//                 teacher:'5ebaad4da2264c82989a8598'
//             })
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body);
//                 done();
//             });
//     })
// //     it("should delete schedules", (done) => {
// //         chai.request(server)
// //             .delete('/api/schedules')
// //             .set('authorization', `Bearer ${token}`)
// //             .end((err, res) => {
// //                 expect(err).to.be.null;
// //                 res.should.have.status(200);
// //                 console.log(res.body.data);
// //                 done();
// //             });
// //     })
// //     it("should delete schedules by id", (done) => {
// //         chai.request(server)
// //             .delete('/api/schedules/' + idSchedules)
// //             .set('authorization', `Bearer ${token}`)
// //             .end((err, res) => {
// //                 expect(err).to.be.null;
// //                 res.should.have.status(200);
// //                 console.log(res.body);
// //                 done();
// //             });
// //     })

// //     it("should insert new schedules", (done) => {
// //         chai.request(server)
// //             .post('/api/schedules')
// //             .set('authorization', `Bearer ${token}`)
// //             .send({
// //                 day: 'Senin',
// //                 timeStart: '08.40',
// //                 timeEnd: '09.20',
// //                 class:'',
// //                 subject:'',
// //                 room:'',
// //                 teacher:''
// //             })
// //             .end((err, res) => {
// //                 expect(err).to.be.null;
// //                 res.should.have.status(200);
// //                 console.log(res.body.data)
// //                 done();
// //             });
// //     })
    
    
// })