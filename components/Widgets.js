import Contact from './Contact'
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
const contacts =[
    { src:"/oldgee.jpg",name:"Nana Danso"},
    { src:"/maa.jpg",name:"Emelia Danso"},
    { src:"/somuah.jpg",name:"Maame Somuah"},
    { src:"/joe.jpg",name:"Michael Danso"},
    { src:"/devs.jpg",name:"Gees on Codes"},
    { src:"/clique.jpg",name:"Fashionova"},
    { src:"/tley.png",name:"Bentley"}
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between text-gray-500 items-center mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
           {contacts.map((contact)=>(
               <Contact key={contact.src}
               src={contact.src} name={contact.name}/>
           ))}
        </div>
    )
}

export default Widgets
