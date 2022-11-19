import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup();
});


test('should render non-completed to do component', () => {
    const todo = {id: 1, title: 'make doctor app', completed: false};
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('make doctor app');
    expect(todoElement).not.toContainHTML('strike');
});


test('should render completed to do component', () => {
    const todo = {id: 2, title: 'buy mosquito net', completed: true};
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('buy mosquito net');
    expect(todoElement).toContainHTML('strike');
});

test('matches snapshot', () => {
    const todo = {id: 2, title: 'buy mosquito net', completed: true};
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
});