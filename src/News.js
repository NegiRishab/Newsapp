import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";

export default class News extends Component {

    // use when you want to slice the title 
  // articles=[
  //   {"status":"ok","totalResults":1,"articles":[{"source":{"id":null,"name":"profootballrumors.com"},"author":null,"title":"Jaguars' Shad Khan, Trent Baalke Disagree On No. 1 Pick? - profootballrumors.com","description":"Four prospects are believed to be in play for the Jaguars at No. 1 overall, but it might be a &hellip;","url":"https://www.profootballrumors.com/2022/04/jaguars-shad-khan-trent-baalke-disagree-on-no-1-pick","urlToImage":"https://cdn.profootballrumors.com/files/2022/03/USATSI_16851114-1024x683.jpg","publishedAt":"2022-04-26T01:50:00Z","content":"Four prospects are believed to be in play for the Jaguars at No. 1 overall, but it might be a matchup between two defensive ends by the time the top decision-makers huddle up for their final decision… [+2267 chars]"}]}
  //   ]
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    async update(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ef09306a1484a93b327f8450dd9e2be&page='1'&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
     let data=await fetch(url);
     let parsedata=await data.json();
    //  console.log(parsedata);
     this.setState({
         articles:parsedata.articles,
         totalResults:parsedata.totalResults,
         loading:false
     })
    }
     async componentDidMount(){
       this.update();
       
    }
     handlenext=async()=>{
   
        this.setState({page:this.state.page+1})
        this.update();
    
    }
    handlepre=async()=>{
    
      this.setState({page:this.state.page-1})
      this.update();
    }
  render() {
    return (
        
      <div className="container my-3">
        <div className="text-center " style={{margin:"30px 0px",color:"grey" }}>
        <h1>NewsMonkey-Top Headlines</h1>
        </div>
     {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {console.log(this.state.articles)}
            {!this.state.loading && this.state.articles.map((element)=>{
             console.log(element);
          return  <div className="col-md-4" key={element.url}>
            
            <NewsComponent title={element.title?element.title:''} descreption={element.description?element.description:''} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} name={element.source.name}/>
          </div>
            })
            }
          
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2"onClick={this.handlepre}>&laquo; Previous</button>
        <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-2"onClick={this.handlenext}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}
