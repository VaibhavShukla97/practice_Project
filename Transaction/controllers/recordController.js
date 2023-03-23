import { Record } from "../models/record";
// import CustomErrorHandler from "../services/CustomErrorHandler";

// exports.recordController = {
//     async transaction(req, res, next) {
//           const {date,amount,message,accountType} = req.body;
//           let document ;
//           try {
//                 document = await Record.create({
//                     date,
//                     amount,
//                     message,
//                     accountType
//                 });
//             } catch (err) {
//                     return next(err);
//                 }
//             res.status(201).json(document);
//     }
// };



// export default recordController;