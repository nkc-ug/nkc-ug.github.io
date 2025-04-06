import { Box, Card, List, ListItem, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SiteAbout = () => {
  const headingStyle = { borderBottom: "thick double #32a1ce" };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={headingStyle}>
          本サイトについて
        </Typography>
        <Typography>
          本サイトは名古屋工学院専門学校の公認サークル『NKC-UG』の公式サイトです。
          <br />
          本サイトはNKC-UGについての紹介を主に目的として運営を行っていきます。
        </Typography>
        <Typography variant="h4" sx={headingStyle}>
          各ページについて
        </Typography>
        <Typography>
          本サイトは現在、『トップページ』『本サイトについて』『アカウント一覧』『イベント一覧』『入部希望者向け』の５ページで構成されています。
        </Typography>
        <List sx={{ width: "fit-content", margin: "auto" }}>
          <ListItem>
            <Card>
              <Typography variant="h5">トップページ</Typography>
              <Typography>
                NKC-UGについての説明を載せているページです。
              </Typography>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <Typography variant="h5">本サイトについて</Typography>
              <Typography>
                当ページです。このサイトの各ページの説明や運営体制などについての説明を記載しています。
              </Typography>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <Typography variant="h5">アカウント一覧</Typography>
              <Typography>
                NKC-UGの𝕏、GitHub、Qiitaなどのアカウントを紹介しております。
              </Typography>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <Typography variant="h5">イベント一覧</Typography>
              <Typography>
                NKC-UGで開催されるイベントについての情報を記載しています。
              </Typography>
            </Card>
          </ListItem>
          <ListItem>
            <Card>
              <Typography variant="h5">入部希望者向け</Typography>
              <Typography>
                名古屋工学院専門学校の学生向けにNKC-UGへの入部案内を行っています。
              </Typography>
            </Card>
          </ListItem>
        </List>
      </Box>
      <Footer />
    </Box>
  );
};
