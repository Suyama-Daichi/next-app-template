import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx';

const options: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h3',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h4' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: (props: any) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...props} />
        </Box>
      ),
    },
    hr: {
      component: (props: any) => (
        <Box display="flex" justifyContent="center">
          <Divider sx={{ width: '100%', my: 2 }} />
        </Box>
      ),
    },
    blockquote: {
      component: (props: any) => {
        return (
          <Box p={2} bgcolor={grey[200]} mb={2}>
            <Typography sx={{ fontSize: 10 }}>{props.children[0].props.children}</Typography>
          </Box>
        );
      },
    },
  },
};

export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}
