import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  robots,
  noindex,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType,
  ogImage,
  twitterCard,
  schema,
  openGraph = {},
  twitter = {},
  jsonLd,
}) {
  const resolvedRobots = noindex ? "noindex, nofollow" : robots;
  const resolvedOgTitle = ogTitle || openGraph.title || title;
  const resolvedOgDescription = ogDescription || openGraph.description || description;
  const resolvedOgUrl = ogUrl || openGraph.url || canonical;
  const resolvedOgType = ogType || openGraph.type;
  const resolvedOgImage = ogImage || openGraph.image;
  const twitterTitle = twitter.title || title;
  const twitterDescription = twitter.description || description;
  const resolvedTwitterCard = twitterCard || twitter.card || "summary_large_image";
  const resolvedTwitterImage = twitter.image || resolvedOgImage;
  const schemaData = schema || jsonLd;
  const schemas = Array.isArray(schemaData) ? schemaData : schemaData ? [schemaData] : [];

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {resolvedRobots && <meta name="robots" content={resolvedRobots} />}

      {resolvedOgTitle && <meta property="og:title" content={resolvedOgTitle} />}
      {resolvedOgDescription && (
        <meta property="og:description" content={resolvedOgDescription} />
      )}
      {resolvedOgType && <meta property="og:type" content={resolvedOgType} />}
      {resolvedOgUrl && <meta property="og:url" content={resolvedOgUrl} />}
      {openGraph.siteName && (
        <meta property="og:site_name" content={openGraph.siteName} />
      )}
      {resolvedOgImage && (
        <meta property="og:image" content={resolvedOgImage} />
      )}
      {openGraph.imageAlt && (
        <meta property="og:image:alt" content={openGraph.imageAlt} />
      )}

      {resolvedTwitterCard && <meta name="twitter:card" content={resolvedTwitterCard} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter.creator && (
        <meta name="twitter:creator" content={twitter.creator} />
      )}
      {resolvedTwitterImage && <meta name="twitter:image" content={resolvedTwitterImage} />}
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
