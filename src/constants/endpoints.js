import config from './config';

const rootRoute = `${config.api}/api`;

export default {
  speakers: `${rootRoute}/Speakers/`,
  speakerDetail: `${rootRoute}/Speakers/Slug`,
  speakersFeatured: `${rootRoute}/Speakers/Featured`,
  communities: `${rootRoute}/Communities/`,
  communityDetail: `${rootRoute}/Communities/Slug`,
  communitiesFeatured: `${rootRoute}/Communities/Featured`,
  conferences: `${rootRoute}/Conferences/`,
  conferenceDetail: `${rootRoute}/Conferences/Slug`,
  conferencesFeatured: `${rootRoute}/Conferences/Featured`,
  search: `${rootRoute}/Search`,
};
