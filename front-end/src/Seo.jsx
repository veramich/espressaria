const SITE_URL = "https://espressariacafe.com";

/**
 * Per-page document metadata. React 19 hoists <title>, <meta>, and <link>
 * rendered anywhere in the tree into <head>, so no helmet library is needed.
 */
export default function Seo({ title, description, path = "/" }) {
    const canonical = `${SITE_URL}${path}`;
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
        </>
    );
}
