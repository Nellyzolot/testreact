import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCategories} from '../actions/CategoriesAction';
import {getSubcategories} from '../actions/SubcategoriesAction';
import Categories from '../components/Data/Categories';

const mapStateToProps = state => ({
  sid: state.loginReducer.sid,
  categories: state.categoriesReducer.categories,
  isFetchingCat: state.categoriesReducer.isFetchingCat,
  subCategories: state.subcategoriesReducer.subCategories,
  currentIdCat: state.subcategoriesReducer.currentIdCat,
  isFetchingSub: state.subcategoriesReducer.isFetchingCat,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCategories,
  getSubcategories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);