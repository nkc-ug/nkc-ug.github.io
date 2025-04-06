import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Footer } from "../components/Footer";
import headerimage from "../assets/images/HeaderImage.jpg";
import { Header } from "../components/Header";

function createData(name: string, location: string) {
  return { name, location };
}

const locationData = [
  createData("部室", "352b教室（水曜日は他のサークルが使用します）"),
  createData("学内イベント", "主に163教室"),
  createData("オンライン活動場所", "NKC-UG Teams"),
];

export const Toppage = () => {
  const headingStyle = { borderBottom: "thick double #32a1ce" };
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box id="header">
        <Header />
        <Box
          component="img"
          src={headerimage}
          alt="ヘッダー用画像"
          sx={{
            width: "100%",
            maxHeight: "30vh",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box id="about" sx={{ margin: 3 }}>
          <Typography variant="h4" className="heading" sx={headingStyle}>
            NKC-UGについて
          </Typography>
          <Typography>
            NKC-UGは現在45名の名古屋工学院専門学校公認のプログラミングサークルです。
            <br />
            『プログラミングを楽しみたい』『プログラミングで悩みを解決したい』といった思いを持つメンバーが集まっており
            <br />
            ハッカソン、学生エンジニアの交流会への参加など各々が自由な活動を行っています。
          </Typography>
        </Box>
        <Box id="activity-location" sx={{ margin: 3 }}>
          <Typography variant="h4" className="heading" sx={headingStyle}>
            活動場所について
          </Typography>
          <Table sx={{ margin: "auto", width: "fit-content" }}>
            <TableBody>
              {locationData.map((value, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.location}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
