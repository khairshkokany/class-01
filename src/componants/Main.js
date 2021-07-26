
import React from 'react';
import Hornedbeast from './Hornedbeast';
import data from './assests/data.json'

// import Hornedbeast1 from './Hornedbeast1';
// import Hornedbeast2 from './Hornedbeast2';



class Main extends React.Component {

 
    

    render() {


     
        return (

             data.map((element) => {

                return (
    
                    <Hornedbeast image_url={element.image_url} title={element.title} description = {element.description}/>
                    

                                       );
            })
        
     
        )

    }
}
export default Main;
