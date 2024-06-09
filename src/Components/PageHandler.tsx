import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

function PageHandler({
  decreasePage,
  increasePage,
  page,
}: {
  page: number;
  decreasePage: () => void;
  increasePage: () => void;
}) {
  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <Button
        onClick={decreasePage}
        sx={{ marginRight: "12px" }}
        variant="contained"
        color="primary"
        disabled={page === 1}
      >
        <ArrowLeft />
      </Button>
      <Button
        onClick={increasePage}
        sx={{ marginLeft: "12px" }}
        variant="contained"
        color="primary"
      >
        <ArrowRight />
      </Button>
    </Box>
  );
}

export default PageHandler;
