import PropTypes from 'prop-types';

const Filter = (props) => {
  const buttonsData = [
    { name: 'All', label: 'All' },
    { name: 'Websites', label: 'Websites' },
    { name: 'Flyers', label: 'Flyers' },
    { name: 'Business Cards', label: 'Business Cards' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light active' : 'btn-outline-light';
    return (
      <button
        className={`mx-2 btn btn-secondary ${clazz}`}
        type='button'
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className='d-flex mb-2 mt-2 flex-nowrap justify-content-start'>
      {buttons}
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default Filter;
