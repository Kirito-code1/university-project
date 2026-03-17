import searchIcon from "../assets/search.png";

const Search = () => {
  return (
    <div className="flex items-center justify-center p-2 cursor-pointer hover:bg-slate-100 rounded-full transition-all">
      <img 
        src={searchIcon} 
        alt="Search" 
        className="w-5 h-5 object-contain" 
      />
    </div>
  );
};

export default Search;
