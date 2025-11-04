import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import { useCounterStore } from "../../store/useCounterStore";


export default function ShoppingCart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const resetCounter = useCounterStore((state) => state.reset);

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
console.log(cart)

  return (
    <div className="" style={{ padding: "2rem" }}>
    <div className="w-full flex justify-center mb-[5vh] " >
    <div className="w-fit h-fit bg-black p-3">
      <p className=" text-center text-white select-none" style={{fontSize:"calc(15px + 1.5vw)"}}  ><i className="bi bi-cart"></i> Shopping cart</p>
    </div>
    </div>

      {cart.length === 0 ? (
          <div className="w-full flex justify-center mt-[5vh] ">
            <div className="w-fit h-fit bg-black p-5">
          <p className=" text-center text-white" style={{fontSize:"calc(15px + 1.5vw)"}}>Your cart is empty.</p>
            </div>
          </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="border-solid border-white border-4 border-l-0 border-t-0 rounded-4xl flex flex-col lg:flex-row py-[5vh] px-[5vw] bg-black justify-center items-center">
              <div >
              <img className="border-solid border-white border-4 border-l-0 border-t-0 rounded-4xl mb-[5vh] lg:mb-0" style={{ width: "100px", height: "100px", objectFit: "contain" }} src={item.product.image} alt="" />
              </div>
            <div className="flex flex-col w-full justify-center items-center text-white "
              key={item.id}
            >
              <p className="text-center" >
                {item.title} <br /><br /> ${item.price} × {item.quantity} = ${(item.price * item.quantity)}
              </p>
            </div><br />
            <div className="h-fit text-white  lg:mr-[3vw] p-1 rounded-[5px] bg-black border-2 w-fit cursor-pointer" onClick={() =>{
            removeFromCart(item.id)
            resetCounter(item.id);
            }
            }>Remove</div>
            <div className="h-fit p-1 text-white mt-[3vh] lg:mt-0 rounded-[5px] bg-black border-2 w-fit cursor-pointer" onClick={() => navigate(`/products/${item.id}`)} >Edit</div>
            </div>
          ))}
          <div className="w-full flex justify-center mt-[5vh] ">
            <div className="w-fit h-fit bg-black p-3">
          <p className=" text-center text-white" style={{fontSize:"calc(15px + 1.5vw)"}}><i className="bi bi-tags"></i> Total cost : ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
