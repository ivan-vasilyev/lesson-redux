import React from 'react';
import Todo from './Todo';

class List extends React.Component {
    
    render() {
        const todos = this.props.todos;

        return (
            <section className="todo-list">
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={this.props.onDelete}
                        onToggle={this.props.onToggle}
                        onEdit={this.props.onEdit}
                    />)
                }
            </section>
        );
    }
    
}

export default List;