import './SectionList.css'
import React from "react";
import { Link } from 'react-router-dom';
import Section from '../section/Section';


class SectionList extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [] 
        }

    }

    async componentDidMount() {
        await fetch('http://localhost:8080/api/SapoFnB/sections')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                sections : data
            }) 
        })
        .catch(console.log)
    }

    renderSections = () => {
        
        let categories = this.state.sections.map((data, index) =>
            <tr key={data.id}>
                <td>
                    <Section id={data.id}/>
                </td>
            </tr>
        );
        return categories;
    }
    render() {
        return (    
            <div className='container'>
                <div className='table-wrapper'>
                    <table className='category-list'>
                        <thead>
                            <tr>
                                <th>
                                    <h1>Section List</h1>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderSections()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default SectionList;