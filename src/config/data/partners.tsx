const partner = [
  {
    key: 'kongregate',
    title: 'Kongregate.com',
    value: 'Game publisher',
    image: process.env.PUBLIC_URL + `/images/partner/kongregate.png`,
    height: '45px',
    url: {
      name: 'Kongregate.com',
      href: `https://kongregate.com`,
      targetBlank: true,
      local: false,
    },
  },
  {
    key: 'crazygames',
    title: 'Crazygames.com',
    value: 'Game publisher',
    image: process.env.PUBLIC_URL + `/images/partner/crazygames.png`,
    height: '100px',
    url: {
      name: 'Crazygames.com',
      href: `https://crazygames.com`,
      targetBlank: true,
      local: false,
    },
  },
  {
    key: 'itch',
    title: 'Itch.com',
    value: 'Game publisher',
    image: process.env.PUBLIC_URL + `/images/partner/itch.png`,
    height: '45px',
    url: {
      name: 'Itch.com',
      href: `https://itch.com`,
      targetBlank: true,
      local: false,
    },
  },
  {
    key: 'bitlocus',
    title: 'Bitlocus.com',
    value: 'Game publisher',
    image: null,
    height: '45px',
    url: {
      name: 'Bitlocus.com',
      href: `https://bitlocus.com`,
      targetBlank: true,
      local: false,
    },
  },
];

export default partner;
