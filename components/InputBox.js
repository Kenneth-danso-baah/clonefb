import Image from 'next/image';
import {useSession} from 'next-auth/client';
import {EmojiHappyIcon} from '@heroicons/react/outline';
import {CameraIcon,VideoCameraIcon} from '@heroicons/react/solid'
import {useState,useRef} from 'react';
import {db, storage} from '../firebase'
import firebase from 'firebase'

function InputBox() {
    const inputRef = useRef(null)
    const [session]=useSession();
    const filePickerRef = useRef();
    const [imageToPost,setImageToPost]=useState(null)

    const addPhoto=(e)=>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);

           reader.onload = (readerEvent)=>{
               setImageToPost(readerEvent.target.result);
           };  
        };

    }

   const removeImage =()=>{
       setImageToPost(null);
   }


    const sendPost=(e)=>{
        e.preventDefault();
        if(!inputRef.current.value) return;
        db.collection('posts').add({
            message:inputRef.current.value,
            name:session.user.name,
            email:session.user.email,
            image:session.user.image,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }).then((doc)=>{
             if(imageToPost){
                 const upLoadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,
                    'data_url');

                    removeImage();
                    upLoadTask.on(
                        'state_change',
                        null,
                        error=>console.error(error),
                    ()=>{
                        storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
                            db.collection('posts').doc(doc.id).set({
                                postImage:url
                            },{merge:true})
                        })

                 })
             }
        });
        inputRef.current.value ="";
    };
    return (
        <div className="bg-white p-2 mt-10 rounded-2xl shodow-md
        text-gray-500">
            <div className="flex space-x-4 p-4 items-center">
            <Image 
              className="rounded-full"
              src={session.user.image}
              width={40}
              height={40}
              layout="fixed" 
              />

              <form className="flex flex-1">
                  <input
                  className="rounded-full h-12 bg-gray-100 px-5 flex-grow focus:outline-none"
                  type="text"
                  ref={inputRef}
                  placeholder={ `What's on your mind, ${session.user.name}`}
                  />
                  <button hidden onClick={sendPost}>Submit</button>
              </form>
              {imageToPost && (
                  <div onClick={removeImage} className="flex-col 
                  hover:brightness-110 transition duration-150
                  transform hover:scale-105 cursor-pointer">
                      <img className="h-7 object-contain rounded-full"
                      src={imageToPost} alt=""/>
                      <p className="text-xs text-red-500 
                      text-center">Remove</p>
                  </div>
              )}
            </div>

              <div className="flex justify-evenly p-3 border-t">
                  <div className="inputIcon" >
                      <VideoCameraIcon className="h-7 text-red-500"/>
                      <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                  </div>

                  <div onClick={()=>filePickerRef.current.click()} className="inputIcon">
                      <CameraIcon className="h-7 text-green-400"/>
                      <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                      <input onChange={addPhoto} ref={filePickerRef}type="file" hidden />
                  </div>
                  <div className="inputIcon" >
                  <EmojiHappyIcon className="h-7 text-yellow-300"/>
                      <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                  </div>

             </div>
        </div>
       
    )
}

export default InputBox
