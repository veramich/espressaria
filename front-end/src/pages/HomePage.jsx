export default function HomePage() {

    const instagramOnClick = () => {
        window.open("https://www.instagram.com/espressariacafe/", "_blank", "noopener,noreferrer");
    }
    return(
        <>
        <img src="/images/logo.png" alt="Logo" width="240"/>
        <h3>Espressaria Café is a home-based specialty coffee 
            business built on passion, quality, and connection. 
            What started as a love for coffee and baking has 
            grown into a neighborhood favorite where every drink
            is made with intention, care, and creativity.
        </h3>
        <h3>
            Whether you're stopping by for your daily caffeine 
            boost, ordering for your workplace, or trying one of 
            our signature drinks for the first time, Espressaria 
            Café is committed to delivering quality you can taste.
        </h3>

         <button onClick={instagramOnClick}>View on Instagram</button>


        </>
    )
}