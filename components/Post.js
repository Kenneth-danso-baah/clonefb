import Image from 'next/image';
import {CalendarIcon, ChatAltIcon,ChatIcon,ShareIcon,ThumbUpIcon} from '@heroicons/react/outline'

function Post({name,message,email,postImage,image,timestamp}) {
    return (
 <div className="flex-grow ">
     <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
         <img
         className="rounded-full"
         src={image}
         width={40}
         height={40}
         alt=""
         />
         <div>
             <p className="font-medium">{name}</p>
             <p className="text-xs text-gray-500">
                 {new Date(timestamp?.toDate()).toLocaleString()}
             </p>
         </div>
         </div>
         <p className="pt-4">{message}</p>

     </div>
       {postImage &&(
           <div className="relative h-56 md:h-96 bg-white">
               <Image src={postImage} objectFit="cover" layout="fill"/>
           </div>
       )}

       <div className="flex justify-between items-center rounded-b-2xl bg-white
       shadow-md text-gray-400 border-t">
           <div className="inputIcon rounded-none rounded-bl-2xl bg-white">
               <ThumbUpIcon className="h-4"/>
               <p className="text-xs sm:text-base">Like</p>
           </div>
           <div className="inputIcon rounded-none rounded-bl-2xl bg-white">
               {/* <ShareIcon/> */}
               <ChatAltIcon className="h-4"/>
               <p className="text-xs sm:text-base">comment</p>
           </div>
           <div className="inputIcon rounded-none rounded-bl-2xl bg-white">
               <ShareIcon className="h-4"/>
               <p className="text-xs sm:text-base" >share</p>
           </div>
       </div>
    </div>
    )
}

export default Post
