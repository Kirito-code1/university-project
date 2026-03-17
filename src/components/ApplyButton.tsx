import { useI18n } from "../i18n";

type ApplyButtonProps = {
  onClick?: () => void;
};

const ApplyButton = ({ onClick }: ApplyButtonProps) => {
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gradient-to-r from-[#F5A623] to-[#FE9A00] px-4 py-2 rounded-full text-black text-sm font-semibold shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
    >
      {t("community.apply")}
    </button>
  );
};
export default ApplyButton;
