import React from 'react';

export const Son = React.memo(({ numero, increment }) => {
  console.log('Re-render:', numero);

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => increment(numero)}
    >
      {numero}
    </button>
  );
});
