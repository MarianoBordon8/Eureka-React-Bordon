import { listCartContext } from "./providerContextoListCart"
import { useContext, useState } from "react"
import { Timestamp, collection, addDoc, writeBatch, getDocs, query, documentId, where } from "firebase/firestore";
import { db } from "../services/firebase";
import Button from "./Button";
import { useForm } from 'react-hook-form'


const Compra = ({total}) => {

    const { listCart,  clearCart } = useContext(listCartContext)
    const [ordenId, setOrderId] = useState("")
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const {register, handleSubmit} = useForm()

    const mostrarOcultarFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const crearOrden = ({nombre, telefono, email}) =>{
        const orden = {
        comprador: {
            nombre,
            telefono,
            email
        },
        items: listCart,
        total: total,
        date: Timestamp.fromDate(new Date())
    }
    const referencia = collection(db, "ordenes")
    addDoc(referencia, orden)
    .then((doc)=>{
        setOrderId(doc.id)
        clearCart()
    }
    )
    .catch((error) => {
        console.log("Erorr")
    })
    .finally(() => {
        // Usar ordenId aquí, ya que estás seguro de que la operación asincrónica ha terminado
        console.log(ordenId);
    });
    console.log(ordenId)


    if(ordenId){
        return(
            <div className="container">
                <h1 className="main-title">Gracias por tu compra</h1>
                <p> Tu numero ID de pedido es : {ordenId}</p>
            </div>
        )
    }

    }



    return(
        <>
            <Button onClick={mostrarOcultarFormulario}>Comprar</Button>
            {mostrarFormulario && (listCart.length !== 0 ) &&
            <div className='container'>
                <h1 className='main-title'>Finalizar Compra:</h1>
                <form className='formulario' onSubmit={handleSubmit(crearOrden)}>

                <input type='text'  placeholder='ingrese su nombre' {...register("nombre")}/>

                <input type='email' placeholder='ingrese su email' {...register("email")}/>

                <input type='phone' placeholder='ingrese su numero de telefono' {...register("telefono")}/>

                <button className="Enviar" type='submit'>Comprar</button>
                </form>
        </div>}
        </>
    )
            }

export default Compra