import React, { useState } from "react";

const ToDo = () => {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");
  const AddTask = () => {
    list.push(item);
    setItem([...list]);
    console.log(list);
  };
  const RemoveTask = (ind) => {
    list.splice(ind, 1);
    setList([...list]);
    //alert(ind);
  };
  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        RemoveTask(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input type="text" onChange={(e) => setItem(e.target.value)} />
      <button onClick={AddTask}>ADD</button>
    </div>
  );
};

export default ToDo;
