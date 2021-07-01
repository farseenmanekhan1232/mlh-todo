import React from "react" ; 
import "./App.css"


class App extends React.Component {
  state = {
    tasks: [
    "Guess the 2022 Season Mascot",
    "Create a hack promoting equal access to CS education and host it on a .Tech domain!",
    "Build a Search Hack using Jina AI",
    "Build a Water Hack",
    "Share your Chrome Dino Score",
    "Create a Graphic about a Misconception in Technology",
    "Build a Recipe Maker",
    "Develop or Redesign your Portfolio Website",
    "Use a Maps API",
    "Create a Scheduler",
    "Create a Financial Hack",
    "Write a blog post about your plans for the 2022 Hackathon Season",
    "Create a Random Number Generator",
    "Build a Discord bot using Replit",
    ]
  };

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }
  
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
    return(
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
           {/*<SubmitForm onFormSubmit={this.handleSubmit} />*/}
        </div>
      </div>
    );
  } 
}


class SubmitForm extends React.Component {
  state = { term: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.term === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Enter Item'
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})}
        />
        <button className='submit-button'>Add</button>
      </form>
    );
  }
}


const Header = (props) => {
  return(
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {props.numTodos} Challenges to Try
      </h1>
    </div>
  )
}


const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return( 
    <div className='list-wrapper'>
      {todos}
    </div>
  );
}

const Todo = (props) => {
  return(
    <div className='list-item'>
      <div>{props.content}</div>
      <div class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}>Done</div>
    </div >
  );
}

export default App;