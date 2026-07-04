import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  robots,
  openGraph = {},
  twitter = {},
  jsonLd,
}) {
  const ogTitle = openGraph.title || title;
  const ogDescription = openGraph.description || description;
  const ogUrl = openGraph.url || canonical;
  const twitterTitle = twitter.title || title;
  const twitterDescription = twitter.description || description;
  const twitterCard = twitter.card || "summary_large_image";
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {openGraph.type && <meta property="og:type" content={openGraph.type} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {openGraph.siteName && (
        <meta property="og:site_name" content={openGraph.siteName} />
      )}
      {openGraph.image && (
        <meta property="og:image" content={openGraph.image} />
      )}
      {openGraph.imageAlt && (
        <meta property="og:image:alt" content={openGraph.imageAlt} />
      )}

      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter.creator && (
        <meta name="twitter:creator" content={twitter.creator} />
      )}
      {twitter.image && <meta name="twitter:image" content={twitter.image} />}
      {twitter.imageAlt && (
        <meta name="twitter:image:alt" content={twitter.imageAlt} />
      )}

      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;
