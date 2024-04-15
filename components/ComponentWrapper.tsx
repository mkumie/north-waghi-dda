export default function ComponentWrapper({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <main className={className}>{children}</main>;
}
