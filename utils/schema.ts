export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Impulso',
    image: 'https://impulsopublicidad.pro/logo.png', // Replace with real asset
    '@id': 'https://impulsopublicidad.pro',
    url: 'https://impulsopublicidad.pro',
    telephone: '+573112441684',
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
      'https://www.facebook.com/share/1DtV77vD6t/?mibextid=wwXIfr'
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
