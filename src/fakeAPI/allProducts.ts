import ProductList from "../components/ProductList/ProductList"

export enum StatusEnum {
  shipped,
  discontinued,
  pending
}

export type EnrichedProduct = Product & {
  description: string,
  imageUrl: string
}

export interface Product {
  id: string,
  name: string,
  price: number | null,
  isNew: boolean,
  status: StatusEnum
}

const enrichedProducts: EnrichedProduct[] = [
  {
    id: "1",
    name: "Product 1",
    price: 10,
    isNew: true,
    status: StatusEnum.shipped,
    description: `Est ad id nostrud culpa aliquip veniam cupidatat eu. Velit cupidatat velit consequat est non enim ipsum sint reprehenderit excepteur esse cillum. Ad ad incididunt ipsum Lorem velit excepteur. Et duis pariatur minim nulla fugiat dolor laboris id laboris exercitation culpa. Exercitation veniam proident ipsum ut nulla velit veniam ex proident et ex elit ea dolore.

Dolore incididunt incididunt est irure. Consequat occaecat consequat incididunt occaecat magna Lorem dolor amet ut. Officia ipsum consectetur labore eiusmod in dolore officia irure veniam ex in id. Duis id in ad in reprehenderit et reprehenderit. Ad qui est ea minim ut ullamco qui do.

Tempor officia dolore ullamco eiusmod eiusmod non ad ad esse est laboris. Nulla eiusmod id do aute irure enim. Ad nisi reprehenderit culpa ea. In eiusmod laboris voluptate elit dolore aliqua minim.`,
    imageUrl: 'wwww.fakeImage.com/1'
  },
  {
    id: "2",
    name: "Product 2",
    price: 100,
    isNew: true,
    status: StatusEnum.discontinued,
    description: `Reprehenderit pariatur qui sunt officia esse qui aute fugiat. Ad tempor ex quis enim nulla ex irure Lorem officia laborum. Excepteur id dolore voluptate mollit eiusmod eu dolor do. Incididunt id tempor dolor fugiat commodo nisi commodo id duis nulla enim minim anim eiusmod. Mollit dolore qui sint elit pariatur nulla ullamco consectetur mollit tempor incididunt ullamco laborum commodo. Exercitation deserunt velit fugiat ea sunt ex exercitation ut enim duis consequat voluptate sint quis. Amet consectetur occaecat nostrud excepteur irure id esse quis ea laborum esse voluptate.

Dolore ea excepteur sint non laborum dolor incididunt. Nulla elit qui quis non exercitation aliqua laboris magna. Cupidatat anim aliquip deserunt labore cillum dolore. Cupidatat adipisicing quis irure incididunt quis aliquip fugiat.

Ad nulla elit aliquip ad cupidatat voluptate irure. Est sunt Lorem aliqua mollit deserunt fugiat ipsum. Sint ex reprehenderit magna occaecat ullamco aliqua consectetur aliquip cillum qui.`,
    imageUrl: 'www.fakeImage.com/2'
  },
  {
    id: "3",
    name: "Product 3",
    price: 1000,
    isNew: false,
    status: StatusEnum.pending,
    description: `Lorem non in fugiat qui commodo incididunt nostrud pariatur officia reprehenderit ex minim mollit. In sint sunt sunt eiusmod occaecat aliquip culpa non irure adipisicing labore eu. Id qui ex et commodo mollit adipisicing non sint ullamco quis. Incididunt consequat proident cupidatat aute exercitation dolor culpa quis pariatur proident aliquip. Do ex do consequat occaecat voluptate excepteur aliquip duis amet elit tempor. Magna duis sint enim consequat eu aute ipsum consectetur non consequat nisi ullamco.

Cillum et exercitation labore commodo. Sit cillum pariatur aute deserunt nostrud laborum ut. Nulla ut occaecat velit proident veniam.

Officia id commodo sunt ex reprehenderit ut mollit qui aute. Dolor magna pariatur nostrud sunt id veniam culpa aute ex laboris. Nulla mollit sit duis reprehenderit incididunt minim officia. Laborum id fugiat dolore nostrud cillum nostrud ullamco aliquip mollit aliquip velit ex ea magna.`,
    imageUrl: 'www.fakeImage.com/3'
  },
  {
    id: "4",
    name: "Product 4",
    price: 10000,
    isNew: true,
    status: StatusEnum.shipped,
    description: `Occaecat cillum aute est proident occaecat commodo est proident labore mollit. Laboris proident ut ex velit irure dolore anim labore velit officia non velit aliqua tempor. Mollit anim nisi aliqua fugiat. Exercitation elit nulla ullamco consequat magna.

Ad voluptate commodo nulla voluptate irure officia in quis et sunt mollit duis. Eu eiusmod culpa voluptate aliquip ex ullamco. Ipsum proident veniam dolor officia.

Sit cupidatat do quis adipisicing et Lorem non. Esse exercitation ea consequat qui esse nostrud velit consequat incididunt. Anim ex quis incididunt velit est. Labore minim voluptate magna ea ipsum ea qui aliqua cupidatat. Ea id dolore duis ipsum incididunt sint elit in velit et amet id. Cillum consectetur non est eiusmod proident ea.`,
    imageUrl: 'www.fakeImage.com/4'
  },
]

export const getAllProducts = (query: string): Promise<Product[]> => {
  console.log('inside getAllProducts')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('back from getAllProduct\'s timeout')
      const queriedProducts = enrichedProducts.filter((ep: EnrichedProduct) => {
        return (
          (query === "") ||
          (ep.name.includes(query)) ||
          (ep.description.includes(query))
        )
      })
      resolve(queriedProducts.map(({description, imageUrl, ...product}) => {
        return {...product}
      }))
    }, 2000);  // I know this is a long time
  })
}

export const getProduct = (id: string): Promise<EnrichedProduct> => {
  // given a string representing the id of the desired, product
  // returns the product
  return new Promise((resolve, rject) => {
    setTimeout(() => {
      console.log('back from getProduct\'s timeout')
      const numId = parseInt(id)
      resolve(enrichedProducts[(numId - 1)])
    }, 1000);
  })
}

export default ProductList;