import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import {CheckIcon} from '@radix-ui/react-icons'
import { CA } from 'country-flag-icons/react/3x2'
// import {people} from '../ambassadors'

const Profile = () =>{
    // const {name} = props;
    // if (people.id==id)

    <Card className="w-[350px]">
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
        <div className="flex flex-col space-y-3">
            <Label htmlFor="framework" className="y-">Framework</Label>
            <Select>
            <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
            </SelectContent>
            </Select>
        </div>
        
    </form>
    </CardContent>
    <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
    </CardFooter>
    </Card>
};

export default Profile;