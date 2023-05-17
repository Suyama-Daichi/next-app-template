import { Container, Divider, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';

import AppAppBar from '@/components/shared/AppAppBar';
import Head from '@/components/shared/Head';
import BackButton from '@/components/ui/BackButton';
import Typography from '@/components/ui/Typography';
import Footer from '@/components/ui/footer/Footer';

const About = () => {
  return (
    <>
      <Head title="カラーボール野球とは" />
      <AppAppBar />
      <Container maxWidth={'md'}>
        <Typography variant="h4" align="center">
          ようこそ、カラーボール野球へ
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Image
            src="/hero.jpg"
            width={1000}
            height={1000}
            style={{ objectFit: 'cover', width: '100%', height: '300px' }}
            alt="hero"
          />
          <Typography lineHeight={2}>
            日本カラーボール野球連盟（JCBL）は、軟らかいボールとプラスチックバットでプレーする「三角ベース野球」にオリジナルのルールを制定して、本格的なリーグ展開を目指して活動している私設リーグです。
          </Typography>
          <Typography lineHeight={2}>
            野球ルールの一部を簡略化して、野球がしたい女性や野球経験がない方も楽しめるのが、「カラーボール野球」の最大の特長です。
          </Typography>
          <Typography lineHeight={2}>
            5人で1チーム、仲のいい友達を誘って参加してみませんか？
            投げて、打って、走って。野球の面白さを体験してみてください。
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h4" align="center">
            手軽にできる！
          </Typography>
          <Typography lineHeight={2}>
            一般の９人制の野球よりも楽にチームを作れる１チーム５人ルールを制定しました。
          </Typography>
          <Typography lineHeight={2}>また、基本的に公園や広場を使ってプレーします。</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h4" align="center">
            安全なスポーツ！
          </Typography>
          <Typography lineHeight={2}>
            カラーボール野球で使用する道具は、軟らかい「ボール（塩ビ製品）」とプラスチック製の「バット」です。
          </Typography>
          <Typography lineHeight={2}>
            この２つは子供向け玩具で、素材も軽いので扱いが簡単ですし、重い軟式ボールや金属バットに比べて、身体への負担が少ないので、怪我の可能性が圧倒的に少ないです。
          </Typography>
          <Box p={2} bgcolor={grey[200]}>
            <Typography sx={{ fontSize: 12 }}>
              カラーボール野球は上記の通り安全第一で行っていますが、体を使うスポーツですので突発的な事故、怪我の可能性は否定できません。プレー中や帰宅後におきた、怪我、病気に対しての責任は各自で取るようにして下さい。カラーボール野球運営側は、これら事故、怪我、病気に対しての責任は取りかねますので、もしご心配の方は、軟式野球などで用いられる「保険」に加入してからご参加ください。
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h4" align="center">
            交流の場を持とう！
          </Typography>
          <Typography lineHeight={2}>このリーグは複数の球団と、その参加者によって成り立っています。</Typography>
          <Typography lineHeight={2}>
            様々な世代、地域、職業を超え、「カラーボール野球」をきっかけに健全な交流の場になればと考えています。
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="h4" align="center">
            壮大な夢をのせて。
          </Typography>
          <Typography lineHeight={2}>
            野球やソフトボールは、ある程度プレーできる環境というものが用意されていて、道具やグラウンドのスタイルが異なるものの、共通のルールのもとに対外試合をやったり企業が主催する大規模な大会があったりと活動の範囲が広いのです。
          </Typography>
          <Typography lineHeight={2}>
            あたりまえですが、遊ぶその時々の状況に合わせたルールを自分たちで決めるスタイルの三角ベースは通常、仲間同士の中でチーム分けをして遊ぶものです。
          </Typography>
          <Typography lineHeight={2}>
            しかし、もしも三角ベースで対外試合をやったら「すごく面白そう！」しかもルールを一本化し、継続的な活動ができる環境を作っていく。大人になってもカラーボールを楽しむ感覚を持った人、遊び感覚でスポーツをしたい人、そんな人たちを中心に、三角ベース・オンリーで広い規模でのリーグ展開していきたい、そう思ったのが始まりです。
          </Typography>
          <Typography lineHeight={2}>
            これをきっかけに”ベースボールの一派として新しいポジションを築きたい”という壮大な夢をのせて――。
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <BackButton />
      </Container>
      <Footer />
    </>
  );
};

export default About;
