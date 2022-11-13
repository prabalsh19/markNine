import { useState } from "react";
import "./styles.css";

export default function App() {
  const selfHelp = [
    {
      name: "Subtle Art Of Not Giving A Fuck",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg",
      author: "Mark Manson",
      buyUrl: "https://amzn.eu/d/aS8TxkK"
    },
    {
      name: "Sapiens",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71LMXL8DTjL.jpg",
      author: "Yuval Noah Harari",
      buyUrl: "https://amzn.eu/d/iNdr4RI"
    },
    {
      name: "Can't Hurt Me",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61eUu0OPzgL.jpg",
      author: "David Goggins",
      buyUrl: "https://amzn.eu/d/7xzi8eV"
    }
  ];
  const finance = [
    {
      name: "Psychology of Money",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81Lb75rUhLL.jpg",
      author: "Morgan Housel",
      buyUrl: "https://amzn.eu/d/04QGfiF"
    },
    {
      name: "Rich Dad Poor Dad",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "Robert T. Kiyosaki",
      buyUrl: "https://amzn.eu/d/3pohZB8"
    }
  ];
  const fiction = [
    {
      name: "Harry potter",
      coverUrl:
        "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/harry_potter_8film_2000x3000.jpg",
      author: "J.K Rowling",
      buyUrl: "https://amzn.eu/d/fPckmgj"
    },
    {
      name: "The Alchemist",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
      author: "Paulo Coelho",
      buyUrl: "https://amzn.eu/d/6vWCxBN"
    }
  ];
  const [selectedGenre, setSelectedGenre] = useState(selfHelp);
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="icon">
          📔
        </span>{" "}
        BOCOMMEND
      </h1>
      <p>Have a look at my favorite books. Select a genre to get started</p>
      <div className="genre-btns">
        <button onClick={() => setSelectedGenre(selfHelp)}>Self help</button>
        <button onClick={() => setSelectedGenre(fiction)}>Fiction</button>
        <button onClick={() => setSelectedGenre(finance)}>Finance</button>
      </div>
      <div className="divider"></div>
      <div>
        {selectedGenre.map((book) => {
          return (
            <div className="book">
              <a href={book.buyUrl}>
                <img
                  alt="book cover"
                  className="book-cover"
                  src={book.coverUrl}
                ></img>
              </a>
              <div>
                <div className="title">{book.name}</div>
                <div className="author">{book.author}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
