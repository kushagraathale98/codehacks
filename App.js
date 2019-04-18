import React from 'react';
import Title from './Title';
import ContestTable from './ContestTable';
class App extends React.Component{
    state={
        name: '',
        url:'',
        platform :'',
        starttime :'',
        duration :'',
        endtime : ''
    }
    
    searchContests = async(e)=>{
        e.preventDefault();
        const api_call = await fetch(`http://stopstalk.com/contests.json?i=${this.state.name},${this.state.url},${this.state.platform},${this.state.starttime},${this.state.duration},${this.state.endtime}`)
        const data = await api_call.json();
        this.setState({
            name: data.upcoming[0].name,
            url: data.upcoming[0].url,
            platform : data.upcoming[0].platform,
            starttime : data.upcoming[0].starttime,
            duration : data.upcoming[0].duration,
            endtime : data.upcoming[0].endtime
        });  
    }

    render(){
        window.onload = searchContests;
        return(
            <div className="container">
            <Title/>

            <ContestTable
             name = {this.state.name}
             url = {this.state.url}
             platform = {this.state.platform}
             starttime = {this.state.starttime}
             duration = {this.state.duration}
             endtime = {this.state.endtime}
            />
            <button onClick={this.searchContests}    >CONTESTS</button>
            </div>
        )
    }
}
  
export default App;