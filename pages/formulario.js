import react, { useState } from "react"
import Layout from "../components/Layout"
//importar firebase e suas funcionalidades (veio da pages/formulario e do firebase)
import firebaseApp1 from '../firebase'
import {getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoc } from 'firebase/firestore'
import {  useRouter } from "next/router"


//import Link from "next/link"

//Criar constante db para receber o firebaseApp
const db = getFirestore(firebaseApp1)

export default function Formulario1() {

  // constante router para realizar a ROTA
  const router = useRouter()
  //Criar constante (valor inicial) para receber os dados
  const valorinicio ={
    nome:"",
    Mes:"",
    Ano:"",
    Valor:""
   }

  //Mudar o Estado dos dados
  const [dado, setDado] = useState(valorinicio)
  //FAZER DUAS FUNÇÃO (PEGAR E GRAVAR)
  //capturar los inputs
  const obterInputs = (e) => {
    const { name, value } = e.target;
    setDado({ ...dado, [name]: value })
  }


  //esta funcion es para GRAVAR os DADOS en firebase
  const enviarDados = async(e)=>{
    e.preventDefault();
    //console.log(dado);
    try {
        await addDoc(collection(db,'Despesa'),{
            ...dado
        })
    } catch (error) {
        console.log(error);
    }
    //setDado({...valorInicial})

    //que esta FUNÇÃO  FAZ o TREDIRECIONAMNETO
    router.push('/')
}



   return (
    <Layout>
       <div>
           <div className='container'>
               <h2 className='text-center'>Formulario de Gastos</h2>
               <div className='card card-body'>
               <form className="row g-3" onSubmit={enviarDados}>
  <div className="col-md-4">
    <label for="inputEmail4" className="form-label">Despesa</label>
    <input type="text" placeholder='Digitar despesa' className='form-control mb-3' 
                name='nome'  value={dado.nome} onChange={obterInputs} required   />
  </div>
  <div className="col-md-3">
    <label for="inputPassword4" className="form-label">Valor</label>
    <input type="text" placeholder='Digitar valor' className='form-control mb-3' 
                name='Valor'  value={dado.Valor} onChange={obterInputs} required  />
  </div>
 
  <div className="col-md-2">
    <label for="inputState" className="form-label">Mês</label>
    <select id="inputState" className="form-select" name='Mes' value={dado.Mes} onChange={obterInputs} required >
      <option selected>Choose...</option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Ano</label>
    <input type="text" placeholder='Digitar Ano' className='form-control mb-3' 
                name='Ano' value={dado.Ano} onChange={obterInputs} required  />
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Gravar</button>
    <button className='btn btn-secondary ms-2' onClick={()=>router.push('/')} >Voltar</button>
  </div>
</form>
               </div>
           </div>
       </div>
       </Layout>
   )
}