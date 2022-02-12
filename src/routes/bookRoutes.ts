import {Router} from 'express'
import {addNewBook, deleteBook, getBookById, updateBook} from '../controllers/bookController'
import {getBooks} from '../controllers/bookController'
const router = Router();

router.post('/books', addNewBook)
router.get('/books', getBooks)
router.get('/books/:id', getBookById)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)

export default router;