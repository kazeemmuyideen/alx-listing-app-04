interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-1 bg-gray-200 rounded-full hover:bg-gray-300 text-sm"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Pill;
