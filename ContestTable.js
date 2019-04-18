import React from 'react';
import ReactTable from 'react-table';

class ContestTable extends React.Component{
     render(){
        const columns = [{
            Header: 'Name',
            accessor:this.props.name
          },{
            Header: 'Url',
            accessor: this.props.url
          },{
              Header:'Platform',
              accessor: this.props.platform
          },{
              Header:'StartTime',
              accessor: this.props.starttime
          },{
              Header:'Duration',
              accessor:this.props.duration
          },{
              Header:'EndTime',
              accessor:this.props.endtime
          }]
      return(
          <div>
              <ReactTable
               columns ={columns}
              />
          </div>
      )
     }
}
export default ContestTable;