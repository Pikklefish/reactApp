import { MouseEvent } from "react";



function ListGroup() {
  const items = ["New York", "Seoul", "London", "Paris"];
  let selectedIndex = -1;

//event handler
const handleClick = (event: MouseEvent) => console.log(event);


  return (
    <>
      <h1>List</h1>
      {/* If condition true go to second eleemnt after &&, if condition flase return false  */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
