import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../actions/productActions';

const Filter = (props) => {
    const [searchKey , setSearchKey] = useState('');
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch();

    return (
        <div>
    <div className="row m-5 justify-content-center">
        <div className="col-md-3">
            <input type="text" placeholder="Search product" className="form-control" onChange={(e)=>setSearchKey(e.target.value)} value={searchKey}/>
        </div>
        <div className="col-md-2">
            <select className="form-control" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="popular">Popular</option>
                <option value="lth">Low to High</option>
                <option vlaue="htl">High to low</option>
            </select>
        </div>
        <div className="col-md-3">
            <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="games">Games</option>
                <option valu="fashion">Fashion</option>
                <option value="games">Games</option>
                <option value="mobiles">Mobiles</option>
                <option value="electronics">Electronic</option>
            </select>
        </div>
        <div class="col-md-2"><button className="btn btn-dark" onClick={()=>filterProducts(dispatch, searchKey,sort, category)}>SEARCH</button></div>
        
    </div>
    </div>
    );
}
export default Filter;