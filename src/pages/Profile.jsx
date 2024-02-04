import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CheckIcon } from "@radix-ui/react-icons";
import Flags from "country-flag-icons/react/3x2";
import { Link, useParams } from "react-router-dom";
// import {people} from '../ambassadors'
import data from "../data";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Star from "../components/Star";

const Profile = () => {
  // if (people.id==id)

  const { id } = useParams();
  const [person, setPerson] = useState(null);
  

  useEffect(() => {
    // Filter the data array to find the person with the matching id
    console.log("id = ", id);
    const selectedPerson = data.find((person) => person.id === parseInt(id));
    console.log("selectedPerson = ", selectedPerson);
    setPerson(selectedPerson);

  }, [id]); // Re-run effect whenever id changes
    
  

  const StarRating = ({rating}) => {
    return (
      <span className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <Star 
             key={index} 
             filled={true} />
          ))}
      </span>
    );
  };
  
  if (!person) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  } else {
    return (
      <>
        <Card className="w-[350px] mx-auto my-10">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 items-center">
              <div className="block">
                <Avatar className="block w-14 h-14 align-bottom mx-auto">
                  <AvatarImage
                    src={person.img}
                    alt=""
                    className="object-cover"
                  />
                </Avatar>
                <div className="grid grid-cols-2 text-center items-center">
                  <Label className="block text-center py-2" htmlFor="name">
                    {person.country}
                  </Label>
                  <div className="uppercase">{person.lang}</div>
                </div>
                <div className="block text-left items-center py-2">
                  <Label
                    htmlFor="name"
                    className="text-lg text-left col-span-2"
                  >
                    {person.name}
                  </Label>
                </div>
              </div>
              <div className="block text-xs">
                {person.aboutMe.substring(0, 200) + "..."}
              </div>
            </div>
    
            <div className="block text-center py-5">
              <div className="w-[80px] mx-auto">
                <StarRating  rating={person.ratings}/>
              </div>
              <div className="block text-md font-bold py-2">
                STAR RATINGS
              </div>
            </div>
            <Carousel opts={{align: "start",}} className="w-[260px] mx-auto">
                <CarouselContent>
                  {person.reviewData.map((review, index) => {
                    const flagNation = review.flagNation
                    const Flag = Flags[flagNation];
                    return (
                      <>
                      <CarouselItem key={index} >
                        <div className="p-1">
                          <Card className="w-[240px] mx-auto ">
                            <CardContent className="flex aspect-square items-center justify-center p-3">
                              <div className="block">
                                <div className="grid grid-cols-2">
                                  <Avatar className="block w-14 h-14 align-bottom mx-auto">
                                    <AvatarImage
                                      src={review.img}
                                      alt=""
                                      className="object-cover"
                                    />
                                  </Avatar>
                                  <div className="block">
                                    <div className="flex">
                                      <Label
                                          htmlFor="name"
                                          className="text-lg text-left"
                                        >
                                          {review.reviewerName}
                                      </Label>
                                    
                                      <Flag className="flex text-left mx-4 py-2 w-8 h-8" htmlFor="name"></Flag>
                                    </div>
                                    <div className="block text-xs my">
                                      {review.timeReviewWasAdded} weeks ago
                                    </div>
                                  </div>
                                </div>
                                    
                                <div className="block text-xs my-4 ">  
                                  <div className="flex text-xs ">
                                    <StarRating  rating={review.stars} />
                                  </div>
                                  <div className="block text-xs ">
                                    {review.reviewContent.substring(0, 150) + "..."}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                      </>
                    )}
                  )};
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
          </CardContent>          
        </Card>
      </>
    );
  }
};

export default Profile;
