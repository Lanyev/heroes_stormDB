const Users = require("./users.models");

const initModels = () => {
  // //? Users
  // Users
  // //? Movies <-> Genres - MovieGenres
  // Movies.belongsToMany(Genres, {through: MovieGenres})
  // Genres.belongsToMany(Movies, {through: MovieGenres})
  // //? Series <-> Genres - SerieGenres
  // Series.belongsToMany(Genres, {through: SerieGenres})
  // Genres.belongsToMany(Series, {through: SerieGenres})
  // //? Series -> Seasons
  // Series.hasMany(Seasons)
  // Seasons.belongsTo(Series)
  // //? Seasons -> Episodes
  // Seasons.hasMany(Episodes)
  // Episodes.belongsTo(Seasons)
};

module.exports = initModels;
