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
        'From razor-sharp knives and multipurpose kitchen shears to neatly organized coffee corners — discover Stir and Spoon in everyday action.',
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
    aspect: 'standard',
    alt: {
      en: 'Stir and Spoon Capsule Holder for Nespresso packaging box with espresso machine and glass cups'
    },
    caption: {
      en: 'Capsule Holder for Nespresso'
    }
  },
  {
    id: 'foto-2',
    src: 'assets/photos/foto-2.jpg',
    aspect: 'standard',
    alt: {
      en: 'Wooden knife block, kitchen scissors, 4-in-1 knife sharpener, and coffee capsule organizers on a kitchen shelf'
    },
    caption: {
      en: 'Kitchen & Coffee Essentials'
    }
  },
  {
    id: 'foto-3',
    src: 'assets/photos/foto-3.jpg',
    aspect: 'standard',
    alt: {
      en: 'Hands sharpening a kitchen knife with the Stir and Spoon 4-in-1 sharpener on white marble next to fresh vine tomatoes'
    },
    caption: {
      en: '4-in-1 Knife & Scissors Sharpener'
    }
  },
  {
    id: 'foto-4',
    src: 'assets/photos/foto-4.jpg',
    aspect: 'standard',
    alt: {
      en: 'Sleek black rotating coffee capsule carousel filled with colorful pods on a bright kitchen table'
    },
    caption: {
      en: 'Rotating Coffee Capsule Carousel'
    }
  },
  {
    id: 'foto-5',
    src: 'assets/photos/foto-5.jpg',
    aspect: 'standard',
    alt: {
      en: 'Hands opening a chilled drink bottle using the built-in bottle opener of the Stir and Spoon kitchen scissors'
    },
    caption: {
      en: 'Multifunctional Kitchen Scissors'
    }
  },
  {
    id: 'foto-6',
    src: 'assets/photos/foto-6.jpg',
    aspect: 'standard',
    alt: {
      en: 'Top view of the matte-black pull-out coffee capsule drawer neatly organized with colorful coffee pods'
    },
    caption: {
      en: 'Coffee Capsule Organizer Drawer'
    }
  }
];
