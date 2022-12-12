const SearchBox = (props) => {
  const { type, placeholder, onChangeHandler } = props;

  // console.log(props);
  return (
    <input
      className='p-8 m-4 w-18 h-12 mt-8 shadow-2xl rounded-md bg-blue-100 text-lg hover:scale-105 duration-500'
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
