import React from 'react';

const JsonDisplay = (jsonData) => {
  const jsonString = JSON.stringify(jsonData, null, 2);

  return (
    <pre>{jsonString}</pre>
  );
};

export default JsonDisplay;
