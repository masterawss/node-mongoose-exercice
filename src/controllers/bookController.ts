import express, {Request, Response} from 'express';
import {BookModel as Book, IBook} from '../models/bookModel';
export const addNewBook = async (req: Request, res: Response) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(200).json({ book })
    } catch (error) {
         res.status(400).json({ error })
    }
}
    
export const getBooks = async (req: Request, res: Response) => {
    try {
        const books: IBook[] = await Book.find({})
        res.status(200).json({ books })
    } catch (error) {
        res.status(400).json({ error })
    }

}


export const getBookById = async (req: Request, res: Response) => {

    try {
        const bookId = req.params.id;
        const book: IBook|null = await Book.findById({bookId})
        res.status(200).json({ book })
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const updateBook = async (req: Request, res: Response) => {

    const bookId = req.params.id;
    const newBookInfo = req.body;
    try {
        const book: IBook|null =  await Book.findOneAndUpdate({_id: bookId}, newBookInfo, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            console.log(doc);
        })
        res.status(200).json({ book })
    } catch (error) {
        res.status(400).json({ error })
    }
}

    export const deleteBook = async (req: Request, res: Response) => {
        const bookId = req.params.id;
        try {
            await Book.deleteOne({_id: bookId})
            res.status(200).json({ message: 'book successfully deleted' });
        } catch (error) {
            res.status(400).json({ error })
        }
    }