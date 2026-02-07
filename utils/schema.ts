export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tikno',
    image: 'https://tikno.pro/logo.png', // Replace with real asset
    '@id': 'https://tikno.pro',
    url: 'https://tikno.pro',
    telephone: '+573000000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 34 # 25-15', // Fake address for demo
      addressLocality: 'Bucaramanga',
      addressRegion: 'Santander',
      postalCode: '680002',
      addressCountry: 'CO'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 7.1193,
      longitude: -73.1227
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '18:00'
    },
    sameAs: [
      'https://facebook.com/tikno',
      'https://instagram.com/tikno'
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Bucaramanga'
      },
      {
        '@type': 'City',
        name: 'Floridablanca'
      },
      {
        '@type': 'City',
        name: 'Girón'
      },
      {
        '@type': 'City',
        name: 'Piedecuesta'
      }
    ],
    priceRange: '$$'
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};
