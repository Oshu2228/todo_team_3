import Link from "next/link";
import { useRecoilState } from "recoil";
import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Container,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { todosState } from "../atoms/atom";
import StatusSelect from "./atoms/StatusSelect";
import PrioritySelect from "./atoms/PrioritySelect";
import useMultipleChecked from "./atoms/useMultipleChecked";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const renderStatus = (todo) => {
    switch (todo.status) {
      case "着手前":
        return "orange";
        break;

      case "進行中":
        return "skyblue";
        break;

      case "完了":
        return "green";
        break;
    }
  };

  const renderPriority = (todo) => {
    switch (todo.priority) {
      case "低":
        return "green";
        break;

      case "中":
        return "yellow.400";
        break;

      case "高":
        return "red";
        break;
    }
  };

  const { checked, toggleChecked, toggleCheckAll } = useMultipleChecked(
    todos.map((todo) => todo.id)
  );

  const handleClickDelete = () => {
    const newTodos = todos.filter((todo) => {
      if (!checked.includes(todo.id)) {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Container h="100%" maxW="100%" mt="5">
        <Table>
          <Thead bg="gray.100">
            <Tr>
              <Th>タスク名</Th>
              <Th>ステータス</Th>
              <Th>優先度</Th>
              <Th>作成日時</Th>
              <Th>更新日時</Th>
            </Tr>
          </Thead>

          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td display="flex" justifyContent="space-between" h="65.5px">
                  <Checkbox
                    onChange={() => toggleChecked(todo.id)}
                    isChecked={checked.includes(todo.id)}
                  />
                  <Link href={`/todos/${todo.id}`} passHref>
                    <Text
                      cursor="pointer"
                      _hover={{ opacity: 0.7 }}
                      lineHeight="32.5px"
                    >
                      {todo.title}
                    </Text>
                  </Link>
                  <Link href={`/todos/${todo.id}/edittask`} passHref>
                    <Button size="xs" colorScheme="teal" variant="outline">
                      <EditIcon />
                    </Button>
                  </Link>
                </Td>

                <Td color={renderStatus(todo)}>
                  <StatusSelect todo={todo} />
                </Td>

                <Td color={renderPriority(todo)}>
                  <PrioritySelect todo={todo} />
                </Td>

                <Td>{todo.createDate}</Td>
                <Td>{todo.updateDate}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button mt="4" size="sm" onClick={toggleCheckAll}>
          全選択/全解除
        </Button>

        <Button
          colorScheme={"red"}
          ml="4"
          mt="4"
          size="sm"
          onClick={handleClickDelete}
        >
          選択したTodoを削除
        </Button>
      </Container>
    </>
  );
};

export default TodoList;
