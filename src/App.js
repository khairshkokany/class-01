import React from 'react';
import Header from './componants/Header';
import Main  from './componants/Main';
import Footer from './componants/Footer';
import data from './componants/assests/data.json'
import './App.css';
import SelectBeast from './componants/SelectBeast';
// import FilterJava from './componants/FilterJava';


class App extends React.Component {


  constructor (props){
    super(props);
    this.state ={
     
      show:false,
      // dataList:data

    }

  }

  modalData = (title, img_Url, description) => {
    this.setState({
      title: title,
      img_Url: img_Url,
      description: description,
      show:true,
    });
  };


  handleShow = () => {

    this.setState({

      show:false,
    })
  }

//   filterData = (items) => {
//     //eslint-disable-next-line
//     let newArr = data.filter(item => {

//         if (item.horns === Number(items)){

//           return (item);
          
//         }else if (items === 'all') {
//           return item;
//         }
      
//     });
//     console.log(newArr)
  
//     this.setState({dataList:newArr});
// };





  render(){
    return(


<>
  <Header />

  <div>

{/* <FilterJava

    fil={this.filterData}
    
/> */}

</div>

  <SelectBeast 

  show= {this.state.show} 
  hidden = {this.handleShow}
  title = {this.state.title}
  img_Url = {this.state.img_Url}
  description = {this.state.description}
  
  
  />
  
  <Main

  dataList = {data}
  modalData = {this.modalData}
  
  />


  <Footer />
</>

    

      
    )
  }
}


export default App;
