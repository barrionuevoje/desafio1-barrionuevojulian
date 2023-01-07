class ProductManager {
    #products = []
  
    constructor() {
      this.id = 0
    }
  
    getProducts() {
      return this.#products
    }
    getProductoById(title, id){
      this.id++
      const product = {id: this.id,title}
      const productId = this.#products.find(productId => productId.id === id)

      if (!productId) {
        
        this.#products.push(product)
        return `El producto ${title} se agrego con el id: ${product.id}`
  
      } else {
        
        return `El producto con el id ${id} ya esta agegado`
  
      }
    }
    
  
    addProduct(title, description, price, thumbnail, code, stock, id ) {
         this.id++
         
  
        const product = { code,title,description,price,thumbnail,stock, id: this.id}
      
  
      const productCode = this.#products.find(productCode => productCode.code === code)
  
      if (!productCode) {
        
        this.#products.push(product)
        return `El producto ${title} se agrego con el codigo: ${product.code}`
  
      } else {
        
        return `El producto con el codigo ${code} ya esta agegado`
  
      }
  
    }
  
  }
  
  const manejadorDeProductos = new ProductManager()
  
  console.log(manejadorDeProductos.addProduct('juego', 'juego', 30, 'abc', 15))
  console.log(manejadorDeProductos.addProduct('parlantes', 'parlantes', 30, 'abc',  12 ))
  console.log(manejadorDeProductos.addProduct('pantallas', 'pantallas', 50, 'abc', 11 ))
  console.log(manejadorDeProductos.addProduct('pantallas', 'pantallas', 50, 'abc', 10 ))
  
  
  manejadorDeProductos.getProducts()
  console.log(manejadorDeProductos.getProducts());

  manejadorDeProductos.getProductoById()
  console.log(manejadorDeProductos.getProductoById());