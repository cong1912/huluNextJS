const API_KEY = process.env.API_KEY;
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchToprated: {
    title: "Top Rated",
    url: `/movie/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discovery/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies1: {
    title: "Action1",
    url: `/discovery1/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies2: {
    title: "Action2",
    url: `/discovery2/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies3: {
    title: "Action3",
    url: `/discovery3/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies4: {
    title: "Action4",
    url: `/discovery4/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies5: {
    title: "Action5",
    url: `/discovery5/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
