import routes from './routes';

export default [
  {
    id: 1,
    title: 'Music City Tech',
    slug: 'music-city-tech',
    date: 'Nashville, TN',
    description:
      'Music City Tech is a three-day event consisting of simultaneous conferences, each focused on a particular community of technology professionals, held at Vanderbilt University.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Music City Tech',
    path: `${routes.conferences.path}\\music-city-tech`,
  },
  {
    id: 2,
    title: 'Little Rock Tech Fest',
    slug: 'little-rock-tech-fest',
    date: 'Little Rock, AR',
    description:
      'Little Rock Tech Fest is an annual developer conference featuring popular web, mobile, database, devops and related developer topics from industry leaders. It is the event in Little Rock for both professional and aspiring software developers. Speakers from across the country come to present. Students and professionals from across Arkansas and surrounding regions come to learn and network with peers.\n' +
      '\n' +
      'Our purpose is to encourage local professionals to increase their skills and to promote the Little Rock region to both experienced and aspiring developers and students.\n' +
      '\n' +
      'This is our seventh year hosting the event. Will you join us?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Little Rock Tech Fest',
    path: `${routes.conferences.path}\\little-rock-tech-fest`,
  },
  {
    id: 3,
    title: 'Bar Camp Tampa',
    slug: 'bar-camp-tampa',
    date: 'Tapma, FL',
    description:
      'For Geeks, by Geeks, about Geeks – BarCamp is a one day conference composed of attendee generated content about all things tech.\n' +
      '\n' +
      'BarCamp — the original unconference — is an annual event for software developers, social media managers, UX designers, hackers, makers, tech entrepreneurs, startup founders, freelancers, and anyone else who is interested in sharing what’s new and interesting in the world of technology.\n' +
      '\n' +
      'BarCamp is free to attend and is made possible by generous donations from the local tech business community and in partnership with our host, the USF Muma College of Business. If you are interested in engaging with the local tech community and helping sponsor this great event where 700+ techies will notice your support, please contact us via FaceBook or on Twitter @BarCampTampa (you’ll also get your logo on a very cool T-Shirt).',
    image: 'https://source.unsplash.com/random',
    imageText: 'Bar Camp Tampa',
    path: `${routes.conferences.path}\\bar-camp-tampa`,
  },
  {
    id: 4,
    title: 'Dev Space',
    slug: 'dev-space',
    date: 'Huntsville, AL',
    description:
      'DevSpace is an annual developer’s conference that takes place in Huntsville, Alabama. Fueled by extensive space and missile research and a vibrant, emerging start-up culture, Huntsville is a market poised and ready to burst onto the national stage.\n' +
      '\n' +
      'Technological interests run the gamut of every language. As such, DevSpace aims to cater to this entire atmosphere. DevSpace wants to offer talks on a variety of languages, offering attendees the ability to improve their skills within their daily technology of choice and the ability to become familiar with new technologies. Combine this with talks on soft skills and processes, DevSpace will provide an outstanding value to the attendees.\n' +
      '\n' +
      'DevSpace operates on a Friday and Saturday. We think this schedule will encourage employers to send their employees to the conference. The schedule is based on the idea of “Give a day, take a day.” Employers are more likely to give their staff a day from work, knowing the employee with give a day of their own, doubling their return on investment.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Dev Space',
    path: `${routes.conferences.path}\\dev-space`,
  },
];
