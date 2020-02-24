import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {sections} from '../../data/directory.data';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    console.log(sections, 'sections')
    this.state = {
      sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this
          .state
          .sections
          .map(({title, imageUrl, id, size}) => {
            return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          })}
      </div>
    )
  }
}

export default Directory;