/**
 * ============================================================================
 * STIR AND SPOON® — Content & Data Configuration (translations.js)
 * ============================================================================
 * How to edit:
 * 1. Change your Bol.com store URL or contact info in SITE_CONFIG below.
 * 2. Edit any English (en) copy inside the `translations` object.
 * 3. Add or reorder mood photos in the `moodPhotos` array at the bottom.
 * ============================================================================
 */

const SITE_CONFIG = {
  // Official Stir and Spoon Bol.com store URL:
  bolUrl: 'https://www.bol.com/nl/nl/w/alle-artikelen-stir-and-spoon/1664178/',
  contactEmail: 'hello@stirandspoon.com',
  contactLocation: 'The Netherlands',
  socials: {
    instagram: '#',
    pinterest: '#',
    facebook: '#'
  }
};

const translations = {
  en: {
    meta: {
      title: 'Stir and Spoon® | Say hello to something new!',
      description:
        'Stir and Spoon® — Essentials for kitchen & home. Say hello to something new! Available on Bol.com.'
    },
    nav: {
      manifesto: 'Our story',
      mood: 'Kitchen moods',
      range: 'Our range',
      cta: 'Shop on Bol.com',
      menuToggleLabel: 'Toggle navigation menu'
    },
    hero: {
      badge: 'ESSENTIALS FOR KITCHEN & HOME',
      slogan: 'Say hello to something new!',
      supporting:
        'Contemporary, sleek countertop appliances crafted to feel right at home in every kitchen — from lively family mornings to cozy dinners.',
      cta: 'Shop on Bol.com',
      visualTag: 'For every kitchen',
      visualCaption: 'Fresh, sleek design for your countertop',
      heroPhotoAlt:
        'Stir and Spoon essentials for kitchen and home: knife block, kitchen scissors, 4-in-1 knife sharpener, and coffee capsule organizers'
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
      slogan: 'Say hello to something new!',
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
 * DATA-DRIVEN PHOTO GRID (Mood impression)
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
      en: 'Stir and Spoon essentials for kitchen and home on a bright kitchen shelf'
    },
    caption: {
      en: 'Essentials for kitchen & home'
    }
  },
  {
    id: 'foto-2',
    src: 'assets/photos/foto-2.jpg',
    aspect: 'standard',
    alt: {
      en: 'Hands preparing fresh ingredients and nuts in a bright kitchen'
    },
    caption: {
      en: 'Hands at work'
    }
  },
  {
    id: 'foto-3',
    src: 'assets/photos/foto-3.jpg',
    aspect: 'standard',
    alt: {
      en: 'Modern, sleek Stir and Spoon countertop appliance in a sunny kitchen with plants'
    },
    caption: {
      en: 'Sleek on every countertop'
    }
  },
  {
    id: 'foto-4',
    src: 'assets/photos/foto-4.jpg',
    aspect: 'wide',
    alt: {
      en: 'Colorful bowl with fresh summer fruit, berries, and crunchy nuts'
    },
    caption: {
      en: 'Rich in color & flavor'
    }
  },
  {
    id: 'foto-5',
    src: 'assets/photos/foto-5.jpg',
    aspect: 'standard',
    alt: {
      en: 'Lively kitchen hub with freshly prepared treats on the table'
    },
    caption: {
      en: 'The heart of the home'
    }
  },
  {
    id: 'foto-6',
    src: 'assets/photos/foto-6.jpg',
    aspect: 'standard',
    alt: {
      en: 'Minimalist kitchen details with soft curves and fresh tones'
    },
    caption: {
      en: 'Thoughtful in every detail'
    }
  }
];
