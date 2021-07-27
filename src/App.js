import React from 'react';
import Header from './componants/Header';
import Main  from './componants/Main';
import Footer from './componants/Footer';
import data from './componants/assests/data.json'
import './App.css';
import SelectBeast from './componants/SelectBeast';


class App extends React.Component {


  constructor (props){
    super(props);
    this.state ={
     
      show:false,
    }

  }

  modalData = (title, img_Url, description,show) => {
    this.setState({
      title: title,
      img_Url: img_Url,
      description: description,
      show:show
    });
  };

  handleShow = show => {

    this.setState({

      show:show,
    })
  }




  render(){
    return(


<>
  <Header />

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
