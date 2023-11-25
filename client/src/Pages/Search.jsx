import SearchNav from "./SearchNav";

function Search() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="main">
        <SearchNav />
      </div>
      <div className="block">
        <select name="dropdown" id="dropdown">
          <option value="Choose a category">Choose a category</option>
          <option value="Development">Development</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Business">Business</option>
          <option value="Finance & Accounting">Finance & Accounting</option>
          <option value="IT & Software">IT & Software</option>
          <option value="Design">Design</option>
        </select>
        <button className="search_button">Search</button>
      </div>
    </>
  );
}

export default Search;
