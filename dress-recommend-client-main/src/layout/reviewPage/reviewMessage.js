import {
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";

export default function ReviewMessage() {
  return (
    <Stack component="form" sx={{ pt: 3, width: 330 }} autoComplete="off">
      <Typography variant="button">현재 댓글 count</Typography>

      <TextField
        sx={{ pt: 1 }}
        id="standard-basic"
        variant="standard"
        placeholder="댓글을 입력해주세요"
      />

      <Box flexDirection="row" sx={{ pt: 3 }}>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", margin: 1 }}
        >
          최신순
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          공감순
        </Typography>
      </Box>
      <Divider sx={{ pt: 1 }} />
    </Stack>
  );
}
