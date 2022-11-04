import Card from './Card';

function SearchList({filteredItems}) {
  const filtered = filteredItems.map((item) => [
    <Card key={item.id} item={item} />,
  ]);
  return <div style={{width: '100%'}}>{filtered}</div>;
}

export default SearchList;
