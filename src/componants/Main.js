
import React from 'react';
import Hornedbeast from './Hornedbeast';
// import data from './assests/data.json'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';


// import Hornedbeast1 from './Hornedbeast1';
// import Hornedbeast2 from './Hornedbeast2';



class Main extends React.Component {




    render() {



        return (
            <Row xs={1} md={3} className="g-4">
                {this.props.dataList.map((element) => {

                    return (

                        <Hornedbeast 
                        img_Url={element.image_url} 
                        title={element.title} 
                        description={element.description}
                        modalData = {this.props.modalData}
                         />
                    );
                })}

            </Row>
        )

    }
}
export default Main;
