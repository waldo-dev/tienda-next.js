// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Invertocat Coasters",
      price: 20,
      image: "/images/invertocat_coasters.webp",
      description: "Posa vasos"
    },
    {
      id: 1,
      title: "Invertocat Hoodie",
      price: 90,
      image: "/images/invertocat_hoodie.webp",
      description: "Poleron bello"
    },
    {
      id: 2,
      title: "Invertocat Mug",
      price: 25,
      image: "/images/invertocat_mug.webp",
      description: "Taza linda linda"
    },
    {
      id: 3,
      title: "Invertocat Pride Hoodie",
      price: 90,
      image: "/images/invertocat_pride_hoodie.webp",
      description: "Poleron requete lindo"
    },
    {
      id: 4,
      title: "Tenticat Figurine",
      price: 50,
      image: "/images/tentocat_figurine.webp",
      description: "Adorno tentocat hermoso"
    },
  ])
}
