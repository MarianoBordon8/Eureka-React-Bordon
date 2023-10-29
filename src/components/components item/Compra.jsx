import { listCartContext } from "./providerContextoListCart"
import { useContext, useState } from "react"
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import Button from "./Button";
import { useForm } from 'react-hook-form'


const Compra = ({total, volverACero}) => {

    const { listCart,  clearCart} = useContext(listCartContext)
    const [ordenId, setOrderId] = useState("")
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const {register, handleSubmit} = useForm()
    const [bandera, setBandera] = useState(false)
    let mostrar = "Comprar"
    if(bandera){
        mostrar = "Volver"
    }else{
        mostrar = "Comprar"
    }

    const mostrarOcultarFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        volverACero()
        setBandera(!bandera)
    };

    const crearOrden = async ({ nombre, telefono, email }) => {
        try {
            const orden = {
                comprador: {
                nombre,
                telefono,
                email,
                },
                items: listCart,
                total: total,
                date: Timestamp.fromDate(new Date()),
            };
            const referencia = collection(db, "ordenes");
            const doc = await addDoc(referencia, orden);
            setOrderId(doc.id);
            clearCart();
        } catch (error) {
        console.error("Error al crear la orden:", error);
        }
    };

    if(ordenId){
        return(
            <div className="container">
                <h1>Gracias por tu compra</h1>
                <p> Tu numero ID de pedido es : {ordenId}</p>
            </div>
        )
    }

    return(
        <>
            <Button onClick={mostrarOcultarFormulario}>{mostrar}</Button>
            {mostrarFormulario && (listCart.length !== 0 ) &&
            <div className='container'>
                <h2>Finalizar Compra:</h2>
                <form className='formulario' onSubmit={handleSubmit(crearOrden)}>

                <input type='text'  placeholder='ingrese su nombre' {...register("nombre")}/>

                <input type='email' placeholder='ingrese su email' {...register("email")}/>

                <input type='phone' placeholder='ingrese su numero de telefono' {...register("telefono")}/>

                <button className="enviar" type='submit'>Confirmar Compra</button>
                </form>
        </div>}
        </>
    )
}

export default Compra