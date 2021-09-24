import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.url}`} component={CollectionsOverview} />
        <Route exact path={`${match.url}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage