import { FilterInput, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
