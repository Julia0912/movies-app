const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUzYWIyZjJkMDE4NzQyY2M1ODEwYzE4ZmZkYTQ3MSIsInN1YiI6IjY1NjcyMGM3YThiMmNhMDEyYzE0YTcxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WE9d_dhoBsfs-TFZrSjOymqj4uA3Fvt0tkX8CmeK63I",
  },
};

export default class SwapiService {
  async getResourse(movieName = "terminator", page = "1") {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=${page}`;
    console.log(url);
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`NONONO ${url}`);
    }
    return await res.json();
  }

  async getResults(movieName, page) {
    const res = await this.getResourse(movieName, page);
    // console.log(res);
    return res;
  }

  getMovie(id) {
    return this.getResults(`/url/results/${id}/`);
  }
}
const swapi = new SwapiService();

swapi.getResults().then((body) => {});
swapi.getMovie(24575).then((p) => {});
