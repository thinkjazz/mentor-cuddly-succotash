import { FC } from "react";
import { Box } from "@mui/material";
import Todo from "page-sections/todo-list/Todo";

const TodoList: FC = () => {
  return (
    <Box pt={2} pb={4}>
      <Todo />
    </Box>
  );
};

export default TodoList;
