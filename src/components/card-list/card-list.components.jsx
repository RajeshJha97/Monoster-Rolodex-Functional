import Card from '../card/card.components';

const CardList = (props) => {
  const { filteredMonsters: monsters } = props;
  //console.log(props.filteredMonsters);
  //console.log(monsters);

  return (
    <div
      key={monsters.id}
      className='flex flex-wrap sm:items-center justify-center'
    >
      {monsters.map((monster) => {
        return (
          <div key={monster.id} className=' basis-1/5  sm:flex-col'>
            <Card monster={monster} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
