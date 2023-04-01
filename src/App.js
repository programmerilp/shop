import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [
         {
         id: 1,
         title: 'Серый стул',
         img: './chair-grey.jpeg',
         desc: 'Lorem ipsum dolor sit amet',
         category: 'chairs',
         price: '49.99'
         }, 
         {
         id: 2,
         title: 'Серый стул',
         img: './table.webp',
         desc: 'Lorem ipsum dolor sit amet',
         category: 'tables',
         price: '149.99'
         },
         {
         id: 3,
         title: 'Серый стул',
         img: './sofa.jpeg',
         desc: 'Lorem ipsum dolor sit amet',
         category: 'sofa',
         price: '549.99'
         },
         {
         id: 4,
         title: 'Серый стул',
         img: './wall-light.jpeg',
         desc: 'Lorem ipsum dolor sit amet',
         category: 'light',
         price: '25.00'
         },
         {
         id: 5,
         title: 'Серый стул',
         img: './chair-white.jpeg',
         desc: 'Lorem ipsum dolor sit amet',
         category: 'chairs',
         price: '42.99'
         }

      ],
      showFullItem: false,
      fullItem: []
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return(
  <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
   )  
  }

  onShowItem(item) {
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  deleteOrder(id){
    this.setState({orders:this.state.orders.filter(el =>el.id !== id)})
  }

  addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el =>{
    if(el.id === item.id)
    isInArray = true
  })
    if(!isInArray)
      this.setState({orders: [...this.state.orders,item]})
  }
}

export default App;
