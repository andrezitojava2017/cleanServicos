import React from 'react';
import Avatar from './Avatar';

const ItemUser = ({size, contHeight, contWidth, text}) => {
  return (
    <>
      <Avatar
        contHeight={contHeight}
        contWidth={contWidth}
        size={size}
        text={text}
      />
    </>
  );
};

export default ItemUser;
