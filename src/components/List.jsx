import React from 'react';
import Todo from './Todo';

class List extends React.Component {
    
    render() {
        const todos = this.props.todos;

        return (
            <section className="todo-list">
                {!this.props.fetching && todos.length ? todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onDelete={this.props.onDelete}
                            onToggle={this.props.onToggle}
                            onEdit={this.props.onEdit}
                        />)
                    :
                    <div className="loading">Загрузка...</div>
                }
            </section>
        );
    }
    
}

export default List;