import React from "react";
type ListProps = {
    listData: {
    id: number;
    name: string;
  };
};

function List({ listData }: ListProps) {
  return <p>{listData.name}</p>;
}

export default List;
