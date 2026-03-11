import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE = 'https://arizonahouseoffilm.com';

/**
 * Renders a BreadcrumbList JSON-LD schema via react-helmet-async.
 * @param {Array<{name: string, path?: string}>} items
 *   Each item needs a name. Provide path (e.g. "/service-areas/phoenix")
 *   for all items that have a canonical URL — omit path only for the
 *   current/final page when there is no canonical URL to assert.
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
      if (item.path) {
        listItem.item = { "@id": `${BASE}${item.path}`, "name": item.name };
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
