
import ProductList from './ProductList.jsx';
/* import ProductJewelry from './ProductJewelry.jsx';
import User from './User.jsx';
 */
export default function Home() {
  return (
    <div>
    <div className="helloworld">
      <h1>Hello World!</h1>
      <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
    </div>
    <div>
        <ProductList />
        {/* <ProductJewelry /> */}
        {/* <User /> */}
      </div>
    </div>
  )
}