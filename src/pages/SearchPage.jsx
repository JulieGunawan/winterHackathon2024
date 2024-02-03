import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import './SearchPage.css';
import data from '../data';

export default function SearchPage() {
    const [selectedLanguage, changeSelectedLanguage] = useState('eng');
    const dropdownChangeHandler = event => {
        changeSelectedLanguage(event.target.value);
    }
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