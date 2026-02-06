export const metadata = {
  title: "Parche Queer",
  description: "La plataforma que conecta la comunidad LGBT+ en Colombia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
