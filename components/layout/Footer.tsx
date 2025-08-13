const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-4">
      <p>© {new Date().getFullYear()} LuxStay. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
