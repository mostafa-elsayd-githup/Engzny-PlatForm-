export interface WorkerCardProps {
  name?: string;
  specialty?: string;
  area?: string;
  completedTasks?: number;
  rating?: number;
  status?: "متاح" | "مشغول" | "غير متاح";
  avatarChar?: string;
}
