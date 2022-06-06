import { getItems } from "../../services/itemService";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function Store({ items }) {
    return (
        <Layout>
            <h1>Store</h1>
            {
                items.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <Image src={item.image} width='200' height={200} ></Image>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await getItems()
    return {
        props: {
            items: res
        }
    }
}