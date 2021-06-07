import StoryCard from './StoryCard';
const stories = [
    {
        name:"sticky",
        // src:"https://links.papareact.com/zof",
        src:"/gee.jpg",
        profile:"/sunlight.png",
    },
    {
        name:"Highest",
        src:"/cover3.jpg",
        profile:"/EjjkqGOXsAQR67W.jpeg",
    },

    {
        name:"Jeff Bezoz",
        src:"/cover2.jpg",
        profile:"/cover1.jpg",
    },

    {
        name:"Mark Zuckerberg",
        src:"/3nity.jpg",
        profile:"/plug2.jpg",
    },

    {
        name:"Bill Gates",
        src:"/abaga.jpg",
        profile:"/source.jpg",
    },
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story=>(
                <StoryCard 
                key={story.src}
                name={story.name} 
                src={story.src}
                 profile={story.profile}/>
            ))}
            
        </div>
    )
}

export default Stories
