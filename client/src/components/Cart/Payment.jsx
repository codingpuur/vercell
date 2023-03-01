import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
import { newOrder } from '../../actions/orderAction';
import { clearErrors } from '../../actions/orderAction';
import { useSnackbar } from 'notistack';
import { post } from '../../utils/paytmForm';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MetaData from '../Layouts/MetaData';

const Payment = () => {

    const dispatch = useDispatch();
 
    const { enqueueSnackbar } = useSnackbar();


    const [payDisable, setPayDisable] = useState(false);

    const { shippingInfo, cartItems,} = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const paymentData = {
        amount: Math.round(totalPrice),
        email: user.email,
        phoneNo: shippingInfo.phoneNo,
    };
     const [paymentInfo,setpaymentInfo]=useState({
        id:"order_LMDDEQO3tYYJcA",
        status:"success", 
     })
    const order = {
        shippingInfo,
        paymentInfo,
        orderItems: cartItems,
        totalPrice,
    }
    



    const submitHandler = async (e) => {
        e.preventDefault();

     
        setPayDisable(true);

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                '/api/v1/payment/process',
                paymentData,
                config,
            );

            let info = {
                action: "https://securegw-stage.paytm.in/order/process",
                params: data.paytmParams
            }

            post(info)


        } catch (error) {
           
            setPayDisable(false);
            enqueueSnackbar(error, { variant: "error" });
        }
    };

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            enqueueSnackbar(error, { variant: "error" });
        }
    }, [dispatch, error, enqueueSnackbar]);




    // razorpay intrigation start
    
 const handleOpenRazorpay=(data)=>{
    const options ={
      key:"rzp_test_sXArJAhc492VDU",
      amount:Number( data.amount),
      current:data.currency,
      name:"valentinesaga",
      description:"xyz",
      order_id:data.id,
      handler:function(response){
        console.log(response)
        axios.post('/api/v1/payment/verify',{response:response}).then(res=>{
         console.log(res,33)
         
         dispatch(newOrder(order));
        }).catch(err=>{
          console.log(err)
        })
      } 



    }
    const rzp =new window.Razorpay(options)
    rzp.open()
 }



    const handlePayment=(totalPrice)=>{
        const _data =totalPrice
        axios.post("/api/v1/payment/orders",_data).then(res=>{
            console.log(res.data.data)
            console.log(res.data.data.razorpay_order_id)

            setpaymentInfo({...paymentInfo,id:res.data.data.razorpay_order_id})
            handleOpenRazorpay(res.data.data)
        }).catch(err=>{
            console.log(err)
        })

    }
// razorpay intrigation end


    return (
        <>
            <MetaData title="valentinesaga: Secure Payment | Paytm" />

            <main className="w-full mt-20">

                {/* <!-- row --> */}
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">

                    {/* <!-- cart column --> */}
                    <div className="flex-1">

                        <Stepper activeStep={3}>
                            <div className="w-full bg-white">

                                <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden">
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="payment-radio-group"
                                            defaultValue="paytm"
                                            name="payment-radio-button"
                                        >
                                            <FormControlLabel
                                                value="paytm"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        <img draggable="false" className="h-6 w-6 object-contain" src="https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png" alt="Paytm Logo" />
                                                        <span>Paytm</span>
                                                    </div>
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                    {/* <input type="submit" value={`Pay ₹${totalPrice.toLocaleString()}`} disabled={payDisable ? true : false} className={`${payDisable ? "bg-primary-grey cursor-not-allowed" : "bg-primary-orange cursor-pointer"} w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`} /> */}

                                </form>
                                <button className={`${payDisable ? "bg-primary-grey cursor-not-allowed" : "bg-primary-orange cursor-pointer"} w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`} onClick={()=>handlePayment({totalPrice})} id="rzp-button1">Pay</button> 

                            </div>
                        </Stepper>
                    </div>

                    <PriceSidebar cartItems={cartItems} />
                </div>
            </main>
        </>
    );
};

export default Payment;