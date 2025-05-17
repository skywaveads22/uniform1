import React from 'react';
import Script from 'next/script';

interface OrganizationProps {
  name: string;
  logo: string;
  url: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export function OrganizationLdJson({
  name,
  logo,
  url,
  description,
  address,
  contactPoint,
  sameAs = [],
}: OrganizationProps) {
  const ldJson: any = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs,
  };

  if (description) {
    ldJson.description = description;
  }

  if (address) {
    ldJson.address = {
      '@type': 'PostalAddress',
      ...address,
    };
  }

  if (contactPoint) {
    ldJson.contactPoint = {
      '@type': 'ContactPoint',
      ...contactPoint,
    };
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
    />
  );
} 