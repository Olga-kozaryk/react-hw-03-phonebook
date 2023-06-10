import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = ({ value, onChange}) => (
    <div className={s.filter}>
      <label className={s.labelFilter}>
        Filter
        <input
          type="name"
          value={value}
          onChange={onChange}
          className={s.filterInput}
        />
      </label>
    </div>
  );
  
  Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  export default Filter;