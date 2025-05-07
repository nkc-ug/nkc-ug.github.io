import {
  Box,
  Button,
  Link,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../style/NewStudent.scss";

export const NewStudent = () => {
  const h2Style = {
    fontSize: "2rem",
    pl: "1rem",
    pb: "0.2rem",
    mt: "1rem",
    mb: "0.5rem",
    borderBottom: "thick double #32a1ce",
  };

  function createData(title: string, bio: string) {
    return { title, bio };
  }

  const eventData = [
    createData("イベント名", "新入生向けNKC-UG説明会"),
    createData("開催日時", "５月１６日(金)・５月２３日(金)　15:30～"),
    createData("開催場所", "１号館　163教室"),
    createData("内容", "NKC-UG説明会, GitHub勉強会"),
    createData("持ち物", "パソコン"),
  ];

  return (
    <Box sx={{ minHeight: "100vh", flexDirection: "column", display: "flex" }}>
      <Header />
      <Box component="main" sx={{ padding: "1rem" }}>
        <Typography variant="h1" fontSize="4rem">
          新入生の方へ
        </Typography>
        <Box component="section">
          <Typography>
            初めまして！NKC-UG運営チームです！！
            <br />
            この度はNKC-UGに興味を持ってくださりありがとうございます！
            <br />
            NKC-UGについて紹介させてください！
          </Typography>
        </Box>
        <Box component="section">
          <Typography variant="h2" sx={h2Style}>
            NKC-UGで何が出来るか
          </Typography>
          <Typography>
            人間一人で出来ることには限界があります。たとえ自分が如何に意欲に溢れていても一人ではチーム開発はできません。一人での開発はチーム開発ではなく個人開発でしかありません。
            <br />
            ですが、NKC-UGは学生エンジニアが集まるサークルです。プログラミングをしたいという同じ志を持った人が集まりやすい場であり、一人では難しいことも皆で行動に移すことができます。
            <br />
            チーム開発以外にも先輩から知識を吸収し、来年以降に入学する後輩たちへ知識を受け継ぐといったインプット・アウトプットだって可能です。
            <br />
            また、授業では習わないものを学ぶこともできますし、その中には実際に実務で使うものもあります。
            <br />
            私たちと一緒に授業や個人ではできない濃い体験をしてみませんか？
          </Typography>
        </Box>
        <Box component="section">
          <Typography variant="h2" sx={h2Style}>
            NKC-UGの先輩
          </Typography>
          <Typography>
            NKC-UGには様々な先輩が参加しています！
            <br />
            Reactが大好きな人だったり、長期インターンで実務経験を積んでいる人、イベント用に自分たちで便利ツールを開発した人たち、学校生活を楽にするツールを開発する人などが居ます。
            <br />
            また、プログラミング以外にも趣味などでBlender・Unityなどを触ってる人やバイクや車を趣味にしている人などなど、多くの分野・趣味を持つ先輩方との交流の機会を提供します！
          </Typography>
        </Box>
        <Box component="section" id="event_info">
          <Typography variant="h2" sx={h2Style}>
            イベント概要
          </Typography>
          <Typography>
            ５月１６日(金)・５月２３日(金)に新入生向けNKC-UG説明会を開催します！
            <br />
            詳細は下記をご覧ください！
          </Typography>
          <Table sx={{ margin: "auto", width: "fit-content" }}>
            <TableBody>
              {eventData.map((value, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>{value.title}</TableCell>
                    <TableCell>{value.bio}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Typography textAlign={"center"} margin={"0.5rem"}>
            開催日が二日ありますが、内容は変わらないのでお好きな回へご参加ください！
          </Typography>
          <Box sx={{ textAlign: "center", margin: "1rem" }}>
            <Link
              href={
                "https://forms.office.com/Pages/ResponsePage.aspx?id=eeUPGhB_lUOsHmxSoVCbiP4hXRkgLplMkTlk7A0MQPlUOEZHUVBKSUgxTzNOU0NaMDNCQTBDRzBBOS4u"
              }
            >
              <Button>申し込みはコチラから</Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
