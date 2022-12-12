import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

//importar firebase
import firebaseApp from '../firebase'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { async } from '@firebase/util'
const db = getFirestore(firebaseApp)



export default function Home({productos}) {

  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <div className="conteiner">
            <div className="row">
                <div className="col">
                    <div className="d-grip gap-2">
                        {/* <Link href={'/create'} className='btn btn-secondary mt-2 mb-2' > <a> Create</a></Link> */}
                    </div>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {productos.map((product, index) => (
                                <tr key={product.id}>
                                    <td> {product.description} </td>
                                    <td> {product.stock} </td>
                                    <td>
                                        <Link href={`/edit/${product.id}`} className='btn btn-light'> <a> <i className="fa-solid fa-pen-to-square"></i> </a> </Link>
                                        <button onClick={ () => deleteProduct(product.id) } className='btn btn-danger' > <i className="fa-solid fa-trash"></i> </button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      
    </>
  )
}

export const getServerSideProps = async(context)=>{
  const querySnapshot = await getDocs(collection(db,'products'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id: doc.id})
                })

  return {
    props:{
      productos: docs
    }
  }
}