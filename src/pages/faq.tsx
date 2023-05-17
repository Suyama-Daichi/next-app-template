import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material';

import AppAppBar from '@/components/shared/AppAppBar';
import Head from '@/components/shared/Head';
import BackButton from '@/components/ui/BackButton';
import Footer from '@/components/ui/footer/Footer';

const FAQ_LIST = [
  { q: '女性でも参加できますか？', a: 'はい。もちろん参加できます。' },
  { q: '年齢制限はありますか？', a: '特に年齢制限はありませんが、小学生以下の方は保護者と一緒の参加をお願いします。' },
  {
    q: '参加するにはどうすれば良いのですか？',
    a: (
      <>
        <Link underline="none" target="_blank" href={'https://forms.gle/fuSMY4XLZns888YZ7'}>
          こちら
        </Link>
        <Typography display={'inline-block'}>から申請してください</Typography>
      </>
    ),
  },
  {
    q: '加盟費・年会費等は必要ですか？',
    a: '無料です。連盟への支払いはありませんが、ボールやバットは各チーム側でご用意ください。',
  },
  {
    q: 'ストライクゾーンが良く解らないのですが？',
    a: (
      <>
        <Typography display={'inline-block'}>こちらのページを参照してください。</Typography>{' '}
        <Link underline="none" href={'/about/strike-zone'}>
          「ストライクゾーンについて」
        </Link>
      </>
    ),
  },
  {
    q: '公式記録を残したいのですが？',
    a: '左側メニューバーの「スコアシート」からスコアシートをプリントアウトして記載して下さい。',
  },
];

const FAQ = () => {
  return (
    <>
      <Head title="よくある質問" />
      <AppAppBar />
      <Box my={4} />
      <Container maxWidth={'md'}>
        <Typography variant="h4" align="center">
          よくある質問
        </Typography>
        <Divider sx={{ my: 2 }} />
        {FAQ_LIST.map((faq, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography color={'secondary'} fontWeight={'bold'}>
                Q. {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={'span'} color={'black'}>
                A. {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <BackButton />
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;
