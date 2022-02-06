import express from 'express';
import { getCards,createCard,updateCard,deleteCard,likeCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.post('/',createCard);
router.patch('/:id',updateCard);
router.delete('/:id',deleteCard);
router.patch('/:id/likePost',likeCard);


export default router;