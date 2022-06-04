const products = [
    {
        id: '1',
        name: 'Xbox One',
        price: 1200000,
        category: 'Consolas',
        img: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg',
        stock: 10,
        Description: 'Descripción del xbox one'
    },
    {
        id: '2',
        name: 'Xbox Series X',
        price: 1500000,
        category: 'Consolas',
        img: 'https://cdn.mos.cms.futurecdn.net/uFicTu3Ti56psJpsTGQ64C.jpg',
        stock: 10,
        Description: 'Descripción del xbox series x'
    },
    {
        id: '3',
        name: 'Xbox Series X',
        price: 1500000,
        category: 'Consolas',
        img: 'https://cdn.mos.cms.futurecdn.net/uFicTu3Ti56psJpsTGQ64C.jpg',
        stock: 10,
        Description: 'Descripción del xbox series x'
    },
    {
        id: '4',
        name: 'Xbox Series X',
        price: 1500000,
        category: 'Consolas',
        img: 'https://cdn.mos.cms.futurecdn.net/uFicTu3Ti56psJpsTGQ64C.jpg',
        stock: 10,
        Description: 'Descripción del xbox series x'
    },
    {
        id: '5',
        name: 'Xbox Series X',
        price: 1500000,
        category: 'Consolas',
        img: 'https://cdn.mos.cms.futurecdn.net/uFicTu3Ti56psJpsTGQ64C.jpg',
        stock: 10,
        Description: 'Descripción del xbox series x'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    }) 
}