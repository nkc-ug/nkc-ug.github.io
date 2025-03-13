import { Box, Button, Link, Typography } from "@mui/material";
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
            一番下に説明会の申し込みフォームがありますので「うおおおお！！！俺は絶対申し込むんだぁああああ！！！」という方はそのまま一気に下までスクロールして申し込んでいただいても大丈夫です！
            で・す・が！読んでいただけると運営チームが喜びます！！
            <br />
            そもそもNKC-UGって何やねんっていう方はこのままゆっくりスクロールしていただくとプチ解説が読めます！
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
            私たちと一緒に授業や個人ではできない経験をしませんか？
          </Typography>
        </Box>
        <Box component="section">
          <Typography variant="h2" sx={h2Style}>
            NKC-UGの先輩
          </Typography>
          <Typography>
            NKC-UGには様々な先輩が居ます。
            <br />
            一例としてReactが大好きな人だったり、長期インターンで実務経験を積んでいる人、イベント用に自分たちで便利ツールを開発した人たち、学校生活を楽にするツールを開発する人などが挙げられます。
            <br />
            また、プログラミング以外にも趣味などでBlender・Unityなどを触ってる人やバイクや車を趣味にしている人などなど、多くの分野・趣味の先輩方が貴方の生活を豊かにします！！
          </Typography>
          <Typography>
            さて、ここまで読んでいただきありがとうございます。興味を持って貰えたなら下のイベント概要から、ぜひ！説明会へ応募してください！！
          </Typography>
        </Box>
        <Box component="section" id="event_info">
          <Typography variant="h2" sx={h2Style}>
            イベント概要
          </Typography>
          <Typography>
            開催日時：5月10日 15:30～（予定）
            <br />
            開催場所：来年度のCT3Aの教室？
            <br />
            内容：NKC-UGについての説明とプチ勉強会
          </Typography>
          <Typography>
            下のリンクから応募フォームにアクセスできます！ご友人もお誘いいただいて構いません！
          </Typography>
          <Box sx={{ textAlign: "center" }}>
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
