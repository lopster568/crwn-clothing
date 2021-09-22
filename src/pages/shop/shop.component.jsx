import SHOP_DATA from './shop.data'
import react from 'react'
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class ShopPage extends react.Component {
    constructor() {
        super()

        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className="shop-page">
                {
                    
                    collections.map(({id, ...otherCollection}) => (
                        <CollectionPreview key={id} {...otherCollection}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage