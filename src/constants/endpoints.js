import config from './config';

const rootRoute = `${config.api}/api`;

export default {
  speakers: `${rootRoute}/Speakers/`,
  speakerDetail: `${rootRoute}/Speakers/Slug`,
  communities: `${rootRoute}/Communities/`,
  communityDetail: `${rootRoute}/Communities/Slug`,
  conferences: `${rootRoute}/Conferences/`,
  conferenceDetail: `${rootRoute}/Conferences/Slug`,
};
