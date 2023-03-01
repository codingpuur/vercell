import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';

import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import Cproducts from './ProductSlider/Cproducts';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';
import MinCategory2 from '../Layouts/MinCategory2';
import Displaypic from './ProductSlider/Displaypic';

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="valentinesaga dating Site for Couples" />
      <MinCategory2/>
      <Categories/>
      <main className="flex flex-col gap-3 px-2  sm:mt-2">
        
        <Banner />
        <Displaypic/>
        {/* <DealSlider title={"Discounts for You"} /> */}
        {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
        {!loading && <Cproducts title={"new exper"} tagline={"Based on Your Activity"} category={"New Experiences"} />}
        {!loading && <Cproducts title={"decoration"} tagline={"Based on Your Activity"} category={"Decorations"} />}
        {/* <DealSlider title={"Top Gift's, Best Price"} /> */}
        {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        {/* <DealSlider title={"Top Choice"} /> */}
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
      </main>
    </>
  );
};

export default Home;
