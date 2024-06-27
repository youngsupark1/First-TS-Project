import { useEffect, useState } from 'react';
import { fetchCountries } from '../api/CountryApi';
import { Country } from '../types/country';
import CountryCard from './CountryCard';

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError('국가 정보를 불러오는데 실패했습니다.');
      }
    };

    getCountries();
  }, []);

  const toggleSelectedCountry = (clickedCountry: Country) => {
    setSelectedCountries((prev) => {
      const isSelected = prev.some((country) => country === clickedCountry);
      if (isSelected) {
        return prev.filter((country) => country !== clickedCountry);
      } else {
        return [...prev, clickedCountry];
      }
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  const favoriteCountriesList = selectedCountries.map((country) => (
    <li key={country.name.common}>
      <CountryCard country={country} isSelected={true} toggleSelected={toggleSelectedCountry} />
    </li>
  ));

  const countriesList = countries
    .filter((country) => !selectedCountries.includes(country)) // 선택되지 않은 나라들만 필터링
    .map((country) => (
      <li key={country.name.common}>
        <CountryCard country={country} isSelected={false} toggleSelected={toggleSelectedCountry} />
      </li>
    ));

  return (
    <div>
      <h2 className="text-center text-[30px] font-bold">Favorite Countries</h2>
      <ul className="grid grid-cols-5 justify-center">{favoriteCountriesList}</ul>
      <h1 className="text-center text-[30px] font-bold">Countries</h1>
      <ul className="grid grid-cols-5 justify-center">{countriesList}</ul>
    </div>
  );
};

export default CountryList;
