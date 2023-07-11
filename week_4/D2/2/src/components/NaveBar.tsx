import React from "react";

interface Props {
  carItemCount: number;
}

const NaveBar = ({ carItemCount }: Props) => {
  return <div>NaveBar: {carItemCount}</div>;
};

export default NaveBar;
