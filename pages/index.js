import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import {db} from '../firebase'

export default function Home({session}) {
  if (!session) return <Login/>
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
      </Head>

      {/* Header */}
       <Headers/>

       <main className="flex">
         {/* sidebar */}
         <Sidebar/>

         {/* Feed */}
         <Feed/>
         
         <Widgets/>
     
        </main>

    </div>
  )
}


export async function getServerSideProps(context){
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp","desc").get();
  const docs = posts.docs.map((post)=>({
    id:post.id,
    ...post.data(),
    timestamp:null,
  }))
  return{
    props:{
      session,
    },
  };
}