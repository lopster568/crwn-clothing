import react from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import sections from './directory.data'

class Directory extends react.Component {
    constructor(){
        super()

        this.state = {
            sections : sections
        }
    }
    render() {
        return (
          <div className="directory-menu"> 
            {this.state.sections.map(({id, ...otherSections}) => (
                <MenuItem key={id} {...otherSections} />
            ))}
          </div>
        )
    }
}

export default Directory 