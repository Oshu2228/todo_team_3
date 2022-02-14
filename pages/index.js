import Head from 'next/head'
import { useState } from 'react'
import { Box, Button, Container, Heading, Text} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import TodoList from './components/TodoList'
import Search from './components/Search'
import { useRecoilState } from 'recoil'
import { todosState } from './atoms/atom'


export default function Home() {
  /**useReoilStateを利用するためコメントアウトしました。by小野
   * 
   * // ダミーデータ
  const [todos, setTodos] = useState([
    {
      text: 'test sample 1',
      status: '着手前',
      priority: '高',
      createDate: '2022-2-1',
      updateDate: '2022-3-1',
    },

    {
      text: 'test sample 2',
      status: '進行中',
      priority: '中',
      createDate: '2022-2-10',
      updateDate: '2022-3-10',
    },

    {
      text: 'test sample 3',
      status: '完了',
      priority: '低',
      createDate: '2022-2-20',
      updateDate: '2022-3-4',
    },
  ]);
   */
  

  //useReoilStateを利用
  const [ todos, setTodos ] =useRecoilState(todosState)

  return (
    <>
      <Head>
        <title>Todo App Team3</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container h='100%' minH='100%' maxW='100%' bg='orange.100' m='0' padding='1rem'>
        <Heading pt='2' pb='2' pl='5' bg='orange.200'>
          Todo App
        </Heading>

        <Container minH='calc(100% - 64px)' maxW='100%' bg='white' padding='5'>
          <Text fontSize='lg' fontWeight='bold' letterSpacing='3px'>
            {todos.length >= 1 ? `タスクは${todos.length}個あります` : '現在タスクはありません'}
          </Text>

          <Search />

          <Box mt='10' mr='5' textAlign='right'>
            <Button>
              <AddIcon mr='2' />
              タスクを追加
            </Button>
          </Box>

          <TodoList
            todos={todos}
          />
        </Container>
      </Container>
    </>
  )
}