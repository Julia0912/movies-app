const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUzYWIyZjJkMDE4NzQyY2M1ODEwYzE4ZmZkYTQ3MSIsInN1YiI6IjY1NjcyMGM3YThiMmNhMDEyYzE0YTcxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WE9d_dhoBsfs-TFZrSjOymqj4uA3Fvt0tkX8CmeK63I",
  },
};
const url =
  "https://api.themoviedb.org/3/search/movie?query=titanik&include_adult=false&language=en-US&page=1";
export default class SwapiService {
  async getResourse() {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`NONONO ${url}`);
    }
    return await res.json();
  }

  async getResults() {
    const res = await this.getResourse(`/url/results/`);

    return res.results;
  }

  getMovie(id) {
    return this.getResults(`/url/results/${id}/`);
  }
}
const swapi = new SwapiService();

swapi.getResults().then((body) => {});
swapi.getMovie(24575).then((p) => {});
