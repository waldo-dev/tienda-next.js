import { getItems } from "../services/itemService";

const getState = ({setStore, getActions, getStore}) => {
    return{
        store:{
            counter:0,
            characters: [],
        },
        actions:{
            incremento: ()=>{
                const store = getStore();
                setStore({
                    counter: store.counter + 1
                })
            },
            decremento: ()=>{
                const store = getStore();
                setStore({
                    counter: store.counter - 1
                })
            },
            addProduct:()=>{
                    const items =  getItems()
                    console.log(items)
            },
            deleteProduct: (i)=>{
                const store = getStore()
                setStore({
                    favoritos: store.characters.filter((element, indice)=> i != indice , i) 
                })
            },
        }
    }
}
export default getState;