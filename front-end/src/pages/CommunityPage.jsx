import communityImage from "../assets/community.jpeg";
import Seo from "../Seo";

export default function CommunityPage() {

    const instagramOnClick = () => {
        window.open("https://www.instagram.com/reels/DTY5mHJEiBF/", "_blank", "noopener,noreferrer");
    }

    return(
        <>
        <Seo
            title="Community | Espressaria Cafe — A Latina Women-Led Coffee Business in South Central LA"
            description="More than just coffee. Espressaria Café is a family-owned, latina women-led business serving South Central LA's neighborhoods, schools, and small businesses."
            path="/community"
        />
        <h1>Our Community</h1>
        <img src={communityImage} alt="Photo of Espressaria owner with Mayor Karen Bass" width="240"/>
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