import StoryCard from "../components/StoryCard";

function Stories() {
    
    const stories = [
        
    ]

    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories
