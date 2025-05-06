import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Footer } from "../components/Footer";
import ec_vscode from "../assets/images/eyecatch_vscode.jpg";
import ec_mtg from "../assets/images/eyecatch_ltmtg.jpg";
import ec_groupshot from "../assets/images/eyecatch_groupshot.jpg";
import ec_stamprally from "../assets/images/eyecatch_stamprally.jpg";
import nkcuglogo from "../assets/NKCUG_DP.svg";
import { Header } from "../components/Header";
import "../style/Toppage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

function createData(name: string, location: string) {
  return { name, location };
}

const locationData = [
  createData("部室", "352b教室（水曜日は他のサークルが使用します）"),
  createData("学内イベント", "主に163教室"),
  createData("オンライン活動場所", "Teams NKC-UGチーム上"),
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
        <Box className="eyecatch">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box
                component="img"
                sx={{ display: "block", width: "100%", objectFit: "cover" }}
                src={ec_vscode}
                alt="ヘッダー用画像"
                className="eyecatchImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="img"
                sx={{ display: "block", width: "100%", objectFit: "cover" }}
                src={ec_mtg}
                alt="ヘッダー用画像"
                className="eyecatchImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="img"
                sx={{ display: "block", width: "100%", objectFit: "cover" }}
                src={ec_groupshot}
                alt="ヘッダー用画像"
                className="eyecatchImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="img"
                sx={{ display: "block", width: "100%", objectFit: "cover" }}
                src={ec_stamprally}
                alt="ヘッダー用画像"
                className="eyecatchImg"
              />
            </SwiperSlide>
          </Swiper>
          <Box
            component="img"
            src={nkcuglogo}
            alt="NKC-UG Logo"
            id="eyecatchLogo"
            zIndex={999}
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box id="about" sx={{ margin: 3 }}>
          <Typography variant="h4" className="heading" sx={headingStyle}>
            NKC-UGについて
          </Typography>
          <Typography>
            NKC-UGは現在31名の名古屋工学院専門学校公認のプログラミングサークルです。
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
        <Box id="activity" sx={{ margin: 3 }}>
          <Typography variant="h4" className="heading" sx={headingStyle}>
            NKC-UGの活動内容について
          </Typography>
          <Typography>
            名学祭でのプログラミングクイズ大会やスタンプラリーなどのイベント開催や、４か月に一度の頻度で全体MTGを開催しています。
            <br />
            全体MTGは６月・９月・１２月に開催を予定しています。
            <br />
            また、有志のメンバーによる勉強会も開催可能です。
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
