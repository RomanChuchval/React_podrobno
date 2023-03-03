import React, {useCallback, useState} from 'react';

export const CounterWithBooks = () => {

    const [count, setCount] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['angular', 'vue', 'react', 'html'])
    console.log('CounterWithBooks')
    console.log(books)
    const onSetCountHandler = () => {
        setCount(count + 1)
    }

     // const addBook = () => setBooks([...books, 'JSJS'])

    const memoizedAddBook = useCallback(()=>{
        setBooks([...books, 'JS'])
    }, [books])


    return (
        <div>
            <button onClick={onSetCountHandler}>{count}</button>
            <BooksContainer addBook={memoizedAddBook} />
        </div>
    );
};


type BooksPropsType = {
    addBook: () => void
}

const Books = (props: BooksPropsType) => {

    console.log('Books render')

    return (
        <div>
            <button onClick={props.addBook}>add new book</button>
        </div>
    );
};

const BooksContainer = React.memo(Books)



