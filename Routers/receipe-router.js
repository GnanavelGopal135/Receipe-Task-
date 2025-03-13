import express from 'express';
import {createReceipe,getAllReceipe,getReceipeById,updateReceipeByID,deleteReceipeById} from '../Controllers/receipe-controller.js'


const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.post('/createReceipe',createReceipe);
router.get('/getAllReceipe',getAllReceipe);
router.get('/getReceipeById/:id',getReceipeById);
router.put('/updateReceipeByID/:id',updateReceipeByID);
router.delete('/deleteReceipeById/:id',deleteReceipeById);



export default router;