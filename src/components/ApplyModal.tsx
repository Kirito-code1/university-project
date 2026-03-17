import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useI18n } from "../i18n";

type ApplyModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  program: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const programs = [
  "Information Technologies",
  "Business & Management",
  "Natural Sciences",
  "Medicine & Health",
  "Law & Governance",
  "Arts & Humanities",
];

const initialState: FormState = {
  name: "",
  email: "",
  program: "",
  message: "",
};

const ApplyModal = ({ open, onClose }: ApplyModalProps) => {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    setErrors({});
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const emailIsValid = useMemo(() => {
    if (!form.email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  }, [form.email]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = t("modal.errors.nameRequired");
    if (!form.email.trim()) nextErrors.email = t("modal.errors.emailRequired");
    if (form.email && !emailIsValid) nextErrors.email = t("modal.errors.emailInvalid");
    if (!form.program) nextErrors.program = t("modal.errors.programRequired");
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    applications.push({
      ...form,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("applications", JSON.stringify(applications));
    setSubmitted(true);
    setForm(initialState);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="relative px-6 sm:px-8 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-semibold mb-2">
                {t("modal.eyebrow")}
              </p>
              <h3 className="text-2xl font-semibold">{t("modal.title")}</h3>
              <p className="text-sm text-white/80 mt-2">
                {t("modal.subtitle")}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="h-9 w-9 rounded-full bg-white/20 text-white hover:bg-white/30"
              aria-label="Close"
            >
              x
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
            <span className="bg-white/15 px-3 py-1 rounded-full">{t("modal.chips.fast")}</span>
            <span className="bg-white/15 px-3 py-1 rounded-full">{t("modal.chips.scholarship")}</span>
            <span className="bg-white/15 px-3 py-1 rounded-full">{t("modal.chips.free")}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                OK
              </div>
              <h4 className="mt-4 text-lg font-semibold text-[#1D2939]">
                {t("modal.successTitle")}
              </h4>
              <p className="text-sm text-slate-500 mt-2">
                {t("modal.successText")}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#1D2939] text-white text-sm font-semibold"
              >
                {t("modal.close")}
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600">{t("modal.name")}</label>
                  <input
                    value={form.name}
                    onChange={handleChange("name")}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder={t("modal.namePlaceholder")}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600">{t("modal.email")}</label>
                  <input
                    value={form.email}
                    onChange={handleChange("email")}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder={t("modal.emailPlaceholder")}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">{t("modal.program")}</label>
                <select
                  value={form.program}
                  onChange={handleChange("program")}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <option value="">{t("modal.programPlaceholder")}</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
                {errors.program && (
                  <p className="text-xs text-rose-500 mt-1">{errors.program}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">{t("modal.message")}</label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder={t("modal.messagePlaceholder")}
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="bg-[#1D2939] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
                >
                  {t("modal.submit")}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  {t("modal.cancel")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
