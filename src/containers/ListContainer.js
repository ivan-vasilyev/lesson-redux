import { connect } from 'react-redux'; 
import List from '../components/List';
import { deleteTodo, toggleTodo, editTodo } from '../actions';
import { getFilteredTodos } from '../reducers/todos'

function mapStateToProps(state) {
    return {
        todos: getFilteredTodos(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title))
    };
    
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
