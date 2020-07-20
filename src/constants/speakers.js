import routes from './routes';

export default [
  {
    id: 1,
    title: 'John Callaway',
    slug: 'john-callaway',
    date: 'Tampa, FL',
    description:
      'An International Speaker, Author, and Microsoft MVP, John has been a professional developer since 1999. He has focused primarily on web technologies and currently focuses on C# and .NET Core in Azure. Clean code and professionalism are particularly important to him, as well as mentoring and teaching others what he has learned along the way.',
    image: 'https://source.unsplash.com/random',
    imageText: 'John Callaway',
    path: `${routes.speakers.path}\\john-callaway`,
  },
  {
    id: 2,
    title: 'Jon Ash',
    slug: 'jon-ash',
    date: 'Columbus, OH',
    description:
      'Jon has been a web developer since 2011 and a professional consultant since 2006. Coming from the aerospace industry he brings a passion for professionalism and excellence. He has a broad experience in current web technologies, with a strong foundation in C# and JavaScript. Though working knowledge of technologies are important, he takes pride in practicing and promoting clean code, adherence to the SOLID principles, and disciplines such as Test Driven Development.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Jon Ash',
    path: `${routes.speakers.path}\\jon-ash`,
  },
  {
    id: 3,
    title: 'Clayton Hunt',
    slug: 'clayton-hunt',
    date: 'Tampa, FL',
    description:
      'Clayton has been programming professionally since 2005 doing mostly web development with an emphasis on JavaScript and C#. He has a focus Software Craftsmanship and is a signatory of both the Agile Manifesto and the Software Craftsmanship manifesto. He believes that through short iterations and the careful gathering of requirements that we can deliver the highest quality and the most value in the shortest time. He enjoys learning and encouraging other to continuously improve themselves.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Clayton Hunt',
    path: `${routes.speakers.path}\\clayton-hunt`,
  },
  {
    id: 4,
    title: 'Gaines Kergosien',
    slug: 'gaines-kergosien',
    date: 'Nashville, TN',
    description:
      'VP Corporate Systems Development at AllianceBernstein, Music City Tech Organizer, and Darth Vader impersonator.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Gaines Kergosien',
    path: `${routes.speakers.path}\\gaines-kergosien`,
  },
];
