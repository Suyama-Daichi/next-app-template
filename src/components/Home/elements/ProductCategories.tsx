import { ButtonBase, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

import Typography from '@/components/ui/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://images.unsplash.com/photo-1591453214154-c95db71dbd83?auto=format&fit=crop&w=400',
    title: 'ごあいさつ',
    width: '100%',
    path: '/about',
  },
  {
    url: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?auto=format&fit=crop&w=400',
    title: 'ルールブック',
    width: '25%',
    path: '/rules',
  },
  {
    url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400',
    title: 'ギャラリー(旧スケッチブック)',
    width: '50%',
    path: '/gallery',
  },
  {
    url: 'https://images.unsplash.com/photo-1599344941194-5eb5eaaaf73d?auto=format&fit=crop&w=400',
    title: 'Q&A',
    width: '25%',
    path: '/faq',
  },
  {
    url: 'https://images.unsplash.com/photo-1618438763526-8349557505a4?auto=format&fit=crop&w=400',
    title: 'スコアボード',
    width: '50%',
    path: '/scores',
  },
  {
    url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400',
    title: 'スタッツ(成績)',
    width: '25%',
    path: '/stats',
  },
  {
    url: 'https://pictogram2.com/p/p0602/6.png',
    title: 'チーム紹介',
    width: '25%',
    path: '/teams',
  },
  {
    url: 'https://images.unsplash.com/photo-1610850356560-b470d0825d2e?auto=format&fit=crop&w=400',
    title: 'チーム申請',
    width: '50%',
    path: '/join',
  },
  {
    url: 'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400',
    title: 'リンク集',
    width: '50%',
    path: '/links',
  },
];

export default function ProductCategories() {
  const router = useRouter();
  return (
    <Container component="section" sx={{ my: 4 }}>
      <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => router.push(image.path)}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography variant="h6" color="inherit" className="imageTitle">
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
