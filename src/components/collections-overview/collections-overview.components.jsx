import './collections-overview.styles.scss'
import {connect} from "react-redux"
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollection }) => (
                <CollectionPreview key={id} {...otherCollection} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)