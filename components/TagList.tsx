type TagListProps = {
  items: string[];
};

export default function TagList({ items }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm leading-6"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
