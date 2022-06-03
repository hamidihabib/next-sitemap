import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}

const Home: NextPage = ({ props }: any) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <span> {t("common:welcome")}</span>
      <span>{t("home:contact-us")}</span>
    </div>
  );
};

export default Home;
