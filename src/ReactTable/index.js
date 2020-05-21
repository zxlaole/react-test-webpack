import React from 'react';
import './index.css';

class ReactTable extends React.Component{

    getTable = () => {
        const { columns, dataSource } = this.props;
        return(
            <table className="rc-table">
                { this.getHeaderTable(columns)}
                { this.getBodyTable(columns, dataSource)}
            </table>
        )
    }

    getHeaderTable = (columns) => {
        return(
            <thead>
                <tr>
                    {
                        columns && Array.isArray(columns) && columns.map((element,index) => (
                            <th className="rc-table-header-th" key={index}>{element.title}</th>
                        ))
                    }
                </tr>
            </thead>
        )
    }

    getBodyTable = (columns, dataSource) => {
        return(
            <tbody>
                { dataSource && dataSource.filter(r => r.name.indexOf(this.props.search)>=0).map((item,index) => {
                    return(
                        <tr key={index}>
                            {columns && columns.map((column,i) => (
                                <td className="rc-table-header-td" key={i}>{item[column.dataIndex]}</td>
                                ))
                            }
                        </tr>
                        )
                    }) 
                }
            </tbody>
        )
    }

    render() {
        return this.getTable();
    }
}

export default ReactTable;
