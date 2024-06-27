import { Country } from '../types/country';

interface CountryCardProps {
  country: Country;
  isSelected: boolean; // true | false
  toggleSelected: (country: Country) => void; // void는 함수의 반환 타입을 나타내는데 여기서 반환하지 않는다는 의미를 가짐
}

const CountryCard = ({ country, isSelected, toggleSelected }: CountryCardProps) => {
  const handleClick = () => {
    toggleSelected(country);
  };

  return (
    <div
      className={`h-[250px] flex flex-col items-center justify-center m-10 border-4 mb-2 cursor-pointer rounded-[20px] 
        ${isSelected ? 'border-blue-500' : ''} `}
      onClick={handleClick}
    >
      <h2 className="text-[20px] font-bold text-center mt-2">{country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}명</p>
      <img className="mt-5 mb-5 w-[120px]" src={country.flags.png} alt={`${country.name.common} flag`} />
    </div>
  );
};

export default CountryCard;
