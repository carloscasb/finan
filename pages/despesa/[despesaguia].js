import react from 'react'
import Layout from '../../components/Layout'
//importar firebase
import firebaseApp1 from '../../firebase'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { async } from '@firebase/util'
import Router, { useRouter } from 'next/router'
const db = getFirestore(firebaseApp1)




export default function DespesaSimples({Despesa}) {
    const {query} = useRouter()
    const router = useRouter()

    const deleteDespesa = async()=>{
        const {despesaguia} = query
        await deleteDoc(doc(db, 'Despesa', despesaguia))
        router.push('/')
    }

    return (
        <Layout>
             <div>
      <div className='container'>
            <div className='card'>
                <div className='card card-header'>
                    <h5>Despesa</h5>
                </div>

                <div className='card car-body'>
                    <p  className='text-center'>Preço  :  {Despesa.nome} </p>
                    <p className='text-center'>Valor  :  {Despesa.Valor}</p>
                    <p className='text-center'>MÊS  :  {Despesa.Mes}</p>
                    <button type="button" className='btn btn-danger '  onClick={deleteDespesa} >Eliminar</button>
                    <button className='btn btn-secondary mt-2' onClick={()=>router.push('/')}>Voltar</button>
                </div>
            </div>
        </div>
    </div>

        </Layout>
    )
}

export async function getServerSideProps({query: {despesaguia}}){
    const docRef = doc(db, 'Despesa', despesaguia)
    const docSnap = await getDoc(docRef)
    const Despesaconst = docSnap.data()

    return{
        props:{
            Despesa:Despesaconst
        }
    }
}