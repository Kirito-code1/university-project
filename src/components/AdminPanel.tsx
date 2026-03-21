import { useEffect, useMemo, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

type Application = {
  id: number;
  surname: string;
  name: string;
  middleName: string;
  email: string;
  program: string;
  message: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  createdAt?: string;
};

const statusLabel: Record<Application["status"], string> = {
  PENDING: "Ожидает",
  ACCEPTED: "Принята",
  REJECTED: "Отклонена",
};

const statusColor: Record<Application["status"], string> = {
  PENDING: "bg-amber-100 text-amber-700",
  ACCEPTED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-rose-100 text-rose-700",
};

const formatDate = (value?: string) => {
  if (!value) return "—";
  return new Date(value).toLocaleString("ru-RU");
};

const AdminPanel = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"ALL" | Application["status"]>("ALL");
  const [autoRefresh, setAutoRefresh] = useState(true);

  const filteredItems = useMemo(() => {
    if (filter === "ALL") return items;
    return items.filter((item) => item.status === filter);
  }, [filter, items]);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/applications`);
      if (!response.ok) {
        throw new Error("Не удалось загрузить список заявок");
      }
      const data = (await response.json()) as Application[];
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка загрузки");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: Application["status"]) => {
    try {
      const response = await fetch(`${API_URL}/applications/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Не удалось обновить статус");
      }
      const updated = (await response.json()) as Application;
      setItems((prev) => prev.map((item) => (item.id === id ? updated : item)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка обновления");
    }
  };

  useEffect(() => {
    if (!open) return;
    fetchItems();
  }, [open]);

  useEffect(() => {
    if (!open || !autoRefresh) return;
    const handle = window.setInterval(fetchItems, 10000);
    return () => window.clearInterval(handle);
  }, [autoRefresh, open]);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-200 border border-slate-200 hover:bg-slate-50"
      >
        {open ? "Скрыть заявки" : "Админ‑панель"}
      </button>

      {open && (
        <div className="mt-4 w-[min(92vw,420px)] rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
          <div className="px-5 py-4 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-800">Заявки</h3>
              <button
                type="button"
                onClick={fetchItems}
                className="text-xs text-emerald-600 hover:text-emerald-700"
              >
                Обновить
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {(["ALL", "PENDING", "ACCEPTED", "REJECTED"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`rounded-full px-3 py-1 ${
                    filter === key
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {key === "ALL" ? "Все" : statusLabel[key]}
                </button>
              ))}
            </div>
            <label className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(event) => setAutoRefresh(event.target.checked)}
              />
              Авто‑обновление (10 сек)
            </label>
          </div>

          <div className="max-h-[60vh] overflow-auto px-5 py-4 space-y-3">
            {loading && <p className="text-sm text-slate-500">Загрузка...</p>}
            {error && <p className="text-sm text-rose-500">{error}</p>}
            {!loading && !error && filteredItems.length === 0 && (
              <p className="text-sm text-slate-500">Пока заявок нет.</p>
            )}
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    #{item.id} {item.surname} {item.name}
                  </p>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${statusColor[item.status]}`}
                  >
                    {statusLabel[item.status]}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{item.email}</p>
                <p className="text-xs text-slate-500">{item.program}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {formatDate(item.createdAt)}
                </p>
                {item.message && (
                  <p className="text-xs text-slate-600 mt-2 whitespace-pre-wrap">
                    {item.message}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => updateStatus(item.id, "ACCEPTED")}
                    className="rounded-full bg-emerald-600 text-white px-3 py-1 hover:bg-emerald-700"
                  >
                    Принять
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(item.id, "REJECTED")}
                    className="rounded-full bg-rose-600 text-white px-3 py-1 hover:bg-rose-700"
                  >
                    Отклонить
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(item.id, "PENDING")}
                    className="rounded-full bg-slate-200 text-slate-700 px-3 py-1 hover:bg-slate-300"
                  >
                    Вернуть
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
