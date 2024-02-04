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
import { CA } from "country-flag-icons/react/3x2";
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
          </CardContent>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {person.reviewData.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-3">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Card>

        {/* <Card className="w-[350px]">
                <CardHeader>
                </CardHeader>
                <CardContent>
                <form>  
                    <div className="grid grid-cols-4">
                        <Avatar className="flex w-14 h-14 align-bottom">
                        <AvatarImage src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="" />
                        </Avatar>
                        <div className='block col-span-3'>
                            <div className='grid grid-cols-3 text-left items-center py-2'>
                                <Label htmlFor="name" className="text-lg text-left col-span-2">Denise Menice</Label>
                                <CheckIcon className='h-4 w-4' />
                            </div>
                            <div className='grid grid-cols-3 text-left'>
                                <Label className="block text-left col-span-2" htmlFor="name">Country of Birth: Canada</Label>
                                <CA title="Canada"className="h-4 w-4" />
                            </div>
                        </div>  
                    </div>
                </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card> */}
      </>
    );
  }
};

export default Profile;
