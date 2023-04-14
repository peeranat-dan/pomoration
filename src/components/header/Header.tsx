import ThemeToggle from '@/containers/theme-toggle';

const Header = () => {
  return (
    <header className='header mx-auto flex max-w-xl items-center justify-between px-4 py-6 sm:px-0'>
      <h2 className='select-none'>Pomoration</h2>
      <div className='flex items-center gap-2'>
        <ThemeToggle />
        {/* <p>User Avatar</p> */}
      </div>
    </header>
  );
};

export default Header;
