import searchIcon from "../assets/search.png";

const Search = () => {
  return (
    <div className="flex items-center justify-center p-2 cursor-pointer hover:bg-white/15 rounded-full transition-all">
      <img 
        src={searchIcon} 
        alt="Search" 
        className="w-10 h-10 object-contain" 
      />
    </div>
  );
};

export default Search;