import type { Country } from '../types/api';

interface CountrySelectorProps {
  countries: Country[] | undefined;
  selectedCountry: string;
  onCountryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CountrySelector({
  countries,
  selectedCountry,
  onCountryChange,
}: CountrySelectorProps) {
  return (
    <div className='form-group'>
      <label htmlFor='country'>Pays :</label>
      <select id='country' value={selectedCountry} onChange={onCountryChange}>
        {countries?.map((country: Country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name[0]?.text ?? country.isoCode}
          </option>
        ))}
      </select>
    </div>
  );
}
