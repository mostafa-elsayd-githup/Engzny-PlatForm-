function TableBody() {
  return (
    <table className="w-full text-right border-collapse rounded-2xl overflow-hidden">
      <thead className="sticky top-0 z-10 bg-(--bg-canvas) text-sm text-(--text-primary)/80 border-b border-(--border-color)">
        <tr>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">
            رقم الطلب
          </th>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">
            نوع الخدمة
          </th>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">
            اسم العميل والهاتف
          </th>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">المنطقة</th>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">الفني</th>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">التكلفة</th>
          <th className="py-3.5 px-4 font-medium whitespace-nowrap">الحالة</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-x divide-(--border-color) text-sm">
        <tr className="hover:bg-(--text-primary)/5 transition-colors">
          <td className="py-4 px-4 font-semibold whitespace-nowrap">#1</td>
          <td className="py-4 px-4 whitespace-nowrap text-xs">سباكة</td>
          <td className="py-4 px-4 whitespace-nowrap">
            <div className="font-medium">مصطفى السيد</div>
            <div className="text-xs text-gray-400" dir="ltr">
              0100 000 0000
            </div>
          </td>
          <td className="py-4 px-4 whitespace-nowrap">الباجور / المنوفية</td>
          <td className="py-4 px-4 whitespace-nowrap">إسلام السيد</td>
          <td className="py-4 px-4 font-semibold text-(--BrandEmerald-Color) whitespace-nowrap">
            800 ج.م
          </td>
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

export default TableBody;
