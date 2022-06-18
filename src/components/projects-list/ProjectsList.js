import PropTypes from 'prop-types';
import ProjectsListItem from '../projects-list-item/ProjectsListItem';
import nextId from 'react-id-generator';

const ProjectsList = ({ data }) => {
  const projects = data.map((project) => {
    return <ProjectsListItem key={nextId()} img={project.img} />;
  });

  return (
    <ul className='list-unstyled d-flex flex-wrap justify-content-around'>
      {projects}
    </ul>
  );
};

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProjectsList;
