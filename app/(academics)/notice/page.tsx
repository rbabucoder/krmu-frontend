import { getNoticePageData } from "@/lib/api/notice";
import NoticeHero from "./comp/NoticeHero";
import NoticePDF from "./comp/NoticePDF";

const page = async () => {

    const noticePage = await getNoticePageData();
    

  return (
    <>
      <NoticeHero title={noticePage?.title} bgimageUrl={noticePage?.bgimage?.url} />
      <NoticePDF noticePDFS={noticePage?.noticepdfs} />
    </>
  );
};

export default page;
