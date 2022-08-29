import express from 'express';
import Service from '../service';

const router = express.Router();

router.post('/postCard', Service.saveData);
router.get('/getCard/', Service.getData);
router.get('/getCard/:id', Service.getById);
router.get('/getCategory/:category', Service.getCategory);
router.patch('/updateCard/:id', Service.editData);
router.delete('/deleteCard/:id', Service.deleteDatas);

export = router;