export default function CommunityPage() {

    const instagramOnClick = () => {
        window.open("https://www.instagram.com/reels/DTY5mHJEiBF/", "_blank", "noopener,noreferrer");
    }

    return(
        <>
        <h1>Our Community</h1>
        <img src="./src/assets/community.jpeg" alt="Photo of Espressaria owner with Mayor Karen Bass" width="240"/>
        <h3>More than just coffee, Espressaria Café is about 
            community. We proudly serve our local neighborhood, 
            schools, small businesses, and families. As a 
            family-owned, latina women-led business, we believe 
            in keeping dollars local, uplifting other small 
            businesses, and showing our children what passion, 
            consistency, and hard work can build.
        </h3>
        <button onClick={instagramOnClick}>View on Instagram</button>
        </>
    )
}