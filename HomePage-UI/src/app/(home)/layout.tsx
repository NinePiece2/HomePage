export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-500 bg-[#111111]">
        <p>
          &copy; {new Date().getFullYear()} Romit Sagu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
