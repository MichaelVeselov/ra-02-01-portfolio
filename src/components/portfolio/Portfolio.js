import { Component } from 'react';
import projects from './data';
import Filter from '../filter/Filter';
import ProjectsList from '../projects-list/ProjectsList';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: projects,
      filter: 'All',
    };
  }

  filterItems = (items, filter) => {
    switch (filter) {
      case 'Websites':
        return items.filter((item) => item.category === 'Websites');

      case 'Flyers':
        return items.filter((item) => item.category === 'Flyers');

      case 'Business Cards':
        return items.filter((item) => item.category === 'Business Cards');

      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, filter } = this.state;
    const visibleData = this.filterItems(data, filter);

    return (
      <div className='app'>
        <div>
          <Filter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <ProjectsList data={visibleData} />
      </div>
    );
  }
}

export default Portfolio;
