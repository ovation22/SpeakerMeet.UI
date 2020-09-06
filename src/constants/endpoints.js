import config from './config';

const rootRoute = `${config.api}/api`;

export default {
  speakers: `${rootRoute}/Speakers`,
  speakersFeatured: `${rootRoute}/Speakers/Featured`,
  communities: `${rootRoute}/Communities`,
  communitiesFeatured: `${rootRoute}/Communities/Featured`,
  conferences: `${rootRoute}/Conferences`,
  conferencesFeatured: `${rootRoute}/Conferences/Featured`,
  search: `${rootRoute}/Search`,
  stats: `${rootRoute}/Statistics/Counts`,
};
