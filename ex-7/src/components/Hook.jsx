import React, { useState } from 'react';

export default () => {

  const [contador, alteraContador] = useState(0);

  return (
    <div>
      <strong>{contador}</strong>
      <br />
      <button onClick={() => alteraContador(contador + 1)}>Inc</button>
      <button onClick={() => alteraContador(contador - 1)}>Dec</button>
    </div>
  );
}