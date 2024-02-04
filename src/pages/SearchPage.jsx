import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import "./SearchPage.css";
import data from "../data";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [selectedLanguage, changeSelectedLanguage] = useState("eng");
  const dropdownChangeHandler = (event) => {
    changeSelectedLanguage(event.target.value);
  };
  const dataToUse = data.filter((d) => d.lang === selectedLanguage);
  return (
    <>

      <div className="dropdown-component">
        <form>
          <select value={selectedLanguage} onChange={dropdownChangeHandler}>
            <option value="eng" label="English"></option>
            <option value="fr" label="French"></option>
            <option value="man" label="Mandarin"></option>
            <option value="can" label="Cantonese"></option>
          </select>
        </form>
        <CiHeart className="text-xl" />
      </div>

      <div className="driver-card-container">
        {dataToUse.map((d) => {
          return (
            <div className="driver-card" key={d.id}>
              <Link className="list-item" to={`/drivers/${d.id}`}>
                <div>
                  <div className="image-name-container">
                    <div className="image-container">
                      <img src={d.img} alt="" />
                    </div>

                    <div className="side-container">
                      <div className="name-container">
                        <h2>{d.name}</h2>
                        <div className="tag-containers">
                          <CiBookmark className="bookmark-tag" />
                          <CiHeart className="heart-icon" />
                        </div>
                      </div>

                      <div className="cost-rating-container">
                        <div className="text-center">
                          <div className="price">${d.price}</div>
                          <p className="duration">{d.tourDuration} minutes</p>
                        </div>

                        <div className="text-center">
                          <div className="ratings">
                            <IoIosStarOutline className="star-icon" />
                            {d.ratings}
                          </div>
                          <div className="reviews">{d.reviews} reviews</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="driver-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis pariatur natus, reprehenderit voluptas praesentium
                    laboriosam mollitia facilis quo eos quia ab? Esse cumque ad
                    ipsam magni perferendis voluptatibus impedit officiis?
                  </p>
                </div>
              </Link>
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
