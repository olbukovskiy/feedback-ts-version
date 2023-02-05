interface ITodo {
  id: number;
  title: string;
}

interface IProps {
  todos: ITodo[];
}

const TodosList: React.FC<IProps> = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodosList;
