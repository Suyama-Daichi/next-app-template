import {
  Box,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import AppAppBar from '@/components/shared/AppAppBar';
import Head from '@/components/shared/Head';
import Footer from '@/components/ui/footer/Footer';

const TABLE_ELEMENT_LIST = [
  {
    title: 'バット',
    description:
      '写真参照：市販プラスチック製バット。玩具店などに売っています。金属バットや木製バットは禁止。また、バットの改造は自重すること。好みのステッカーを貼ったりグリップを補修したりすることはＯＫですが、重さや硬度に手を加えることは木製や金属製バットと同様に、バットが当たって（子供などの）ケガの原因に成りかねないので禁止とします。',
  },
  {
    title: 'ボール',
    description:
      '写真参照：直径75mm程度の市販の色付きゴムボール。縫い目有りのモノも無しのモノも使用可能です。厳密にサイズ測定等はしませんが、空気が抜けたら空気入れで補充するか、新品に交換しましょう。',
  },
  { title: 'グローブ', description: '素手で充分ですが、使用は自由です。' },
  { title: 'ホームベース', description: '幅43.2cm（一般野球と同じ）手作りでOKです。' },
  {
    title: '一塁・二塁ベース',
    description:
      'ベースとして適当なサイズ・形（一般野球38cm）手作りでOKです。また一塁はダブルベース（ベース２枚並べる）にして一塁手とランナーの接触に配慮しましょう。ベース板は合計３枚必要ということになります。',
  },
  {
    title: '服装',
    description:
      '服装は自由です。チームで統一する必要も有りません。（各チームで簡単なユニフォームを作るのも楽しいかも知れません）※金属のついたスパイク等、危険なものは自粛するよう心掛けて下さい。',
  },
];

const Rules = () => {
  return (
    <>
      <Head title="ルールブック" />
      <AppAppBar />
      <Container maxWidth={'md'}>
        <Typography variant="h4" align="center">
          使う道具について
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box display={'flex'} justifyContent={'center'} mb={1}>
          <Box component={'img'} src="jcbl_sample_bat.jpg" />
          <Box component={'img'} src="jcbl_sample_ball.jpg" />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {TABLE_ELEMENT_LIST.map((row, i) => (
                <TableRow key={i}>
                  <TableCell width={200}>
                    <Typography color={'secondary'} fontWeight={'bold'}>
                      {row.title}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Rules;
