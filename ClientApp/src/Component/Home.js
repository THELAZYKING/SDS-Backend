import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import './HomePage.css';
import {Link} from "react-router-dom";


class HomePage extends React.Component {
    constructor()
    {
        super();
        this.state = {
            searchBar : '',
            loading : true,
            GetData : [],
            sortType : 'desc',
            styleType : 'grid',
            currentPage : '1',
            PostPerPage : '6',
        }

        this.handleSort = this.handleSort.bind(this);
        this.handleStyle = this.handleStyle.bind(this);
        
    }

    componentDidMount() {
        this.GetRequest();
      }

      onchange = e => {
        this.setState({ searchBar: e.target.value });
      };  
      

      handleSort(sortType){
        this.setState({sortType});
      }

      handleStyle(styleType)
      {
        this.setState({styleType});
      }
  

      Paginating(number)
      {
        this.setState({currentPage: number});
      }


    renderDatasetsTable(Dataset) {
        return (
             <div className="SearchBack">
                <div className={this.state.styleType === 'grid' ? "DataBox" : "DataBoxList" } key={Dataset.id}>
                  {/* {software_Name} */}
                  <div className={this.state.styleType === 'grid' ? "DataTitle" : "DataTitleList" }> {Dataset.software_Name}</div>
                  {/* {software_Version} */}
                  <div className={this.state.styleType === 'grid' ? "DataVersion" : "DataVersion" }>ver: {Dataset.software_Version}</div>
                  {/* {website_Link} */}
                  <div className={this.state.styleType === 'grid' ? "DataWeb" : "DataWebList" }><strong>Website </strong>: {Dataset.website_Link}</div>
                  {/* {nsD_Response_Time} */}
                  <div className={this.state.styleType === 'grid' ? "DataWeb" : "DataWebList"} ><strong>Date Modified </strong> : {Dataset.employee_Request_Time}</div>

                    <div className={this.state.styleType === 'grid' ? "DataWeb" : "DataWebList"} style={{ color: "red" }}>{Dataset.level_Status}</div>
                    <a href={Dataset.nsD_Response_Link}>
                        <button className="ui fluid button" style={{ backgroundColor: "#212121", color: "white", marginTop: "20px" }}>Get Download link</button>
                        </a>
                </div>
            </div>
        );
      }


    render()
    {

      // Adding Custom styles to the Home Page Element
      const ui_input_div = {marginLeft : "20%" , marginRight : "20%", width  : "60%" , padding : "30px" };
      const ui_searchbar = { width : "90%" , borderRadius : "15px 0px 0px 15px"};
      const ui_searchbutton = { borderRadius : "0px 15px 15px 0px" ,  backgroundColor : "white" , border : "1px solid rgba(34,36,38,.15)"};
      const ui_mkrequest_button = { marginLeft : "35%" , marginRight : "35%", marginTop : "30px", marginBottom:"70px", width  : "30%" , padding : "10px", backgroundColor: "#fe346e", Color: "#d2fafb"};
      const ui_search_title = { display: "inline", marginRight: "50%"};
      const ui_icon = {marginLeft : "10px", float: "right", marginRight: "10px" };
      const ui_icon_sel = {marginLeft : "10px", float: "right", marginRight: "10px", color : "#5DADEC" };



      // Add variable title to the Software Data Header

      const Search_title = (this.state.searchBar.length === 0)? <h2 style={ui_search_title}> Recent Software</h2>: 
                                                                 <h2 style={ui_search_title}>Result for : {this.state.searchBar}</h2>;

    

    
    
    
    const { searchBar, sortType } = this.state;
    const filteredSoftware = this.state.GetData.filter(Software => {
      return Software.software_Name.toLowerCase().indexOf(searchBar.toLowerCase()) !== -1;
    });

    const sorted = filteredSoftware.sort((a,b) => {
    
        const isReversed = (sortType === 'asc') ? 1 : -1;
        return isReversed * a.software_Name.localeCompare(b.employee_name)
    }
    )

// Pagination
      const IndexofLastPost = (this.state.currentPage)*(this.state.PostPerPage);
      const IndexofFirstPost = IndexofLastPost - (this.state.PostPerPage)
      const currentPost = sorted.slice(IndexofFirstPost,IndexofLastPost);

      const Pages= [];

      for(let i = 1 ; i <= Math.ceil(sorted.length/(this.state.PostPerPage)); i++)
      {
        Pages.push(i);
      }

      let Pagination = Pages.map( number => (
        <div className="Page-box" key={number}>
          <div className={this.state.currentPage === number ? "Page-Block-sel" : "Page-Block" } onClick={() => this.Paginating(number)}>{number}</div>
        </div>
    ))
     



      // Render Get Request
        let GetResponse = this.state.loading 
        ? <div className="Loader"><i aria-hidden="true" className=" big spinner loading icon"></i></div>
        : currentPost.map(Dataset => {
                return this.renderDatasetsTable(Dataset);
              })
  
  
  
  
  return (
<div>
 <div className="Cover">
   <div className="Nav">
     <Link to="/">
      <h1 className="nav-title" >Software Download System</h1>
     </Link>
   </div>
   <h3 className="banner-title" >Search for the Software you need to install </h3>
   <div className="ui icon input" style={ui_input_div}>
   <input type="text" placeholder="Search Here For Software "  style={ui_searchbar} onChange={this.onchange}/>
   <button className="ui icon button" style={ui_searchbutton}><i aria-hidden="true" className="search icon" style={{ color : "grey"}}></i></button>
 </div>
<Link to='/MakeRequest'>
<button className="ui button" style={ui_mkrequest_button}>Make a New Request</button>
</Link>
 
</div>
<div className="Response">
<div className="Filter">
    {Search_title}
  <Link to="/MakeRequest">
  <i className="black large user plus icon" style={ui_icon}></i>
  </Link>
  
<i className="large sort alphabet down icon" style={this.state.sortType === 'asc'? ui_icon_sel : ui_icon} onClick={() => this.handleSort('asc')}></i>
<i className="large sort alphabet up icon" style={this.state.sortType === 'desc'? ui_icon_sel : ui_icon} onClick={() => this.handleSort('desc')}></i>
  <i className="large th list icon" style={this.state.styleType === 'list'? ui_icon_sel : ui_icon} onClick={() => this.handleStyle('list')}></i>
  <i className="th large icon" style={this.state.styleType === 'grid'? ui_icon_sel : ui_icon} onClick={() => this.handleStyle('grid')}></i></div>

  {GetResponse}

<div className="Pagination-block">
  {Pagination}
  </div>

</div>
            </div>
        );
    }

    
async GetRequest(){
  
    const response = await fetch('api');
    const data = await response.json();

    console.log(data);

   // change to data.data => data 
    this.setState({ GetData : data, loading : false});
}
    

}

export default HomePage;