import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import "./Form.css";
import {Link} from "react-router-dom";

class MyForm extends React.Component {
    constructor()
    {
        super();

        this.state = {
          EmpNumber : '',
          SoftName : '',
          Version : '',
          Email: '',
          SoftTags : '',
          WebLink : '',
          TLName: 'Anil Kumar Modest',
          License: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTL = this.handleTL.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


async handleSubmit(e){
  e.preventDefault();

   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var data = {
        "id": `${Math.random().toString(36).substring(2, 15)}`,
        "employee_Request_Time" : `${date}`,
        "employee_Code": `${this.state.EmpNumber}`,
        "software_Name": `${this.state.SoftName}`,
        "software_Version": `${this.state.Version}`,
        "employee_EmailID": `${this.state.Email}`,
        "tags": `${this.state.SoftTags}`,
        "website_Link": `${this.state.WebLink}`,
        "team_Lead_ID": `${this.state.TLName}`,
        "software_License": `${this.state.License}`,
        "level_Status" : "Request is generated"
    };


let response = await fetch('api/post', {
 method : 'POST',
 headers: {
  'Content-Type': 'application/json'
},
 body : JSON.stringify(data)
});
    if (response.status < 299 && response.status >= 200)
    window.location.replace('/');

}

handleOptionChange(e) {
  this.setState({
    License: e.target.value
  });

}

 handleChange(e){

  this.setState({
    [e.target.name] : e.target.value
  });


}

handleTL(e){
  this.setState({
    TLName : e.target.value
  });
}

render(){
    return (
        <div>
          <div className="Nav-form">
          <Link to="/">
              <h1 className="nav-title" >Software Download System</h1>
              </Link>
              </div>

      <div className="form-container">
        <h3 className="ui center aligned header" style={{ margin: "10px" , color : "white" }}>Create a new Software Request </h3>

        <div className="ui green segment" style={{ marginLeft : "20%" , marginRight : "20%", marginTop : "30px" , width  : "60%" , padding : "30px"}} >

        <form onSubmit={this.handleSubmit} className="ui mini form">
        
                        <div className="eight wide field">
                            <label htmlFor="EmpNumber">Employee No.  <span className="astrick"> * </span></label>
        <input id="EmpNumber" name="EmpNumber" value={this.state.EmpNumber}  type="text" onChange={ (e) => this.handleChange(e)}/>
        </div>

        <div className="fields">
        <div className="twelve wide field">
                                <label htmlFor="SoftName">Software Name  <span className="astrick"> * </span></label>
        <input id="SoftName" name="SoftName" value={this.state.SoftName}  type="text" onChange={ (e) => this.handleChange(e)}/>
        </div>

        <div className="four wide field">
                                <label htmlFor="Version">Version   <span className="astrick"> * </span></label>
        <input id="Version" name="Version" value={this.state.Version} type="text" onChange={ (e) => this.handleChange(e)} />
        </div>
        </div>


        <div className="field"> 
                            <label htmlFor="Email">Employee Email Id <span className="astrick"> * </span></label>
        <input id="Email" name="Email" type="Email" value={this.state.Email} onChange={ (e) => this.handleChange(e)} />
        </div>

        <div className="field">
        <label htmlFor="SoftTags">Software Tags</label>
        <input id="SoftTags" name="SoftTags" value={this.state.SoftTags} type="text" onChange={ (e) => this.handleChange(e)} />
        </div>

        <div className="field">
                            <label htmlFor="WebLink"> Website Link<span className="astrick"> * </span></label>
        <input id="WebLink" name="WebLink" type="text" value={this.state.WebLink}  onChange={ (e) => this.handleChange(e)}/>
        </div>

        <div className="field">
                            <label>Team Lead Name <span className="astrick"> * </span></label>
      <select value={this.state.value} onChange={this.handleTL}>
        <option value="Anil Kumar Modest">Anil Kumar Modest</option>
        <option value="Yogesh Parashar">Yogesh Parashar</option>
        <option value="Puneet Singhal">Puneet Singhal</option>
        <option value="Rahul Gupta">Rahul Gupta</option>
      </select>
                        </div>

      <br />  

        <div className="inline fields">
                            <label>License <span className="astrick"> * </span></label>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio"  value="Free" checked={this.state.License === 'Free'} onChange={this.handleOptionChange}/>
        <label>Free</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio"  value="Paid" checked={this.state.License === 'Paid'} onChange={this.handleOptionChange} />
        <label>Paid</label>
      </div>
    </div>
    </div>
    <button onClick={this.handleSubmit}>Submit Download Request</button>
      </form> 
</div>

</div>
      </div>
    );
}

}


export default MyForm;