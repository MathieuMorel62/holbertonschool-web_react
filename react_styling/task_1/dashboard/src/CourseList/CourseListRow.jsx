function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  const rowStyle = isHeader
    ? { backgroundColor: "color-mix(in srgb, var(--color-table-header) 66%, transparent)" }
    : { backgroundColor: "color-mix(in srgb, var(--color-table-rows) 45%, transparent)" };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={rowStyle}>
          <th className="border border-gray-400" colSpan={2}>
            {textFirstCell}
          </th>
        </tr>
      );
    }

    return (
      <tr style={rowStyle}>
        <th className="border border-gray-400">{textFirstCell}</th>
        <th className="border border-gray-400">{textSecondCell}</th>
      </tr>
    );
  }

  // ✅ Cas attendu par les tests : une seule cellule en body => td colSpan=2
  if (textSecondCell === null) {
    return (
      <tr style={rowStyle}>
        <td className="border border-gray-400 pl-2" colSpan={2}>
          {textFirstCell}
        </td>
      </tr>
    );
  }

  return (
    <tr style={rowStyle}>
      <td className="border border-gray-400 pl-2">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2">{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
