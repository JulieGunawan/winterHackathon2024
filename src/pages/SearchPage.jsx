import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import './SearchPage.css';

export default function SearchPage() {
    const [selectedLanguage, changeSelectedLanguage] = useState('eng');
    const dropdownChangeHandler = event => {
        changeSelectedLanguage(event.target.value);
    }



    const data = [{
        "id": 1,
        "img": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        "name": "Sherrie Scoines",
        "price": 18,
        "tourDuration": 60,
        "ratings": 4.14,
        "lang": "eng",
        "reviews": 59.31
    }, {
        "id": 2,
        "img": "http://dummyimage.com/100x100.png/dddddd/000000",
        "name": "Maddy Nucciotti",
        "price": 36,
        "tourDuration": 27,
        "ratings": 3.51,
        "lang": "eng",
        "reviews": 35.76
    }, {
        "id": 3,
        "img": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        "name": "Winne Benninck",
        "price": 2,
        "tourDuration": 42,
        "ratings": 3.75,
        "lang": "can",
        "reviews": 30.22
    }, {
        "id": 4,
        "img": "http://dummyimage.com/100x100.png/dddddd/000000",
        "name": "Francisca Coventon",
        "price": 1,
        "tourDuration": 51,
        "ratings": 4.36,
        "lang": "can",
        "reviews": 11.38
    }, {
        "id": 5,
        "img": "http://dummyimage.com/100x100.png/ff4444/ffffff",
        "name": "Twyla Tace",
        "price": 8,
        "tourDuration": 29,
        "ratings": 4.91,
        "lang": "fr",
        "reviews": 32.41
    }, {
        "id": 6,
        "img": "http://dummyimage.com/100x100.png/ff4444/ffffff",
        "name": "Darwin Artus",
        "price": 8,
        "tourDuration": 35,
        "ratings": 4.3,
        "lang": "fr",
        "reviews": 59.88
    }, {
        "id": 7,
        "img": "http://dummyimage.com/100x100.png/cc0000/ffffff",
        "name": "Tracie Lanfranconi",
        "price": 38,
        "tourDuration": 23,
        "ratings": 4.98,
        "lang": "man",
        "reviews": 95.24
    }, {
        "id": 8,
        "img": "http://dummyimage.com/100x100.png/dddddd/000000",
        "name": "Marga Langthorne",
        "price": 17,
        "tourDuration": 21,
        "ratings": 4.84,
        "lang": "man",
        "reviews": 9.27
    }, {
        "id": 9,
        "img": "http://dummyimage.com/100x100.png/cc0000/ffffff",
        "name": "Tamar Beminster",
        "price": 12,
        "tourDuration": 19,
        "ratings": 3.4,
        "lang": "man",
        "reviews": 48.8
    }, {
        "id": 10,
        "img": "http://dummyimage.com/100x100.png/dddddd/000000",
        "name": "Dagmar MacInherney",
        "price": 42,
        "tourDuration": 55,
        "ratings": 4.22,
        "lang": "man",
        "reviews": 27.11
    }]

    const dataToUse = data.filter(d => d.lang === selectedLanguage);


    return (
        <>
            <p>{selectedLanguage}</p>

            <div id="dropdown-component">
                <form>
                    <select value={selectedLanguage} onChange={dropdownChangeHandler}>
                        <option value="eng" label="English"></option>
                        <option value="fr" label="French"></option>
                        <option value="man" label="Mandarin"></option>
                        <option value="can" label="Cantonese"></option>
                    </select>
                </form>
                <CiHeart />
            </div>

            {/* <div id="driver-card" key={data[0].id}>
                <div id="image-name-container" className="image-name-container">
                    <div className="image-container"><img src={data[0].img} alt="" /></div>
                    <div className="side-container">
                        <div className="name-container">
                            <h2>{data[0].name}</h2>
                            <CiBookmark className="bookmark-tag" />
                            <CiHeart className="heart-icon" />
                        </div>
                        <div className="cost-rating-container">
                            <div>
                                <span className="price">${data[0].price}</span>
                                <p className="duration">{data[0].tourDuration} minutes</p>
                            </div>
                            <div>
                                <div className="ratings"><IoIosStarOutline className="star-icon" /> {data[0].ratings}</div>
                                <div className="reviews">{data[0].reviews} reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="driver-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur natus, reprehenderit voluptas praesentium laboriosam mollitia facilis quo eos quia ab? Esse cumque ad ipsam magni perferendis voluptatibus impedit officiis?
                </p>
            </div> */}

            <div className="driver-card-container">
                {dataToUse.map(d => {
                    return (
                        <div id="driver-card" key={d.id}>
                            <div id="image-name-container" className="image-name-container">
                                <div className="image-container"><img src={d.img} alt="" /></div>
                                <div className="side-container">
                                    <div className="name-container">
                                        <h2>{d.name}</h2>
                                        <CiBookmark className="bookmark-tag" />
                                        <CiHeart className="heart-icon" />
                                    </div>
                                    <div className="cost-rating-container">
                                        <div>
                                            <span className="price">${d.price}</span>
                                            <p className="duration">{d.tourDuration} minutes</p>
                                        </div>
                                        <div>
                                            <div className="ratings"><IoIosStarOutline className="star-icon" /> {d.ratings}</div>
                                            <div className="reviews">{d.reviews} reviews</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="driver-info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur natus, reprehenderit voluptas praesentium laboriosam mollitia facilis quo eos quia ab? Esse cumque ad ipsam magni perferendis voluptatibus impedit officiis?
                            </p>
                        </div>
                    );
                })}
            </div>

        </>
    );
}

/* 
{
    id,
    img,
    img-alt,
    name,
    price,
    tour-duration,
    ratings,
    total-reviews,
    small-desc
}
 */