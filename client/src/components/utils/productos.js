const productos = [
    {
        id: 1,
        name: 'Producto 1',
        precio: 100,
        description: 'description del producto 1',
        image: 'https://picsum.photos/200/300?image=1',
        stock: 10
    },
    {
        id: 2,
        name: 'Producto 2',
        precio: 200,
        description: 'description del producto 2',
        image: 'https://picsum.photos/200/300?image=2',
        stock: 5
    },
    {
        id: 3,
        name: 'Producto 3',
        precio: 300,
        description: 'description del producto 3',
        image: 'https://picsum.photos/200/300?image=3',
        stock: 3
    }
]

const producto = {
    id: 1,
    name: 'Remera',
    price: 200,
    stock: 4,

    img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
    category: 'remeras',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
};

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 1000);
    });
};

export default productos;