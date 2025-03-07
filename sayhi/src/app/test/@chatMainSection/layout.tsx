const ChatMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="hidden md:flex justify-center items-center bg-neutral-700 w-full h-screen">
      {children}
    </section>
  );
};

export default ChatMainLayout;
