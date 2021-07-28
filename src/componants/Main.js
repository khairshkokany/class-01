
import React from 'react';
import Hornedbeast from './Hornedbeast';
// import data from './assests/data.json'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterJava from './FilterJava';


// import Hornedbeast1 from './Hornedbeast1';
// import Hornedbeast2 from './Hornedbeast2';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: 0
        };

    }

    setFilterValue = (filterValue) => {
        this.setState({
            filterValue: filterValue,
        });
    }

    render() {
        return (
            <>
                <FilterJava setFilterValue={this.setFilterValue} />

                <Row xs={1} md={3} className='justify-content-center'>
                    {
                        this.props.dataList.filter(item =>
                            this.state.filterValue === 0
                                ? true
                                : item.horns === this.state.filterValue)
                            .map(item => {
                                return <Hornedbeast

                                    img_Url={item.image_url}
                                    title={item.title} description={item.description}
                                    modalData={this.props.modalData}
                                />
                            })
                    }
                </Row>

            </>
        );
    }




}

export default Main;


    // render() {



    //     return (


    //         <FilterJava setFilterValue={this.setFilterValue}

    //         />
    //         <div>
    //         <Row xs={1} md={3} className="g-4">
    //             {
    //             this.props.filterValue.filter(item => this.state.filterValue ===-1 ? true : item.horns === this.state.filterValue).map((item => {

    //                 return  <Hornedbeast img_Url={item.image_url} 
    //                     title={item.title}description={item.description}
    //                     modalData = {this.props.modalData}
    //                      />

    //             });

    //         }

    //                </Row>
    //                </div>

    //     );

    // }