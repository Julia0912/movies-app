// export default class SwapiService {
//   _apiBase = "https://api.themoviedb.org/3/search/movie";
//
//   async getRasourse(url) {
//     const res = await fetch(`${this._apiBase}${url}`);
//     if (!res.ok) {
//       throw new Error(`NONONO ${url}`);
//     }
//     return await res.json();
//   }
//
//   async getAllPeople() {
//     const res = await this.getRasourse(`/people/`);
//     return res.results;
//   }
//
//   getPerson(id) {
//     return this.getRasourse(`/people/${id}/`);
//   }
// }
