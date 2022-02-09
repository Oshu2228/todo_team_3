import {
  Box,
  Container,
  Stack,
  Flex,
  Spacer,
  Divider,
  Button,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Detail() {
  return (
    <>
      <Head>
        <title>-Detail- Todo Team Dev No.3</title>
        <meta name="description" content="Generated by create nextapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        pos="fixed"
        lineHeight="48px"
        color="white"
        w="full"
        h={12}
        top={0}
        fontSize="28px"
        zIndex={2}
        bg="#829098"
      >
        <Container maxW="container.lg">Todo アプリ</Container>
      </Box>
      <Container mt={["80px","110px"]} maxW="container.lg">
        <Stack spacing={[2,8]}>
          <Flex direction={["column","row"]}>
            <Flex w={24} minW={24}>
              <Box>タスク名</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={[0,8]}>NetFlixで気になるアニメを朝まで見続ける</Box>
          </Flex>
          <Divider />
          <Flex minH={44} direction={["column","row"]}>
            <Flex w={24} minW={24}>
              <Box>内容</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={[0,8]}>
              最近、忙しくてアニメを見る時間がないのでここらでひたすらアニメを見る時間が必要だと思う。
              眠むたなっても大丈夫なようにmosterと眠眠打破を用意する。
              もし、寝落ちしてしまったら、もう一度初めから見直す。
            </Box>
          </Flex>
          <Divider />
          <Flex>
            <Flex w={24} minW={24}>
              <Box>ステータス</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={8}>未着手</Box>
          </Flex>
          <Divider />
          <Flex>
            <Flex w={24} minW={24}>
              <Box>優先度</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={8}>高</Box>
          </Flex>
        </Stack>
      </Container>
      <Container maxW="container.lg" pos="fixed" bottom="0">
        <Flex>
          <Spacer/>
        <Button _hover={{opacity:0.8}} m={4} bg="#84ADC5" color="white" w="80px">
          戻る
        </Button></Flex>
      </Container>
    </>
  );
}
