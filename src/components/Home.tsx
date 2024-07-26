import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function Home() {
  return (
    <>
      <Box
        sx={{
          p: "5em",
          display: "flex",
          background:
            "linear-gradient(90deg, rgba(113,113,113,1) 41%, rgba(149,149,149,1) 69%, rgba(113,113,113,1) 82%)",
        }}
      >
        <div>
          Hello there, I'm Balakannan, a full-stack developer with a passion for
          creating beautiful and functional websites.
        </div>
        <CardMedia
          component="img"
          height="400"
          width="200"
          image="/src/assets/bk-bg-removed.png"
          alt={"alt"}
          title={"titleasdasdsada"}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      </Box>
    </>
  );
}
export default Home;
