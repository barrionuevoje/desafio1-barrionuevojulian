class ProductManager {
    #products = []
  
    constructor() {
      this.code = 0
    }
  
    getProducts() {
      return this.#products
    }
  
    addProduct(title, description, price, thumbnail, code, stock ) {
         this.code++
         
  
      const product = {code: this.code,title,description,price,thumbnail,stock}
      
  
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