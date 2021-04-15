import React from "react"
import Helmet from "react-helmet"

import Thumbnail from '../../assets/img/seo/thumbnail.png'
import {
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  SOCIAL,
  URL,
  LOCATION
  // address,
  // contact,
  // legalName,
  // foundingDate,
  // logo,
  // type,
  // articleBody,
  // datePublished,
  // dateModified,
} from '../../constants'


// const structuredDataArticle = `{
// 		"@context": "http://schema.org",
// 		"@type": "${type}",
// 		"mainEntityOfPage": {
// 			"@type": "WebPage",
// 			"@id": "https://n12.mx/article/title"
// 		},
// 		"headline": "${description}",
// 		"image": "${
//       cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Thumbnail}`
//     }",
// 		"datePublished": "${datePublished}",
// 		"dateModified": "${dateModified}",
// 		"author": {
// 			"@type": "Person",
// 			"name": "${author}"
// 		},
// 		"articleBody": "${articleBody}",
// 		"publisher": {
// 			"@type": "Organization",
// 			"name": "${author}",
// 			"logo": {
// 				"@type": "ImageObject",
// 				"url": "${logo}"
// 			}
// 		},
// 		"description": "${description}",
// 		"url": "${url}${location}/?ref=smakosh.com"
//   }`
//
// const structuredDataOrganization = `{
// 		"@context": "http://schema.org",
// 		"@type": "${type}",
// 		"legalName": "${legalName}",
// 		"url": "${url}",
// 		"logo": "${logo}",
// 		"foundingDate": "${foundingDate}",
// 		"founders": [{
// 			"@type": "Person",
// 			"name": "${legalName}"
// 		}],
// 		"contactPoint": [{
// 			"@type": "ContactPoint",
// 			"email": "${contact.email}",
// 			"telephone": "${contact.phone}",
// 			"contactType": "customer service"
// 		}],
// 		"address": {
// 			"@type": "PostalAddress",
// 			"addressLocality": "${address.city}",
// 			"addressRegion": "${address.region}",
// 			"addressCountry": "${address.country}",
// 			"postalCode": "${address.zipCode}"
// 		},
// 		"sameAs": [
// 			"${socialLinks.twitter}",
// 			"${socialLinks.google}",
// 			"${socialLinks.youtube}",
// 			"${socialLinks.linkedin}",
// 			"${socialLinks.instagram}",
// 			"${socialLinks.github}"
// 		]
//   	}`

function SEO({
  description,
  lang='es-MX',
  meta,
  title,
  type,
  social,
  published_time,
  socialLinks={},
  cover,
  readTime,
  location }) {
  const published = (published_time||new Date().toLocaleString())
  return (
  // Notice I'm using react-helmet to inject these elements within the header tag
  <Helmet>
    {/* The description that appears under the title of your website appears on search engines results */}
    <meta name="description" content={description||DEFAULT_DESCRIPTION} />

    {/* The thumbnail of your website */}
    <meta
      name="image"
      content={cover ? `${URL}${cover}` : `${URL}${Thumbnail}`}
    />

    {/* Opengraph meta tags for Facebook & LinkedIn */}
    <meta property="og:url" content={`${URL}/${location?location:LOCATION}/?ref=n12.mx`} />
    <meta
      property="og:type"
      content={type === 'NewsArticle' ? 'NewsArticle' : 'website'}
    />
    <meta
      property="og:title"
      content={title ? `BeSlides | ${title}` : DEFAULT_TITLE}
    />
    <meta
      property="og:description"
      content={description || DEFAULT_DESCRIPTION}
    />
    <meta
      property="og:image"
      content={cover ? `${cover}` : Thumbnail}
    />

    {/* You can get this id when you create an app id on Facebook of your Facebook page */}
    {/* <meta property="fb:app_id" content={SOCIAL.facebook} /> */}

    {/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={socialLinks.twitter} />
    <meta name="twitter:site" content={SOCIAL.twitter} />
    <meta
      name="twitter:title"
      content={title ? `BeSlides | ${title}` : DEFAULT_TITLE}
    />
    <meta
      name="twitter:description"
      content={description || DEFAULT_DESCRIPTION}
    />
    <meta
      name="twitter:image:src"
      content={cover ? `${cover}` : `${Thumbnail}`}
    />
    {type === 'NewsArticle' && (
      <meta name="twitter:label1" value="Reading time" />
    )}
    {type === 'NewsArticle' && (
      <meta name="twitter:data1" value={`${readTime} min read`} />
    )}
    {type === 'NewsArticle' && (
      <meta name="author" content="Ismail Ghallou" data-react-helmet="true" />
    )}
    {type === 'NewsArticle' && (
      <meta
        name="article:published_time"
        content={published}
        data-react-helmet="true"
      />
    )}

    {/* Structured data */}
    {/* <script type="application/ld+json">
      {type === 'NewsArticle'
        ? structuredDataArticle
        : structuredDataOrganization}
    </script> */}

    {/* Not sure if this is still relevant as Google shut down their Google+ paltform */}

    {/* The title of your current page */}
    <title>{title ? `BeSlides | ${title}` : DEFAULT_TITLE}</title>

    {/* Default language and direction */}
    <html lang="en" dir="ltr" />
  </Helmet>
)
}

export default SEO
