/**
 * ============================================================================
 * STIR AND SPOON® — Translations & Data Configuration (translations.js)
 * ============================================================================
 * How to edit:
 * 1. Change your Bol.com store URL or contact info in SITE_CONFIG below.
 * 2. Edit any Dutch (nl) or English (en) copy inside the `translations` object.
 * 3. Add a new language (e.g. `de` or `es`) by copying the `en` block and
 *    translating the values.
 * 4. Add or reorder mood photos in the `moodPhotos` array at the bottom.
 * ============================================================================
 */

const SITE_CONFIG = {
  // Official Stir and Spoon Bol.com store URL:
  bolUrl: 'https://www.bol.com/nl/nl/w/alle-artikelen-stir-and-spoon/1664178/',
  contactEmail: 'hello@stirandspoon.com',
  contactLocation: 'Nederland / The Netherlands',
  socials: {
    instagram: '#',
    pinterest: '#',
    facebook: '#'
  }
};

const translations = {
  nl: {
    meta: {
      title: 'Stir and Spoon® | Zeg hallo tegen iets nieuws!',
      description:
        'Stir and Spoon® — Moderne, strakke keukenapparaten voor alle soorten keukens. Zeg hallo tegen iets nieuws! Ontdek ons assortiment op Bol.com.'
    },
    nav: {
      manifesto: 'Ons verhaal',
      mood: 'Sfeer',
      range: 'Assortiment',
      cta: 'Shop op Bol.com',
      menuToggleLabel: 'Menu openen of sluiten',
      langSwitchLabel: 'Kies taal'
    },
    hero: {
      badge: 'Moderne keukenapparaten',
      slogan: 'Zeg hallo tegen iets nieuws!',
      supporting:
        'Eigentijdse, strakke aanrechtapparaten ontworpen voor elke keuken. Van snelle doordeweekse ontbijtjes tot lange avonden aan tafel.',
      cta: 'Shop op Bol.com',
      visualTag: 'Voor elke keuken',
      visualCaption: 'Fris design voor op elk aanrecht',
      heroPhotoAlt:
        'Lichte marmeren keuken met kleurrijk vers fruit, noten en moderne Stir and Spoon keukenapparatuur'
    },
    manifesto: {
      eyebrow: 'Ons Manifesto',
      title: 'Onze wereld draait om keukens',
      p1: 'Bij Stir and Spoon draait onze wereld om keukens. Dat zijn de plekken die wij het beste kennen.',
      p2: "Grote keukens, kleine keukens. Keukens ter grootte van een appartement. Keukens met planten op de vensterbank of kleurrijke fruitkunst aan de muur. Keukens met kinderen die hun ogen op een gebakje hebben gericht, opa's en oma's die een stamppot opscheppen, en iedereen daartussenin. De keuken is een knooppunt van bedrijvigheid. Een plek voor gelach, verbinding, gezelligheid en goed eten.",
      p3: 'Wij brengen moderne, strakke keukenapparaten naar jouw huis. Daarom maken we eigentijdse keukenapparaten voor alle soorten keukens, in elke uithoek van de wereld.',
      p4: 'We helpen je het beste uit je keuken te halen, met innovatieve en moderne aanrechtapparaten. We volgen zorgvuldige principes van ontwerp en functionaliteit, zodat je een goed gevoel hebt bij wat je gebruikt om eten te bereiden.',
      p5: 'Welke keuken je ook hebt, wij hebben een apparaat dat zich er thuis voelt. Met Stir and Spoon zeg je hallo tegen iets nieuws.'
    },
    mood: {
      eyebrow: 'Sfeerimpressie',
      title: 'Sfeer in de keuken',
      subtitle:
        'Helder wit marmer, kleurrijk vers fruit, noten en handen die met plezier aan het werk zijn — een blik in de wereld van Stir and Spoon.',
      placeholderHint: 'Plaats foto in'
    },
    range: {
      eyebrow: 'Collectie',
      title: 'Ons assortiment',
      subtitle: 'Moderne aanrechtapparaten met een zacht, tijdloos design.',
      product1Name: 'Stir and Spoon Keukenapparaat 01',
      product1Text: 'Compact, krachtig en stil op elk aanrecht.',
      product2Name: 'Stir and Spoon Keukenapparaat 02',
      product2Text: 'Ontworpen voor dagelijks gemak en verse ingrediënten.',
      product3Name: 'Stir and Spoon Keukenapparaat 03',
      product3Text: 'Strakke vormgeving die past in elke moderne keuken.',
      cta: 'Shop op Bol.com'
    },
    cta: {
      eyebrow: 'Stir and Spoon® op Bol.com',
      title: 'Klaar voor iets nieuws?',
      slogan: 'Zeg hallo tegen iets nieuws!',
      button: 'Shop op Bol.com'
    },
    footer: {
      tagline: 'Moderne, strakke keukenapparaten voor alle soorten keukens.',
      contactTitle: 'Contact & Service',
      contactPlaceholder: 'Vragen of contact? Stuur ons een bericht:',
      socialTitle: 'Volg Stir and Spoon®',
      copyright: '© 2026 Stir and Spoon®. Alle rechten voorbehouden.',
      trademark: 'Stir and Spoon® is een geregistreerd handelsmerk.'
    }
  },

  en: {
    meta: {
      title: 'Stir and Spoon® | Say Hello to something new!',
      description:
        'Stir and Spoon® — Modern, sleek small kitchen appliances for all kinds of kitchens. Say Hello to something new! Available on Bol.com.'
    },
    nav: {
      manifesto: 'Our story',
      mood: 'Kitchen moods',
      range: 'Our range',
      cta: 'Shop on Bol.com',
      menuToggleLabel: 'Toggle navigation menu',
      langSwitchLabel: 'Select language'
    },
    hero: {
      badge: 'Modern kitchen appliances',
      slogan: 'Say Hello to something new!',
      supporting:
        'Contemporary, sleek countertop appliances crafted to feel right at home in every kitchen — from lively family mornings to cozy dinners.',
      cta: 'Shop on Bol.com',
      visualTag: 'For every kitchen',
      visualCaption: 'Fresh, sleek design for your countertop',
      heroPhotoAlt:
        'Bright white marble kitchen with colorful fresh fruit, nuts, and sleek Stir and Spoon appliances'
    },
    manifesto: {
      eyebrow: 'Our Manifesto',
      title: 'Our world is in kitchens',
      p1: 'At Stir and Spoon, our world is in kitchens. These are the places that we know best.',
      p2: 'Big kitchens, small kitchens. Apartment-sized kitchens. Kitchens with plants in the windows or colorful fruit art on the walls. Kitchens with children with their eyes on a pastry, grandparents cooking up stamppot, and everyone in between. Kitchens are a hub of activity. They’re a place for laughter, connection, good times, and good food.',
      p3: "We're here to bring modern, sleek, kitchen appliances to your home. It's why we make contemporary kitchen appliances for all kinds of kitchens, in every corner of the world.",
      p4: "We'll help you make the most of your kitchen, with innovative and modern countertop appliances. We follow careful principles of design and functionality, so that you can feel good about what you're using to prepare food.",
      p5: "No matter what kind of kitchen you're in, we've got an appliance that can feel right at home. With Stir and Spoon, say hello to something new."
    },
    mood: {
      eyebrow: 'Mood Impression',
      title: 'Kitchen moods',
      subtitle:
        'Fresh white marble kitchens, vibrant fruit and nuts, and hands at work — a glimpse into the bright, welcoming world of Stir and Spoon.',
      placeholderHint: 'Add photo at'
    },
    range: {
      eyebrow: 'Collection',
      title: 'Our range',
      subtitle: 'Modern countertop appliances with a soft, timeless look.',
      product1Name: 'Stir and Spoon Appliance 01',
      product1Text: 'Compact, powerful, and quiet on any countertop.',
      product2Name: 'Stir and Spoon Appliance 02',
      product2Text: 'Designed for everyday ease and fresh ingredients.',
      product3Name: 'Stir and Spoon Appliance 03',
      product3Text: 'Sleek form that feels right at home in any kitchen.',
      cta: 'Shop on Bol.com'
    },
    cta: {
      eyebrow: 'Stir and Spoon® on Bol.com',
      title: 'Ready for something new?',
      slogan: 'Say Hello to something new!',
      button: 'Shop on Bol.com'
    },
    footer: {
      tagline: 'Modern, sleek small kitchen appliances for all kinds of kitchens.',
      contactTitle: 'Contact & Support',
      contactPlaceholder: 'Questions or inquiries? Reach out to us:',
      socialTitle: 'Follow Stir and Spoon®',
      copyright: '© 2026 Stir and Spoon®. All rights reserved.',
      trademark: 'Stir and Spoon® is a registered trademark.'
    }
  }
};

/**
 * ============================================================================
 * DATA-DRIVEN PHOTO GRID (Mood impression / Sfeerimpressie)
 * ============================================================================
 * Drop your photos into `/assets/photos/foto-1.jpg` through `foto-6.jpg`.
 * You can add more items to this array at any time without editing index.html.
 */
const moodPhotos = [
  {
    id: 'foto-1',
    src: 'assets/photos/foto-1.jpg',
    aspect: 'tall',
    alt: {
      nl: 'Heldere witmarmeren keuken met vers kleurrijk fruit op het aanrecht',
      en: 'Bright white marble kitchen with fresh colorful fruit on the countertop'
    },
    caption: {
      nl: 'Wit marmer & vers fruit',
      en: 'White marble & fresh fruit'
    }
  },
  {
    id: 'foto-2',
    src: 'assets/photos/foto-2.jpg',
    aspect: 'standard',
    alt: {
      nl: 'Handen die verse ingrediënten en noten bereiden in een lichte keuken',
      en: 'Hands preparing fresh ingredients and nuts in a bright kitchen'
    },
    caption: {
      nl: 'Samen koken & bereiden',
      en: 'Hands at work'
    }
  },
  {
    id: 'foto-3',
    src: 'assets/photos/foto-3.jpg',
    aspect: 'standard',
    alt: {
      nl: 'Modern, strak Stir and Spoon aanrechtapparaat in een zonnige keuken met planten',
      en: 'Modern, sleek Stir and Spoon countertop appliance in a sunny kitchen with plants'
    },
    caption: {
      nl: 'Strak op elk aanrecht',
      en: 'Sleek on every countertop'
    }
  },
  {
    id: 'foto-4',
    src: 'assets/photos/foto-4.jpg',
    aspect: 'wide',
    alt: {
      nl: 'Kleurrijke schaal met vers zomerfruit, bessen en knapperige noten',
      en: 'Colorful bowl with fresh summer fruit, berries, and crunchy nuts'
    },
    caption: {
      nl: 'Rijk aan kleur & smaak',
      en: 'Rich in color & flavor'
    }
  },
  {
    id: 'foto-5',
    src: 'assets/photos/foto-5.jpg',
    aspect: 'standard',
    alt: {
      nl: 'Gezellige keuken vol leven met versgebakken lekkernijen op tafel',
      en: 'Lively kitchen hub with freshly prepared treats on the table'
    },
    caption: {
      nl: 'Het hart van het huis',
      en: 'The heart of the home'
    }
  },
  {
    id: 'foto-6',
    src: 'assets/photos/foto-6.jpg',
    aspect: 'standard',
    alt: {
      nl: 'Minimalistische keukendetails met zachte vormen en frisse tinten',
      en: 'Minimalist kitchen details with soft curves and fresh tones'
    },
    caption: {
      nl: 'Doordacht tot in detail',
      en: 'Thoughtful in every detail'
    }
  }
];
