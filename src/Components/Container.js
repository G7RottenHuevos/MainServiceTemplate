import React from 'react';
import Tabs from './Tabs.js';
import { Overview } from "./Overview.js"
import { Specifications } from "./Specifications.js"
import { WarrantyReturns } from "./Warranty Returns.js"
import { Reviews } from "./Review.js"
import { QA } from "./QA.js"

const styles = {
    fontFamily:'sans-serif',
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'aTab',
        }
    }
    render(){
        const content = {
            aTab: <Overview/>,
            bTab: <Specifications/>,
            cTab: <WarrantyReturns/>,
            dTab: <Reviews/>,
            eTab: <QA/>,
        }
        return(
            <div style={styles}>
                <Tabs
                active={this.state.active}
                onChange={ active =>this.setState({active})}
                >
                <div key='aTab'>Overview</div>
                <div key='bTab'>Specification</div>
                <div key='cTab'>WarrantyReturns</div>
                <div key='dTab'>Reviews</div>
                <div key='eTab'>QA</div>
                </Tabs>
                
                <h5>{content[this.state.active]}</h5>

            </div>
        )
    }
}
export default Container;






















// import React, {Component} from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Overview } from "./Overview.js"
// import { Specifications } from "./Specifications.js"
// import { WarrantyReturns } from "./Warranty Returns.js"
// import { Review } from "./Review.js"
// import { QA } from "./QA.js"
// // import 'react-tabs/styles/react-tabs.css';



// // class Container extends Component {
// //     constructor(props){
// //         super()
// //         this.state ={
// //             Container: [],
// //         }
// //     }

// //     render(){
// //         const title = this.state.Container.map((x) => {
// //             return (<Tab key={x.id}>{x.id}</Tab>)
// //         })

// //         const text = this.state.Container.map((x) => {
// //              return (<TabPanel key={x.id}> {x.title}</TabPanel>)
// //          })

//         // const displayTabs = (
//         //     <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
//         //         <TabList>
//         //             <Tab>Overview</Tab>
//         //             <Tab>Specifications</Tab>
//         //             <Tab>WarrantyReturns</Tab>
//         //             <Tab>Review</Tab>
//         //             <Tab>QA</Tab>
//         //         </TabList>

//         //     </Tabs>
//         // )
//         function ControlledTabs() {
//             const [key, setKey] = useState('home');
          
//             return (
//               <Tabs
//                 id="controlled-tab-example"
//                 activeKey={key}
//                 onSelect={(k) => setKey(k)}
//               >
//                 <Tab eventKey="home" title="Home">
//                   <Sonnet />
//                 </Tab>
//                 <Tab eventKey="profile" title="Profile">
//                   <Sonnet />
//                 </Tab>
//                 <Tab eventKey="contact" title="Contact" disabled>
//                   <Sonnet />
//                 </Tab>
//               </Tabs>
//             );
//           }
//           render(<ControlledTabs />);
        
// //    
// export default Container;