class Form extends React.Component {
   constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
      e.preventDefault();
      let url = e.target.elements.urlInput.value;
      this.props.handleOnSubmit(url);
   }
   render() {
      return (
         <form onSubmit={this.onSubmit}>
            <input type="url" name="urlInput"/>
            <button type="submit">Submit</button>
         </form>
      );
   }
}
class EmbedPage extends React.Component {
   render(){
      return (
         this.props.url && <div><iframe frameBorder="0" src={this.props.url}></iframe></div>
      );
   }
}
class Main extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         url: ""
      }
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
   }

   handleOnSubmit(url){
      this.setState({url: url});
   }
   render(){
      return (
         <div>
            <Form handleOnSubmit={this.handleOnSubmit}/>
            <EmbedPage url={this.state.url}/>
         </div>
      );
   }
}

ReactDOM.render(<Main />,document.getElementById("search"));
