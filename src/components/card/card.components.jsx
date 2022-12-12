const Card = (props) => {
  const { monster } = props;
  const { id, name, email } = monster;
  return (
    <div key={id} className='flex'>
      <div className='shadow-md bg-slate-300 p-12 m-4 rounded-xl hover:scale-105 duration-500'>
        <img
          className='m-2'
          alt={name}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
