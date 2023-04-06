import {useState} from "react";
import style from "./Reviews.module.css";

const Reviews = (props) => {
    const [reviews, setReviews] = useState([
        {
            author: "Alex",
            title: "product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eveniet fugiat officia quibusdam, temporibus! Aliquid assumenda autem, consequuntur culpa excepturi maxime quo reiciendis. Exercitationem harum quas quibusdam ratione voluptates!",
            date: "21/12/2022",
            rating: 5
        },
        {
            author: "Vlad",
            title: "product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eveniet fugiat officia quibusdam, temporibus! Aliquid assumenda autem, consequuntur culpa excepturi maxime quo reiciendis. Exercitationem harum quas quibusdam ratione voluptates!",
            date: "21/02/2023",
            rating: 4
        },
        {
            author: "Julia",
            title: "product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eveniet fugiat officia quibusdam, temporibus! Aliquid assumenda autem, consequuntur culpa excepturi maxime quo reiciendis. Exercitationem harum quas quibusdam ratione voluptates!",
            date: "21/03/2023",
            rating: 4
        }
    ]);

    const [current, setCurrent] = useState('');

    const currentReviewHandler = (e) => {
        let newValue = e.target.value;
            setCurrent(newValue);
    }
    let date = new Date().toLocaleDateString();

    const addReviewHandler = () => {
        const newReviews = {
            author: "User",
            title: props.name,
            text: current,
            date: date,
            rating: 5
        }
        if (newReviews.text.length > 5) {
            setReviews([newReviews, ...reviews]);
        } else {
            alert("нельзя пустой отзыв")
        }
        setCurrent('');
    }

    return (
        <div className={style.reviews}>
            <h2>Отзывов: {reviews.length}</h2>
            <textarea placeholder='оствьте отзыв...' cols="30" rows="10" onChange={currentReviewHandler} value={current}></textarea>
            <button onClick={addReviewHandler}>Push</button>
            {
                reviews.map((el) => {
                    return (
                        <div className={style.revitem}>
                            <div className={style.revleft}>
                                <img src="https://images-platform.99static.com//2LSfqiezha1tSRxa_LRL6wHd9Jc=/0x253:501x753/fit-in/500x500/99designs-contests-attachments/137/137818/attachment_137818669" alt=""/>
                            </div>
                            <div className={style.revright}>
                                <h3>{el.author}</h3>
                                <h3>{el.title}</h3>
                                <p>{el.date}</p>
                                <p>{el.text}</p>
                                <p>Rating: {el.rating} stars</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Reviews;