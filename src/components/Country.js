import React from 'react';

const Country = ({country}) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <h3>Region: {country.region}</h3>
      <h3>Population: {country.population}</h3>
      <img src ={country.flag} width={200} height={300} />
    </div>
  )

};

export default Country;
