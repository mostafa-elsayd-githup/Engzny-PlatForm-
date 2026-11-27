function ProfitsTable() {
  return (
      <table className="w-full text-right text-(--text-muted) border-collapse">
        <thead className="sticky top-0 z-10 bg-(--bg-canvas) text-sm text-(--text-primary)/80 border-b border-(--border-color)">
          <tr>
            <th className="py-3.5 px-4 font-medium whitespace-nowrap">
              رقم الطلب
            </th>
            <th className="py-3.5 px-4 font-medium whitespace-nowrap">
              الخدمه
            </th>
            <th className="py-3.5 px-4 font-medium whitespace-nowrap">
              المنطقة
            </th>
            <th className="py-3.5 px-4 font-medium whitespace-nowrap">
              المستحقات
            </th>
            <th className="py-3.5 px-4 font-medium whitespace-nowrap">
              الحالة
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-x divide-(--border-color) text-sm">
          <tr className="hover:bg-(--text-primary)/5 transition-colors">
            <td className="py-4 px-4 font-semibold whitespace-nowrap">#1</td>
            <td className="py-4 px-4 whitespace-nowrap text-xs">
              صيانة تكييف سبليت 2.25 حصان
            </td>
            <td className="py-4 px-4 whitespace-nowrap">
              <div className="font-medium">المعادي، شارع 9</div>
            </td>
            <td className="py-4 px-4 whitespace-nowrap">450 ج.م</td>
            <td className="py-4 px-4 whitespace-nowrap">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-(--iconRate-color)/10 text-(--iconRate-color) border border-amber-500/20">
                جاري التنفيذ
              </span>
            </td>
          </tr>
        </tbody>
      </table>

  );
}

export default ProfitsTable;
