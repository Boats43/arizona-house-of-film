import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE = 'https://arizonahouseoffilm.com';

/**
 * Renders a BreadcrumbList JSON-LD schema via react-helmet-async.
 * @param {Array<{name: string, path?: string, url?: string}>} items
 *   Each item needs a name. Provide either:
 *   - url (full absolute URL, e.g. "https://arizonahouseoffilm.com/solutions")
 *   - path (relative path, e.g. "/solutions") — BASE is prepended automatically
 *   Omit both only for the current/final page when there is no canonical URL.
 */
const BreadcrumbSchema = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const listItem = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      const href = item.url && item.url.startsWith('http')
        ? item.url
        : item.path
          ? `${BASE}${item.path}`
          : null;
      if (href) {
        listItem.item = { "@id": href, "name": item.name };
      }
      return listItem;
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
