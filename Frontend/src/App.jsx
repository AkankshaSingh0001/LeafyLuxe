import Nav from './Components_admin/adminhome';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import ServiceUser from './Components_user/service.jsx';
import Contact from './Components_user/contact';
import About from './Components_user/about.jsx';
import Products from './Components_admin/Products';
import Fertilizers from './Components_admin/Products/fertilizers';
import Plants from './Components_admin/Products/plants';
import Gifts from './Components_admin/Products/gifts';
import Seeds from './Components_admin/Products/seeds';
import Accessories from './Components_admin/Products/accesories';
import Herbs from './Components_admin/Products/herbs';
import CosFertilizers from './Components_user/Products/fertilizers';
import CosPlants from './Components_user/Products/plants';
import CosGifts from './Components_user/Products/gifts';
import CosSeeds from './Components_user/Products/seeds';
import CosAccessories from './Components_user/Products/accesories';
import CosHerbs from './Components_user/Products/herbs';
import Home from './Components_user/home';
import AdminForm from './Components_admin/admin_form';
import Addproducts from './Components_admin/Addproducts'
import Addfertilizer from './Components_admin/Addproducts/Addfertilizer'
import Addseeds from './Components_admin/Addproducts/Addseeds.jsx';
import Addherbs from './Components_admin/Addproducts/Addherbs.jsx';
import Addplants from './Components_admin/Addproducts/Addplants.jsx';
import Addacc from './Components_admin/Addproducts/Addacc.jsx';
import Addgifts from './Components_admin/Addproducts/Addgifts.jsx';
import Login from './Components_user/login';
import HandleAdmin from './Components_admin/handle_admins';
import ShowAppo from './Components_admin/SeeAppointment.jsx';


import AssDetail from './Components_user/productdetails/Accesories.jsx';
import FerDetail from './Components_user/productdetails/Fertilizer.jsx'
import GiftDetail from './Components_user/productdetails/Gifts.jsx';
import PlantDetail from './Components_user/productdetails/Plants.jsx'
import SeedDetail from './Components_user/productdetails/Seeds.jsx';
import HerbDetail from './Components_user/productdetails/Herbs.jsx'


import Editacc from './Components_vendour/Edit/Editaccesories.jsx'
import EditFertilizer from './Components_vendour/Edit/Editfertilizer.jsx';
import EditGifts from './Components_vendour/Edit/EditGifts.jsx';
import Editplants from './Components_vendour/Edit/Editplants.jsx';
import Editseeds from './Components_vendour/Edit/Editseeds.jsx';
import Editherbs from './Components_vendour/Edit/Editherbs.jsx';
import AdminProfile from './Components_admin/AdminProfile.jsx';
import RegistrationD from './Components_admin/Delivery.jsx';
import Delivery from './Components_admin/handle_deliveryStaff.jsx';
import Regservice from './Components_admin/regservice.jsx';
import Service from './Components_admin/handle_servicestaff.jsx';
import Vendour_reg from './Components_vendour/Vendour_reg.jsx';
import Vpage from './Components_vendour/Vpage.jsx';
import Vlist from './Components_vendour/vlist.jsx';
import Privatecomponent from './Components_user/Privatecomponent.jsx';
import Order from './Components_admin/orders/Order.jsx';
// import Ordfer from './Components_admin/orders/Ordfertilizer.jsx';
// import Ordgifts from './Components_admin/orders/Ordgifts.jsx';
// import Ordacc from './Components_admin/orders/Ordacc.jsx';
// import Ordplants from './Components_admin/orders/Ordplants.jsx';
// import Ordseeds from './Components_admin/orders/Ordseeds.jsx';
// import Ordherbs from './Components_admin/orders/Ordherbs.jsx';
// import FerDetais from './Components_admin/orders/detailorder/FerDetailOrder.jsx';
// import AccDetais from './Components_admin/orders/detailorder/Accdetailorder.jsx'
// import PlantsDetais from './Components_admin/orders/detailorder/Plantsdetailorder.jsx'
// import HerbsDetais from './Components_admin/orders/detailorder/Herbsdetailorder.jsx'
// import SeedsDetais from './Components_admin/orders/detailorder/Seedsdetailorder.jsx'
// import GiftsDetais from './Components_admin/orders/detailorder/Giftsdetailorder.jsx'
import Showvproduct from './Components_vendour/Showproduct.jsx';
import RegCustomer from './Components_user/Customerreg.jsx';
import Slot from './Components_user/slot.jsx';
import Venderproduct from './Components_vendour/Venderproduct.jsx';

import OrderPageFertilizer  from './Components_admin/Cards/ordersnew/Fertilizerorder.jsx';
import Showorder from './Components_admin/Showord/Showorders.jsx';
import Cosprofile from './Components_user/Cosprofile.jsx';
import ShowReview from './Components_admin/Revieshow.jsx';


//vendour edit and delete
import Vfertilizer from './Components_vendour/Products/fertilizers.jsx';
import Vacc from './Components_vendour/Products/accesories.jsx';
import Vplants from './Components_vendour/Products/plants.jsx';
import Vherbs from  './Components_vendour/Products/herbs.jsx';
import Vseeds from './Components_vendour/Products/seeds.jsx';
import Vgifts from './Components_vendour/Products/gifts.jsx';
//customer review
// import Creview from './Components_admin/Rev/Review.jsx';
import Customer from './Components_admin/Rev/Showcustomer.jsx'
import CustomerApp from './Components_user/Cusappointment.jsx'
import AdminCusOrder from './Components_admin/AdminSeeCusorderShow.jsx'
import CusOrderC from './Components_user/Seecusorders';
import Orderplaced from './Components_user/Orderplaced.jsx';

import Success from './Components_admin/Success.jsx'
import Cancle from './Components_admin/Cancle';


function App() {

const handleSumbit=(e)=>{axios.post('https://leafy-luxe.vercel.app/')}

//   axios.default.withCredentials=true;
// const handleSumbit=(e)=>{
//   e.preventDefault();
  
//   .then(result=>console.log(result))
//   .catch(err=>console.log(err))
// }
  
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

          {/* <Route element={<Privatecomponent/>}> */}

          <Route path='/admin' element={<Nav/>}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/fertilizers' element={<Fertilizers></Fertilizers>}></Route>
          <Route path='/plants' element={<Plants></Plants>}></Route>
          <Route path='/gifts' element={<Gifts></Gifts>}></Route>
          <Route path='/seeds' element={<Seeds></Seeds>}></Route>
          <Route path='/accesories' element={<Accessories></Accessories>}></Route>
          <Route path='/herbs' element={<Herbs></Herbs>}></Route>
          <Route path='/cosfertilizers' element={<CosFertilizers></CosFertilizers>}></Route>
          <Route path='/cosplants' element={<CosPlants></CosPlants>}></Route>
          <Route path='/cosgifts' element={<CosGifts></CosGifts>}></Route>
          <Route path='/cosseeds' element={<CosSeeds></CosSeeds>}></Route>
          <Route path='/cosaccesories' element={<CosAccessories></CosAccessories>}></Route>
          <Route path='/cosherbs' element={<CosHerbs></CosHerbs>}></Route>
          <Route path='/admin/new_admin' element={<AdminForm></AdminForm>}></Route>
          <Route path='/addproducts' element={<Addproducts></Addproducts>}></Route>
          <Route path='/addfertilizers' element={<Addfertilizer></Addfertilizer>}></Route>
          <Route path='/addseeds' element={<Addseeds />}></Route>
          <Route path='/addherbs' element={<Addherbs />}></Route>
          <Route path='/addplants' element={<Addplants />}></Route>
          <Route path='/addaccesories' element={<Addacc />}></Route>
          <Route path='/addgifts' element={<Addgifts />}></Route>
          <Route path='/admin/handle_admin' element={<HandleAdmin></HandleAdmin>}></Route>

          <Route path='/editfertilizer/:id' element={<EditFertilizer></EditFertilizer>}></Route>
          <Route path='/editacc/:id' element ={<Editacc></Editacc>}></Route>
          <Route path ='/editherbs/:id' element ={<Editherbs></Editherbs>}></Route>
          <Route path ='/editplants/:id' element ={<Editplants></Editplants>}></Route> 
          <Route path ='/editgifts/:id' element ={<EditGifts></EditGifts>}></Route> 
          <Route path ='/editseeds/:id' element ={<Editseeds></Editseeds>}></Route> 
          <Route path='/adminprofile' element={<AdminProfile></AdminProfile>}></Route>
          <Route path='/regdelivery' element={<RegistrationD></RegistrationD>}></Route>
          <Route path='/admin/handle_delivery' element={<Delivery></Delivery>}></Route>
          <Route path='/regservicestaff' element={<Regservice/>}></Route>
          <Route path='/admin/handle_servicestaff' element={<Service/>}></Route>
          <Route path='/regvendour' element={<Vendour_reg/>}></Route>
          <Route path='/vendour' element={<Vpage/>}></Route>
          <Route path='/vlist' element={<Vlist/>}></Route>
          <Route path='/orders' element ={<Order/>}></Route>
          {/* <Route path='/orderfertilizers' element={<Ordfer/>}></Route> */}
          {/* <Route path='/product/:vendorId' element={<FerDetais/>} /> */} 
          {/* <Route path='/ordergifts' element={<Ordgifts/>}></Route>
          <Route path ='/orderaccesories' element={<Ordacc/>}></Route>
          <Route path='/orderplants' element={< Ordplants/>}></Route>
          <Route path='/orderseeds' element={<Ordseeds/>}></Route>
          <Route path='/orderherbs' element={<Ordherbs/>}></Route> */}
          {/* <Route path='/fertilizerorder/:vendorId' element={<FerDetais/>} />
          <Route path='/accorder/:vendorId' element={<AccDetais/>} />
          <Route path='/plantsorder/:vendorId' element={<PlantsDetais/>} />
          <Route path='/herbsorder/:vendorId' element={<HerbsDetais/>} />
          <Route path='/seedsorder/:vendorId' element={<SeedsDetais/>} />
          <Route path='/giftsorder/:vendorId' element={<GiftsDetais/>} /> */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<ServiceUser/>}/>
          <Route path='/showproducts' element={<Showvproduct></Showvproduct>}/>
          <Route path='/regcustomer' element={<RegCustomer></RegCustomer>}/>
 
          <Route path='/cosdetass/:id' element={<AssDetail></AssDetail>}></Route>
          <Route path='/cosdetfer/:id' element={<FerDetail></FerDetail>}></Route>
          <Route path='/cosdetgift/:id' element={<GiftDetail></GiftDetail>}></Route>
          <Route path='/cosdetplant/:id' element={<PlantDetail></PlantDetail>}></Route>
            <Route path='/cosdetseed/:id' element={<SeedDetail></SeedDetail>}></Route>
            <Route path='/cosdetherb/:id' element={<HerbDetail></HerbDetail>}></Route>
            <Route path='/bookservice' element={<Slot></Slot>}></Route>
            <Route path="/orderorderfertilizer" element={<OrderPageFertilizer />}> </Route>
            <Route path='/showorder' element={<Showorder />}></Route>
            <Route path='venderproducts' element={<Venderproduct></Venderproduct>}></Route>
            <Route path='/cosprofile' element={<Cosprofile/>}></Route>


            <Route path='/Vfertilizers' element={<Vfertilizer ></Vfertilizer>}></Route>
          <Route path='/Vseeds' element={<Vseeds></Vseeds>}></Route>
          <Route path='/Vherbs' element={<Vherbs></Vherbs>}></Route>
          <Route path='/Vaccesories' element={<Vacc></Vacc>}></Route>
          <Route path='/Vgifts' element={<Vgifts></Vgifts>}></Route>
          <Route path='/Vplants' element={<Vplants></Vplants>}></Route>
          <Route path='/allapp' element={<ShowAppo></ShowAppo>}></Route>

          {/* <Route path='/Creview' element={<Creview/>}></Route> */}
          {/* <Route path='/appointment' element={< Appointment/>}></Route> */}
          <Route path='/customerview' element={<Customer/>}></Route>
          <Route path='/cusappontment' element={<CustomerApp></CustomerApp>}></Route>
          <Route path='/AdminCusOrder' element={<AdminCusOrder></AdminCusOrder>}></Route>
          <Route path='/CusOrderC' element={<CusOrderC></CusOrderC>}></Route>
          <Route  path='/orderplaced' element={<Orderplaced></Orderplaced>}></Route>
          <Route path='/showreview' element={<ShowReview></ShowReview>}></Route>
          <Route path='./success' element={<Success></Success>}></Route>
          <Route path='./cancle' element={<Cancle></Cancle>}></Route>

          {/* {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );

}



export default App;
