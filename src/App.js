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
      title : 'tit',
      image_url :'imgu',
      description : 'des',
      show:false,
    }

  }

  modalData = (title, image_url, description) => {
    this.setState({
      title: title,
      url: image_url,
      description: description,
    });
  };

  handleShow = () => {

    this.setState({

      show:true,
    })
  }

handleHide = ()=> {
  this.setState({

    show:false,
  })
}



  render(){
    return(


<>
  <Header />

  <SelectBeast 

  show= {this.state.show} 
  hidden = {this.handleHide}
  title = {this.state.title}
  image_url = {this.state.image_url}
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
