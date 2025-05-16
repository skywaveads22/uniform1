import React from 'react';
import Script from 'next/script';

interface ArticleProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
  publisherName: string;
  publisherLogo: string;
}

export function ArticleLdJson({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
  publisherName,
  publisherLogo,
}: ArticleProps) {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
    />
  );
} 