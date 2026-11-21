function AdminFinancialsHeader() {
  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="text-sm md:text-xl">الملخص المالي والتقارير</h1>
      <p className="text-[12px] md:text-xs text-start text-(--text-muted)">
        إجمالي العوائد وحصص الفنيين ونسبة عمولة المنصة
      </p>
    </div>
  );
}

export default AdminFinancialsHeader;
