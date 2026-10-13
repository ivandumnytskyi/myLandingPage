const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between px-12 w-full p-4 text-center">
      <p className="text-sm text-white/70">Uzhhorod, Ukraine · Remote</p>
      <p className="text-sm text-white/70">
        &copy; {new Date().getFullYear()} Ivan Dumnytskyi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
