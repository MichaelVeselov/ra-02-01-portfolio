import PropTypes from 'prop-types';

const ProjectsListItem = (props) => {
  const { img } = props;
  return (
    <li className='m-2'>
      <img src={img} alt='img description' />
    </li>
  );
};

ProjectsListItem.propTypes = {
  img: PropTypes.string.isRequired,
};
export default ProjectsListItem;
